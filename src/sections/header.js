module.exports = function(doc) {
  const marginLeft = doc.page.margins.left
  const marginTop = doc.page.margins.top
  const marginRight = doc.page.margins.right
  const pageWidth = doc.page.width
  const startY = marginLeft
  const startX = marginTop
  const smallGutterY = 4
  const smallGutterX = 4
  const line = 0.3
  const tableLimit = pageWidth - marginLeft - marginRight
  const lineColor = '#000'
  const boxHeight = 25 // calc base on text
  const gutterX = 10
  const gutterY = 12
  const smallFontSize = 5.7
  const fontSize = 9
  const largefontSize = 12
  const fontBold = 'fonts/roboto-bold.ttf'
  const fontRegular = 'fonts/roboto-regular.ttf'
  
  doc
    .image('logos/logo-bradesco.jpg', startX + smallGutterX, startY, {height: 23})

  doc
    .rect(startX + 120, startY, line, boxHeight)
    .fill(lineColor)
  
  doc
    .fontSize(largefontSize)
    .font(fontBold)
    .text('237-2', startX + 130, startY + 8)

  doc
    .rect(startX + 170, startY, line, boxHeight)
    .fill(lineColor)
  
  doc
    .fontSize(largefontSize)
    .text('23797.50603 91900.000125 08005.429108 7 72670000000999', startX + 190, startY + 8)

  doc
    .rect(startX, startY + boxHeight, pageWidth - 2 * startX, line)
    .fill(lineColor)
  
  // box
  doc
    .rect(startX, startY + boxHeight, pageWidth - 2 * startX, boxHeight)
    .lineWidth(line)
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text('Local de Pagamento', startX + smallGutterX, startY + boxHeight + smallGutterY)

  doc
    .fontSize(fontSize)
    .font(fontBold)
    .text(
      'Pagável preferencialmente na rede Bradesco ou Bradesco Expresso.', 
      startX + gutterX, 
      startY + boxHeight + gutterY
    )
}
