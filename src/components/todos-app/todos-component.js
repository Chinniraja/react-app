import React from "react";
let length = 0;
class AddNewTodo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoslist:[],
    };
  }
  addNewTask = (event) => {
    if(event.keyCode === 13){
      if(event.target.value !== ""){
        let todoId = this.state.todoslist.length + 1;
        this.setState({
        todoslist : [...this.state.todoslist, {value:event.target.value, todoListId:todoId, checked:false,disabled:false,inputClass:"enter-task"}],
        todoslist1 : [...this.state.todoslist, {value:event.target.value, todoListId:todoId, checked:false,disabled:false,inputClass:"enter-task"}],
      });
      event.target.value= "";
      length += 1;
      }
      else{
        alert("Input cannot be empty");
      }
    }
  }
  
  renderTodosList = () => {
    const updatedTodosList = this.state.todoslist.map((id,index) => {
      return <NewTodo state={id} updateState={this.state} removeList={this.removeTodoList} isChecked={this.isChecked}/>;
    });
    this.updatedTodosList = updatedTodosList;
    return updatedTodosList;
  }
  
  removeTodoList = (event) => {
    const updatedTodosList = this.state.todoslist1.filter(list => {
    return list.todoListId !== event.target.id;
    });
    length = updatedTodosList.length;
    this.setState({todoslist1:updatedTodosList});
    this.setState({todoslist:updatedTodosList});
  }
  
  AllTasks = () => {
    this.setState({todoslist:this.state.todoslist1});
  }
  
  ActiveTasks = (event) => {
    let eachList;
    const updatedTodosList = this.state.todoslist1.filter(list => {
      if(list.checked !== true){
        list.inputClass = "enter-task";
        eachList = list;
      }
      return eachList;
    });
    this.setState({todoslist:updatedTodosList});
  }
  
  CompletedTasks = (event) => {
    let eachList;
    const updatedTodosList = this.state.todoslist1.filter(list => {
      if(list.checked !== false){
        list.checkbox = "task-decoration";
        eachList = list;
      }
      return eachList;
    });
    this.setState({todoslist:updatedTodosList});
  }
  
  clearCompleted = () => {
    const updatedTodosList = this.state.todoslist1.filter(list => {
      return list.checked !== true;
    });
    length = updatedTodosList.length;
    this.setState({todoslist1:updatedTodosList});
    this.setState({todoslist:updatedTodosList});
  }
  
  isChecked = () => {
    this.setState({todoslist:this.state.todoslist});
  }
  
  
  footerSection = () => {
    let items = 0,checked = 0;
    this.state.todoslist.forEach(list => {
      if(!list.checked){
        items += 1;
      }
      else{
        checked += 1;
      }
    });
    if(length > 0 || items > 0 || checked > 0){
      return (
        <div className="footer-section">
          <span className="span-footer">{items} items left</span>
          <div className="active-section">
            <span className="span-footer" onClick={this.AllTasks}>All</span>
            <span className="span-footer" onClick={this.ActiveTasks}>Active</span>
            <span className="span-footer" onClick={this.CompletedTasks}>Completed</span>
          </div>
          <span className="clear-completed">
            {checked > 0 && <span className="span-footer" onClick={this.clearCompleted}>Clear Completed</span>}
          </span>
        </div>
      );
    }
  }
  
  render(){
    return (
      <div className="main">
      <h1>todos</h1>
      <div className="todo-app">
        <div className="input-header">
          {this.state.todoslist.length > 0 && <span className="span">&#xf107;</span>}
          {this.state.todoslist.length === 0 && <span className="span"></span>}
          <input type="text" onKeyDown={this.addNewTask} className="enter-task"></input>
        </div>
        <ul style={{listStyleType:"none"}} className="todos-container">
          {this.renderTodosList(this.state.todosIdsList)}
        </ul>
        <div>
          {this.footerSection()}
        </div>
      </div>
      </div>
    );
  }
}

class NewTodo extends React.Component{
  constructor(props){
    super(props);
    this.disabled = false;
  }
  
  onChecked = (event) => {
    if(event.target.checked){
      this.props.state.checked = true;
      this.props.updateState.todoslist.forEach(eachList => {
        if(eachList.todoListId === event.target.id){
          eachList.checked = true;
          eachList.inputClass = "task-decoration";
          eachList.disabled = true;
        }
      });
      this.props.updateState.todoslist1.forEach(eachList => {
        if(eachList.todoListId === event.target.id){
          eachList.checked = true;
          eachList.inputClass = "task-decoration";
          eachList.disabled = true;
        }
      });
      this.props.isChecked();
    }
    else{
      this.props.state.checked = false;
      this.props.updateState.todoslist.forEach(eachList => {
        if(eachList.todoListId === event.target.id){
          eachList.checked = false;
          eachList.inputClass = "enter-task";
          eachList.disabled = false;
        }
      });
      this.props.updateState.todoslist1.forEach(eachList => {
        if(eachList.todoListId === event.target.id){
          eachList.checked = false;
          eachList.inputClass = "enter-task";
          eachList.disabled = false;
        }
      });
      this.props.isChecked();
    }
  }
  
  onchangeValue = (event) => {
    if(event.keyCode === 13){
      this.props.updateState.todoslist.forEach(eachList => {
        if(eachList.todoListId === event.target.id){
          eachList.value = event.target.value;
        }
      });
      this.props.updateState.todoslist1.forEach(eachList => {
        if(eachList.todoListId === event.target.id){
          eachList.value = event.target.value;
        }
      });
    }
    this.props.isChecked();
  }
  
  
  render() {
    let state = this.props.state;
    return (
      <li className="lists" key={state.todoListId} id={state.todoListId}>
        {this.props.state.checked === true && <input type="checkbox" checked={true} className="checkbox" onClick={this.onChecked} id={state.todoListId}></input>}
        {this.props.state.checked === false && <input type="checkbox" className="checkbox" onClick={this.onChecked} id={state.todoListId}></input>}
        <input type="text" disabled = {state.disabled} defaultValue={state.value} className={state.inputClass} onKeyDown={this.onchangeValue}></input>
        <span className="span" onClick={this.props.removeList} id={state.todoListId}>X</span>
      </li>
    );
  }
}


export {AddNewTodo,NewTodo};