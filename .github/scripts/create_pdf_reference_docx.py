#!/usr/bin/env python3
"""Generate the A4 EduBooks DOCX reference template used by the tagged-PDF build."""
from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Mm, Pt, RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

doc = Document()
section = doc.sections[0]
section.page_width = Mm(210)
section.page_height = Mm(297)
section.top_margin = Mm(18)
section.bottom_margin = Mm(18)
section.left_margin = Mm(18)
section.right_margin = Mm(18)

def font(style, size, color="17324D", bold=False):
    style.font.name = "DejaVu Sans"
    style.font.size = Pt(size)
    style.font.bold = bold
    style.font.color.rgb = RGBColor.from_string(color)
    rpr = style.element.get_or_add_rPr()
    rfonts = rpr.rFonts
    if rfonts is None:
        rfonts = OxmlElement("w:rFonts")
        rpr.insert(0, rfonts)
    for key in ("ascii", "hAnsi", "cs", "eastAsia"):
        rfonts.set(qn(f"w:{key}"), "DejaVu Sans")

font(doc.styles["Normal"], 10, "243447")
font(doc.styles["Title"], 24, "17324D", True)
font(doc.styles["Subtitle"], 13, "168C88")
font(doc.styles["Heading 1"], 17, "17324D", True)
font(doc.styles["Heading 2"], 13, "168C88", True)
font(doc.styles["Heading 3"], 11, "17324D", True)
for name in ("Normal", "Heading 1", "Heading 2", "Heading 3"):
    style = doc.styles[name]
    style.paragraph_format.space_after = Pt(6)
    style.paragraph_format.keep_with_next = name != "Normal"

header = section.header.paragraphs[0]
header.text = "EduBooks  |  Multilingual Learning Series"
header.alignment = WD_ALIGN_PARAGRAPH.RIGHT
for run in header.runs:
    run.font.name = "DejaVu Sans"
    run.font.size = Pt(8)
    run.font.color.rgb = RGBColor(100, 116, 139)

footer = section.footer.paragraphs[0]
footer.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = footer.add_run("EduBooks  •  ")
run.font.name = "DejaVu Sans"
run.font.size = Pt(8)
field = OxmlElement("w:fldSimple")
field.set(qn("w:instr"), "PAGE")
footer._p.append(field)

doc.save("dist/edubooks-reference.docx")
