export default function (doc, startY) {
  const marginLeft = doc.page.margins.left
  const pageWidth = doc.page.width

  doc.moveTo(marginLeft, startY)
    .lineWidth(1)
    .dash(5, {space: 2})
    .lineTo(pageWidth - marginLeft, startY)
    .stroke()
}
