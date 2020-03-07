import React, {Component} from 'react';
import './App.css';
import ProductList from './components/product-list';

class App extends Component {

  products = ['Eyebrow', 'Foundation', 'Eyeliner', 'Lip Gross'];

  componentDidMount(){
    //fetch data
    fetch('http://127.0.0.1:8000/api/products/', {
      method: 'GET',
      headers: {
        'Authorization': 'Token 2a795c60cee426a6483657e2857d3bb08c8c4fd6'
      }
    }).then( resp => console.log(resp))
    .catch( error => console.log(error))
  }
  render(){
    return (

      <div className="App">
          <h1>MyMakeUP</h1>
          <ProductList products={this.products}/>
      </div>
  );
}
}

export default App;
