import React from 'react'
import styled from '@emotion/primitives'
import { spacing } from 'utils/designSystem'

const Grid = ({ children, cols }) => {
  return (
    <Wrapper>
      <Container>
        {React.Children.map(children, (child, index) => {
          return (
            <GridItem cols={cols} key={index}>
              <GridChild>{child}</GridChild>
            </GridItem>
          )
        })}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  padding-left: ${spacing + 'px'};
  padding-right: ${spacing + 'px'};
`

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -${spacing + 'px'};
  margin-right: -${spacing + 'px'};
`

const GridItem = styled.View`
  ${props => {
    switch (props.cols) {
      case 2:
        return `flex-basis: 50%;`
      case 3:
        return `flex-basis: 33.333%;`
      default:
        return 'flex-basis: 100%;'
    }
  }}
`

const GridChild = styled.View`
  padding: ${spacing + 'px'};
`

export default Grid
