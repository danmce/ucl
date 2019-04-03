import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/primitives'

const Section = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.View`
  padding: 16px;
`

export default Section
