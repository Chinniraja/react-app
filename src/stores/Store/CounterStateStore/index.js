import {observable,action} from 'mobx';

class CounterStateStore{
    @observable counter
    
    constructor(){
        this.counter = 0;
    }
    
    @action.bound
    onChange(value){
        this.counter = value;
    }
    @action.bound
    isValidInput(){
        const pattern = /^[-]?[0-9]+$/;
        if(!pattern.test(this.counter)){
            this.counter = 0;
        }
    }
    
    @action.bound
    onIncreament(){
        this.isValidInput();
        this.counter++;
    }
    
    @action.bound
    onDecreament(){
        this.isValidInput();
        this.counter--;
    }
}

const counterStateStore = new CounterStateStore();

export default counterStateStore;