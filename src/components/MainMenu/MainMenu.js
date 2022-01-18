import React from 'react'
import Nav from '../Nav/Nav'
import './MainMenu.css'

const MainMenu = () => {
  return (
    <div>
      <Nav />
      <div className='main-menu-title'>
        <div> Menu </div>
      </div>
      <div className='main-menu-content'>
        <button className='main-menu-button'> ADD FOOD/DRINK STATS </button>
        <button className='main-menu-button' > ADD ACTIVITIES STATS </button>
        <button className='main-menu-button'> ADD HOW I'M FEELING STATS </button>
        <button className='main-menu-button'   > VIEW ALL MY PAST STATS </button>
        <button className='main-menu-button'   > ABOUT STATMOJI </button>
        <button className='main-menu-button' > CHANGE COLOR PREFERENCES </button>
        <button className='main-menu-button'   > GIVE US FEEDBACK </button>
        <button className='main-menu-button'   > BECOME A SUPPORTER </button>
      </div>
    </div>
  )
}

export default MainMenu