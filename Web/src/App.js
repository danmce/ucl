import React from 'react'
import { Button, Card, Navbar, Section } from 'universal-component-library'

const App = () => {
  return (
    <div>
      <Navbar />
      <Section>
        <Card title='Hello' subtitle='There' description='you' />
        <Button>Button Primary</Button>
        <Button>Button Primary Disabled</Button>
        <Button variant='neutral'>Button Neutral</Button>
        <Button variant='neutral' disabled>
          Button Neutral Disabled
        </Button>
      </Section>
    </div>
  )
}

export default App
