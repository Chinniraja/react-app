import React from 'react';
import {Link,Switch,Route} from "react-router-dom";
import {Greetings} from './greetings.js';
import {FavouriteDessert} from './favourite-dessert.js';
import VisitedCities from './visited-cities.js';
import {YourState} from './your-state.js';
import {DisableOrEnable} from './disabled-button.js';
class FormComponents extends React.Component {

  
  render() {
    console.log(this.props);
    return (
      <Switch>
        <Route path="/form-components/greetings">
          <Greetings />
        </Route>
        <Route path="/form-components/favorite-dessert">
          <FavouriteDessert dessertList={['Vanilla','ButterScotch','Gulab Jamun','Yoghurt Pots','Baked Banana','Chocolate']}/>
        </Route>
        <Route path="/form-components/visited-cities">
          <VisitedCities visitedCities={[" Hyderabad", " Chennai", " Bangalore", " Pune", " Mumbai", " Delhi"]}/>
        </Route>
        
        <Route path="/form-components/your-state">
          <YourState stateList={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/>
        </Route>
        
        <Route path="/form-components/disabled-enabled">
          <DisableOrEnable />
        </Route>
        
        <div className="form-components">
          <div className="components-folder">
            <Link to="/" className="component-link"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
            <h2 className="heading">Form Components</h2>
          </div>
          <ul className="form-component-lists">
            <li>
              <Link to="/form-components/greetings">Greetings</Link>
            </li>
            <li>
              <Link to="/form-components/favorite-dessert">
                Favourite Desert
              </Link>
            </li>
            <li>
              <Link to="/form-components/visited-cities">Visited Cities</Link>
            </li>
            <li>
              <Link to="/form-components/your-state">Your State</Link>
            </li>
            <li>
              <Link to="/form-components/disabled-enabled">Disable Button</Link>
            </li>
          </ul>
        </div>
      </Switch>
    );
  }
}

export default FormComponents;