import React from 'react';
import {StyledEmojiCard,StyledButton,StyledName,StyledImage} from './styledComponent';

class EmojiCard extends React.Component{
    
    renderEmojiCards = () => {
        const {theme,emojis,isEmojiClicked} = this.props;
        const cards = emojis.map(eachEmoji => {
            const url = `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${eachEmoji.id}.png`;
            return (
                <StyledButton onClick={isEmojiClicked} theme={theme} key={eachEmoji.id} id={eachEmoji.id}>
                    <StyledImage src={url} alt="emoji" theme={theme}/>
                    <StyledName theme={theme}>{eachEmoji.name}</StyledName>
                </StyledButton>
            );
        });
        return cards;
    }
    
    render() {
        const {theme} = this.props;
        return (
            <StyledEmojiCard theme={theme}>
                {this.renderEmojiCards()}
            </StyledEmojiCard>
        );
    }
}

export default EmojiCard;