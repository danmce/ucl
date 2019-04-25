import React from 'react'
import {
  Navbar,
  Section,
  ProfileCard,
  Grid,
  TitleText,
  SubTitleText,
  HeadlineText,
  BodyText,
  Panel,
  TextInput,
  Button
} from 'universal-component-library'
import { View } from 'react-primitives'

// #region Demo1
const Demo1 = () => (
  <>
    <Navbar />
  </>
)
// #endregion

// #region Demo2
const Demo2 = () => <TextDemo showForm />
const TextDemo = ({ showForm }) => (
  <>
    <Navbar />
    <Grid cols={2}>
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
      <Grid cols={2}>
        <Panel>
          <TextInput label='Sign In' />
          <Button>Submit</Button>
        </Panel>
      </Grid>
    )}
  </>
)
// #endregion

// #region Demo4
const Demo4 = () => (
  <>
    <Navbar />
    <Section>
      <Grid cols={3}>
        <ProfileCard
          user={{
            name: 'Daniel',
            title: 'Resource',
            summary: 'All work and no play...',
            imageUri:
              'https://pbs.twimg.com/profile_banners/19903223/1463557267/1500x500',
            avatarUri:
              'https://pbs.twimg.com/profile_images/732838412017881088/DzxPuyJ9_400x400.jpg'
          }}
        />
      </Grid>
    </Section>
  </>
)

// #endregion

export default Demo2
