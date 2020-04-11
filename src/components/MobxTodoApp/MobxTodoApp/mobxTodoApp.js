import React from 'react';
import {observer} from 'mobx-react';
import {reaction} from 'mobx';
import TodoList from '../TodoList/todoList.js';
import TodoFooter from '../TodoFooter/todoFooter.js';
import AddTodo from '../AddTodo/addTodo.js';
import {StyledTodoAppContainer,StyledTodoApp,Header} from './styledComponent.js';
import todoStore from '../../../stores/Store/TodoStore/todoStore.js';

@observer
class MobxTodoApp extends React.Component {
    
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
        return (
            <StyledTodoApp>
                <Header>todos</Header>
                <StyledTodoAppContainer>
                    <AddTodo onAddTodo={this.onAddTodo} todos={todos}></AddTodo>
                    {length > 0 && <TodoList todos={todos} onCompleteTodo={this.onCompleteTodo} onRemoveTodo={this.onRemoveTodo} onUpdateTodoTitle={this.onUpdateTodoTitle}></TodoList>}
                    {length > 0 && <TodoFooter todos={todos}  selectedFilter={todoStore.selectedFilter} onChangeSelectedFilter={this.onChangeSelectedFilter} onClearCompleted={this.onClearCompleted}/>}
                </StyledTodoAppContainer>
            </StyledTodoApp>
        );
    }
}

export default MobxTodoApp;