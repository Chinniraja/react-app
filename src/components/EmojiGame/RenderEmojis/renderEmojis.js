import React from 'react';
import EmojiCard from '../EmojiCard/emojiCard.js';
import {EmojisContainer,H1,Message,TryAgain,ResultContainer} from './styledComponent.js';

class RenderEmojis extends React.Component{
    
    render() {
        const {isEmojiClicked,emojis,score,onPlayAgainClick,theme,gameState} = this.props;
        if(gameState === 'PLAYING'){
            return (
                <EmojisContainer theme={theme}>
                    <EmojiCard theme={theme} isEmojiClicked={isEmojiClicked} emojis={emojis}/>
                </EmojisContainer>
            );
        }
        else {
            return (
                <ResultContainer theme={theme}>
                    <H1>{score}</H1>
                    <Message gameState={gameState}>You {gameState === 'LOSE!' ? 'Lose!' : 'Won!'}</Message>
                    <TryAgain onClick={onPlayAgainClick}>Play Again</TryAgain>
                </ResultContainer>
            );     
        }
    }
}

export default RenderEmojis;