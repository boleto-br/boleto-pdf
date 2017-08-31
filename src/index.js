const fs = require('fs')
const PDFDocument = require('pdfkit')
const header = require('./sections/header')
const cutSeparator = require('./sections/cut-separator')

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
//cutSeparator(doc, 100)

doc.end()