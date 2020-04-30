import React from 'react';
import {observer,inject} from 'mobx-react';
import gridStore from '../../../stores/GridStore/index';
import GameArea from '../GameArea/index'; 
import HeaderSection from '../HeaderSection/index';
import {StyledDashboard,StyledButton} from './styledComponents';

@inject("authStore")
@observer
class GridGameDashboard extends React.Component {
    
    componentDidMount = () => {
        const {setGridCells} = gridStore;
        setGridCells();
    }
    
    signOut = () => {
        this.props.authStore.authStore.clearToken();
    }

    render(){
        const {level,topLevel,selectedTheme,onPlayAgainClick,currentLevelGridCells,incrementSelectedCellsCount,checkLevelStatus,isGameCompleted,changeTheme,minimumGridCells,selectedCellsCount,goToInitialLevelAndUpdateCells,goToNextLevelAndUpdateCells,onCellClicked} = gridStore;
        return (
            <StyledDashboard theme={selectedTheme}>
                <StyledButton onClick={this.signOut}>{`Signout`}</StyledButton>
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