import React from 'react'
import { View } from 'react-primitives'
import {
  TitleText,
  SubTitleText,
  BodyText
} from 'components/Typography/index.js'
import { colors, spacing, shape } from 'utils/designSystem'

const Box = () => {
  return (
    <View
      name='Box'
      style={{
        width: 300,
        height: 300,
        padding: spacing,
        backgroundColor: colors.blueGrey[200]
      }}
    >
      <TitleText name='Title'>Title</TitleText>
      <SubTitleText name='Summary'>Summary</SubTitleText>
      <BodyText name='Body'>Body</BodyText>
    </View>
  )
}

export default Box
