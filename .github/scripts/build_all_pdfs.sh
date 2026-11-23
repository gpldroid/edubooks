#!/usr/bin/env bash
set -euo pipefail

mkdir -p dist public/books public/previews dist/release-reports

for BOOK in 01 02; do
  if [ "$BOOK" = "01" ]; then
    SLUG="language-foundations"
    TITLE="Language Foundations"
    LAST_UNIT=10
    MIN_PAGES=8
  else
    SLUG="essential-vocabulary"
    TITLE="Essential Vocabulary"
    LAST_UNIT=12
    MIN_PAGES=12
  fi

  for LANG_CODE in en fr es; do
    case "$LANG_CODE" in
      en) LANG_TAG="en-GB"; LABEL="English"; UNIT_LABEL="Unit";;
      fr) LANG_TAG="fr-FR"; LABEL="French"; UNIT_LABEL="Unité";;
      es) LANG_TAG="es-ES"; LABEL="Spanish"; UNIT_LABEL="Unidad";;
    esac

    SOURCE="content/books/$BOOK-$SLUG/$LANG_CODE/manuscript.md"
    OUTDIR="$RUNNER_TEMP/edubooks/$BOOK/$LANG_CODE"
    mkdir -p "$OUTDIR"
    test -s "$SOURCE"

    /usr/bin/python3 .github/scripts/create_pdf_reference_docx.py
    pandoc "$SOURCE" --from=gfm --to=docx --standalone --reference-doc=dist/edubooks-reference.docx \
      -V lang="$LANG_TAG" \
      -V title="EduBooks — $TITLE — $LABEL Edition" \
      -V author="EduBooks" \
      -o "$OUTDIR/book-$BOOK-$LANG_CODE.docx"
    test -s "$OUTDIR/book-$BOOK-$LANG_CODE.docx"

    COVER="public/covers/$SLUG-$LANG_CODE.svg"
    test -s "$COVER"
    rsvg-convert -w 1600 "$COVER" -o "$OUTDIR/cover.png"
    /usr/bin/python3 .github/scripts/add_cover_page.py "$OUTDIR/book-$BOOK-$LANG_CODE.docx" "$OUTDIR/cover.png"

    PROFILE="file://$RUNNER_TEMP/lo-profile-$BOOK-$LANG_CODE"
    libreoffice -env:UserInstallation="$PROFILE" --headless \
      --convert-to 'pdf:writer_pdf_Export:{"UseTaggedPDF":{"type":"boolean","value":"true"}}' \
      --outdir "$OUTDIR" "$OUTDIR/book-$BOOK-$LANG_CODE.docx"

    PDF="$OUTDIR/book-$BOOK-$LANG_CODE.pdf"
    test -s "$PDF"
    pdfinfo "$PDF" > "$OUTDIR/pdfinfo.txt"
    TAGGED="$(awk -F: '/^Tagged:/ {gsub(/^[ \t]+/, "", $2); print $2}' "$OUTDIR/pdfinfo.txt")"
    test "$TAGGED" = "yes"
    pdffonts "$PDF" > "$OUTDIR/pdffonts.txt"
    pdffonts "$PDF" | awk 'NR > 2 && $(NF-4) != "yes" {bad=1} END {exit bad}'
    pdftotext "$PDF" "$OUTDIR/extracted.txt"
    WORDS="$(wc -w < "$OUTDIR/extracted.txt")"
    test "$WORDS" -gt 1000
    PAGES="$(awk '/^Pages:/ {print $2}' "$OUTDIR/pdfinfo.txt")"
    test "$PAGES" -ge "$MIN_PAGES"

    for UNIT in $(seq 1 "$LAST_UNIT"); do
      grep -F "$UNIT_LABEL $UNIT" "$OUTDIR/extracted.txt" >/dev/null
    done

    FULL_NAME="$SLUG-$LANG_CODE.pdf"
    cp "$PDF" "public/books/$FULL_NAME"
    PREVIEW_TMP="$OUTDIR/preview"
    mkdir -p "$PREVIEW_TMP"
    pdfseparate -f 1 -l 5 "$PDF" "$PREVIEW_TMP/page-%d.pdf"
    pdfunite "$PREVIEW_TMP"/page-*.pdf "public/previews/$SLUG-$LANG_CODE-sample.pdf"
    SAMPLE_PAGES="$(pdfinfo "public/previews/$SLUG-$LANG_CODE-sample.pdf" | awk '/^Pages:/ {print $2}')"
    test "$SAMPLE_PAGES" -eq 5

    sha256sum "public/books/$FULL_NAME" > "public/books/$FULL_NAME.sha256"
    sha256sum "public/previews/$SLUG-$LANG_CODE-sample.pdf" > "public/previews/$SLUG-$LANG_CODE-sample.pdf.sha256"
    {
      echo "Edition: $BOOK / $LANG_CODE"
      echo "Full PDF: public/books/$FULL_NAME"
      echo "Pages: $PAGES"
      echo "Words extracted: $WORDS"
      echo "Sample pages: $SAMPLE_PAGES"
      echo "Tagged PDF: $TAGGED"
      echo "Fonts: all embedded"
      echo "Full PDF SHA-256: $(sha256sum "public/books/$FULL_NAME" | awk '{print $1}')"
      echo "Sample PDF SHA-256: $(sha256sum "public/previews/$SLUG-$LANG_CODE-sample.pdf" | awk '{print $1}')"
      echo "Accessibility: PDF tagging detected; human accessibility certification is not asserted and remains owner-led."
    } | tee "dist/release-reports/$SLUG-$LANG_CODE.txt"
  done
done
