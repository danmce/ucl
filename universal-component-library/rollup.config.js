import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const cssExportMap = {}

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'esm'
  },
  external: [
    'react',
    'react-proptypes',
    'react-primitives',
    '@emotion/primitives'
  ],
  plugins: [
    resolve(),
    postcss({
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens
          }
        })
      ],
      getExportNamed: false,
      getExport (id) {
        return cssExportMap[id]
      },
      extract: 'dist/styles.css'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
