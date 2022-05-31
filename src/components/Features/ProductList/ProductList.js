import React from 'react';
import LogoGold from '../../Assets/LogoGold.png';
import "./ProductList.css"

const ProductList = () => {
  return (
    <div className="product__list">
        <h3>Title</h3>
        <img src={LogoGold} alt="logo" />
    </div>
  )
}

export default ProductList;