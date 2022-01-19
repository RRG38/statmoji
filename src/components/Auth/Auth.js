import './Auth.css'
import logo from '../../assets/statmoji-logo.png'

import React, { useState } from 'react';
import { connect } from 'react-redux'


import { loginUser } from '../../redux/authReducer'

const Auth = (props) => {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const login = () => {
    const loginInfo = { loginEmail, loginPassword}
    props.loginUser(loginInfo)
  }

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
        <button onClick={login}> Login </button>
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

const mapStateToProps = (reduxState) => {
  return {
    state: reduxState.state
  }
}

const mapDispatchToProps = { loginUser }

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
