import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/primitives'
import { colors, spacing, shape } from 'utils/designSystem'

import AvatarUS from 'components/Avatar/Avatar'
import { SubTitleText, BodyText } from 'components/Typography/index'

const gutter = spacing / 2

const Card = ({ title, subtitle, description, style }) => {
  return (
    <Container style={style}>
      <Heading>
        <Avatar />
        <HeadingContent>
          <SubTitleText>{title}</SubTitleText>
          <BodyText bold>{subtitle}</BodyText>
        </HeadingContent>
      </Heading>
      <Content>
        <BodyText>{description}</BodyText>
      </Content>
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string
}

const Container = styled.View`
  padding: ${spacing + 'px'};
  background-color: ${colors.white};
  border-radius: ${shape.borderRadius + 'px'};
  box-shadow: 0 0 ${gutter + 'px'} ${colors.blueGrey[700]};
`

const Heading = styled.View`
  flex-direction: row;
  align-items: center;
`

const Avatar = styled(AvatarUS)`
  margin-right: ${gutter + 'px'};
`

const HeadingContent = styled.View`
  display: flex;
  flex-direction: column;
`

const Content = styled.View`
  margin-top: ${spacing + 'px'};
  margin-bottom: ${spacing + 'px'};
`

export default Card
