import React, { Component } from 'react'
import axios from 'axios'; 

class Product extends Component {

  constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this); 
    this.onSubmit = this.onSubmit.bind(this); 

  
    this.state={
      name: '',
      color: '',
      image: '',
      price: '',
      description:''

    }
  }

// ------------ Updating ---------- 
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeColor(e) {
    this.setState({
      color: e.target.value
    });
  }


  onChangeImage(e) {
    this.setState({
      image: e.target.value
    });
  }


  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  // handling submit method 
  onSubmit(e){
    e.preventDefault(); 
     console.log(`Submitted`);
     console.log(`name: ${this.state.name}`);
     console.log(`color: ${this.state.color}`);
     console.log(`image: ${this.state.image}`);
     console.log(`price: ${this.state.price}`);
     console.log(`description: ${this.state.description}`);
     
     const newProduct ={
       name:this.state.name,
       color:this.state.color,
       image:this.state.image,
       price:this.state.price,
       description:this.state.description
    }

    axios.post('http://localhost:3010/products/add',newProduct)
    .then(res=> {
      console.log(res.data)
    });
    

    this.setState({

      name: '',
      color: '',
      image: '',
      price: '',
      description:''
    
    })
  }


 render(){
  return (
      <div> 
       <h3> create product </h3>
       <div style={{marginTop: 20}}>
         <form onSubmit={this.onSubmit}> 
            <div className="form-group">
                <label> Product </label>
                 <input type="text" className="form-control"
                 value={this.state.name} 
                 onChange={this.onChangeName} /> 
            </div>
        

            <div className="form-group">
               <label> Color </label>
               <input type="text" className="form-control"
               value={this.state.color} 
               onChange={this.onChangeColor} /> 
            </div>

            <div className="form-group">
              <label> Image </label>
              <input type="text" className="form-control"
              value={this.state.image} 
              onChange={this.onChangeImage} /> 
            </div>

            <div className="form-group">
            <label> Price </label>
            <input type="text" className="form-control"
            value={this.state.price} 
            onChange={this.onChangePrice} /> 
          </div>

          <div className="form-group">
          <label> Description </label>
          <input type="text" className="form-control"
          value={this.state.description} 
          onChange={this.onChangeDescription} /> 
        </div>
           
        <div className="form-group">
        <input type="submit" value="Create Product " className="btn btn-primary" />
        </div>

         </form>
       
       </div>
      </div> 
       
  );
    }
};



export default Product;