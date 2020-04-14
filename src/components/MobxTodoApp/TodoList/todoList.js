import React from 'react';
import Todo from '../Todo/todo';
import {StyledTodoListContainer} from './styledComponent';

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

