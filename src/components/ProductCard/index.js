// components/ProductCard.js
import React from 'react';
import styles from './style.module.css';
import { useTheme } from '../ThemeContext';

const ProductCard = ({ product }) => {
  const { isDarkTheme } = useTheme();
  const { name, price, imageUrl } = product;

  const handleBuyNow = () => {
    alert(`Buying ${name} now!`);
    // Add logic for handling the "Buy Now" action
  };

  const handleAddToCart = () => {
    alert(`Adding ${name} to the cart!`);
    // Add logic for handling the "Add to Cart" action
  };

  return (
    <div className={`${styles.productCard} ${isDarkTheme ? styles.dark : styles.light}`}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{name}</h2>
        <p className={styles.productPrice}>${price}</p>
        <div className={styles.buttonsContainer}>
          <button onClick={handleBuyNow} className={styles.buyNowButton}>
            Buy Now
          </button>
          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
