import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from '../navigationbar/Navigationbar'
import About from '../sections/about-section/About'
import Footer from '../sections/footer/Footer'
import FunFacts from '../sections/funfacts/FunFacts'
import Hero from '../sections/hero-section/Hero'
import News from '../sections/news/News'
import Work from '../sections/ourwork/Work'
import Services from '../sections/servicves/Services'
import Testomonial from '../sections/testomonial/Testomonial'

const Home = () => {
  return (
    <div>


         <Hero/>
         <About/>
         <Services
           heading={'Our Servies'}
          subheading={'here are many vtions of passages of Lorem Ipsum available, but the majority have suffered. There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.'} />
         <Work/>
         <FunFacts/>
         <Testomonial/>
         <News/>
         
    </div>
  )
}

export default Home