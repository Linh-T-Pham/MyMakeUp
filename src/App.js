import React, {Component} from 'react';
import './App.css';
import ProductList from './components/product-list';
import Productdetails from './components/product-details';
import ProductForm from './components/product-form';

class App extends Component {

  state = {
    products: [],
    selectedProduct: null,
    editedProduct: null

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

  loadProduct = product => {
    this.setState({selectedProduct: product, editedProduct: null});
  }

  productDeleted = selected_product => {
    const products = this.state.products.filter(product => product.id !== selected_product.id);
    this.setState({products: products, selectedProduct: null})
  }

  editClicked = select_Product => {
    this.setState({editedProduct: select_Product});

  }

  newProduct = () => {
    this.setState({editedProduct: {title: '', description: ''}});
  }

  cancelForm = () => {
    this.setState({editedProduct: null});
  }

  render(){
    return (
      <div className="App">
          <h1>MyMakeUP</h1>
          <div className="layout">
            <ProductList products={this.state.products} productClicked={this.loadProduct}
              productDeleted={this.productDeleted} editClicked={this.editClicked} newProduct={this.newProduct}/>
            <div>
              { !this.state.editedProduct ? 
                <Productdetails product={this.state.selectedProduct} updateProduct={this.loadProduct}/>
              : <ProductForm product={this.state.editedProduct} cancelForm={this.cancelForm}/> }
            </div>
      </div>
    
    </div>
  );
}
}

export default App;
