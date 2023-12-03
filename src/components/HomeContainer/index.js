import React from 'react'
import Header from '../Header'
import Slider from '../Slider'
import ProductCard from '../ProductCard'
import Footer from '../Footer'
import { useTheme } from '../ThemeContext'
import styles from './style.module.css';

/**
* @author
* @function HomeContainer
**/

export const HomeContainer = (props) => {
    const { isDarkTheme, toggleTheme } = useTheme();

  const product={
     name:"name", price :"price", imageUrl :"url" 
  }
  const products=[product,product];
  const images = [
    'https://placehold.co/1400x300.jpg',
    'https://placehold.co/1200x300.jpg',
    'https://placehold.co/1300x300.jpg',
  ];
  return(
    <div className={isDarkTheme ? styles.darkContainer : styles.lightContainer}>
    <Header />
    <Slider images={images} />
    <ProductCard product={product} />
    <Footer />
  </div>
   )

 }