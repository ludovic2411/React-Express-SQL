import React, {Component  } from 'react';
var Lorem = require('react-lorem-component');

export default class HomeComponent extends Component {

  render() {
    return (
      <div>
        <h2>Bienvenue</h2>
        <Lorem />
        <img src="https://images.unsplash.com/photo-1521012012373-6a85bade18da?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7180307795557ba31789a6956b450ec&auto=format&fit=crop&w=500&q=60" alt="tea"/>
      </div>
    );
  }

}
