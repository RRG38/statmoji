import React from 'react';
import './Auth.css'

import logo from '../../assets/statmoji-logo.png'

const Auth = () => {
  return (
    <div className='auth-parent'>
      <header className='auth-header'>
        Statmoji.app
      </header>
      <div className='login-container'>
        <div className='login-inputs-container'>
          <input placeholder='Email'></input>
          <input placeholder='Password'></input>
        </div>
        <button> Login </button>
      </div>
      <section className='section-parent'>
        <img className='logo' src={logo} alt='Smiley face emoji' />
        <div> Statmoji is a web app where you can use emojis to help track your life stats. </div>
      </section>
      <div className='register-container'>

          Want a Free Account?
          <input placeholder='Email'></input>
          <input placeholder='Password'></input>

        <button> Create Account </button>
      </div>
    </div>
  )
}

export default Auth