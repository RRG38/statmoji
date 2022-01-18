import React, { useState } from 'react';
import './Auth.css'

import logo from '../../assets/statmoji-logo.png'

const Auth = (props) => {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')



  return (
    <div className='auth-parent'>
      <header className='auth-header'>
        Statmoji.app
      </header>
      <div className='login-container'>
        <div className='login-inputs-container'>
          <input placeholder='Email' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
          <input placeholder='Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
        </div>
        <button> Login </button>
      </div>
      <section className='section-parent'>
        <img className='logo' src={logo} alt='Smiley face emoji' />
        <div> Statmoji is a web app where you can use emojis to help track your life stats. </div>
      </section>
      <div className='register-container'>
        Want a Free Account?
        <input placeholder='Email' value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
        <input placeholder='Password' value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
        <button> Create Account </button>
      </div>
    </div>
  )
}

export default Auth