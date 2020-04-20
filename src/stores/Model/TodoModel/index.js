import {observable} from 'mobx';

class TodoModel {
    @observable id;
    @observable title
    @observable isCompleted;
    
    constructor(props) {
        this.id = props.id;
        this.title = props.title;
        this.isCompleted = props.isCompleted;
    }
    
    onCompleteTodo = () => {
        if(this.isCompleted === false){
            this.isCompleted = true;
        }
        else{
            this.isCompleted = false;
        }
    }
    
    onUpdateTodoTitle = (event) => {
        this.title = event.target.value;
    }
}

export default TodoModel;