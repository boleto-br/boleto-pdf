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

cutSeparator(doc, 100)




/* doc
  .fontSize(12)
  .text('Here is some vector graphics...', MARGIN, MARGIN + 40)

doc
  .font('fonts/roboto-regular.ttf')
  .fontSize(25)
  .text('Here is some vector graphics...')

function color(i) {
  return i % 2 ? '#ffffff' : '#000000';
}

var pos = 0
var y = 0
for (var i = 0; i < stripes.length; i++ , pos += width) {
  var width = stripes[i]

  doc
    .save()
    .rect(MARGIN + y, 300, width, 50)
    .fill(color(i))
  y += width
} */

doc.end()