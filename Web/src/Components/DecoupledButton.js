import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'

const buttonColor = theme.variants('mode', 'variant', {
  default: {
    light: 'grey',
    dark: 'darkgrey'
  },
  primary: {
    light: props => props.theme.main || 'blue',
    dark: 'darkblue'
  },
  warning: {
    light: 'orange',
    dark: 'darkorange'
  }
})

const DecoupledButton = styled.button`
  color: ${buttonColor};
`

DecoupledButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'warning'])
}

DecoupledButton.defaultProps = {
  variant: 'default'
}

export default DecoupledButton
