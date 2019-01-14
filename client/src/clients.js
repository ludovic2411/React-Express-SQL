import React from 'react';
import IndexClients from './clients/indexClients';

export default class  client extends React.Component {
  render(){
    return (
      <div>
      <h2> Listing de tous nos clients</h2>
      <IndexClients/>
      </div>
    )
  }
}
