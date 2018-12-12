import { css } from 'styled-components'

const sizes = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const breakpoints = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})

const theme = {
  breakpoints: { ...breakpoints },
  main: 'mediumseagreen',
  borderRadius: 100
}

export default theme
