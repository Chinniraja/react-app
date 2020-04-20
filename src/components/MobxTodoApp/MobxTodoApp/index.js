/*global fetch */
import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {reaction,observable} from 'mobx';
import todoStore from '../../../stores/TodoStore/index';
import TodoList from '../TodoList/index';
import TodoFooter from '../TodoFooter/index';
import AddTodo from '../AddTodo/index';
import {StyledTodoAppContainer,StyledTodoApp,Header,StyledNetworkError,StyledErrorMessage,StyledTryAgainButton} from './styledComponents';

@observer
class MobxTodoApp extends Component {
    @observable responseCode = 400
    dataFetching = true
    async componentDidMount(){
        this.getDataFromServer();
    }
    
    async getDataFromServer(){
        this.dataFetching = true;
        const todosData = await fetch("https://jsonplaceholder.typicode.com/todos");
        this.responseCode = todosData.status;
        const data =  await todosData.json();
        const id = setTimeout(() => {
            const {setInitialTodosData} = todoStore;
            setInitialTodosData(data);
            this.dataFetching = false;
            clearTimeout(id);
        },2000);
    }
    
    onAddTodo = (event) => {
        const {onAddTodo} = todoStore;
        onAddTodo(event);
    }
    
    onRemoveTodo = (event) => {
        const {onRemoveTodo} = todoStore;
        onRemoveTodo(event);
    }
    
    onChangeSelectedFilter = (event) => {
        const {onChangeSelectedFilter} = todoStore;
        onChangeSelectedFilter(event);
    }
    
    onClearCompleted = () => {
        const {onClearCompleted} = todoStore;
        onClearCompleted();
    }
    
    getActiveTodosCount = () => {
        const {getActiveTodosCount} = todoStore;
        return getActiveTodosCount();
    }
    
    getFilteredTodos = () => {
        const {getFilteredTodos} = todoStore;
        return getFilteredTodos();
    }
    
    // addTodoReaction = reaction(()=>{todoStore},(length)=>{
    //     console.log("todos count",length);
    // })
    
    tryAganin = () => {
        this.getDataFromServer();
    }
    
    
    render() {
        const todos = this.getFilteredTodos();
        const length = todoStore.todosCount;
        if(!window.navigator.onLine){
            return (
                <StyledNetworkError>
                    <StyledErrorMessage>
                        {`Network Error`}
                    </StyledErrorMessage>
                    <StyledTryAgainButton onClick={this.tryAganin}>{`Try Again`}</StyledTryAgainButton>
                </StyledNetworkError>
            );
        }
        else{
            return (
                <StyledTodoApp>
                    <Header>todos</Header>
                    <StyledTodoAppContainer>
                        <AddTodo onAddTodo={this.onAddTodo} todos={todos}></AddTodo>
                        <TodoList dataFetching={this.dataFetching} todos={todos} onCompleteTodo={this.onCompleteTodo} onRemoveTodo={this.onRemoveTodo} onUpdateTodoTitle={this.onUpdateTodoTitle}></TodoList>
                        {length > 0 && <TodoFooter todos={todos}  selectedFilter={todoStore.selectedFilter} onChangeSelectedFilter={this.onChangeSelectedFilter} onClearCompleted={this.onClearCompleted}/>}
                    </StyledTodoAppContainer>
                </StyledTodoApp>
            );
        }
    }
}

export default MobxTodoApp;