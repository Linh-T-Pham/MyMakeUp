import React, {Component} from 'react';
import './App.css';
import ProductList from './components/product-list';
import Productdetails from './components/product-details';

class App extends Component {

  state = {
    products: [],
    selectedProduct: null
  }

  componentDidMount(){
    //fetch data
    fetch('http://127.0.0.1:8000/api/products/', {
      method: 'GET',
      headers: {
        'Authorization': 'Token 2a795c60cee426a6483657e2857d3bb08c8c4fd6'
      }
    }).then( resp => resp.json())
    .then( res => this.setState({products: res}))
    .catch( error => console.log(error))
  }

  productClicked = product => {
    this.setState({selectedProduct: product});
  }
  render(){
    return (
      <div className="App">
          <h1>MyMakeUP</h1>
          <div className="layout">
            <ProductList products={this.state.products} productClicked={this.productClicked}/>
            <Productdetails product={this.state.selectedProduct}/>
          </div>
      </div>
  );
}
}

export default App;
