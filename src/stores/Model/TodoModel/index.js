import {observable} from 'mobx';

class TodoModel {
    id
    @observable title
    @observable isCompleted
    
    constructor(props) {
        this.id = props.id;
        this.title = props.title;
        this.isCompleted = props.isCompleted;
    }
    
    onCompleteTodo = (event) => {
        this.isCompleted = !this.isCompleted;
    }
    
    onUpdateTodoTitle = (event) => {
        this.title = event.target.value;
    }
}

export default TodoModel;