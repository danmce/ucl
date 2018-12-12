import * as React from 'react'
import { render, Artboard, Page, View, Text, StyleSheet } from 'react-sketchapp'
import { Navbar } from 'universal-component-library'

const screenSizes = [
  { name: 'iPhone 7', width: 375, height: 667 },
  { name: 'Google Pixel 2', width: 411, height: 731 },
  { name: 'iPhone X', width: 375, height: 812 },
  { name: 'iPad - Portrait', width: 768, height: 1024 },
  { name: 'iPad Pro - Portrait', width: 1024, height: 1366 }
]

const styles = StyleSheet.create({
  app: {
    flexDirection: 'row'
  },
  screen: {
    margin: 20
  },
  screenText: {
    marginBottom: 10,
    fontSize: 28,
    fontFamily: 'Courier-Bold'
  }
})

const Screen = ({ name, width, height, children }) => (
  <View style={styles.screen}>
    <Text style={styles.screenText}>{name} ({width}x{height})</Text>
    <View style={{ height: height, width: width, backgroundColor: '#E2E1E2' }}>
      {children}
    </View>
  </View>
);

const App = () => (
  <View style={styles.app}>
    {screenSizes.map(({ name, width, height }) =>
      <Screen key={name} name={name} width={width} height={height}>
        <Navbar />
      </Screen>
    )}
  </View>
)

const Document = () => (
  <Page>
    <Artboard
      name='Home Mobile'
      style={{
        width: 320,
        height: 548
      }}
    >
      <Navbar />
    </Artboard>
    <Artboard
      name='Home Desktop'
      style={{
        marginTop: 50,
        width: 1024,
        height: 768
      }}
    >
      <Navbar />
    </Artboard>
  </Page>
)

export default () => {
  render(<App />, context.document.currentPage())
}
