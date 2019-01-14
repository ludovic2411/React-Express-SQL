import React, { Component } from 'react';
import ProductIndex from './teas/productIndex';
 export default class productComponent  extends Component {

  render() {
    return (
      <div>
      <div>
        <h2>Laissez vous séduire par notre vaste assortiment de thés</h2>
        <p>De Chine, d'Inde, de Ceykan et même d'Afrique, nos thés assortiment
        séléctionnés avec soins auprès de petits producteurs qui privilégient la qualité à
        la quantité.</p>
        <p>Thés noirs, verts ou même fumés, vous êtes sûrs de déguster un excellent cru
        cultivé dans des conditions durables et éthiques.</p>
        </div>
        <div>
        <ProductIndex/>
        </div>
      </div>
    );
  }

}
