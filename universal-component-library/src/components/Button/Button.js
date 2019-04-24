import React from 'react'
import { View, Text, Touchable } from 'react-primitives'
import styled from '@emotion/primitives'

const Button = ({ children, variant }) => {
  return (
    <Touchable>
      <Container variant={variant}>
        <Content variant={variant}>{children}</Content>
      </Container>
    </Touchable>
  )
}

const Container = styled(View)`
  align-items: center;
  background-color: #546e7a;
  border-radius: 4px;
  padding: 16px;
  ${props => {
    if (props.variant === 'neutral') {
      return `
        background-color: #ffffff;
        border: 1px solid #546e7a;
      `
    }
  }}
`

const Content = styled(Text)`
  color: #eceff1;
  ${props => {
    if (props.variant === 'neutral') {
      return `
        color: #000000;
      `
    }
  }}
`
export default Button
