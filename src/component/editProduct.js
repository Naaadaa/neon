import React, {Component} from 'react';
import axios from 'axios';

export default class EditProduct extends Component {

    constructor(props) {
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

    onSubmit(e) {
        e.preventDefault();
        const obj = {
          name:this.state.name,
          color:this.state.color,
          image:this.state.image,
          price:this.state.price,
          description:this.state.description
        };
        axios.post('http://localhost:3010/products/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <h3>Update </h3>
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
        <input type="submit" value="Update Product " className="btn btn-primary" />
        </div>

         </form>
         </div> 
            </div>
        )
    }
}