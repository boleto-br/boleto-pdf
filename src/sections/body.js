export default function (doc, startY) {
  const marginLeft = doc.page.margins.left
  const marginRight = doc.page.margins.right
  const pageWidth = doc.page.width
  const startX = marginLeft
  const smallGutterY = 3
  const smallGutterX = 3
  const line = 0.3
  const tableLimit = pageWidth - marginLeft - marginRight
  const lineColor = '#000'
  const boxHeight = 25 // Calc base on text
  const gutterX = 10
  const gutterY = 12
  const smallFontSize = 5.8
  const fontSize = 9
  const largefontSize = 12
  const mediumFontSize = 11
  const fontBold = 'fonts/roboto-bold.ttf'
  const fontRegular = 'fonts/roboto-regular.ttf'
  const value = 'R$ 9,99'
  const rightSize = 160
  const widthStringValue = doc.widthOfString(value)
  // Restore line
  doc
    .lineWidth(line)
    .undash()

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

    // Local de pagamentp
  doc
    .rect(
      startX,
      startY + boxHeight,
      tableLimit - rightSize,
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
      startX + tableLimit - rightSize,
      startY + boxHeight,
      rightSize,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
    'Data de Vencimento',
      startX + tableLimit - rightSize + smallGutterX,
      startY + boxHeight + smallGutterY
    )

  doc
    .fontSize(mediumFontSize)
    .font(fontBold)
    .text(
      '30/08/2017',
      startX + tableLimit - rightSize + 90,
      startY + boxHeight + gutterX
    )

  doc
    .rect(
      startX,
      startY + boxHeight * 2,
      tableLimit,
      boxHeight
    )
    .lineWidth(line)
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
      startX + tableLimit - rightSize,
      startY + boxHeight * 2,
      rightSize,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Agencia/Código do Cedente',
      startX + tableLimit - rightSize + smallGutterX,
      startY + boxHeight * 2 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      '7506-0 / 54291-1',
      startX + tableLimit - rightSize + 80,
      startY + boxHeight * 2 + gutterX
    )

  doc
    .rect(
      startX,
      startY + boxHeight * 3,
      100,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Data do documento',
      startX + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      '18/08/2017',
      startX + gutterX,
      startY + boxHeight * 3 + gutterX
    )

  doc
    .rect(
      startX + 100,
      startY + boxHeight * 3,
      140,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'N° documento',
      startX + 100 + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      '42493',
      startX + 100 + gutterX,
      startY + boxHeight * 3 + gutterX
    )

  doc
    .rect(
      startX + 240,
      startY + boxHeight * 3,
      55,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Espécie documento',
      startX + 240 + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      'DS',
      startX + 240 + gutterX,
      startY + boxHeight * 3 + gutterX
    )
  doc
    .rect(
    startX + 295,
    startY + boxHeight * 3,
    30,
    boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
    'Aceite',
    startX + 295 + smallGutterX,
    startY + boxHeight * 3 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      'N',
      startX + 295 + gutterX,
      startY + boxHeight * 3 + gutterX
    )

  doc
    .rect(
      startX + 325,
      startY + boxHeight * 3,
      tableLimit - 325 - rightSize,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Data processamento',
      startX + 325 + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      '18/08/2017',
      startX + 325 + smallGutterX,
      startY + boxHeight * 3 + gutterX
    )
  // Right side

  doc
    .rect(
      startX + tableLimit - rightSize,
      startY + boxHeight * 3,
      rightSize,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Nosso Número',
      startX + tableLimit - rightSize + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    )

  doc
    .fontSize(mediumFontSize)
    .font(fontBold)
    .text(
      '09/19000001208-0',
      startX + tableLimit - rightSize + 52,
      startY + boxHeight * 3 + gutterX
    )

  doc
    .rect(
      startX,
      startY + boxHeight * 4,
      100,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Uso do Banco / CIP',
      startX + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc
    .rect(
      startX + 100,
      startY + boxHeight * 4,
      30,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Carteira',
      startX + 100 + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      '09',
      startX + 100 + gutterX,
      startY + boxHeight * 4 + gutterX
    )

  doc
    .rect(
      startX + 130,
      startY + boxHeight * 4,
      55,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Espécie',
      startX + 130 + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      'Real (R$)',
      startX + 130 + gutterX,
      startY + boxHeight * 4 + gutterX
    )

  doc
    .rect(
      startX + 185,
      startY + boxHeight * 4,
      55,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Quantidade',
      startX + 185 + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      ' ',
      startX + 185 + gutterX,
      startY + boxHeight * 4 + gutterX
    )

  doc
    .rect(
      startX + 240,
      startY + boxHeight * 4,
      tableLimit - 240 - rightSize,
    boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Valor',
      startX + 240 + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      ' ',
      startX + 240 + gutterX,
      startY + boxHeight * 4 + gutterX
    )
  // Right side
  doc
    .rect(
      startX + tableLimit - rightSize,
      startY + boxHeight * 4,
      rightSize,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(=) Valor do documento',
      startX + tableLimit - rightSize + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc
    .fontSize(mediumFontSize)
    .font(fontBold)
    .text(
      value,
      tableLimit - widthStringValue - 5,
      startY + boxHeight * 4 + gutterX
    )

  doc
    .rect(
      startX,
      startY + boxHeight * 5,
      tableLimit - rightSize,
      boxHeight * 5
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Instruções (Texto de responsabilidade do sacador)',
      startX + smallGutterX,
      startY + boxHeight * 5 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontBold)
    .text(
    'Após o vencimento cobrar multa de 2,00% , mais juros ao mes de 1,00%.',
      startX + smallGutterX,
      startY + boxHeight * 5 + gutterY
    )

  doc
    .rect(
      startX + tableLimit - rightSize,
      startY + boxHeight * 5,
      rightSize,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .rect(
      startX + tableLimit - rightSize,
      startY + boxHeight * 5,
      rightSize,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(-) Desconto / Abatimento',
      startX + tableLimit - rightSize + smallGutterX,
      startY + boxHeight * 5 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      ' ',
      startX + tableLimit - rightSize + gutterX,
      startY + boxHeight * 5 + gutterY
    )

  doc
    .rect(
      startX + tableLimit - rightSize,
      startY + boxHeight * 6,
      rightSize,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(-) Outras deduções',
      startX + tableLimit - rightSize + smallGutterX,
      startY + boxHeight * 6 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      ' ',
      startX + tableLimit - rightSize + gutterX,
      startY + boxHeight * 6 + gutterY
    )

  doc
    .rect(
      startX + tableLimit - rightSize,
      startY + boxHeight * 7,
      rightSize,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(+) Mora / Multa',
      startX + tableLimit - rightSize + smallGutterX,
      startY + boxHeight * 7 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      ' ',
      startX + tableLimit - rightSize + gutterX,
      startY + boxHeight * 7 + gutterY
    )

  doc
    .rect(
      startX + tableLimit - rightSize,
      startY + boxHeight * 8,
      rightSize,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(-) Outros Acrécimos',
      startX + tableLimit - rightSize + smallGutterX,
      startY + boxHeight * 8 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      ' ',
      startX + tableLimit - rightSize + gutterX,
      startY + boxHeight * 8 + gutterY
    )

  doc
    .rect(
      startX + tableLimit - rightSize,
      startY + boxHeight * 9,
      rightSize,
      boxHeight
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(=) Valor cobrado',
      startX + tableLimit - rightSize + smallGutterX,
      startY + boxHeight * 9 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      ' ',
      startX + tableLimit - rightSize + gutterX,
      startY + boxHeight * 9 + gutterY
    )

  doc
    .rect(
      startX,
      startY + boxHeight * 10,
      tableLimit,
      boxHeight * 3
    )
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Pagador',
      startX + smallGutterX,
      startY + boxHeight * 10 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontBold)
    .text(
      'Anita Albuquerque - 221.412.772-05',
      startX + 30,
      startY + boxHeight * 10 + 3
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      'Rua Maria Gertrudes Coelho, 827',
      startX + 30,
      startY + boxHeight * 10 + 13
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      'Divinópolis-MG - CEP: 35500-700',
      startX + 30,
      startY + boxHeight * 10 + 23
    )

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Sacador/Avalista',
      startX + smallGutterX,
      startY + boxHeight * 10 + 40
    )

  doc
    .fontSize(7)
    .font(fontRegular)
    .text(
      'ACME Telecomunicações Ltda - CNPJ: 074.064.502/0001-12',
      startX + 50,
      startY + boxHeight * 10 + 43
    )

  doc
    .fontSize(7)
    .font(fontRegular)
    .text(
      'Servidão 439, Estrada Nova',
      startX + 50,
      startY + boxHeight * 10 + 53
    )

  doc
    .fontSize(7)
    .font(fontRegular)
    .text(
      'Jaraguá do Sul - SC - CEP: 89254-375',
      startX + 50,
      startY + boxHeight * 10 + 63
    )

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Auntênticação Mecânica - Ficha de Compensação',
      tableLimit - 115,
      startY + boxHeight * 13 + 5
    )
}
