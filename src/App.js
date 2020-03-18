import React, {Component} from 'react';
import './App.css';
import ProductList from './components/product-list';
import Productdetails from './components/product-details';
import { withCookies } from 'react-cookie';
import ProductForm from './components/product-form';

class App extends Component {

  state = {
    products: [],
    selectedProduct: null,
    editedProduct: null,
    token: this.props.cookies.get('name-token')

  }

  componentDidMount(){
    if (this.state.token) {
      fetch('http://127.0.0.1:8000/api/products/', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.state.token}`
      }
      }).then( resp => resp.json())
     .then( res => this.setState({products: res}))
      .catch( error => console.log(error))
    } else {
      window.location.href = '/';
    }
    
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
    this.setState({editedProduct: {title: '', brand: '', description: ''}});
  }

  cancelForm = () => {
    this.setState({editedProduct: null});
  }

  addProduct= product => {
    this.setState({products: [...this.state.products, product]});
  }

  render(){
    return (
      <div className="App">
          <h1>
            <span>MyMakeUp</span>
          </h1>
          <div className="layout">
            <ProductList products={this.state.products} productClicked={this.loadProduct} token={this.state.token}
              productDeleted={this.productDeleted} editClicked={this.editClicked} newProduct={this.newProduct}/>
            <div>
              { !this.state.editedProduct ? 
                <Productdetails product={this.state.selectedProduct} updateProduct={this.loadProduct} token={this.state.token}/>
              :   <ProductForm product={this.state.editedProduct} cancelForm={this.cancelForm}
              newProduct={this.addProduct} editedProduct={this.loadProduct} token={this.state.token}/> }
            </div>
      </div>
    
    </div>
  );
}
}

export default withCookies(App);
