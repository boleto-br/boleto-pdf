import {readFileSync} from 'fs'
import {resolve} from 'path'
import {sync as copySync} from 'cp-file'
import gzipSize from 'gzip-size'
import chalk from 'chalk'
import prettyBytes from 'pretty-bytes'
import babel from 'rollup-plugin-babel'
import localResolve from 'rollup-plugin-local-resolve'

const pkg = JSON.parse(readFileSync('./package.json'))
const dependencies = Object.keys(pkg.dependencies || {}).concat(['path'])

function filesize() {
  return {
    ongenerate({file}, {code}) {
      const size = gzipSize.sync(code)
      const prettySize = prettyBytes(size)
      const color = size < 5000 ? 'green' : size > 40000 ? 'red' : 'yellow'
      const report = chalk.white(file) + ': ' + chalk[color](prettySize)

      console.log(report)
    }
  }
}

function copy(files) {
  return {
    ongenerate() {
      Object.entries(files).forEach(([src, dest]) => {
        try {
          copySync(resolve(__dirname, src), resolve(__dirname, dest))
          const report = chalk.green(src + ' -> ' + dest)
          console.log(report)
        } catch (err) {
          const report = chalk.red('error on copy file: ' + src + ' to ' + dest)
          console.log(report)
        }
      })
    }
  }
}

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      babelrc: false,
      presets: [
        [
          'env',
          {
            targets: {
              node: 4
            },
            modules: false
          }
        ],
        'stage-0'
      ],
      plugins: ['external-helpers', 'transform-object-rest-spread']
    }),
    localResolve(),
    copy({
      'src/bradesco/fonts/roboto-bold.ttf': 'dist/fonts/roboto-bold.ttf',
      'src/bradesco/fonts/roboto-regular.ttf': 'dist/fonts/roboto-regular.ttf',
      'src/bradesco/logos/logo-bradesco.jpg': 'dist/logos/logo-bradesco.jpg'
    }),
    filesize()
  ],
  external: dependencies,
  output: {
    format: 'cjs',
    file: 'dist/index.js'
  }
}
