import formatDate from '../utils/format-date'
export default function (
  doc,
  {
    digitableLine,
    paymentPlace,
    beneficiary,
    beneficiaryAddress,
    agency,
    accountNumer,
    expirationDay,
    documentDate,
    processingDate,
    card,
    documentNumber,
    formatedOurNumber,
    formatedValue,
    accept,
    billValue,
    amount,
    currencyType,
    documentType,
    descountValue,
    otherDiscounts,
    feeValue,
    outherFees,
    chargeValue,
    payer,
    guarantor,
    instructions
  },
  {
    startX,
    smallGutterY,
    smallGutterX,
    line,
    tableLimit,
    lineColor,
    boxHeight,
    gutterX,
    gutterY,
    smallFontSize,
    fontSize,
    largefontSize,
    mediumFontSize,
    fontBold,
    fontRegular,
    logo,
    bodyStarY
  }
) {
  const startY = bodyStarY
  const rightSize = 160
  const widthStringValue = doc.widthOfString(formatedValue)
  // Restore line
  doc.lineWidth(line).undash()

  doc.image(logo, startX + smallGutterX, startY, {
    height: 23
  })

  doc.rect(startX + 120, startY, line, boxHeight).fill(lineColor)

  doc
    .fontSize(largefontSize)
    .font(fontBold)
    .text('237-2', startX + 130, startY + 8)

  doc.rect(startX + 170, startY, line, boxHeight).fill(lineColor)

  doc.fontSize(largefontSize).text(digitableLine, startX + 190, startY + 8)

  doc.rect(startX, startY + boxHeight, tableLimit, line).fill(lineColor)

  // Local de pagamentp
  doc
    .rect(startX, startY + boxHeight, tableLimit - rightSize, boxHeight)
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
      formatDate(expirationDay,'DD/MM/YYYY'),
      startX + tableLimit - rightSize + 90,
      startY + boxHeight + gutterX
    )

  doc
    .rect(startX, startY + boxHeight * 2, tableLimit, boxHeight)
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
    .text(beneficiary, startX + 40, startY + boxHeight * 2 + smallGutterY)

  doc
    .fontSize(smallFontSize)
    .font(fontBold)
    .text(beneficiaryAddress, startX + 40, startY + boxHeight * 2 + 15)

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
      agency + ' / ' + accountNumer,
      startX + tableLimit - rightSize + 80,
      startY + boxHeight * 2 + gutterX
    )

  doc
    .rect(startX, startY + boxHeight * 3, 100, boxHeight)
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
    .text(formatDate(documentDate, 'DD/MM/YYYY'), startX + gutterX, startY + boxHeight * 3 + gutterX)

  doc
    .rect(startX + 100, startY + boxHeight * 3, 140, boxHeight)
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
      documentNumber,
      startX + 100 + gutterX,
      startY + boxHeight * 3 + gutterX
    )

  doc
    .rect(startX + 240, startY + boxHeight * 3, 55, boxHeight)
    .lineWidth(line)
    .stroke(lineColor)

  doc
    .fontSize(6)
    .font(fontRegular)
    .text(
      'Espécie do doc.',
      startX + 240 + smallGutterX,
      startY + boxHeight * 3 + smallGutterY
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      documentType,
      startX + 240 + gutterX,
      startY + boxHeight * 3 + gutterX
    )
  doc
    .rect(startX + 295, startY + boxHeight * 3, 30, boxHeight)
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
    .text(accept, startX + 295 + gutterX, startY + boxHeight * 3 + gutterX)

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
      formatDate(processingDate, 'DD/MM/YYYY'),
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
      formatedOurNumber,
      startX + tableLimit - rightSize + 52,
      startY + boxHeight * 3 + gutterX
    )

  doc
    .rect(startX, startY + boxHeight * 4, 100, boxHeight)
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
    .rect(startX + 100, startY + boxHeight * 4, 30, boxHeight)
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
    .text(card, startX + 100 + gutterX, startY + boxHeight * 4 + gutterX)

  doc
    .rect(startX + 130, startY + boxHeight * 4, 55, boxHeight)
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
      currencyType,
      startX + 130 + gutterX,
      startY + boxHeight * 4 + gutterX
    )

  doc
    .rect(startX + 185, startY + boxHeight * 4, 55, boxHeight)
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
    .text(amount, startX + 185 + gutterX, startY + boxHeight * 4 + gutterX)

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
    .text(billValue, startX + 240 + gutterX, startY + boxHeight * 4 + gutterX)
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
      formatedValue,
      tableLimit - widthStringValue - 5,
      startY + boxHeight * 4 + gutterX
    )

  doc
    .rect(startX, startY + boxHeight * 5, tableLimit - rightSize, boxHeight * 5)
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
    .text(instructions, startX + smallGutterX, startY + boxHeight * 5 + gutterY)

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
      descountValue,
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
      otherDiscounts,
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
      feeValue,
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
      outherFees,
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
      chargeValue,
      startX + tableLimit - rightSize + gutterX,
      startY + boxHeight * 9 + gutterY
    )

  doc
    .rect(startX, startY + boxHeight * 10, tableLimit, boxHeight * 3)
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
      payer.name + ' - ' + payer.registerNumber,
      startX + 30,
      startY + boxHeight * 10 + 3
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
      startY + boxHeight * 10 + 13
    )

  doc
    .fontSize(fontSize)
    .font(fontRegular)
    .text(
      payer.city + ' - ' + payer.state + ' - CEP: ' + payer.postalCode,
      startX + 30,
      startY + boxHeight * 10 + 23
    )

  if (guarantor) {
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
        guarantor.name + ' - ' + guarantor.registerNumber,
        startX + 50,
        startY + boxHeight * 10 + 43
      )

    doc
      .fontSize(7)
      .font(fontRegular)
      .text(
        guarantor.street + ', ' + guarantor.number + ', ' + guarantor.district,
        startX + 50,
        startY + boxHeight * 10 + 53
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
        startY + boxHeight * 10 + 63
      )
  }

  doc
    .fontSize(smallFontSize)
    .font(fontRegular)
    .text(
      'Auntênticação Mecânica - Ficha de Compensação',
      tableLimit - 115,
      startY + boxHeight * 13 + 5
    )
}
