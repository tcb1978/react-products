import React, { Component } from 'react';
import ProductComponent from './ProductComponent';
import './App.css';
import products from './Products'

class App extends Component {
  render() {
    const ProductList = products.map( product => <ProductComponent
      name={product.name}
      price={product.price}
      description={product.description}
      key={product.id}
    />)
    return (
      <div className="App">
        {ProductList}
      </div>
    );
  }
}

export default App;
