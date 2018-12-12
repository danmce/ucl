import React from 'react'
import styled from '@emotion/primitives'

const Wrapper = styled.View({
  borderColor: 'red'
})

const Content = styled.Text({
  color: 'red'
})

const AlertComponent = ({ message = 'this is an alert' }) => (
  <Wrapper>
    <Content>{message}</Content>
  </Wrapper>
)

export default AlertComponent
