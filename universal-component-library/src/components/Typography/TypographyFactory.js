import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/primitives'
import { fonts } from 'utils/designSystem'

const TypographyFactory = ({ variant }) => ({
  style,
  children,
  center,
  bold,
  ...rest
}) => {
  const typographyProps = {
    style,
    variant,
    ...(center && { center: 'true' }),
    ...(bold && { bold: 'true' })
  }
  return (
    <StyledText {...typographyProps} {...rest}>
      {children}
    </StyledText>
  )
}

const StyledText = styled.Text`
  ${props => {
    return fonts[props.variant]
  }}
  ${props => {
    if (props.bold) {
      return `
        fontWeight: bold;
      `
    }
  }}
`

TypographyFactory.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  variant: PropTypes.oneOf(['Headline', 'Title', 'Body'])
}

export default TypographyFactory
