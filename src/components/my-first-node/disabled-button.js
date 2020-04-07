import React from 'react';
import {Link} from "react-router-dom";

class DisableOrEnable extends React.Component {
  state = {
    isDisableButtonChecked:false,
    showMessage:""
  }
  
  handleChange = (event) => {
    if(event.target.checked){
    this.setState({isDisableButtonChecked:event.target.checked,showMessage:'I am Disabled'});
    }
    else{
      this.setState({isDisableButtonChecked:event.target.checked,showMessage:''});
    }
  }
  
  handleSubmit = () => {
    this.setState({submittedState:this.state.selectedState});
    this.setState({showMessage:'I am Enabled'});
  }
  
  displayMessage = () => {
    const {showMessage} = this.state;
    return (
      <h3 style={{marginLeft:"auto",marginRight:"auto"}}>{showMessage}</h3>
    );
  }

  render() {
    return (
      <div className="favourite-container">
        <div className="components-folder">
          <Link to="/form-components" className="component-link"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
          <h2 className="heading">Disabled Button</h2>
        </div>
        <div className="form-component disable-component">
          <label className="disable"><input type="checkbox" onChange={this.handleChange}></input>&nbsp;Disable</label>
          <button disabled={this.state.isDisableButtonChecked} onClick={this.handleSubmit} className="button margin-top">Click me</button>
        </div>
        <div className="display-message">
          {this.state.showMessage !== '' && this.displayMessage()}
        </div>
      </div>
    );
  }
}

export {DisableOrEnable};