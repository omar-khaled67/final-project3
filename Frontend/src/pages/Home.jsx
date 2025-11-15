import React from 'react'
import Navbar from './../components/Navbar';
import Hero from '../components/Hero';
import Featured from './../components/Featured';
import Contact from '../components/Contact';
import Footer from './../components/Footer';
import {Element} from "react-scroll"
import { Routes, Route } from 'react-router-dom';
import Statistics from '../components/Statistics';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';

function Home() {
  return (
    <div>
      
      <Hero/>
      <Statistics/>
      <FeaturesSection/>
      <HowItWorks/>
      <CTA/>
      
    </div>
  )
}

export default Home
 
   