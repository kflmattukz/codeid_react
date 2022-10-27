import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-screen h-screen bg-gray-50'>
      <Outlet />
    </div>
  )
}

export default Home