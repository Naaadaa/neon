import React, { Component } from 'react';
import './Products.scss';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';

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


    <Link to={'/edit'+props.product._id}> Edit </Link>
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


    <div >
  
    {/* //     <div className="Product-Image-Wrapper">
    //       <img src="./t-shirt.png" className="Product-Image" />
        
    //     </div>
    //   <div className="Product-Title">
    //     <p className="Product-Name">T-Shirt</p>
    //   </div>
    //   <div className="Product-Data">
    //     <small className="Product-Price">90 RS</small>
    //     <button onClick="" className="product-button Product-Add">Add to Cart</button>
    //     <br/> </div> */}
 
 {this.productList()}

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