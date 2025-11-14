"use client";
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Restuarant from '../Restuarant/Restuarant';
import Category from './Category/Category';
import HowitWork from './HowitWork/HowitWork';
import About from './About/About';
import Feature from './Feature/Feature';
import ClientReview from './Clinet Review/ClientReview';
import MobileApp from './MobileAPp/MobileApp';


import AOS from "aos";
import "aos/dist/aos.css";




const Home = () => {

useEffect(() => {
  const initAOS = async () => {
    await import("aos");
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }

   initAOS();
}, [])


  return (
    <div className='overflow-hidden '>
    <Hero />
    <Restuarant />
    <Category  />
    <HowitWork />
    <About />
    <Feature />
    <ClientReview />
    <MobileApp />
    </div>
  )
}

export default Home;