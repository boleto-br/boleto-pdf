const generateStripes = require('../utils/barcode')

const color = (i) => {
  return i % 2 ? '#ffffff' : '#000000';
}

module.exports = function(doc,startX,startY,code){
  let y = 0
  
  const stripes = generateStripes(code)
  for (let i = 0; i < stripes.length; i++) {
    let width = stripes[i]
    doc
      .rect(startX + y, startY, width, 50)
      .fill(color(i))
    y += width
  }
}