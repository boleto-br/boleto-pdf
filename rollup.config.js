import {readFileSync} from 'fs'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-local-resolve'
import copy from 'rollup-plugin-copy'

const pkg = JSON.parse(readFileSync('./package.json'))
const dependencies = Object.keys(pkg.dependencies || {})

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  external: dependencies,
  format: 'cjs',
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
    resolve(),
    filesize(),
    copy({
      'src/bradesco/fonts/roboto-bold.ttf': 'dist/fonts/roboto-bold.ttf',
      'src/bradesco/fonts/roboto-regular.ttf': 'dist/fonts/roboto-regular.ttf',
      'src/bradesco/logos/logo-bradesco.jpg': 'dist/logos/logo-bradesco.jpg',
      verbose: true
    })
  ]
}
