export default function (
  doc,
  {
    digitableLine,
    paymentPlace,
    beneficiary,
    beneficiaryAddress,
    agency,
    accountNumer,
    maturityDay,
    documentDate,
    processingDate,
    card,
    documentNumber,
    ourNumberline,
    value,
    descountValue,
    otherDiscounts,
    feeValue,
    outherFees,
    chargeValue,
    payer,
    guarantor
  },
  config
) {
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
  const boxHeight = 25 // Calc base on text
  const gutterX = 10
  const gutterY = 12
  const smallFontSize = 5.8
  const fontSize = 9
  const largefontSize = 12
  const mediumFontSize = 11
  const fontBold = config.fontsPath + '/roboto-bold.ttf'
  const fontRegular = config.fontsPath + '/roboto-regular.ttf'

  doc.image(
    config.imagesPath + '/logo-bradesco.jpg',
    startX + smallGutterX,
    startY,
    {
      height: 23
    }
  )

  doc.rect(startX + 120, startY, line, boxHeight).fill(lineColor)

  doc
    .fontSize(largefontSize)
    .font(fontBold)
    .text('237-2', startX + 130, startY + 8)

  doc.rect(startX + 170, startY, line, boxHeight).fill(lineColor)

  doc.fontSize(largefontSize).text(digitableLine, startX + 190, startY + 8)

  doc.rect(startX, startY + boxHeight, tableLimit, line).fill(lineColor)

  // Box
  doc
    .rect(startX, startY + boxHeight, tableLimit, boxHeight)
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
    .text(paymentPlace, startX + gutterX, startY + boxHeight + gutterY)

  doc
    .rect(startX, startY + boxHeight * 2, tableLimit * (2 / 4), boxHeight)
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
    .text(beneficiary, startX + 40, startY + boxHeight * 2 + smallGutterY)

  doc
    .fontSize(smallFontSize)
    .font(fontBold)
    .text(beneficiaryAddress, startX + 40, startY + boxHeight * 2 + 15)

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
      agency + ' / ' + accountNumer,
      startX + tableLimit * (2 / 4) + 65,
      startY + boxHeight * 2 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (3 / 4),
      startY + boxHeight * 2,
      tableLimit * (1 / 4),
      boxHeight
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
      maturityDay,
      startX + tableLimit * (3 / 4) + 65,
      startY + boxHeight * 2 + 7
    )

  // Next line table
  doc
    .rect(startX, startY + boxHeight * 3, tableLimit * (1.5 / 10), boxHeight)
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
    .text(documentDate, startX + gutterX, startY + boxHeight * 3 + gutterY)

  doc
    .rect(
      startX + tableLimit * (1.5 / 10),
      startY + boxHeight * 3,
      tableLimit * (1.5 / 10),
      boxHeight
    )
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
      processingDate,
      startX + tableLimit * (1.5 / 10) + gutterX,
      startY + boxHeight * 3 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (3 / 10),
      startY + boxHeight * 3,
      tableLimit * (0.6 / 10),
      boxHeight
    )
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
      card,
      startX + tableLimit * (3 / 10) + gutterX,
      startY + boxHeight * 3 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (3.6 / 10),
      startY + boxHeight * 3,
      tableLimit * (2 / 10),
      boxHeight
    )
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
      documentNumber,
      startX + tableLimit * (3.6 / 10) + gutterX,
      startY + boxHeight * 3 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (5.6 / 10),
      startY + boxHeight * 3,
      tableLimit * (2.2 / 10),
      boxHeight
    )
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
      ourNumberline,
      startX + tableLimit * (5.6 / 10) + gutterX,
      startY + boxHeight * 3 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (7.8 / 10),
      startY + boxHeight * 3,
      tableLimit * (2.2 / 10),
      boxHeight
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

  doc.fontSize(mediumFontSize).font(fontBold)

  const widthStringValue = doc.widthOfString(value)

  doc.text(
    value,
    startX + tableLimit - widthStringValue - 10,
    startY + boxHeight * 3 + 9
  )

  // New line
  doc
    .rect(startX, startY + boxHeight * 4, tableLimit * (1 / 5), boxHeight)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(-) Desconto / Abatimento',
      startX + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(descountValue, startX + gutterX, startY + boxHeight * 4 + gutterY)

  doc
    .rect(
      startX + tableLimit * (1 / 5),
      startY + boxHeight * 4,
      tableLimit * (1 / 5),
      boxHeight
    )
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
      otherDiscounts,
      startX + tableLimit * (1 / 5) + gutterX,
      startY + boxHeight * 4 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (2 / 5),
      startY + boxHeight * 4,
      tableLimit * (1 / 5),
      boxHeight
    )
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
      feeValue,
      startX + tableLimit * (2 / 5) + gutterX,
      startY + boxHeight * 4 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (3 / 5),
      startY + boxHeight * 4,
      tableLimit * (1 / 5),
      boxHeight
    )
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(-) Outros Acrécimos',
      startX + tableLimit * (3 / 5) + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      outherFees,
      startX + tableLimit * (3 / 5) + gutterX,
      startY + boxHeight * 4 + gutterY
    )

  doc
    .rect(
      startX + tableLimit * (4 / 5),
      startY + boxHeight * 4,
      tableLimit * (1 / 5),
      boxHeight
    )
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      '(=) Valor cobrado',
      startX + tableLimit * (4 / 5) + smallGutterX,
      startY + boxHeight * 4 + smallGutterY
    )

  doc.fontSize(mediumFontSize).font(fontBold)

  const widthOfStringCharge = doc.widthOfString(chargeValue)

  doc.text(
    chargeValue,
    tableLimit - widthOfStringCharge + gutterX,
    startY + boxHeight * 4 + gutterY
  )

  // Payer info box
  doc
    .rect(startX, startY + boxHeight * 5, tableLimit, boxHeight * 3)
    .stroke(lineColor)

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Pagador',
      startX + smallGutterX,
      startY + boxHeight * 5 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontBold)
    .text(
      payer.name + ' - ' + payer.registerNumber,
      startX + 30,
      startY + boxHeight * 5 + 3
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      payer.street +
        ', ' +
        payer.number +
        ' ' +
        payer.complement +
        ' - ' +
        payer.district,
      startX + 30,
      startY + boxHeight * 5 + 13
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      payer.city + ' - ' + payer.state + ' - CEP: ' + payer.postalCode,
      startX + 30,
      startY + boxHeight * 5 + 23
    )

  if (guarantor) {
    doc
      .fontSize(smallFontSize)
      .font(fontRegular)
      .text(
        'Sacador/Avalista',
        startX + smallGutterX,
        startY + boxHeight * 5 + 40
      )

    doc
      .fontSize(7)
      .font(fontRegular)
      .text(
        guarantor.name + ' - ' + guarantor.registerNumber,
        startX + 50,
        startY + boxHeight * 5 + 43
      )

    doc
      .fontSize(7)
      .font(fontRegular)
      .text(
        guarantor.street + ', ' + guarantor.number + ', ' + guarantor.district,
        startX + 50,
        startY + boxHeight * 5 + 53
      )

    doc
      .fontSize(7)
      .font(fontRegular)
      .text(
        guarantor.city +
          ' - ' +
          guarantor.state +
          ' - CEP: ' +
          guarantor.postalCode,
        startX + 50,
        startY + boxHeight * 5 + 63
      )
  }

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Auntênticação Mecânica - Recibo',
      tableLimit - 70,
      startY + boxHeight * 8 + 5
    )
}
