module.exports = function(doc) {
  const marginLeft = doc.page.margins.left
  const marginTop = doc.page.margins.top
  const marginRight = doc.page.margins.right
  const pageWidth = doc.page.width
  const startY = marginLeft
  const startX = marginTop
  const smallGutterY = 3
  const smallGutterX = 3
  const line = 0.3
  const tableLimit = pageWidth - marginLeft - marginRight
  const lineColor = '#000'
  const boxHeight = 25 // calc base on text
  const gutterX = 10
  const gutterY = 12
  const smallFontSize = 5.8
  const fontSize = 9
  const largefontSize = 12
  const mediumFontSize = 11
  const fontBold = 'fonts/roboto-bold.ttf'
  const fontRegular = 'fonts/roboto-regular.ttf'
  const value = 'R$ 9,99'
  const chargeValue = ' '

  doc
    .image(
      'logos/logo-bradesco.jpg', 
      startX + smallGutterX, 
      startY, 
      {height: 23}
    )

  doc
    .rect(startX + 120, startY, line, boxHeight)
    .fill(lineColor)
  
  doc
    .fontSize(largefontSize)
    .font(fontBold)
    .text('237-2', startX + 130, startY + 8)

  doc
    .rect(
      startX + 170, 
      startY, 
      line, 
      boxHeight
    )
    .fill(lineColor)
  
  doc
    .fontSize(largefontSize)
    .text(
      '23797.50603 91900.000125 08005.429108 7 72670000000999', 
      startX + 190, 
      startY + 8
    )

  doc
    .rect(
      startX, 
      startY + boxHeight, 
      tableLimit, 
      line
    )
    .fill(lineColor)
  
  // box
  doc
    .rect(
      startX, 
      startY + boxHeight, 
      tableLimit, 
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Local de Pagamento', 
      startX + smallGutterX, 
      startY + boxHeight + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontBold)
    .text(
      'Pagável preferencialmente na rede Bradesco ou Bradesco Expresso.', 
      startX + gutterX, 
      startY + boxHeight + gutterY
    )
  
  doc
    .rect(
      startX, 
      startY + boxHeight * 2, 
      tableLimit * (2/4), 
      boxHeight
    )
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Beneficiário',
      startX + smallGutterX,
      startY + boxHeight * 2 + smallGutterY
    )

  doc
    .fontSize(8)
    .font(fontBold)
    .text(
      'UNICRED FLORIANÓPOLIS - CNPJ: 074.064.502/0001-12',
      startX + 40,
      startY + boxHeight * 2 + smallGutterY
    )

  doc
    .fontSize(smallFontSize)
    .font(fontBold)
    .text(
      'Rua Tenete Silveira, 315 - Centro - Florianópolis - SC  - CEP 88010-301',
      startX + 40,
      startY + boxHeight * 2 + 15
    )

  doc
    .rect(
      startX + tableLimit * (2 / 4), 
      startY + boxHeight * 2, 
      tableLimit * (1 / 4), 
      boxHeight
    )
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Agência / Código do Cedente',
      startX + tableLimit * (2 / 4) + smallGutterX,
      startY + boxHeight * 2 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      '7506-0 / 54291-1',
      startX + tableLimit * (2 / 4) + 65,
      startY + boxHeight * 2 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (3 / 4), 
      startY + boxHeight * 2, 
      tableLimit * (1 / 4), boxHeight
    )
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Data de Vencimento',
      startX + tableLimit * (3 / 4) + smallGutterX,
      startY + boxHeight * 2 + smallGutterY
    )

  doc
    .fontSize(mediumFontSize)
    .font(fontBold)
    .text(
      '30/08/2017',
      startX + tableLimit * (3 / 4) + 65,
      startY + boxHeight * 2 + 7
    )
    
  // next line table
  doc
    .rect(
      startX, startY + boxHeight * 3, 
      tableLimit * (1.5 / 10), boxHeight)
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Data do Documento',
      startX + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    ) 

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      '18/08/2017',
      startX + gutterX,
      startY + boxHeight * 3 + gutterY
    ) 
  
  doc
    .rect(
      startX + tableLimit * (1.5 / 10) , 
      startY + boxHeight * 3, tableLimit * (1.5 / 10), boxHeight)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Data do Processamento',
      startX + tableLimit * (1.5 / 10) + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    ) 

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      '18/08/2017',
      startX + tableLimit * (1.5 / 10) + gutterX,
      startY + boxHeight * 3 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * ( 3 / 10), startY + boxHeight * 3, 
      tableLimit * ( 0.6 / 10), boxHeight)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Carteira',
      startX + tableLimit * (3 / 10) + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
    '09',
      startX + tableLimit * (3 / 10) + gutterX,
      startY + boxHeight * 3 + gutterY
    )
  
  doc
    .rect(
      startX + tableLimit * (3.6 / 10),
      startY + boxHeight * 3, tableLimit * (2 / 10), boxHeight)
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'N° documento',
      startX + tableLimit * (3.6 / 10) + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    )
  
  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      '42493',
      startX + tableLimit * (3.6 / 10) + gutterX,
      startY + boxHeight * 3 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (5.6 / 10), 
      startY + boxHeight * 3, tableLimit * (2.2 / 10), boxHeight)
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
    'Nosso Número',
      startX + tableLimit * (5.6 / 10) + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    )

  doc
    .fontSize(mediumFontSize)
    .font(fontBold)
    .text(
      '09/19000001208-0',
      startX + tableLimit * (5.6 / 10) + gutterX,
      startY + boxHeight * 3 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (7.8 / 10),
      startY + boxHeight * 3, tableLimit * (2.2 / 10), boxHeight
    )
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(=) Valor do documento',
      startX + tableLimit * (7.8 / 10) + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    )

  doc
    .fontSize(mediumFontSize)
    .font(fontBold)
    
  const widthStringValue = doc.widthOfString(value)
  
  doc
    .text(
      value,
      startX + tableLimit - widthStringValue - gutterX,
      startY + boxHeight * 3 + 9
    )

  // new line
  doc
    .rect(
      startX,
      startY + boxHeight * 4, tableLimit * (1 / 5), boxHeight)
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(-) Desconto / Abatimento',
      startX +  smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )
  
  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      ' ',
      startX + gutterX,
      startY + boxHeight * 4 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (1 / 5),
      startY + boxHeight * 4, tableLimit * (1 / 5), boxHeight)
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(-) Outras deduções',
      startX + tableLimit * (1 / 5) + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      ' ',
      startX + tableLimit * (1 / 5) + gutterX,
      startY + boxHeight * 4 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (2 / 5),
      startY + boxHeight * 4, tableLimit * (1 / 5), boxHeight)
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(+) Mora / Multa',
      startX + tableLimit * (2 / 5) + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      ' ',
      startX + tableLimit * (2 / 5) + gutterX,
      startY + boxHeight * 4 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (3 / 5),
      startY + boxHeight * 4, tableLimit * (1 / 5), boxHeight)
    .stroke(lineColor)
  
  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
    '(+) Mora / Multa',
      startX + tableLimit * (3 / 5) + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      ' ',
      startX + tableLimit * (3 / 5) + gutterX,
      startY + boxHeight * 4 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (4 / 5),
      startY + boxHeight * 4, tableLimit * (1 / 5), boxHeight)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
    '(=) Valor cobrado',
    startX + tableLimit * (4 / 5) + smallGutterX,
    startY + boxHeight * 4 + smallGutterY
    )
  
  doc
    .fontSize(mediumFontSize)
    .font(fontBold)

  const widthOfStringCharge = doc.widthOfString(chargeValue)
  
  doc
    .text(
      chargeValue,
      tableLimit - widthOfStringCharge + gutterX,
      startY + boxHeight * 4 + gutterY
    )
  
  // payer info box
  doc
    .rect(
      startX,
      startY + boxHeight * 5, tableLimit, boxHeight * 3)
    .stroke(lineColor)
}