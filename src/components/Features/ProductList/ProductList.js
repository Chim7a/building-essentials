import React from 'react';
import "./ProductList.css";
import ProductData from "./ProductData.json";

const ProductList = () => {
  return (
    <div className="product__list">
      {ProductData.images.map((image, i) => (
        <div className="products">
          <h1>{image.title}</h1>
        <img
        src={`${image.url}`}
        alt={image.description}/>
        </div>
      ))}
    </div>
  )
}

export default ProductList;