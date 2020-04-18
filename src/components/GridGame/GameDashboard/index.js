import React from 'react';
import {observer} from 'mobx-react';
import gridStore from '../../../stores/GridStore/index';
import GameArea from '../GameArea/index'; 
import HeaderSection from '../HeaderSection/index';
import {StyledDashboard} from './styledComponents';

@observer
class GridGameDashboard extends React.Component {
    
    componentDidMount = () => {
        const {setGridCells} = gridStore;
        setGridCells();
    }

    render(){
        const {level,topLevel,selectedTheme,onPlayAgainClick,currentLevelGridCells,incrementSelectedCellsCount,checkLevelStatus,isGameCompleted,changeTheme,minimumGridCells,selectedCellsCount,goToInitialLevelAndUpdateCells,goToNextLevelAndUpdateCells,onCellClicked} = gridStore;
        return (
            <StyledDashboard theme={selectedTheme}>
                <HeaderSection 
                    level={level}
                    topLevel={topLevel}
                    selectedTheme={selectedTheme}
                    changeTheme={changeTheme}
                />
                
                <GameArea 
                    level={level}
                    selectedTheme={selectedTheme}
                    onCellClicked={onCellClicked}
                    isGameCompleted={isGameCompleted}
                    onPlayAgainClick={onPlayAgainClick}
                    minimumGridCells={minimumGridCells}
                    checkLevelStatus={checkLevelStatus}
                    selectedCellsCount={selectedCellsCount}
                    currentLevelGridCells={currentLevelGridCells}
                    incrementSelectedCellsCount={incrementSelectedCellsCount}
                    goToNextLevelAndUpdateCells={goToNextLevelAndUpdateCells}
                    goToInitialLevelAndUpdateCells={goToInitialLevelAndUpdateCells}
                />
            </StyledDashboard>
        );
    }
}

export default GridGameDashboard;