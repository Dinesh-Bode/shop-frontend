import React from 'react';
import '../css/ProductCard.css' // Optional for styling
import spadikaMalaImage from '../images/SPADIKA_MALA1.jpg'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={spadikaMalaImage} alt={product.productName} className="product-image" />
      <h3 className="product-name">{product.productName}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">Price: ${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default ProductCard;