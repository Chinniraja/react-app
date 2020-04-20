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
    @observable responseCode
    async componentDidMount(){
        const todosData = await fetch("https://todo-list-1.getsandbox.com/todos");
        this.responseCode = todosData.status;
        console.log(todosData.status);
        const data = await todosData.json();
        const id = setTimeout(() => {
            const {setInitialTodosData} = todoStore;
            setInitialTodosData(data);
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
    
    
    render() {
        const todos = this.getFilteredTodos();
        const length = todoStore.todosCount;
        if(this.responseCode >= 400 && this.responseCode <= 400){
            return (
                <StyledNetworkError>
                    <StyledErrorMessage>
                        {`Network Error`}
                    </StyledErrorMessage>
                    <StyledTryAgainButton>{`Try Again`}</StyledTryAgainButton>
                </StyledNetworkError>
            );
        }
        else{
            return (
                <StyledTodoApp>
                    <Header>todos</Header>
                    <StyledTodoAppContainer>
                        <AddTodo onAddTodo={this.onAddTodo} todos={todos}></AddTodo>
                        <TodoList responseCode={this.responseCode} todos={todos} onCompleteTodo={this.onCompleteTodo} onRemoveTodo={this.onRemoveTodo} onUpdateTodoTitle={this.onUpdateTodoTitle}></TodoList>
                        {length > 0 && <TodoFooter todos={todos}  selectedFilter={todoStore.selectedFilter} onChangeSelectedFilter={this.onChangeSelectedFilter} onClearCompleted={this.onClearCompleted}/>}
                    </StyledTodoAppContainer>
                </StyledTodoApp>
            );
        }
    }
}

export default MobxTodoApp;