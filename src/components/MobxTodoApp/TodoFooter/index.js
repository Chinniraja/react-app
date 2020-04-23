import React from 'react';
import {observer,inject} from 'mobx-react';
import NoDataView from '../../common/NoDataView/index';
import {
    StyledFooterContainer,
    ActiveTodosCount,
    FilterTodosContainer,
    All,
    Active,
    Completed,
    ClearCompleted,
    StyledClearCompletedContainer
} from './styledComponents';

@inject("todosStore")
@observer
class TodoFooter extends React.Component{
    
    completedTodos =() => {
        const {todosStore} = this.props;
        const {todosCount,getActiveTodosCount} = todosStore;
        const completedTodosCount = todosCount - getActiveTodosCount();
        return completedTodosCount;
    }
    
    activeTodos = () => {
        let activeTodos = 0;
        const {todos} = this.props.todosStore;
        todos.forEach(eachTodo => {
            if(eachTodo.isCompleted === false){
              activeTodos++;
            }
        });
        return activeTodos;
    }
    
    render(){
        const {todos,onChangeSelectedFilter,onClearCompleted} = this.props.todosStore;
        const {selectedFilter} = this.props.todosStore;
        const activeTodosCount = this.activeTodos();
        const completedTodosCount = this.completedTodos();
        return (
            <StyledFooterContainer>
                <ActiveTodosCount>{activeTodosCount} items left</ActiveTodosCount>
                <FilterTodosContainer>
                    <All onClick={onChangeSelectedFilter} selectedFilter={selectedFilter} id="All">All</All>
                    <Active onClick={onChangeSelectedFilter} selectedFilter={selectedFilter} id="Active">Active</Active>
                    <Completed onClick={onChangeSelectedFilter} selectedFilter={selectedFilter} id="Completed">Completed</Completed>
                </FilterTodosContainer>
                <StyledClearCompletedContainer>
                    <ClearCompleted onClick={onClearCompleted} completedTodosCount={completedTodosCount}>Clear Completed</ClearCompleted>
                </StyledClearCompletedContainer>
            </StyledFooterContainer>
        );
    }
}

export default TodoFooter;