//  /*global React ReactDOM*/
// let id = 1;
// class Todos extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             task:"",
//             taskEntered:false,
            
//         };
//         this.enterNewTask = this.enterNewTask.bind(this);
        
//     }
    
//     enterNewTask = (event) => {
//         if(event.keyCode === 13){
//             List(event.target.value);
//             this.setState({task:event.target.value,taskEntered:true});
//             event.target.value = "";
//         }
//     }
    
//     render() {
//         return (
//         <div>
//             <div>
//                 <span></span>
//                 <input type="text" placeholder="Enter new task" onKeyDown={this.enterNewTask}></input>
//             </div>
//             <ul style={{listStyleType:"none"}}>
//               {/*{this.state.taskEntered === true && <List value={this.state.task}/> }*/}
//               {this.state.taskEntered === true && <TodosList value={this.state}/> }
//             </ul>
//         </div>);
//     }
// }

// function List(props){
//     console.log("props",props);
//     if(props.value != undefined){
//     return (
//         <li>
//             <input type="checkbox" ></input>
//             <input type="text" disabled = {false} value={props}></input>
//             <span>X</span>
//         </li>
//         );
//     }
//     else{
//         return <li></li>;
//     }
// }

// class TodosList extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             todoslist:[id]
//         };
//     }
    
    
    
//     render(){
//         console.log(this.props);
//       return (
//         <div>
//         {
//             this.props.taskEntered == true && <List key={id} id={id}/>
            
//             }
            
//         </div>);
//     }
// }

// ReactDOM.render(<Todos />,document.getElementById('root'));




 /*global React ReactDOM*/
import React from 'react'
class NewTodo extends React.Component{
    render() {
        return (
            <li>
                <input type="checkbox" ></input>
                <input type="text" disabled = {false}></input>
                <span>X</span>
            </li>
        );
    }
}

export {NewTodo};