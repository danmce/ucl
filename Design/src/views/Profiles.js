import React from 'react'
import { CardWrapper, ProfileCard } from 'universal-component-library'

const Profiles = ({ users }) => {
  return (
    <CardWrapper>
      {users &&
        users.map((user, index) => {
          return <ProfileCard key={index} user={user} />
        })}
    </CardWrapper>
  )
}

const DATA = [
  {
    name: 'Daniel'
  },
  {
    name: 'Emma'
  }
]

export default Profiles
