import React, {Component} from 'react';
import './App.css';
import ProductList from './components/product-list';

class App extends Component {

  products = ['Eyebrow', 'Foundation', 'Eyeliner', 'Lip Gross'];

  componentDidMount(){
    //fetch data 
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
