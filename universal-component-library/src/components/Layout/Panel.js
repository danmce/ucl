import React from 'react'
import styled from '@emotion/primitives'
import { colors, spacing } from 'utils/designSystem'

const Panel = ({ children }) => {
  return <Container>{children}</Container>
}

export default Panel

const Container = styled.View`
  background-color: ${colors.blueGrey[100]};
  padding: ${spacing + 'px'};
`
