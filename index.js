const puppeteer = require('puppeteer')
const fs = require('fs')
const {promisify} = require('util')
const readFile = promisify(fs.readFile)
const ejs = require('ejs')

async function renderFile(filename, data) {
  const template = await readFile(filename, {encoding: 'utf-8'})
  return ejs.render(template, data)
}

async function main() {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const document = await renderFile('boleto.html', {name: 'Thiago'})
    await page.setContent(document)
    await page.pdf({
      path: 'print.pdf',
      format: 'A4'
    })

    browser.close()
  } catch(err) {
    console.error(err)
  }
}

main()
