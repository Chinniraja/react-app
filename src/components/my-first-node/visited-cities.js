import React from 'react';
import {Link} from "react-router-dom";

class VisitedCities extends React.Component {
  state = {
    visitedCities:'',
    selectedCities:[],
  }
  
  handleCheckboxClick = (event) => {
    if(event.target.checked){
      this.setState({selectedCities:[...this.state.selectedCities,event.target.value]});
    }
    else{
      const updatedVisitedCities = this.state.selectedCities.filter(eachCity => {
        return eachCity !== event.target.value;
      });
      this.setState({selectedCities:updatedVisitedCities});
    }
  }
  
  handleSubmit = () => {
    if(this.state.selectedCities.length){
    this.setState({visitedCities:`I have visited these cities ${this.state.selectedCities}.`});
    }
  }
  
  displayVisitedCitiesMessage = () => {
    const {visitedCities} = this.state;
    return (
      <h3 style={{marginLeft:"auto",marginRight:"auto"}}>{visitedCities}</h3>
    );
  }
  
  renderCityOptions = () => {
    const visitedCities = this.props.visitedCities.map(eachCity => {
      return <label><input type="checkbox" value={eachCity} onChange={this.handleCheckboxClick}/>&nbsp;<b>{eachCity}</b></label>;
    });
    return visitedCities;
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="favourite-container">
        <div className="components-folder">
          <Link to="/form-components" className="component-link"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
          <h2 className="heading">Visited Cities</h2>
        </div>
        <div className="form-component">
          <h3>Which of the following cities you have visited?</h3>
          <div className="visited-cities">
            {this.renderCityOptions()}
          </div>
          <button onClick={this.handleSubmit} className="button">Make your choice !</button>
          {this.state.visitedCities !== '' && this.displayVisitedCitiesMessage()}
        </div>
      </div>
    );
  }
}

export default VisitedCities;