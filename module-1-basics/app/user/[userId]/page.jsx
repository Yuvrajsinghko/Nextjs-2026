import React from 'react'

const UserIdPage = async({params}) => {
    const {userId} = await params;
  return (
    <div>page no {userId}</div>
  )
}

export default UserIdPage;