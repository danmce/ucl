import React from 'react'
import { colors, spacing } from 'utils/designSystem'
import styled from '@emotion/primitives'

const gutter = Math.ceil(spacing / 2)

const Navbar = () => (
  <Bar>
    <Primary>
      <Link>Home</Link>
    </Primary>
    <Secondary>
      <Link>About</Link>
      <Link>Contact</Link>
    </Secondary>
  </Bar>
)

const Bar = styled.View`
  align-items: center;
  background-color: ${colors.blueGrey[700]};
  flex-direction: row;
  justify-content: flex-end;
  min-height: 50px;
  padding-left: ${spacing + 'px'};
  padding-right: ${spacing + 'px'};
`

const Primary = styled.View`
  margin-left: -${gutter + 'px'};
`

const Secondary = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left: auto;
  margin-right: -${gutter + 'px'};
`

const Link = styled.Text`
  color: ${colors.white};
  margin-left: ${gutter + 'px'};
  margin-right: ${gutter + 'px'};
`

export default Navbar
