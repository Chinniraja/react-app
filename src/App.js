import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
//import {observer} from 'mobx-react';
import {Provider} from 'mobx-react';
//import {observable} from 'mobx';

import {AddNewTodo} from "./components/todos-app/todos-component";
// import "./components/todos-app/todos.css";
// import './components/my-first-node/node.css';
//import './components/countries-dashboard/CountriesDashboardApp.css';
import FormComponents from './components/my-first-node/form-component';
import {ParentCounter} from './components/practice/react-practice';
import CountriesDashboardApp from './components/countries-dashboard/CountriesDashboardApp/countriesDashboardApp';
import ShowCountryDetails from './components/countries-dashboard/ShowCountryDetails/showCountryDetails';
import HeaderThemeSection from './components/countries-dashboard/HeaderThemeSection/headerThemeSection';
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import "./App.css";
import {CountriesDashboardConatiner} from './components/countries-dashboard/App/styledComponent';
import GameDashboard from './components/EmojiGame/GameDashboard/gameDashboard';
import CounterPage from './components/CounterPage/index';
import themeStore from './stores/ThemeStore/';
import CounterApp from './components/CounterApp/counterApp';
import MobxTodoApp from './components/MobxTodoApp/MobxTodoApp/index';
import EventsDashboard from './components/EventsList/EventsDashboard/eventsDashboard';
import A from './components/ProviderInject/A/a';
import GridGameDashboard from './components/GridGame/GameDashboard/index';
import userPage from './components/UsersPage/index';
import stores from './stores';
import SignInForm from './Authentication/components/SignInForm/index';
import ecommerceRoutes from './E-Commerce-App/routes/ecommerceRoutes';
import {ProtectedRoute} from './Authentication/routes/AuthenticationRoutes';
import EcommerceDashboard from './E-Commerce-App/components/EcommerceDashboard/index';
import {SignInPageRoute} from './Authentication/routes/SignInPage/SignInPageRoute';
// configure({ enforceActions: true});
import CounterParent from './practice';
class App extends React.Component {
  getCurrentTheme = () => {
    return themeStore.selectedTheme;
  }
  
  changeTheme = () => {
    themeStore.setCurrentTheme();
  }
  
  changeTheme = () => {
    if(this.getCurrentTheme() === 'light'){
      this.setCurrentTheme('dark');
    }
    else{
      this.setCurrentTheme('light');
    }
  }
  
  // state={
  //   selectedTheme:'Light Mode',
  //   theme:'light',
  //   themeOption:  {
  //     light: {
  //       id: "0",
  //       name: "#fff"
  //     },
  //     dark: {
  //       id: "1",
  //       name: "#2b3945"
  //     }
  //   }
  // }
  
  // changeTheme = () => {
  //   const mode = (this.state.selectedTheme === 'Light Mode') ? 'Dark Mode' : 'Light Mode';
  //   const theme = (this.state.selectedTheme === 'Light Mode') ? 'dark' : 'light';
  //   this.setState({selectedTheme:mode,theme});
  // }
  
  render(){
    // const {theme} = this.state;
    // const mode = this.state.themeOption[theme];
    return (
      <Provider {...stores}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/projects">
            <HomePage/>
          </Route>
          {ecommerceRoutes}
          <Route exact path="/" component={SignInPageRoute}/>
          <Route  path="/grid-game">
            <GridGameDashboard />
          </Route>
          
          <Route exact path="/mobx-todo-app" component={MobxTodoApp}/>
    
          
          <Route  exact path="/users" component={userPage}/>
          
          <Route  path="/counter-page">
            <CounterPage />
          </Route>
          
          
          <Route  path="/provider-inject">
            <A />
          </Route>
          
          <Route  path="/event-dashboard">
            <EventsDashboard />
          </Route>
  
          
          <Route  path="/counter-app">
            <CounterApp />
          </Route>
          
          
          <Route  path="/page-1">
            <Page1 />
          </Route>
        
          <Route path="/parent-counter">
            <div className="components-folder">
              <Link to="/" className="component-link"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
              <h2 className="heading">Parent Counter</h2>
            </div>
            <ParentCounter />
          </Route>
      
          <Route path="/todos">
            <div className="components-folder">
              <Link to="/" className="component-link"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
              <h2 className="heading">Todos List</h2>
            </div>
            <AddNewTodo />
          </Route>
          
          <Route path="/form-components">
            <FormComponents />
          </Route>
          
          <Route path="/countries-dashboard">
            <CountriesDashboardConatiner>  
              <HeaderThemeSection changeTheme={this.changeTheme} selectedTheme={this.getCurrentTheme()} />
              <CountriesDashboardApp />
            </CountriesDashboardConatiner>
          </Route>
          <Route path="/game-dashboard">
            <GameDashboard />
          </Route>
          
          <Route exact path="/countries" children=
            {
              <CountriesDashboardConatiner  selectedTheme={this.selectedTheme}>
                <HeaderThemeSection changeTheme={this.changeTheme} selectedTheme={this.getCurrentTheme()} />
                <ShowCountryDetails />
              </CountriesDashboardConatiner>
            }
          />
        </Switch>
      </Router>
      </Provider>
    );
  }
}


export default App;