import React from 'react';
import {FaAngleDown} from 'react-icons/fa';
import {StyledAddTask,Input,DropDown} from './styledComponents';

class AddTodo extends React.Component {
    render(){
        const {value,onAddTodo,todos} = this.props;
        const length = todos.length;
        return (
            <StyledAddTask>
                <DropDown length={length}><FaAngleDown /></DropDown>
                <Input placeholder="Add new task?" value={value} onKeyDown={onAddTodo}></Input>    
            </StyledAddTask>
        );
    }
}

export default AddTodo;