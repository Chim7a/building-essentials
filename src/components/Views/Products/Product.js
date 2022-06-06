import React from 'react';
import FilterBtn from '../../Features/FilterBtn/FilterBtn';
import ProductList from '../../Features/ProductList/ProductList';
import Navigation from '../Navigation/Navigation';
import './Product.css';

const Product = () => {
  return (
    <div className="Product">
      <Navigation/>
      <div className="Product__filter">
        <FilterBtn />
        <div className="Product__list">
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Product;