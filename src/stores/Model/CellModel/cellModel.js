import {observable} from 'mobx';

class CellModel {
    id
    @observable isHidden
    
    constructor(props){
        this.id = props.id;
        this.isHidden = props.isHidden;
    }
}

export default CellModel;