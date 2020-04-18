import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {StyledCell,StyledColor} from './styledComponents';

@observer
class Cell extends React.Component{
    @observable disable = true
    @observable transition = this.props.eachCell.isHidden
    @observable wrongCell = false

    timerId = null
    componentDidMount(){
        const {eachCell,level,minimumGridCells,selectedCellsCount,goToInitialLevelAndUpdateCells,goToNextLevelAndUpdateCells} = this.props;
        
        const id = setTimeout(() => {
            this.disable = false;
            if(this.transition){
                this.transition = !eachCell.isHidden;
            }
            
            this.timerId = setTimeout(() => {
                if(selectedCellsCount < level + minimumGridCells){
                    goToInitialLevelAndUpdateCells();
                }
                else if(selectedCellsCount === level + minimumGridCells){
                    goToNextLevelAndUpdateCells();
                }
            },(level + minimumGridCells) * 2000);
            
            clearTimeout(id);
        },(level + minimumGridCells) * 1000);
    }
    
    componentWillUnmount(){
        clearTimeout(this.timerId);
    }
    
    setTimeoutAndCallMethod = (level) => {
        const {goToInitialLevelAndUpdateCells,goToNextLevelAndUpdateCells} = this.props;
        const timer = level === "next" ? 250 : 500;
        const timerId = setTimeout(() => {
            if(level === 'next'){
                goToNextLevelAndUpdateCells();
            }
            else{
                goToInitialLevelAndUpdateCells();
            }
            clearTimeout(timerId);
        },timer);
    }
    
    isCellClicked = () => {
        const {eachCell,incrementSelectedCellsCount,minimumGridCells} = this.props;
        this.disable = true;
        this.transition = true;
        this.wrongCell = eachCell.isHidden ? false : true;
        
        if(eachCell.isHidden){
            const selectedCellsCount = incrementSelectedCellsCount();
            console.log(selectedCellsCount,eachCell.isHidden);
            if(selectedCellsCount === minimumGridCells){
                this.setTimeoutAndCallMethod('next');
            }
        }
        else{
            this.setTimeoutAndCallMethod('initial');
        }
    }
    
    render(){
        const {selectedTheme,eachCell} = this.props;
        console.log("cell render",eachCell.id);
        return (
            <StyledCell onClick={this.isCellClicked} disable={this.disable} theme={selectedTheme}>
                <StyledColor wrong={this.wrongCell} transition={this.transition} theme={selectedTheme}>
                </StyledColor>
            </StyledCell>
        );
    }
}

export default Cell;