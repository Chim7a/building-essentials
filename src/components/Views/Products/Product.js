import React, { useState } from 'react';
import FilterBtn from '../../Features/FilterBtn/FilterBtn';
import ProductList from '../../Features/ProductList/ProductList';
import Navigation from '../Navigation/Navigation';
import './Product.css';

const Product = () => {
  const [refiners, setRefiners] = useState([])
  
  const handleRefiner = (value) => {
    const currentRefiners = refiners
    const found = currentRefiners.find(refiner => refiner === value)
    if (!found) {
      currentRefiners.push(value)
      return setRefiners(currentRefiners)
    }
    if (found) {
      const index = currentRefiners.indexOf(found)
      currentRefiners.splice(index, 1)
      return setRefiners(currentRefiners)
    }
  }

  return (
    <div className="Product">
      <Navigation/>
      <div className="Product__filter">
        <div className="Product__container">
        <FilterBtn
        setRefiners = { (value) => handleRefiner(value) }
        />
        <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Product;