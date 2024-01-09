import React from 'react'
import Hero from '../Components/Hero';
import FeaturedDestination from '../Components/FeaturedDestination';
import MapDirection from '../Components/MapDirection';
import Testimonials from '../Components/Testimonials';
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer';

function Home() {
 
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <MapDirection />
      <Testimonials />
      <Subscribe />
    </>
  ) 
}

export default Home