import React from 'react';
import {observer,inject} from 'mobx-react';
import NoDataView from '../../common/NoDataView/index';
import Todo from '../Todo/index';
import {StyledTodoListContainer} from './styledComponents';

@inject("todosStore")
@observer
class TodoList extends React.Component {
    getFilteredTodos = (todos,selectedFilter) => {
        let updatedTodos;
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
    
    render() {
        // console.log("todoslist render");
        const {todos,selectedFilter,onRemoveTodo} = this.props.todosStore;
        const updatedTodos = this.getFilteredTodos(todos,selectedFilter);
        return (
            <StyledTodoListContainer>
                {updatedTodos.map(eachTodo => {
                    return <Todo eachTodo={eachTodo} key={eachTodo.id} onRemoveTodo={onRemoveTodo}/>;
                })}
            </StyledTodoListContainer>
        );
    }
}

export default TodoList;

