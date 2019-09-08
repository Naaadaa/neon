import React, { Component } from 'react';
import './Products.scss';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';

const Product = props =>(
  <ul> 
    <li> {props.product.image}</li>
    <li> {props.product.name}</li>
    <li> {props.product.price}</li>
    <li> 
    <Link to={'/edit'+props.product._id}> Edit </Link>
    </li>
  </ul>
)

class Products extends Component {

  constructor(props){
    super(props);
    this.state = { products:[] };
  }
   // retrive the data from database 
  componentDidMount(){
    axios.get('http://localhost:4000/products/')
    .then(response=>{
      this.setState({products: response.data})
    }) 
    .catch(function(error){
      console.log(error);
    })

  }

  productList(){
    return this.state.products.map(function(currentProduct,i){
      return <Product product ={currentProduct} key={i} />;
    });
  }
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
 {this.productList()}
    </div>

  );
 }
};


export default Products;


