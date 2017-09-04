const WEIGHTS = [
  '11221', // 0
  '21112', // 1
  '12112', // 2
  '22111', // 3
  '11212', // 4
  '21211', // 5
  '12211', // 6
  '11122', // 7
  '21121', // 8
  '12121'  // 9
]

const START = '1111'

/**
 * Representation of Stop portion of the barcode
 *
 * @default
 * @constant
 */
const STOP = '211'

function encode(number) {
  return START + number.match(/(..?)/g).map(interleavePair).join('') + STOP
}

function interleavePair(pair) {
  const black = WEIGHTS[Math.floor(pair / 10)]
  const white = WEIGHTS[pair % 10]

  let p = ''

  for (let i = 0; i < 5; i++) {
    p += black[i]
    p += white[i]
  }

  return p
}

export default function (code) {
  const coded = encode(code)
  return coded.split('').map(a => {
    return parseInt(a, 10)
  })
}
