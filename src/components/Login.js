import React from 'react'
import Header from './Header'
import bgImage from '../utils/media/netlix_signin_BgImage.jpg'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={bgImage} alt="netflix_bgImage" />
        </div>
        <form className='bg-black opacity-85 text-white p-8 my-56 mx-auto right-0 left-0 absolute w-3/12'>
            <input className='my-2 p-2 bg-slate-700 w-full' placeholder='Email Address'  type="email" />
            <input className='my-2 p-2 bg-slate-700 w-full' placeholder='Password'  type="password" />
            <button className='my-4 py-2 px-2 bg-red-700 w-full'>SignIn</button>
        </form>
    </div>
  )
}

export default Login