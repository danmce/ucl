import React from 'react'
import { Navbar, Section, Card } from 'universal-component-library'

const App = () => {
  return (
    <div>
      <Navbar />
      <Section>
        <Card title='Hello' subtitle='There' description='you' />
      </Section>
    </div>
  )
}

export default App
