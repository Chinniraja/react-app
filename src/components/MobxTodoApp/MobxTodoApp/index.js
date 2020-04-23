import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import TodoList from '../TodoList/index';
import TodoFooter from '../TodoFooter/index';
import AddTodo from '../AddTodo/index';
import NoDataView from '../../common/NoDataView/index';
import {StyledTodoAppContainer,StyledTodoApp,Header} from './styledComponents';
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure/index';

@inject("todosStore")
@observer
class MobxTodoApp extends Component {
    
    onAddTodo = (event) => {
        const {onAddTodo} = this.props.todosStore;
        onAddTodo(event);
    }
    
    onRemoveTodo = (event) => {
        const {onRemoveTodo} = this.props.todosStore;
        onRemoveTodo(event);
    }
    
    onChangeSelectedFilter = (event) => {
        const {onChangeSelectedFilter} = this.props.todosStore;
        onChangeSelectedFilter(event);
    }
    
    getActiveTodosCount = () => {
        const {getActiveTodosCount} = this.props.todosStore;
        return getActiveTodosCount();
    }
    
    getFilteredTodos = () => {
        const {getFilteredTodos} = this.props.todosStore;
        return getFilteredTodos();
    }
    
    // addTodoReaction = reaction(()=>{todoStore},(length)=>{
    //     console.log("todos count",length);
    // })
    
    componentDidMount(){
        this.doNetworkCalls();
    }
    
    doNetworkCalls = () => {
        this.props.todosStore.getTodos();
    }
    
    componentWillUnmount(){
        this.props.todosStore.clearStore();
    }
    
    renderTodosList = () => {
        const {todos,selectedFilter} = this.props.todosStore;
        return ( 
            <StyledTodoApp>
                <Header>todos</Header>
                <StyledTodoAppContainer>
                    <AddTodo onAddTodo={this.onAddTodo} todos={todos}></AddTodo>
                    {todos.length > 0 && <TodoList todos={todos} onRemoveTodo={this.onRemoveTodo}></TodoList>}
                    {todos.length > 0 && <TodoFooter todos={todos}  selectedFilter={selectedFilter} onChangeSelectedFilter={this.onChangeSelectedFilter}/>}
                </StyledTodoAppContainer>
            </StyledTodoApp>
        );
    }
    
    
    render() {
        const {getTodosApiStatus,getTodosApiError} = this.props.todosStore;
        console.log(this.props.todosStore.todos);
        return (
            <LoadingWrapperWithFailure
                apiStatus={getTodosApiStatus}
                apiError={getTodosApiError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderTodosList}
            />    
        );
    }
}

export default MobxTodoApp;