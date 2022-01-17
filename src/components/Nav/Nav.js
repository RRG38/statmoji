import React from 'react'
import './Nav.css'

const Nav = () => {
  return(
    <div className='nav-parent'>
      <div className='nav-title-email-parent'>
        <div className='email'>ryangolf@email.com</div>
        <div className='title'>Statmoji.app</div>
      </div>
      <button className="material-icons menu-icon">menu</button>
    </div>
  )
}

export default Nav