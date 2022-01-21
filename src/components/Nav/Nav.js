import './Nav.css'

import React from 'react'
import { useHistory } from 'react-router-dom'


const Nav = () => {

const history = useHistory()

return(
    <div className='nav-parent'>
      <div className='nav-title-email-parent'>
        <div className='email'>ryangolf@email.com</div>
        <div className='title'>Statmoji.app</div>
      </div>
      <button onClick={() => history.push('/main-menu')} className="material-icons menu-icon">menu</button>
    </div>
  )

}

export default Nav