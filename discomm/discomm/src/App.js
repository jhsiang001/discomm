import React, { Component } from "react";
//setting up react router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//making use of boostrap css classes build interface
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import './index.css'
import logo from "./logo.png";

/*class App extends Component {
  render() {
    return (
      <Router>
        <div className="m-0 p-0">
          <nav className="navbar navbar-expand-lg navbar-light discomm-nav">
            <Link to="/" className="navbar-brand discomm-nav home-button">DISCOMM</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav row justify-content-between w-100">
                <li className="navbar-item">
                  <Link to="/" className="nav-link discomm-nav">about</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link discomm-nav">my servers</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link discomm-nav">social</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link discomm-nav">submit</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link login-button px-3">log in</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
        
      </Router>
    );
  }
}
*/

class App extends Component {
  render() {
    return (
      <Router>
        <div class = "nav-container">
          <div class = "wrapper">
            <nav>
              <div class = "logo">
                DISCOMM
              </div>
              <ul class = "nav-items">
                <li>
                  <a href = "/">about</a>
                </li>
                <li>
                  <a href = "/">my servers</a>
                </li>
                <li>
                  <a href = "/">social</a>
                </li>
                <li>
                  <a href = "/create">submit</a>
                </li>
                <li class ="login p-2 rounded">
                  <a class = "nav-btn-container" href = "/">log in</a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </Router>
    );
  }
}
export default App;