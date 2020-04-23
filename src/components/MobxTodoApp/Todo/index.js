import React from 'react';
import {observer} from 'mobx-react';
import {MdDeleteForever} from 'react-icons/md';
import {StyledTodo,CheckboxInput,TodoInput,Span,StyledCheckboxContainer} from './styledComponents';

@observer
class Todo extends React.Component{
    render(){
        const {eachTodo,onRemoveTodo} = this.props;
        console.log("todo render");
        return (
            <StyledTodo id={eachTodo.id}>
                <StyledCheckboxContainer>
                    <CheckboxInput type="checkbox" id={eachTodo.id} onClick={eachTodo.onCompleteTodo} defaultChecked={eachTodo.isCompleted}></CheckboxInput>
                </StyledCheckboxContainer>
                <TodoInput type="text" id={eachTodo.id} defaultValue={eachTodo.title} disabled={eachTodo.isCompleted} onChange={eachTodo.onUpdateTodoTitle}></TodoInput>
                <Span id={eachTodo.id} onClick={onRemoveTodo}>
                    <MdDeleteForever/>
                </Span>
            </StyledTodo>
        );
    }
}

export default Todo;