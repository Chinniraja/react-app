import React from 'react';
import {observer} from 'mobx-react';
import Cell from '../Cell/cell';
import {StyledGridArea} from './styledComponent';
import gridStore from '../../../stores/Store/GridStore/gridStore';

@observer
class GameArea extends React.Component {
    
    componentDidMount = () => {
        gridStore.renderGridCells();
    }
    
    renderGridCells = () => {
        const grid = gridStore.currentLevelGridCells.map(eachCell => {
            return <Cell key={eachCell.id} value={eachCell.id} isHidden={eachCell.isHidden}/>;
        });
        return grid;
    }
    
    render(){
        return (
            <StyledGridArea className={`grid grid-flow-row grid-cols-${gridStore.level + 3}`}>
                {this.renderGridCells()} 
            </StyledGridArea>
        );
    }
}

export default GameArea;