import * as React from 'react'
import {
  render,
  Artboard,
  Page,
  View,
  Text,
  StyleSheet,
  makeSymbol
} from 'react-sketchapp'
import {
  Navbar,
  Card,
  ProfileCard,
  Section,
  Grid,
  TitleText,
  SubTitleText,
  HeadlineText,
  BodyText,
  Panel,
  Button,
  Box,
  TextInputSketch as TextInput
} from 'universal-component-library'
import Profiles from './views/Profiles'

// #region Screen
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
// #endregion

// #region Styles
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
// #endregion

export default () => {
  Demo1()
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
  render(<Symbols />, context.document.currentPage())
}

const BoxSym = makeSymbol(Box, 'ui/box')

const Symbols = () => (
  <Page>
    <Artboard
      name='Home'
      style={{
        width: 1024,
        height: 768
      }}
    >
      <BoxSym overrides={{ Title: 'Hi' }} />
    </Artboard>
  </Page>
)
// #endregion

// #region Demo3
const Demo3 = () => {
  render(<TextBlock />, context.document.currentPage())
}

const PageContent = ({ cols, showForm }) => (
  <View>
    <Grid cols={cols}>
      <View>
        <HeadlineText>Welcome</HeadlineText>
        <TitleText>How are you?</TitleText>
      </View>
      <BodyText>
        Here's a little song I wrote You might want to sing it note for note
        Don't worry, be happy In every life we have some trouble But when you
        worry you make it double Don't worry, be happy Don't worry, be happy now
      </BodyText>
    </Grid>
    {showForm && (
      <Grid cols={cols}>
        <Panel>
          <TextInput label='Sign In' />
          <Button>Submit</Button>
        </Panel>
      </Grid>
    )}
  </View>
)

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
      <PageContent cols={2} />
    </Artboard>
  </Page>
)

// #endregion

// #region Demo4
const Demo4 = () => {
  render(<Document />, context.document.currentPage())
}

const Document = () => {
  return (
    <Page>
      <Artboard
        name='Home Desktop'
        style={{
          marginTop: 50,
          width: 1024,
          height: 768
        }}
      >
        <Navbar />
        <Grid cols={2}>
          <Card title='Hello' subtitle='There' description='you' />
        </Grid>
      </Artboard>
      {/* <Artboard
        name='Home Mobile'
        style={{
          width: 320,
          height: 548,
          marginTop: 50
        }}
      >
        <Navbar />
        <Grid cols={2}>
          <Card title='Hello' subtitle='There' description='you' />
        </Grid>
      </Artboard> */}
    </Page>
  )
}
// #endregion

// #region ScreenSizes
const screenSizes = [
  { name: 'iPhone 7', width: 375, height: 1466 },
  { name: 'Google Pixel 2', width: 411, height: 1466 },
  { name: 'iPhone X', width: 375, height: 1466 },
  { name: 'iPad - Portrait', width: 768, height: 1466 },
  { name: 'iPad Pro - Portrait', width: 1024, height: 1466 }
]
// #endregion

// #region Demo4a
const Demo4a = () => {
  render(<Screens />, context.document.currentPage())
}

const Screens = ({ users }) => (
  <View style={styles.app}>
    {screenSizes.map(({ name, width, height }) => (
      <Screen key={name} name={name} width={width} height={height}>
        <Navbar />
      </Screen>
    ))}
  </View>
)
// #endregion

// #region Demo5
// #region call
const Demo5 = () => {
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
// #endregion

const App = ({ users }) => (
  <View style={styles.app}>
    {screenSizes.map(({ name, width, height }) => (
      <Screen key={name} name={name} width={width} height={height}>
        <Navbar />
        <Grid cols={width >= 1024 ? 3 : width >= 768 ? 2 : 1}>
          <ProfileCard
            user={{
              name: 'Daniel',
              title: 'Resource',
              summary: 'Does stuff, no one really knows what though'
            }}
          />
          {/* {users.map((user, index) => {
            return <ProfileCard user={user} />
          })} */}
        </Grid>
      </Screen>
    ))}
  </View>
)
// #endregion
