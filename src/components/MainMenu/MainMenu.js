import './MainMenu.css'

import React from 'react'
import { useHistory } from 'react-router-dom'


const MainMenu = () => {

  const history = useHistory()

  return (
    <div>
      <header className='main-menu-header'>
        <div className='main-menu-user-email'> dad@email.com </div>
          Statmoji.app
      </header>
      <div className='main-menu-title'>
        <div> Menu </div>
      </div>
      <div className='main-menu-content'>
        <button className='main-menu-button'> ADD FOOD/DRINK STATS </button>
        <button className='main-menu-button' > ADD ACTIVITIES STATS </button>
        <button onClick={() => history.push('/add-feelings-entries')} className='main-menu-button' to='/add-feelings-entries'> ADD HOW I'M FEELING STATS </button>
        <button className='main-menu-button'   > VIEW ALL MY PAST STATS </button>
        <button className='main-menu-button'   > ABOUT STATMOJI </button>
        <button className='main-menu-button' > CHANGE COLOR PREFERENCES </button>
        <button className='main-menu-button'   > GIVE US FEEDBACK </button>
        <button className='main-menu-button'   > BECOME A SUPPORTER </button>
        <button className='main-menu-button'   > LOGOUT </button>
      </div>
    </div>
  )
}

export default MainMenu