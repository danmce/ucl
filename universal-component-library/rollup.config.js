import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import alias from 'rollup-plugin-alias'
import path from 'path'

const cssExportMap = {}

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'esm'
  },
  external: ['react', 'prop-types', 'react-primitives', '@emotion/primitives'],
  plugins: [
    alias({
      components: path.resolve(__dirname, 'src/components')
    }),
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
