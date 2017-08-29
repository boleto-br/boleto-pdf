module.exports = function(doc) {
  const marginLeft = doc.page.margins.left
  const marginTop = doc.page.margins.top
  const marginRight = doc.page.margins.right
  const pageWidth = doc.page.width
  const startY = marginLeft
  const startX = marginTop
  const smallGutterY = 4
  const smallGutterX = 4
  const smallFontSize = 6
  const line = 0.3
  const tableLimit = pageWidth - marginLeft - marginRight
  const lineColor = '#000'
  const boxHeight = 30 // calc base on text
  const gutterX = 10
  const gutterY  = 16
  const fontSize = 8
  
  doc
    .fontSize(fontSize)
    .text('RECIBO DO PAGADOR', tableLimit - 61, startY - 10)
  
  doc
    .lineWidth(line)
    .rect(startX, startY, tableLimit, boxHeight)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .text('Nome do beneficiario', startX + smallGutterX, startY + smallGutterY)

  doc
    .fontSize(fontSize)
    .text('Acme SA', startX + gutterX, startY + gutterY)

  // separator
  doc
    .rect(startX + tableLimit / 2, startY, line, boxHeight)
    .fill(lineColor)

  doc
    .fontSize(smallFontSize)
    .text('CPF/CNPJ', startX + tableLimit / 2 + smallGutterX, startY + smallGutterY)

  doc
    .fontSize(fontSize)
    .text('16155340000121', startX + tableLimit / 2 + gutterX, startY + gutterY)

  // separtor 2
  doc
    .rect(startX + tableLimit * (4 / 6), startY, line, boxHeight)
    .fill(lineColor)
  doc
    .fontSize(smallFontSize)
    .text('Data de vencimento', startX + tableLimit * (4 / 6) + smallGutterX, startY + smallGutterY)
  
  doc
    .fontSize(fontSize)
    .text('01/02/2017', startX + tableLimit * (4 / 6) + gutterX, startY + gutterY)

  // separtor 3
  doc
    .rect(startX + tableLimit * (5 / 6), startY, line, boxHeight)
    .fill(lineColor)

  doc
    .fontSize(smallFontSize)
    .text('Valor Cobrado', startX + tableLimit * (5 / 6) + smallGutterX, startY + smallGutterY)

  doc
    .fontSize(fontSize)
    .text('R$ 100,00', startX + tableLimit * (5 / 6) + gutterX, startY + gutterY)
  
  // end firstpart
  
  // box 1
  doc
    .rect(startX, startY + boxHeight, tableLimit / 3, boxHeight)
    .stroke()
  
  doc
    .fontSize(smallFontSize)
    .text('Agência / Código do Beneficiário', startX + smallGutterX, startY + boxHeight + smallGutterY)
  
  doc
    .fontSize(fontSize)
    .text('11111 / 11111111-1', startX + gutterX, startY + boxHeight + gutterY)
  
  // box 2
  doc
    .rect(startX + tableLimit / 3 , startY + boxHeight, tableLimit / 3, boxHeight)
    .stroke()
  
  doc
    .fontSize(smallFontSize)
    .text('Nosso Número', startX + tableLimit / 3 + smallGutterX, startY + boxHeight + smallGutterY)
  
  doc
    .save()
    .fontSize(fontSize)
    .text('11111111-1', startX + tableLimit / 3 + gutterX, startY + boxHeight + gutterY)
  // autenticao mecanica box

  doc
    .rect(startX + tableLimit * (2 / 3) + gutterX, startY + boxHeight + 6, line, boxHeight - 6)
    .fill(lineColor)
  
  doc
    .rect(startX + tableLimit * (2 / 3) + gutterX, startY + boxHeight + 6, (tableLimit / 3) - (gutterX * 2), line)
    .fill(lineColor)

  doc
    .rect(startX + tableLimit - gutterX, startY + boxHeight + 6, line, boxHeight - 6)
    .fill(lineColor)

  doc
    .save()
    .fontSize(7)
    .text('Autenticação Mecânica', startX + (tableLimit * (2 / 3)) + 53 , startY + boxHeight + 10)
}
