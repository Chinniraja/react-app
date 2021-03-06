import React from "react";
import { Link,Redirect } from "react-router-dom";
import logo from "../../logo.svg";

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/practice-advanced-concepts">Practice Advanced Concepts Route</Link>
        <Link to="/grid-game">Grid Game</Link>
        <Link to="/users">Users</Link>
        <Link to="/page-1">Page 1</Link>
        <ul className="home-page">
        <li>
        <Link to="/countries-dashboard">Countries Dashboard</Link>
      </li>
      
      <li>
        <Link to="/mobx-todo-app">Todo App</Link>
      </li>
      
      <li>
        <Link to="/provider-inject">Provider Inject</Link>
      </li>
      
      <li>
        <Link to="/event-dashboard">Events List</Link>
      </li>
      
      <li>
        <Link to="/parent-counter">ParentCounter</Link>
      </li>
      <li>
        <Link to="/todos">Todos</Link>
      </li>
      <li>
        <Link to="/form-components">Form Components</Link>
      </li>
      
      <li>
        <Link to="/game-dashboard">Emoji Game</Link>
      </li>
      
      <li>
        <Link to="/counter-app">Counter App</Link>
      </li>
      <li>
        <Link to="/projects">Home</Link>
      </li>
      
      
    </ul>
    
      </header>
    </div>
  );
}
}
export default App;
