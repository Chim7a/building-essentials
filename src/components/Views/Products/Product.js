import React from 'react';
import FilterBtn from '../../Features/FilterBtn/FilterBtn';
import ProductList from '../../Features/ProductList/ProductList';
import Navigation from '../Navigation/Navigation';
import './Product.css';
import ProductData from './ProductData';

const Product = () => {
  return (
    <div className="Product__filter">
      <Navigation/>
      <FilterBtn />
      <ProductList />
    </div>
  )
}

export default Product;