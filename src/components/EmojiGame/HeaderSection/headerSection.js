import React from 'react';
import {HeaderContainer,H1,ScoreCard,Score,TopScore,Theme,P} from './styledComponent.js';

class HeaderSection extends React.Component{
    
    render() {
        const {score,topScore,changeTheme,theme} = this.props;
        const selectedTheme = theme === '#fff' ? 'DARK THEME' : 'LIGHT THEME';
        return (
            <HeaderContainer theme={theme}>
                <H1>Emoji Game</H1>
                <ScoreCard>
                    <Score>Score: <P> {score}</P></Score>
                    <TopScore>Top Score: <P> {topScore}</P></TopScore>
                    <Theme onClick={changeTheme} theme={theme}>{selectedTheme}</Theme>
                </ScoreCard>
            </HeaderContainer>
        );
    }
}

export default HeaderSection;