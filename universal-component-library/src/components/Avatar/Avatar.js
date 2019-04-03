import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/primitives'
import { Image, View, Text, StyleSheet } from 'react-primitives'

const SMALL = 'small'
const MEDIUM = 'medium'
const LARGE = 'large'

const Avatar = ({ style, size }) => {
  return <Container style={style} size={size} />
}

// Avatar.PropTypes = {
//   size: PropTypes.oneOf([SMALL, MEDIUM, LARGE])
// }

// Avatar.defaultProps = {
//   size: SMALL
// }

export default Avatar

const Container = styled(View)`
  background-color: red;
  ${props => {
    switch (props.size) {
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
          width: 20px;
          height: 20px;
          border-radius: 10px;
        `
    }
  }}
`
