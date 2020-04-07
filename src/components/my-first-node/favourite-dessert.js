import React from 'react';
import {Link} from "react-router-dom";

class FavouriteDessert extends React.Component {
  state = {
    selectedDessert:"",
    favouriteDessert:"",
  }
  
  handleUserInput = (event) => {
    this.setState({selectedDessert:event.target.value});
  }
  
  handleSubmit = () => {
    if(this.state.selectedDessert !== ''){
    this.setState({favouriteDessert:`My favourite dessert is ${this.state.selectedDessert.toUpperCase()}`});
    this.setState({selectedDessert:''});}
  }
  
  displayMessage = () => {
    const {favouriteDessert} = this.state;
    return (
      <h3 style={{marginLeft:"auto",marginRight:"auto"}}>{favouriteDessert}</h3>
    );
  }
  
  renderDessertOptions = () => {
    const favouriteDessert = this.props.dessertList.map(eachDessert => {
      return <label><input type="radio" name="dessert" onChange={this.handleUserInput} value={eachDessert}/>&nbsp;<b>{eachDessert}</b></label>;
    });
    return favouriteDessert;
  }
  
  render() {
    return (
      <div className="favourite-container">
        <div className="components-folder">
          <Link to="/form-components" className="component-link"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
          <h2 className="heading">Favourite Dessert</h2>
        </div>
        <div className="form-component" >
          <h3>What is your favourite dessert?</h3>
          <div className="dessert-options">
          {this.renderDessertOptions()}
          </div>
          <button onClick={this.handleSubmit} className="button">Make your choice !</button>
          {this.state.favouriteDessert !== '' && this.displayMessage()}
        </div>
      </div>
    );
  }
}

export {FavouriteDessert};