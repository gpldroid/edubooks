#!/usr/bin/env python3
"""Insert the owner-confirmed localized SVG cover as a first page in a DOCX."""
import sys
from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.shared import Mm
from docx.oxml import OxmlElement
from docx.text.paragraph import Paragraph

if len(sys.argv) != 3:
    raise SystemExit("usage: add_cover_page.py input.docx cover.png")
docx_path, cover_path = sys.argv[1:]
doc = Document(docx_path)
body = doc._body._element
first = next((child for child in body if child.tag.endswith("}p")), None)
if first is None:
    raise SystemExit("DOCX has no paragraph to insert before")
cover_xml = OxmlElement("w:p")
first.addprevious(cover_xml)
cover_para = Paragraph(cover_xml, doc._body)
cover_para.alignment = WD_ALIGN_PARAGRAPH.CENTER
cover_para.paragraph_format.space_before = Mm(0)
cover_para.paragraph_format.space_after = Mm(0)
run = cover_para.add_run()
run.add_picture(cover_path, width=Mm(174))
run.add_break(WD_BREAK.PAGE)
doc.save(docx_path)
