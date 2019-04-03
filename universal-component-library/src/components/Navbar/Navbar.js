import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-primitives'
// import styled from '@emotion/primitives'

// const breakpoints = [576, 768, 992, 1200]

// const mq = breakpoints.map(
//   bp => `@media (min-width: ${bp}px)`
// )

// const Bar = styled.View({
//   backgroundColor: '#78909C',
//   minHeight: 40,
//   display: 'flex',
//   justifyContent: 'center',
//   paddingLeft: 16,
//   paddingRight: 16
// })

// const Brand = styled.Text({
//   color: 'white',
//   [mq[3]]: {
//     color: 'red'
//   }
// })

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#78909C',
    minHeight: 40,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  brand: {
    color: 'blue'
  }
})

const Navbar = () => (
  <View style={styles.bar}>
    <Text style={styles.brand}>Logo test</Text>
  </View>
)

export default Navbar
