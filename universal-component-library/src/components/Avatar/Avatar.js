import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/primitives'
import { View, Image } from 'react-primitives'
import { colors, spacing } from 'utils/designSystem'

const MEDIUM = 'medium'
const LARGE = 'large'

const Avatar = ({ style, size, uri }) => {
  return (
    <Container style={style} size={size}>
      {uri ? (
        <AvatarImage size={size} source={{ uri }} />
      ) : (
        <Placeholder size={size} />
      )}
    </Container>
  )
}

export default Avatar

const setSize = size => {
  switch (size) {
    case MEDIUM:
      return `
        width: 50px;
        height: 50px;
        border-radius: 25px;
      `
    case LARGE:
      return `
        width: 100px;
        height: 100px;
        border-radius: 50px;
      `
    default:
      return `
        width: 38px;
        height: 38px;
        border-radius: 19px;
      `
  }
}

const Container = styled(View)`
  overflow: hidden;
  ${props => {
    return setSize(props.size)
  }}
`

const AvatarImage = styled(Image)`
  ${props => {
    return setSize(props.size)
  }}
`

const Placeholder = styled(View)`
  background-color: ${colors.blueGrey[300]};
  ${props => {
    return setSize(props.size)
  }}
`
