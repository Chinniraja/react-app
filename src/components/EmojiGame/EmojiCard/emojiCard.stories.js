import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color, text, boolean, number } from '@storybook/addon-knobs/react'

import '../../../styles/tailwind.css'
import EmojiCard from './emojiCard'
import GameDashboard from '../GameDashboard/gameDashboard'

const emojis = [
    {id : 1, name: "Exploding Head",isClicked:false},
];
const isEmojiClicked=false;

export default {
   component: EmojiCard,
   title:"EmojiCard",
  decorators: [withKnobs]
}
export const knobs = () => 
<EmojiCard
   style={{fontSize:"25px"}}
   theme={color("color","red")}
   isEmojiClicked={isEmojiClicked}
   emojis={emojis}
   />
   
export const emoji = () => <GameDashboard.EmojiCard/>