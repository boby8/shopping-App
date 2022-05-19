import React from 'react';
import './LoginButtons.css'
import img2 from './images/apple.png'

const LoginButtons = () => {
  return (
    <>
    <div className='maindata'>
  
     <h1 className='createAnAccount'>Create An Account</h1> 
    <div className='apple'>
        <button>Login with Apple </button>
    </div>

    <br />
    <div className='google'>
        <button>Login with Google</button>
    </div>
    </div>
  
    </>
  )
}

export default LoginButtons;
