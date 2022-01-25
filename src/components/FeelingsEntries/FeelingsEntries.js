import './FeelingsEntries.css'

import React, { Component } from 'react'

import Nav from '../Nav/Nav'
import ListFeelingsEmojis from '../ListFeelingsEmojis/ListFeelingsEmojis'

class FeelingsEntries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feelingsEntries: {
        user: [''],
        available: ['😀']
      }
    }
    this.moveToUser = this.moveToUser.bind(this)
    this.moveToAvailable = this.moveToAvailable.bind(this)
  }

  moveToAvailable(emoji,i) {
    let userEntry = this.state.feelingsEntries.user
    let availableEntry = this.state.feelingsEntries.available

    availableEntry.push(userEntry.splice(i, 1))

    this.setState({
      feelingsEntries: {
        user: userEntry,
        available: availableEntry
      }
    })
  }

  moveToUser(emoji,i) {
    let userEntry = this.state.feelingsEntries.user
    let availableEntry = this.state.feelingsEntries.available

    userEntry.push(availableEntry.splice(i, 1))

    this.setState({
      feelingsEntries: {
        user: userEntry,
        available: availableEntry
      }
    })
  }


  render() {
    return (
      <div>

        <Nav />

        {/* <ListFeelingsEmojis title='Recent Entries' feelingsEmojisList={this.state.feelingsEntries.user} handleClick={this.moveToAvailable}/>

        <ListFeelingsEmojis title='Available Emojis' feelingsEmojisList={this.state.feelingsEntries.available} handleClick={this.moveToUser}/> */}

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
        </div>
    </div>
    )
  }
}

export default FeelingsEntries