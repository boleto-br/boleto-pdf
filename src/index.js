const fs = require('fs')
const PDFDocument = require('pdfkit')
const header = require('./sections/header')
const cutSeparator = require('./sections/cut-separator')
const body = require('./sections/body')
const barcode = require('./sections/barcode')

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
barcode(doc, MARGIN, 595,'23797726700000009997506091900000120800542910')

doc.end()