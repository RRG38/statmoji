import './AddFeelingsEntries.css'

import React from 'react'

import Nav from '../Nav/Nav'

const AddFeelingsEntries = () => {
  return (
    <div>

      <Nav />

      <div className='feelings-title-container'> How am I Feeling? </div>

      <div className='display-recent-feelings-container'>
        <div> Recent Entries... </div>
        <br></br>
        <div> Empty </div>
        <br></br>
        <button className='view-all-feelings-button'> VIEW ALL </button>
      </div>

      <div className='feelings-text'> Simply click on an emoji below to add. </div>

      <div className='available-feelings-emojis-container'>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon' > 😀	</div>
            <div className='emoji-text'> Happy </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 😢	</div>
            <div className='emoji-text'> Sad </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 😴	</div>
            <div className='emoji-text'> Tired </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 😐	</div>
            <div className='emoji-text'> Neutral </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 😠	</div>
            <div className='emoji-text'> Angry </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 🤪	</div>
            <div className='emoji-text'> Zany </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 🤢	</div>
            <div className='emoji-text'> Nauseated </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 😟	</div>
            <div className='emoji-text'> Worried </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 😋	</div>
            <div className='emoji-text'> Hungry </div>
          </div>
          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon' > 😀	</div>
            <div className='emoji-text'> Happy </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 😢	</div>
            <div className='emoji-text'> Sad </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 😴	</div>
            <div className='emoji-text'> Tired </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 😐	</div>
            <div className='emoji-text'> Neutral </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 😋	</div>
            <div className='emoji-text'> Hungry </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 🤪	</div>
            <div className='emoji-text'> Zany </div>
          </div>

          <div className='emoji-container' onClick={() => alert('Function to Add to Past Stats')}>
            <div className='emoji-icon'> 🤢	</div>
            <div className='emoji-text'> Nauseated </div>
          </div>
      </div>
    </div>
  )
}

export default AddFeelingsEntries