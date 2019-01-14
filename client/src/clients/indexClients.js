import React, { Component } from 'react';
import axios from 'axios';

export default class indexClients extends Component{
  constructor(props) {
    super(props);
    this.state ={clients:[]} ;
  }
  componentDidMount() {
    axios.get('http://localhost:4000/clients').then(res=>{
      const clients=res.data;
      this.setState({clients});
    }
  )

}

render() {
  return (
    <div>
    <h3>La liste des clients</h3>
    <ul>
    {this.state.clients.map(client=>
      <div>
      <li>{client.nom}</li>
      <li>{client.cat}</li>
      </div>
    )}
    </ul>
    </div>
  );
}

}
