 
import React, { Component } from 'react'
import './ProductDetails.scss';
import axios from 'axios'; 

 class ProductDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
        name: '',
        color: '',
        image: '',
        price: '',
        description:''
  
    };
  }


  componentDidMount() {
    axios.get('http://localhost:3010/products/'+this.props.match.params.id)
        .then(response => {
            this.setState({
              name: response.data.name,
              color: response.data.color,
              image: response.data.image,
              price: response.data.price,
              description:response.data.description   
            })
        })
        .catch(function(error) {
            console.log(error)
        })
}

  render() {
    return (
    <main className="containeri">
   
    

      <img src={this.state.image} className="Product-Image1" />
 
  
    <div className="right-column">

      <div className="product-description">
  
        <h1> {this.state.name}</h1>
        <p> {this.state.description}</p>
      </div>

      <div className="product-configuration">

        <div className="cable-config">
          <span>Size</span>
          <div className="cable-choose">
          <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
        </div>
      </div>
      {/* Product Pricing */}
      <div className="product-price">
        <span>{this.state.price} SR</span>
        <a href="#" className="cart-btn">Add to cart</a>
      </div>
    </div>
  </main>
       
  );
    }
};



export default ProductDetails;

