import React from 'react';
import {observer} from 'mobx-react';
import todoStore from '../../../stores/Store/TodoStore/todoStore';
import {
    StyledFooterContainer,
    ActiveTodosCount,
    FilterTodosContainer,
    All,
    Active,
    Completed,
    ClearCompleted,
    StyledClearCompletedContainer
} from './styledComponent';

@observer
class TodoFooter extends React.Component{
    
    completedTodos =() => {
        const completedTodosCount = todoStore.todosCount - todoStore.getActiveTodosCount();
        return completedTodosCount;
    }
    
    activeTodos = () => {
        let activeTodos = 0;
        const {todos} = this.props;
        todos.forEach(eachTodo => {
            if(eachTodo.isCompleted === false){
              activeTodos++;
            }
        });
        return activeTodos;
    }
    
    // getActiveTodosCount = () => {
    //     const {getActiveTodosCount} = todoStore;
    //     return getActiveTodosCount();
    // }
    
    render(){
        const {onChangeSelectedFilter,onClearCompleted} = this.props;
        const {selectedFilter} = todoStore;
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