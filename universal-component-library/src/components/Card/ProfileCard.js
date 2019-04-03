import React from 'react'
import Card from 'components/Card/Card'

const ProfileCard = ({ user }) => {
  return user && <Card title={user.name} />
}

export default ProfileCard
