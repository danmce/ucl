export const colors = {
  blueGrey: {
    900: '#263238',
    800: '#37474F',
    700: '#455A64',
    600: '#546E7A',
    500: '#607D8B',
    400: '#78909C',
    300: '#90A4AE',
    200: '#B0BEC5',
    100: '#CFD8DC',
    50: '#ECEFF1'
  },
  black: '#000000',
  white: '#FFFFFF'
}

const typeSizes = [50, 48, 36, 24, 20, 16]

export const spacing = 16

const fontFamilies = {
  display: 'Helvetica',
  body: 'Georgia'
}

const fontWeights = {
  regular: 'regular',
  bold: 'bold'
}

export const fonts = {
  Headline: {
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 80
  },
  Title: {
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 48
  },
  SubTitle: {
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 48
  },
  Label: {
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: '24px',
    marginBottom: 24,
    display: 'block'
  },
  Body: {
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 24
  }
}

export default {
  colors,
  fonts,
  spacing
}
