import {observable,computed,action,reaction} from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {API_INITIAL,API_FETCHING,API_SUCCESS,API_FAILED} from '@ib/api-constants';
import TodoModel from '../Model/TodoModel/index';


class TodoStore{
    @observable getTodosApiStatus
    @observable getTodosApiError
    @observable todos
    @observable selectedFilter
    todoService
    
    constructor(todoService){
        this.todoService = todoService;
        this.init();
    }
    
    @action.bound
    init(){
        this.getTodosApiStatus = API_INITIAL;
        this.getTodosApiError = null;
        this.todos = [];
        this.selectedFilter = 'All';
    }
    
    @action.bound
    getTodos(){
        const todoPromise = this.todoService.getTodos();
        return bindPromiseWithOnSuccess(todoPromise)
        .to(this.setTodosAPIStatus,this.setTodosAPIResponse)
        .catch(this.getTodosApiError);
    }
    
    postTodos(todo){
        const todoPromise = this.todoService.postTodos(todo);
        return bindPromiseWithOnSuccess(todoPromise)
        .to(this.setTodosAPIStatus,this.setTodosAPIResponse)
        .catch(this.getTodosApiError);
    }
    
    @action.bound
    setTodosAPIResponse(todosResponse){
        // console.log(todosResponse);
        todosResponse.forEach((todo) => { 
            if(todo.userId === 1){
                const isCompleted = todo.completed;
                delete todo.completed;
                todo.isCompleted = isCompleted;
                const todoModel = new TodoModel(todo);
                this.todos.push(todoModel);
            }
        });
    }
    
    @action.bound
    setTodosAPIStatus(apiStatus){
        this.getTodosApiStatus = apiStatus;
    }
    
    @action.bound
    setTodosAPIError(apiError){
        this.getTodosApiError = apiError;
    }
    
    
    @action.bound
    onAddTodo(event){
        const {todos} = this;
        if(event.keyCode === 13){
            this.selectedFilter = todos.length ? this.selectedFilter : 'All';
            const id = this.todosCount + 1;
            const updatedId = isNaN(id) ? 0 : id;
            const todoObject = {id:updatedId,title:event.target.value,isCompleted:false};
            const todoModel = new TodoModel(todoObject);
            todos.push(todoModel);
            event.target.value = '';
        }
    }
    
    @action.bound
    onRemoveTodo(event){
        const updatedTodos = this.todos.filter(eachTodo => {return eachTodo.id !== +event.currentTarget.id});
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
    
    // addTodoReaction = reaction(()=>{return (this.todos.map((todo) => todo.title))},(todoTitle)=>{
    //     console.log("todos title",todoTitle);
    // })
    
    @computed get todosCount(){
        return this.todos.length;
    }
    
    @action.bound
    clearStore(){
        this.init();
    }
    
}
export default TodoStore;