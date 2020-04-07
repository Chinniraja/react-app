import React from 'react';
import HeaderSection from '../HeaderSection/headerSection.js';
import RenderEmojis from '../RenderEmojis/renderEmojis.js';
import FooterSection from '../FooterSection/footerSection.js';
import {DashboardContainer} from './styledComponent.js';

class GameDashboard extends React.Component{
    state = {
        emojis : [
            {id : 1, name: "Exploding Head",isClicked:false},
            {id : 2, name: "Grinning Face with Sweet",isClicked:false},
            {id : 3, name: "Smiling Face with Heart-Eyes",isClicked:false},
            {id : 4, name: "Smirking Face",isClicked:false},
            {id : 5, name: "Thinking Face",isClicked:false},
            {id : 6, name: "Winking Face",isClicked:false},
            {id : 7, name: "Grinning Face",isClicked:false},
            {id : 8, name: "Crying Face",isClicked:false},
            {id : 9, name: "Astonished Face",isClicked:false},
            {id : 10, name: "Face with Tears of Joy",isClicked:false},
            {id : 11, name: "Star-Struck",isClicked:false},
            {id : 12, name: "Winking Face with Tongue",isClicked:false}
        ],
        theme: '#fff',
        score:0,
        topScore:0,
        gameState: 'PLAYING'
    }
    
    static themeOption = {
        light:{
            id:1,
            theme: '#fff'
        },
        dark:{
            id:2,
            theme: '#2b3945'
        }
    }
    
    isEmojiClicked = (event) => {
        const {emojis,score} = this.state;
        let gameState, updatedScore,shuffledCards;
        emojis.forEach(eachEmoji => {
            if(eachEmoji.id === +event.currentTarget.id){
                if(eachEmoji.isClicked){
                    updatedScore = score;
                    gameState = 'LOSE!';
                    eachEmoji.isClicked = false;
                }
                else{
                    updatedScore = this.increamentScore();
                    gameState = updatedScore < emojis.length ? 'PLAYING' : 'WON';
                    eachEmoji.isClicked = true;
                }
            }
        });
        
        if(updatedScore > score){
            shuffledCards = this.shuffleCards(emojis);
        }
        else{
            shuffledCards = emojis;
        }
        this.setState({emojis:shuffledCards,gameState,score:updatedScore});
    }
    
    increamentScore = () => {
        const {score} = this.state;
        return score + 1;
    }
    
    shuffleCards = (shuffleEmojis) => {
        let i = shuffleEmojis.length-1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i));
            const temp = shuffleEmojis[i];
            shuffleEmojis[i] = shuffleEmojis[j];
            shuffleEmojis[j] = temp;
        }
        return shuffleEmojis;   
    }
    
    changeTheme = () => {
        const {theme} = this.state;
        this.setState({theme: theme === '#fff' ? '#4a5568' : '#fff'});
    }
    
    onPlayAgainClick = () => {
        this.setTopScore();
        this.resetGame();
    }
    
    setTopScore = () => {
        const {score,topScore} = this.state;
        const presentScore = score > topScore ? score : topScore;
        this.setState({topScore:presentScore});
    }
    
    resetGame = () => {
        const {emojis} = this.state;
        const updatedEmojis = emojis.map(eachEmoji => {
            eachEmoji.isClicked = false;
            return eachEmoji;
        });
        this.setState({score:0,emojis:updatedEmojis,gameState:'PLAYING'});
    }
    
    render() {
        const {score,topScore,theme,gameState,emojis} = this.state;
        const changeTheme = this.changeTheme;
        const isEmojiClicked = this.isEmojiClicked;
        const onPlayAgainClick = this.onPlayAgainClick;
        return (
            <DashboardContainer>
                <HeaderSection score={score} topScore={topScore} changeTheme={changeTheme} theme={theme} />
                <RenderEmojis theme={theme} gameState={gameState} emojis={emojis} isEmojiClicked={isEmojiClicked} onPlayAgainClick={onPlayAgainClick} score={score}/>
                <FooterSection theme={theme}/>
            </DashboardContainer>
        );
    }
}

export default GameDashboard;