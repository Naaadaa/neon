import React, { Component } from 'react'
  import axios from 'axios';
  
  export default class CartItem extends React.Component {
    constructor(props){
      super(props);
        }
    state = {
      carts: []
    }
  
    componentDidMount() {
       // check if owner already has cart?
       if(this.props.user){
  axios({url: `http://localhost:3010/cart`,method: 'GET', headers: {
    'Authorization': `Bearer ${this.props.user.token}` // FOR EXPRESS
    // 'Authorization': `Token ${user.token}` // FOR RAILS
  }}) //object should contain product id
  .then(response => {
    
    
   const cart = response.data.carts.filter(cart=>{
     return cart.owner == this.props.user._id
   })
   this.setState({
    carts: cart
  });
console.log(cart);
  
// {this.state.carts}
    }
  )
    }}
        
      
   
  render() {
    let cart = ''
    if (this.state.carts.length > 0){
      for (let i=0;i<this.state.carts.length;i++){
       cart = this.state.carts[i].products.map(product=>{
        return  <div>
        
      {cart}
                         <thead>
                       <tr>
                          <th> {product.name} </th>
                          <th> {product.price} </th>
                          <img src={product.image}alt="Smiley face" height="42" width="42"/>
                         
                       
                       </tr>
                    </thead>
        </div>
        
      })
     } } else { cart = "loading"}
  
  return (
<div> 
<table className ="table table-striped" style={{marginTop:20}}>
                    <thead>
                       <tr>
                         <th> Product Name </th>
                      
                         <th> Price </th>
                         <th> Actions </th>
                       </tr>
                       {cart}
                    </thead>
                     <tbody>
                      <th> </th>
                      <th> </th>
                     <th>
                     <button onClick={ () =>
       axios.delete('http://localhost:3010/cart/'+this.cart.owner)
       
          .then(() => this.deleteItem(this.cart.owner))                    
          .catch(err => console.log(err)
          
          
          )
    }
    >Delete</button>
                     </th>
                     </tbody>
                  
                  </table>
                 
                  <ul>

  
  </ul>
</div>
  );
}};