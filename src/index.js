import fs from 'fs'
import PDFDocument from 'pdfkit'
import header from './sections/header'
import cutSeparator from './sections/cut-separator'
import body from './sections/body'
import barcode from './sections/barcode'

const MARGIN = 25 // 1/2 inch

const doc = new PDFDocument({
  autoFirstPage: false
})

doc.pipe(fs.createWriteStream('output.pdf'))
doc.addPage({
  size: 'A4',
  margin: MARGIN
})

header(doc)
cutSeparator(doc, 250)
body(doc, 260)
barcode(doc, MARGIN, 595, '23797726700000009997506091900000120800542910')

doc.end()
