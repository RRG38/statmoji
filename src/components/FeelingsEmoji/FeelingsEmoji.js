//Componenet to build emojis from database

// let hex = "😀".codePointAt(0).toString(16)
// hex = '1f600' each function can go back and forth
// let emo = String.fromCodePoint("0x"+hex)
// console.log(emo)

import axios from 'axios'
import React, { Component } from 'react'

class FeelingsEmoji extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emojiIconHex = '',
      emojiDescription = ''
    }
  }

  componentDidMount() {
    axios.get('/api/feelings-emojis')
    .then(res => this.setState({emojiIconHex = res.emoji.feelings_hex_code, emojiDescription: res.emoji.feelings_description}))
    .catch(err => console.log(err))
  }

  render() {
    let icon = String.fromCodePoint("0x"+this.state.emojiIconHex)
    return(
      <div className='feelings-emoji-container'>
        <div className='feelings-emoji-icon'>
          {icon}
        </div>
        <div className='feelings-emoji-description'>
          {this.state.emojiDescription}
        </div>
      </div>
    )
  }
}

export default FeelingsEmoji