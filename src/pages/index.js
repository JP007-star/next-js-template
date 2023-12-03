
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider';
import ProductCard from '@/components/ProductCard';
import ProductSlider from '@/components/ProductSlider';
import { ThemeProvider, useTheme } from '@/components/ThemeContext';
import ThemeForm from '@/components/ThemeForm';
import { HomeContainer } from '@/components/HomeContainer';



export default function Home() {
  
  return (
    <>
    <ThemeProvider>
     <HomeContainer/>
    </ThemeProvider>
    
    </>
  )
}
