import React from 'react';
import "./ProductList.css"
import ProductData from './ProductData';

const ProductList = () => {
  return (
    <div className="product__list">
        {ProductData.images.map((image, i) => (
        <div className="item" key={i}>
          <h3>{`${image.title}`}</h3>
          <img src={`${image.url}`} alt={image.description} key={i} />
        </div>
      ))}
    </div>
  )
}

export default ProductList;