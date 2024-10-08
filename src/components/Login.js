import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkFormInputs} from '../utils/validate'
import bgImage from '../utils/media/netlix_signin_BgImage.jpg'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignin = () => {
    setIsSignIn(!isSignIn);
  }

  const formHandler = ()=>{
    const message = checkFormInputs(email.current.value, password.current.value);
    console.log(message);
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={bgImage} alt="netflix_bgImage" />
        </div>
        <form onSubmit={e=>e.preventDefault()} className='bg-black opacity-85 text-white p-12 my-36 mx-auto right-0 left-0 absolute w-3/12'>
            <h2 className='text-2xl font-semibold'>{isSignIn? "SignIn" : "SignUp"}</h2>
            {!isSignIn && (
              <input className='my-4 p-4 bg-slate-700 w-full' placeholder='Full Name'  type="text" />
            )}
            <input ref={email} className='my-4 p-4 bg-slate-700 w-full' placeholder='Email Address'  type="email" />
            <input ref={password} className='my-4 p-4 bg-slate-700 w-full' placeholder='Password'  type="password" />
            <button className='my-6 p-4 bg-red-700 w-full' onClick={formHandler}>{isSignIn? "SignIn" : "SignUp"}</button>
            <p className='cursor-pointer' onClick={toggleSignin}>{isSignIn? "New to Netflix? SignUp here!" : "Already a user? SignIn here!"}</p> 
        </form>
    </div>
  )
}

export default Login