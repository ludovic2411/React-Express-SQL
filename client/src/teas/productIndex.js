import React from 'react';
import axios from 'axios';

 export default class ProductIndex extends React.Component {

   constructor(props) {
     super(props);
     this.state ={teas:[]} ;
   }

   componentDidMount() {
     axios.get('http://localhost:4000/products').then(res=>{
       const teas=res.data;
       this.setState({teas});
       console.log(teas);
     })
   }

  render() {
    return (
      <ul>
      {this.state.teas.map(tea=>
        <div>
          <li>{tea.nom}</li>
          <li>{tea.stock}</li>
          <li>{tea.prix}</li>
        </div>
      )}
      </ul>
    );
  }

}
