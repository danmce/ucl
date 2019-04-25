import React from 'react'
import styled from '@emotion/primitives'
import AvatarUS from 'components/Avatar/Avatar'

const ProfileCard = ({ user }) => {
  return user ? (
    <Outer>
      <Container>
        {user.imageUri && <HeroImage source={{ uri: user.imageUri }} />}
        <Section>
          <Heading>
            <Avatar uri={user.avatarUri} />
            <HeadingContent>
              <Title>{user.name}</Title>
              <SubTitle>{user.title}</SubTitle>
            </HeadingContent>
          </Heading>
          <Content>
            <Description>{user.summary}</Description>
          </Content>
        </Section>
      </Container>
    </Outer>
  ) : null
}

const Outer = styled.View`
  padding: 8px;
`

const Container = styled.View`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 8px #888888;
  overflow: hidden;
  min-height: 400;
`

const Section = styled.View`
  padding: 16px;
`
const HeroImage = styled.Image`
  height: 200px;
  margin-bottom: 16px;
`

const Heading = styled.View`
  flex-direction: row;
  align-items: center;
`

const Avatar = styled(AvatarUS)`
  margin-right: 8px;
`

const HeadingContent = styled.View`
  flex-direction: column;
  margin-left: 16px;
`

const Title = styled.Text`
  color: black;
`

const SubTitle = styled.Text`
  color: black;
`

const Content = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
`

const Description = styled.Text`
  color: black;
`

export default ProfileCard
