import React, { Component } from 'react';
import './Products.scss';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
//  import ProductDetails from './productDetails'; 
const Product = props =>{
  let buttons = ''
  if ( props.user && props.user.isAdmin){
buttons = (<button class="btn btn-default tiny"  onClick={ () =>
  axios.delete('http://localhost:3010/products/'+props.product._id)
  
     .then(() => props.deleteItem(props.product._id))                    
     .catch(err => console.log(err)
     
     
     )
}
>Delete</button>)
  } 
  return (
  <div className="Product-Wrapper" style={{ width: '18rem' }} >
   <div className="Product">
     <div className="Product-Image-Wrapper">
     <Link to={'/productDetails/'+props.product._id} > 
     <img src={props.product.image} className="Product-Image" />
  </Link>
  </div>
    <div className="Product-Title">
      <p className="Product-Name">{props.product.name}</p>
    </div>
    <div className="Product-Data">
      <small className="Product-Price">{props.product.price} SR</small>
      <button onClick={props.addToCart} className="product-button Product-Add">Add to Cart</button>
      <td>
   {/* this is where the delete happens */}
   
   {buttons}
</td>
  
<br/>
      {/* <Link to={'/delete/'+props.product._id} class="btn btn-outline-info" >  Delete</Link> */}
    </div>
    
    <Link to={'/edit/'+props.product._id} class="btn btn-default tiny"> Edit  </Link>
    </div>
    
   </div>
) }
class Products extends Component {
  constructor(props){
    super(props);
    this.state = { products:[] };
    this.addToCart = this.addToCart.bind(this)
  
  }
  handleChange = event => {
    this.setState({ id: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    axios.delete(`http://localhost:3010/products/${this.state.id}`)
      .then(res => {
        // id: this.state.id,
        console.log(res);
        console.log(res.data);
      })
  }
   // Delet a single console post
 addToCart = (id) => {
 
  // check if owner already has cart?
  axios({url: `http://localhost:3010/cart`,method: 'GET', headers: {
    'Authorization': `Bearer ${this.props.user.token}` // FOR EXPRESS
    // 'Authorization': `Token ${user.token}` // FOR RAILS
  }}) //object should contain product id
  .then(response => {
    
    
   const cart = response.data.carts.filter(cart=>{
     return cart.owner == this.props.user._id
   })
   
   
   if(cart.length  < 1 ){
    console.log("no cart",this.props.user.token);
  // if cart doesnt exist create cart with product inside
  axios({url: `http://localhost:3010/cart`,method: 'POST', headers: {
    'Authorization': `Bearer ${this.props.user.token}` // FOR EXPRESS
    // 'Authorization': `Token ${user.token}` // FOR RAILS
  },
data: {cart: {products: [id]}}}) //object should contain product id
      .then(response => {
          console.log("created cart",response)
      })
    }
    
    else  {
    // if cart already exists update cart with product id
     
    axios({url: `http://localhost:3010/cart`,method: 'PATCH', headers: {
    'Authorization': `Bearer ${this.props.user.token}` // FOR EXPRESS
    // 'Authorization': `Token ${user.token}` // FOR RAILS
  },
data: {cart: {products: id}}})  //object should contain product id
            .then(response => {
                console.log("UPDATED CART",response)
            })
    }
  })
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
const addToCart = this.addToCart
const that = this
    return this.state.products.map(function(currentProduct,i){
      return <Product user={that.props.user} product ={currentProduct} key={i} addToCart={()=>addToCart(currentProduct._id)} />;
    });
  }
    render(){
 console.log("user from products", this.props.user);
  return (
  
    <div className="Products-Container">
    <div className="Products-Wrapper">
    {this.productList()}
    {/* <button type="submit">Delete</button> */}
    </div>
    </div>   
   
  );
 }
};
export default Products;
