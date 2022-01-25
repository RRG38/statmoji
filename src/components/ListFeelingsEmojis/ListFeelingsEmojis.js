import './ListFeelingsEmojis.css'

import React from 'react'

export default function ListFeelingsEmojis(props) {

  let feelingsEmojisList = props.feelingsEmojisList.map((item, i) => {
    return <li key={i} onClick={props.handleClick.bind(null, item, i)}>{item}</li>
  })

  return(
    <div className='feelings-list-container'>
      <h1> {props.title} </h1>
      <ul>
        <div className='emoji'>
        {feelingsEmojisList}
        </div>
      </ul>
    </div>
  )
}

