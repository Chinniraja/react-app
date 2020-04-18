import React from 'react';
import {observer} from 'mobx-react';
import Cell from '../Cell/index';
import {StyledGridArea,StyledGameResult,StyledResult,StyledPlayAgainButton,StyledLevel} from './styledComponents';

@observer
class GameArea extends React.Component {
    
    playAgain = () => {
        const {onPlayAgainClick} = this.props;
        onPlayAgainClick();
    }
    
    renderGameGridArea = () => {
        const {level,selectedTheme,currentLevelGridCells,minimumGridCells,checkLevelStatus,onCellClicked,incrementSelectedCellsCount,selectedCellsCount,goToInitialLevelAndUpdateCells,goToNextLevelAndUpdateCells} = this.props;
        return (
            <StyledGridArea level={level}>
                {
                    currentLevelGridCells.map(eachCell => {
                        return (
                            <Cell 
                                level={level}
                                key={eachCell.id}
                                eachCell={eachCell}
                                selectedTheme={selectedTheme}
                                onCellClicked={onCellClicked}
                                checkLevelStatus={checkLevelStatus}
                                minimumGridCells={minimumGridCells}
                                currentLevelGridCells={currentLevelGridCells}
                                goToNextLevelAndUpdateCells={goToNextLevelAndUpdateCells}
                                incrementSelectedCellsCount={incrementSelectedCellsCount}
                                goToInitialLevelAndUpdateCells={goToInitialLevelAndUpdateCells}
                            />
                        );
                    })
                }
            </StyledGridArea>
        );
    }
    
    renderGameCompletedArea = () => {
        const {level,selectedTheme} = this.props;
        return (
            <StyledGameResult>
                <StyledLevel theme={selectedTheme}>{level}</StyledLevel>
                <StyledResult>Congratulations! You completed all the levels.</StyledResult>
                <StyledPlayAgainButton onClick={this.playAgain}>Play Again</StyledPlayAgainButton>
            </StyledGameResult>
        );
    }
    
    
    render(){
        const {isGameCompleted} = this.props;
        if(isGameCompleted === false){
            return this.renderGameGridArea();
        }
        else{
            return this.renderGameCompletedArea();
        }
    }
}

export default GameArea;