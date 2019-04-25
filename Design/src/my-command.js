import * as React from 'react'
import { render, Artboard, Page, View, Text, StyleSheet } from 'react-sketchapp'
import {
  Navbar,
  Card,
  Section,
  Grid,
  TitleText,
  SubTitleText,
  HeadlineText,
  BodyText,
  Panel,
  Button,
  TextInputSketch as TextInput
} from 'universal-component-library'
import Profiles from './views/Profiles'

const screenSizes = [
  { name: 'iPhone 7', width: 375, height: 1366 },
  { name: 'Google Pixel 2', width: 411, height: 1366 },
  { name: 'iPhone X', width: 375, height: 1366 },
  { name: 'iPad - Portrait', width: 768, height: 1366 },
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
    <Text style={styles.screenText}>
      {name} ({width}x{height})
    </Text>
    <View style={{ height: height, width: width, backgroundColor: '#E2E1E2' }}>
      {children}
    </View>
  </View>
)

export default () => {
  Demo2()
}

// #region Demo1
const Demo1 = () => {
  render(<Navigation />, context.document.currentPage())
}

const Navigation = () => (
  <Page name='Design'>
    <Artboard
      name='Home'
      style={{
        width: 1024,
        height: 768
      }}
    >
      <Navbar />
    </Artboard>
  </Page>
)
// #endregion

// #region Demo2
const Demo2 = () => {
  render(<TextBlock />, context.document.currentPage())
}

const TextBlock = () => (
  <Page>
    <Artboard
      name='Home Desktop'
      style={{
        width: 1024,
        height: 768
      }}
    >
      <Navbar />
      <Grid cols={2}>
        <View>
          <HeadlineText>Welcome</HeadlineText>
          <TitleText>How are you?</TitleText>
        </View>
        <BodyText>
          Here's a little song I wrote You might want to sing it note for note
          Don't worry, be happy In every life we have some trouble But when you
          worry you make it double Don't worry, be happy Don't worry, be happy
          now
        </BodyText>
      </Grid>
      <Grid cols={2}>
        <Panel>
          <TextInput label='Sign In' />
          <Button>Submit</Button>
        </Panel>
      </Grid>
    </Artboard>
    <Artboard
      name='Home Mobile'
      style={{
        marginTop: 50,
        width: 320,
        height: 700
      }}
    >
      <Navbar />
      <Grid>
        <View>
          <HeadlineText>Welcome</HeadlineText>
          <TitleText>How are you?</TitleText>
        </View>
        <BodyText>
          Here's a little song I wrote You might want to sing it note for note
          Don't worry, be happy In every life we have some trouble But when you
          worry you make it double Don't worry, be happy Don't worry, be happy
          now
        </BodyText>
      </Grid>
    </Artboard>
  </Page>
)

// #endregion

// #region Demo3
const Demo3 = () => {
  render(<Document />, context.document.currentPage())
}

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
      <Card title='Hello' subtitle='There' description='you' />
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
      <Card title='Hello' subtitle='There' description='you' />
    </Artboard>
  </Page>
)
// #endregion

// #region Demo4
const Demo4 = () => {
  fetch('https://api.graph.cool/simple/v1/cju095oko0dex0151o7paq2u7', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: `{ allUsers {
          name
          title
          summary
          imageUri
          avatarUri
        } }`
    })
  })
    .then(response => response.json())
    .then(data =>
      render(<App users={data.data.allUsers} />, context.document.currentPage())
    )
}

const App = ({ users }) => (
  <View style={styles.app}>
    {screenSizes.map(({ name, width, height }) => (
      <Screen key={name} name={name} width={width} height={height}>
        <Navbar />
        <Section>
          <Profiles users={users} />
        </Section>
      </Screen>
    ))}
  </View>
)
// #endregion
