import {observable,action} from 'mobx';
import GridModel from '../../Model/CellModel/cellModel';

class GridStore {
    @observable level = 0
    @observable topLevel = 0
    @observable currentLevelGridCells = []
    @observable selectedCellsCount = 0
    @observable isGameCompleted = false

    @action
    increaseLevel(){
        if(this.level < 4){
            this.level++;
        }
        else{
            this.level = 0;
        }
        this.renderGridCells();
    }
    
    @action
    resetLevel(){
        this.level = 3;
    }
    
    onCellClicked(){
        GridModel.isCellClicked();
    }
    
    setGridCells(){
        this.renderGridCells();
    }
    
    goToNextLevelAndUpdateCells(){
        if(this.level < 4){
            this.level++;
        }
        else{
            this.level = 0;
        }
        this.renderGridCells();
    }
    
    goToInitialLevelAndUpdateCells(){
        this.level = 0;
        this.renderGridCells();
    }
    
    resetSelectedCellsCount(){
         
    }
    
    incrementSelectedCellsCount(){
        
    }
    
    onPlayAgainClick(){
        
    }
    
    resetGame(){
        
    }
    
    setTopLevel(){
        
    }
    
    renderGridCells = () => {
        this.currentLevelGridCells = [];
        const gridLevel = this.level + 3;
        for(let i = 1; i <= gridLevel * gridLevel ; i++){
            const gridModel  = new GridModel({id:i,isHidden:false});
            this.currentLevelGridCells.push(gridModel);
        }
        let i = this.currentLevelGridCells.length - 1;
        let count = 1,previousIndex=[];
        for(;i>0;i--){
            const j = Math.floor(Math.random() * (i));
            if(count <= gridLevel && previousIndex.indexOf(j) === -1){
                this.currentLevelGridCells[j].isHidden = true;
                count++;
                previousIndex.push(j);
            }
        }
        setTimeout(() => {
            gridStore.increaseLevel();
        },(gridStore.level + 3) * 2000);
    }
    
}
const gridStore = new GridStore();
export default gridStore;