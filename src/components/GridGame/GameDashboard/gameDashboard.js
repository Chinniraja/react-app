import React from 'react';
import GameArea from '../GameArea/gameArea'; 
import {StyledDashboard} from './styledComponent';

class GridGameDashboard extends React.Component {
    render(){
        return (
            <StyledDashboard>
                <GameArea/>
            </StyledDashboard>
        );
    }
}

export default GridGameDashboard;