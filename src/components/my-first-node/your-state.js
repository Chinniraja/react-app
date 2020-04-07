import React from 'react';
import {Link} from "react-router-dom";

class YourState extends React.Component {
  state = {
    selectedState:'',
    submittedState:''
  }
  
  handleChangeState = (event) => {
      console.log(event.target.value);
    if(event.target.value !== 'Select your state'){
    this.setState({selectedState:event.target.value});
    }
    else{
      this.setState({selectedState:'',submittedState:''});
    }
  }
  
  handleSubmit = () => {
    if(this.state.selectedState !== ''){
    this.setState({submittedState:`I am from "${this.state.selectedState}" state.`});
    }
  }
  
  displayMessage = () => {
    return (
      <h3 style={{marginLeft:"auto",marginRight:"auto"}}>{this.state.submittedState}</h3>
    );
  }

  
  renderStateList = () => {
    const stateList = this.props.stateList.map(eachState => {
      return <option value={eachState}>{eachState}</option>;
    });
    return stateList;
  }
  
  render() {
    return (
      <div className="favourite-container">
        <div className="components-folder">
          <Link to="/form-components" className="component-link"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
          <h2 className="heading">Your State</h2>
        </div>
        <div className="form-component">
          <div>
            <select onChange={this.handleChangeState} value={this.state.showMessage} className="border">
              <option value="Select your state">Select your state</option>
              {this.renderStateList()}
            </select>
          </div>
          <button onClick={this.handleSubmit} className="button">Submit</button>
          {(this.state.submittedState !== '') && this.displayMessage()}
        </div>
      </div>
    );
  }
}

export {YourState};