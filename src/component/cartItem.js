import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios';


const CartItems = props => {
  return(

<table className ="table table-striped" style={{marginTop:20}}>
                    <thead>
                       <tr>
                         <th> {props.cart}  </th>
                         <th> Price </th>
                         <th> Quantity </th>
                         <th> Actions </th>
                       </tr>
                     
                    </thead>

                     <tbody>
                      <th> </th>
                      <th> </th>
                      <th> </th>
                     <th>
                     <button type="button" class="btn btn-secondary btn-danger">Delete</button>

                     </th>
                     </tbody>
                  
                  </table>

  )
 
};


class CartItem extends Component {

  constructor(props){
    super(props);
    this.state = { cart:[] };
  
  }



   // retrive the data from database 
  componentDidMount(){
    axios.get('http://localhost:3010/cart/')
    .then(response=>{
      this.setState({cart: response.data})
      console.log(response.data); 
    }) 
    .catch(function(error){
      console.log(error);
    })

  }
  cartList(){
    return this.state.cart.map(function(currentProduct,i){
      return <CartItems cart={currentProduct} key={i} />;
    });
  }



render(){
  return(
  <div> 
    {this.cartList()}
    </div>
   

  )
}
}


export default CartItem;