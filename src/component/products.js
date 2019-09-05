import React, { Component } from 'react';
import './Products.scss'


class Products extends Component {
    render(){
  return (
    <div className="Product-Wrapper">
    <div className="Product">
        <div className="Product-Image-Wrapper">
          <img src="./t-shirt.png" className="Product-Image" />
        
        </div>
      <div className="Product-Title">
        <p className="Product-Name">T-Shirt</p>
      </div>
      <div className="Product-Data">
        <small className="Product-Price">90 RS</small>
        <button onClick="" className="product-button Product-Add">Add to Cart</button>
      </div>
    </div>
    </div>

  );
 }
};


export default Products;