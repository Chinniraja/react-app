import {observable,computed,action,reaction} from 'mobx';
import {observer} from 'mobx-react';
import TodoModel from '../Model/TodoModel/index';

// @observer
class TodoStore{
    @observable todos = []
    @observable selectedFilter = 'All';
    
    @action.bound
    onAddTodo(event){
        const {todos} = this;
        if(event.keyCode === 13){
            todoStore.selectedFilter = todos.length ? todoStore.selectedFilter : 'All';
            const id = todoStore.todosCount + 1;
            const updatedId = isNaN(id) ? 0 : id;
            const todoModel = new TodoModel({id:updatedId,title:event.target.value,isCompleted:false});
            todos.push(todoModel);
            event.target.value = '';
        }
    }
    
    @action.bound
    setInitialTodosData(data){
        data.forEach(eachTodo => {
            const todoModel = new TodoModel(eachTodo);
            this.todos.push(todoModel);
        });
    }
    
    @action.bound
    onRemoveTodo(event){
        const {todos} = this;
        const updatedTodos = todos.filter(eachTodo => {return eachTodo.id !== +event.currentTarget.id});
        this.todos = updatedTodos;
    }
    
    @action.bound
    onChangeSelectedFilter(event){
        this.selectedFilter = event.target.id;
    }
    
    @action.bound
    onClearCompleted(){
        const {todos} = this;
        const updatedTodos = todos.filter(eachTodo => { return eachTodo.isCompleted === false });
        this.todos = updatedTodos;
    }
    
    @action.bound
    getActiveTodosCount(){
        const {todos} = this;
        const updatedTodos = todos.filter(eachTodo => { return eachTodo.isCompleted === false });
        return updatedTodos.length;
    }
    
    @action.bound
    getFilteredTodos(){
        let updatedTodos;
        const {todos,selectedFilter} = this;
        if(selectedFilter === 'All'){
            updatedTodos = todos.filter(eachTodo => {
                return eachTodo;
            });
        }
        else if(selectedFilter === 'Active'){
            updatedTodos = todos.filter(eachTodo => {
                return (eachTodo.isCompleted === false);
            });
        }
        else if(selectedFilter === 'Completed'){
            updatedTodos = todos.filter(eachTodo => {
                return eachTodo.isCompleted === true;
            });
        }
        return updatedTodos;
    }
    
    addTodoReaction = reaction(()=>{return (this.todos.map((todo) => todo.title))},(todoTitle)=>{
        console.log("todos title",todoTitle);
    })
    
    @computed get todosCount(){
        return this.todos.length;
    }
    
}
const todoStore = new TodoStore();
export default todoStore;