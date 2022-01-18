import React from 'react'
import Nav from '../Nav/Nav'
import './MainMenu.css'

const MainMenu = () => {
  return (
    <div>
      <Nav />
      <div className='menu-title'> Menu </div>
      <div className='top-menu-content'>
        <button className='main-menu-button'> ADD FOOD/DRINK STATS </button>
        <br></br>
        <button className='main-menu-button' > ADD ACTIVITIES STATS </button>
        <br></br>
        <button className='main-menu-button'> ADD HOW I'M FEELING STATS </button>
        <br></br>
        <button className='main-menu-button'   > VIEW ALL MY PAST STATS </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className='main-menu-button'   > ABOUT STATMOJI </button><br></br>
        <button className='main-menu-button'   > CONTACT US </button>
        <br></br>
        <button className='main-menu-button'   > BECOME A SUPPORTER </button>
        <br></br>
      </div>
    </div>
  )
}

export default MainMenu