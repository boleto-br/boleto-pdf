const fs = require('fs')
const {bill, bradesco} = require('boleto-br')
const bradescoPDF = require('../dist/index').bradesco

const bradescoBill = bill(bradesco)
const {generateBillData} = bradescoBill

const boletos = [
  {
    paymentPlace:
      'Pagável preferencialmente na rede Bradesco ou Bradesco Expresso.',
    beneficiary: 'UNICRED FLORIANÓPOLIS - CNPJ: 074.064.502/0001-12',
    beneficiaryAddress:
      'Rua Tenete Silveira, 315 - Centro - Florianópolis - SC  - CEP 88010-301',
    instructions:
      'Após o vencimento cobrar multa de 2,00% , mais juros ao mes de 1,00%.',
    agency: '00750',
    agencyDigit: '0',
    account: 54291,
    accountDigit: '1',
    expirationDay: new Date(2017, 11, 4),
    documentDate: new Date(2017, 7, 18),
    processingDate: new Date(2017, 7, 18),
    card: '09',
    documentNumber: '42493',
    ourNumber: '19000001208',
    value: 900,
    formatedValue: 'R$ 9,90',
    documentType: 'DS',
    accept: 'N',
    currencyType: 'Real (R$)',
    amount: ' ',
    valueOf: ' ',
    descountValue: ' ',
    otherDiscounts: ' ',
    feeValue: ' ',
    outherFees: ' ',
    chargeValue: ' ',
    payer: {
      name: 'Anita Albuquerque',
      registerNumber: '221.412.772-05',
      street: 'Rua Maria Gertrudes Coelho',
      number: '827',
      complement: ' ',
      district: 'Estrada Nova',
      city: 'Divinópolis',
      state: 'MG',
      postalCode: '35500-700'
    },
    guarantor: {
      name: 'ACME Telecomunicações Ltda',
      registerNumber: '074.064.502/0001-12',
      street: 'Servidão',
      number: '439',
      district: 'Estrada Nova',
      complement: ' ',
      city: 'Jaraguá do Sul',
      state: 'SC',
      postalCode: '89254-375'
    }
  }
]

generateBillData(boletos)
  .then(data => {
    const promises = data.map(x => bradescoPDF(x))
    return Promise.all(promises)
  })
  .then(pdfs => {
    pdfs.forEach((pdf, index) => {
      fs.writeFile('boleto' + index + '.pdf', pdf, 'binary', err => {
        if (err) {
          console.log('something bad happen')
        }

        console.log('file saved!')
      })
    })
  })
  .catch(err => console.log(err))
