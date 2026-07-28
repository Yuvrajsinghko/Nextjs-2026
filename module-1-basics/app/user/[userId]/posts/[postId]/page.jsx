import React from 'react'

const page =async ({params}) => {

    const {postId}=await params
  return (
    <div>Post No:{postId}</div>
  )
}

export default page