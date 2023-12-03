// components/ProductSlider.js
import React, { useState } from "react";
import styles from "./style.module.css"; // Import the CSS Module
import ProductCard from "../ProductCard";

const ProductSlider = ({ products }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.productSliderContainer}>
      <div className={styles.productSlider}>
        {products.map((product, index) => (
          <div
            key={index}
            className={`${styles.productSlide} ${
              index === currentProductIndex ? styles.active : ""
            }`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrow} onClick={prevProduct}>
          &lt;
        </button>
        <button className={styles.arrow} onClick={nextProduct}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
