import React, { Component } from 'react';
import './Products.scss';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
//  import ProductDetails from './productDetails'; 


const Product = props =>(


  <div className="Product-Wrapper">
  <div className="Product">
      <div className="Product-Image-Wrapper">
        <img src={props.product.image} className="Product-Image" />
      
      </div>
    <div className="Product-Title">
      <p className="Product-Name">{props.product.name}</p>
    </div>
    <div className="Product-Data">
      <small className="Product-Price">{props.product.price}</small>
      <button onClick="" className="product-button Product-Add">Add to Cart</button>
    </div>


    <Link to={'/edit/'+props.product._id} class="btn btn-info" > Edit  </Link>
    </div>
   </div>
)

class Products extends Component {

  constructor(props){
    super(props);
    this.state = { products:[] };
  
  }



   // retrive the data from database 
  componentDidMount(){
    axios.get('http://localhost:3010/products/')
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

  
    <div className="Products-Container">
    <div className="Products-Wrapper">
    {this.productList()}
    </div>
    </div>   
   

  );
 }
};


export default Products;


// <ul> 

// <div className="Product-Wrapper">
// <div className="Product"> 
//         <div className="Product-Image-Wrapper">
//           <img src=  {props.product.image} className="Product-Image" />
        
//         </div>
//       <div className="Product-Title">
//         <p className="Product-Name"><li> {props.product.name}</li></p>
//       </div>
//       <div className="Product-Data">
//         <small className="Product-Price">   <li> {props.product.price}</li></small>
//         <button onClick="" className="product-button Product-Add">Add to Cart</button>
//         </div>   <li> 
//     <Link to={'/edit'+props.product._id}> Edit </Link>
//     </li> </div></div>
   
   
  
  

 
   
//   </ul>