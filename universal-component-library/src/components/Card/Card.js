import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/primitives'

import AvatarUS from 'components/Avatar/Avatar'

const Card = ({ title, subtitle, description }) => {
  return (
    <Outer>
      <Container>
        <Heading>
          <Avatar />
          <HeadingContent>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
          </HeadingContent>
        </Heading>
        <Description>{description}</Description>
      </Container>
    </Outer>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string
}

const Outer = styled.View`
  padding: 8px;
`

const Container = styled.View`
  padding: 16px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 8px #888888;
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
`

const Title = styled.Text`
  color: blue;
`

const SubTitle = styled.Text`
  color: green;
`

const Description = styled.Text`
  color: red;
`

export default Card
