import React, { Component } from 'react';
import './App.css';
import clientComponent from './clients';
import productComponent from './products';
import HomeComponent from './homeComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className='app'>
      <h1>La Maison des thés</h1>
      <Router>
        <div>
          <nav>
              <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to="/products">Nos thés</Link></li>
              <li><Link to="/clients">Listing clients</Link></li>
              </ul>
          </nav>
          <Route path="/" exact component={HomeComponent} />
         <Route path="/products/" component={productComponent} />
         <Route path="/clients/" component={clientComponent} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
