import React from 'react'
import logo from '../utils/media/logo.svg'

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b w-full z-10 from-black'>
        <img src={logo} className='w-44 p-4 m-2' alt="netflix_logo" />
    </div>
  )
}

export default Header