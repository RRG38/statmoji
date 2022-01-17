import React from 'react'
import './Nav.css'

const Nav = () => {
  return(
    <div className='header-parent'>
      <span className='email'>ryangolf@email.com</span>
      <div className='menu-button'>
        <span className="material-icons menu-icon">menu</span>
        <div>MENU</div>
      </div>
      <div className='title'>Statmoji.app</div>
    </div>
  )
}

export default Nav