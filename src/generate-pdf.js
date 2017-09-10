import path from 'path'
import PDFDocument from 'pdfkit'
import header from './sections/header'
import cutSeparator from './sections/cut-separator'
import body from './sections/body'
import barcode from './sections/barcode'

export default function (bill) {
  /*   Const config = {
    marginLeft: doc.page.margins.left,
    marginTop: doc.page.margins.top,
    marginRight: doc.page.margins.right,
    pageWidth: doc.page.width,
    startY: marginLeft,
    startX: marginTop,
    smallGutterY: 3,
    smallGutterX: 3,
    line: 0.3,
    tableLimit: pageWidth - marginLeft - marginRight,
    lineColor: '#000',
    boxHeight: 25, // Calc base on text
    gutterX: 10,
    gutterY: 12,
    smallFontSize: 5.8,
    fontSize: 9,
    largefontSize: 12,
    mediumFontSize: 11,
    fontBold: 'fonts/roboto-bold.ttf',
    fontRegular: 'fonts/roboto-regular.ttf',
  } */

  return new Promise((resolve, reject) => {
    const MARGIN = 25
    const doc = new PDFDocument({
      autoFirstPage: false
    })
    doc.addPage({
      size: 'A4',
      margin: MARGIN
    })

    const config = {
      imagesPath: path.join(__dirname, 'logos'),
      fontsPath: path.join(__dirname, 'fonts')
    }

    try {
      header(doc, bill, config)
      cutSeparator(doc, 250)
      body(doc, bill, config)
      barcode(doc, MARGIN, 595, bill.barCode)
    } catch (err) {
      reject(err)
    }

    const buffers = []
    doc.on('data', buffers.push.bind(buffers))
    doc.on('end', () => {
      const pdfData = Buffer.concat(buffers)
      resolve(pdfData)
    })

    doc.end()
  })
}
