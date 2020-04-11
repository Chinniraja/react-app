import React from 'react';
import {StyledTodoListContainer} from './styledComponent.js';
import Todo from '../Todo/todo.js';

class TodoList extends React.Component {
    
    renderTodosList = () => {
        const {todos,onRemoveTodo} = this.props;
        const todosList = todos.map(eachTodo => {
            return <Todo eachTodo={eachTodo} key={eachTodo.id} onRemoveTodo={onRemoveTodo}/>;
        });
        return todosList;
    }
    
    render() {
        return (
            <StyledTodoListContainer>
                {this.renderTodosList()}
            </StyledTodoListContainer>
        );
    }
}

export default TodoList;

