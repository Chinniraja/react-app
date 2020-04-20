import React from 'react';
import Loader from 'react-loader-spinner';
import Todo from '../Todo/index';
import {StyledTodoListContainer,StyledLoading,} from './styledComponents';

class TodoList extends React.Component {
    
    renderTodosList = () => {
        const {todos,onRemoveTodo} = this.props;
        const todosList = todos.map(eachTodo => {
            return <Todo eachTodo={eachTodo} key={eachTodo.id} onRemoveTodo={onRemoveTodo}/>;
        });
        return todosList;
    }
    
    render() {
        const {todos,dataFetching} = this.props;
        console.log(dataFetching,todos.length);
        if(todos.length){
            return (
                <StyledTodoListContainer>
                    {this.renderTodosList()}
                </StyledTodoListContainer>
            );
        }
        else if(dataFetching){
            return (
                <StyledLoading>
                    <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                </StyledLoading>
            );
        }
        else if(todos.length === 0){
            return (
                <StyledLoading>
                    {`No Data Found`}
                </StyledLoading>
            );
        }
    }
}

export default TodoList;

