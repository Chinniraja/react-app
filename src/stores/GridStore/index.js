import {observable,action,computed} from 'mobx';
import CellModel from '../Model/CellModel/index';

class GridStore {
    maximumLevel = 6
    @observable level = 0
    @observable topLevel = 0
    @observable currentLevelGridCells = []
    @observable selectedCellsCount = 0
    @observable isGameCompleted = false
    @observable selectedTheme = 'Light'
    
    @action.bound
    goToNextLevelAndUpdateCells(){
        console.log("next level");
        if(this.level < this.maximumLevel && !this.isGameCompleted){
            this.level++;
            this.resetSelectedCellsCount();
        }
        else{
            this.isGameCompleted = true;
        }
        this.currentLevelGridCells = [];
        const timerId = setTimeout(() => {
            this.setGridCells();
            clearTimeout(timerId);
        },600);
    }
    
    @action.bound
    goToInitialLevelAndUpdateCells(){
        console.log("initial level");
        this.setTopLevel();
        this.resetLevel();
        this.resetSelectedCellsCount();
        this.isGameCompleted = false;
        this.currentLevelGridCells = [];
        const timerId = setTimeout(() => {
            this.setGridCells();
            clearTimeout(timerId);
        },600);
    }
    
    @action.bound
    checkLevelStatus(){
        if(this.selectedCellsCount < this.level + this.minimumGridCells){
            this.goToInitialLevelAndUpdateCells();
        }
        else if(this.selectedCellsCount === this.level + this.minimumGridCells){
            this.goToNextLevelAndUpdateCells();
        }
    }

    @action.bound
    resetSelectedCellsCount(){
         this.selectedCellsCount = 0;
    }
    
    @action.bound
    incrementSelectedCellsCount(){
        return ++this.selectedCellsCount;
    }
    
    @action.bound
    onPlayAgainClick(){
        this.resetGame();
    }
    
    @action.bound
    resetGame(){
        this.goToInitialLevelAndUpdateCells();
    }
    
    @action.bound
    setTopLevel(){
        this.topLevel = this.level > this.topLevel ? this.level : this.topLevel;
    }
    
    @action.bound
    resetLevel(){
        this.level = 0;
    }
    
    @action.bound
    changeTheme(){
        this.selectedTheme = this.selectedTheme === 'Light' ? 'Dark' : 'Light';
    }
    
    @action.bound
    setGridCells(){
        this.currentLevelGridCells = [];
        const gridLevel = this.minimumGridCells;
        for(let i = 1; i <= gridLevel * gridLevel ; i++){
            const cellModel  = new CellModel({id:i,isHidden:false});
            this.currentLevelGridCells.push(cellModel);
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
    }
    
    @computed get minimumGridCells(){
        return this.level + 3;
    }
    
    @computed get lengthOfGridCells(){
        return this.currentLevelGridCells.length;
    }
}
const gridStore = new GridStore();
export default gridStore;