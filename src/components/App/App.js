import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AddReflection from '../AddReflection/AddReflection.js'
import ViewReflections from '../ViewReflections/ViewReflections.js'

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reflection Board</h1>
        </header>
        <br/>
        <Router>
        <div> 
          <nav>
            <ul>
              <li>
                <Link to="/add">Add Reflection</Link>
              </li>
              <li>
                <Link to="/view">View Reflections</Link>
              </li>
            </ul>
          </nav>
            <Route exact path="/add" component={AddReflection}/>
            <Route exact path="/view" component={ViewReflections}/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
