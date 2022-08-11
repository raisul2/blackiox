import React from 'react'
import ServiceCard from '../../components/servicecard/ServiceCard'
import './hero.scss'
import {motion} from 'framer-motion'
const Hero = () => {
    const animationdta = [
        {
            top:10, 
            topa:200,
            right:50,
            righta:50, 
        },
        {    
            top:200,
            topa:10,
            right:150,
            righta:150,
        },
        {
            top:10,
            topa:200,
            right:250,
            righta:250
        },
     
    ]
  return (
    <div className='hero'>
 
    
    <div className='container hero-section '>
  

               <h1>Design Driven Development Your Web Products.</h1>
          <div className="hero-grid">
             {
                [1,2,3].map((item)=>(
              <div className="item">
               <HomeDisplay/>
              </div>                 

                ))
             }

   
          </div>
          </div>
    </div>
  )
}

export default Hero



function  HomeDisplay() {
  
     return(
           <div className="homedisplay">
             <span><i class="fa-solid fa-award"></i></span>
              <h2>Awarded Design</h2>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque numquam, </h5>
           </div>
     )
}