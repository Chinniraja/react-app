import React from 'react';
import {Link} from "react-router-dom";

class Greetings extends React.Component {
  state = {
    userInputText:"",
    displayMessage:"",
    onSubmit:false
  }
  
  handleUserInput = (event) => {
    this.setState({userInputText:event.target.value});
  }
  
  handleSubmit = () => {
    this.setState({onSubmit:true});
    if(this.state.userInputText !== ''){
    this.setState({displayMessage:`Hello ${this.state.userInputText}, have a nice day!`,userInputText:''});
    }
  }
  
  displayMessage = () => {
    const {displayMessage} = this.state;
    return (
      <h3 style={{marginLeft:"auto",marginRight:"auto"}}>{displayMessage}</h3>
    );
  }
  
  render() {
    return (
      <div className="favourite-container">
        <div className="components-folder">
          <Link to="/form-components" className="component-link"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
          <h2 className="heading">Greetings</h2>
        </div>
        <div className="form-component">
          <input type="text" onChange={this.handleUserInput} value={this.state.userInputText} placeholder="Enter the name" className="greetings-input"></input>
          <button onClick={this.handleSubmit} className="button">Greet</button>
          {this.state.displayMessage !== '' && this.displayMessage()}
        </div>
      </div>
    );
  }
}

export {Greetings};