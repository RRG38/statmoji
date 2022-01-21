import './FeelingsEmoji.css'

import React from 'react'

let hex = "😀".codePointAt(0).toString(16)
// hex = '1f600' each function can go back and forth
let emo = String.fromCodePoint("0x"+hex)
console.log(emo)


const FeelingsEmoji = () => {




}

export default FeelingsEmoji