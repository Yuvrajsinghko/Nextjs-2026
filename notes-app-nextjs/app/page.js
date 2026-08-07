import { connectDB } from '@/lib/db';
import React from 'react'

const Home = async() => {
  await connectDB()
  return (
    <div>
      Hello world
    </div>
  )
}

export default Home