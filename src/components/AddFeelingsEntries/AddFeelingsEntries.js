import React from 'react'
import Nav from '../Nav/Nav'
import './AddFeelingsEntries.css'

const AddFeelingsEntries = () => {
  return (
    <div>
      <Nav />
      <div className='title-container'> How am I Feeling? </div>
      <div className='display-recent-entries-container'>
        <div> Most Recent </div>
        <div> NEED TO TURN INTO COMPONENT</div>
        <div> DISPLAYING ON EACH LINE ONE</div>
        <div> OF THE THREE MOST RECENT ENTRIES</div>
        <button className='view-all-feelings-button'> VIEW ALL </button>
      </div>
      <div className='feelings-text'> Simply click on an emoji below to add. </div>
      <div className='available-feelings-emojis-container'>
        <div className='emoji-three-set'>
          <div className='emoji-container' onClick={() => alert('This is working how I want')}>
            <div className='emoji-icon' > 😀	</div>
            <div className='emoji-text'> Happy </div>
          </div>
          <div className='emoji-container'>
            <div className='emoji-icon'> 😢	</div>
            <div className='emoji-text'> Sad </div>
          </div>
          <div className='emoji-container'>
            <div className='emoji-icon'> 😴	</div>
            <div className='emoji-text'> Tired </div>
          </div>
        </div>
        <div className='emoji-three-set'>
          <div className='emoji-container'>
            <div className='emoji-icon'> 😐	</div>
            <div className='emoji-text'> Neutral </div>
          </div>
          <div className='emoji-container'>
            <div className='emoji-icon'> 😠	</div>
            <div className='emoji-text'> Angry </div>
          </div>
          <div className='emoji-container'>
            <div className='emoji-icon'> 🤪	</div>
            <div className='emoji-text'> Zany </div>
          </div>
        </div>
        <div className='emoji-three-set'>
          <div className='emoji-container'>
            <div className='emoji-icon'> 🤢	</div>
            <div className='emoji-text'> Nauseated </div>
          </div>
          <div className='emoji-container'>
            <div className='emoji-icon'> 😟	</div>
            <div className='emoji-text'> Worried </div>
          </div>
          <div className='emoji-container'>
            <div className='emoji-icon'> 🤔	</div>
            <div className='emoji-text'> Thinking </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AddFeelingsEntries