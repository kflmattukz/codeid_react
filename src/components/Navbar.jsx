import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../public/vite.svg'

const Navbar = () => {
  return (
    <nav 
      className='w-screen bg-purple-700 px-5 text-gray-50 uppercase font-semibold flex gap-2 items-center'
      >
    <img className='ml-5' src={logo} alt="logo" />
      <ul className='flex gap-5 py-3 ml-10 text-gray-50'>
      <NavLink to='/'>Home</NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-gray-400' : ''} to='/region'>Region</NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-gray-400' : ''} to='/country'>Country</NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-gray-400' : ''} to='/location'>Location</NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-gray-400' : ''} to='/department'>Department</NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-gray-400' : ''} to='/employee'>Employee</NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-gray-400' : ''} to='/job'>Job</NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-gray-400' : ''} to='/jobhistory'>Job History</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar