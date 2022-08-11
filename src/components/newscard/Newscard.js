import React from 'react'
import './newscard.scss'
import  {motion} from 'framer-motion' 
import { Link } from 'react-router-dom'
const Newscard = () => {
  return (
   <Link  to='blogdetails' >

    <div 
      
     className='news-card' >
      <img
    
       src="https://res.cloudinary.com/anisx/image/upload/v1659174468/abigail-keenan-99C5lrAyxpQ-unsplash_hbtoq9.jpg" alt="" />
        <div className="text-wrapper">
            <h4>Development</h4>
            <h3>Getting teckits to see big show</h3>
            <button>read more</button>
        </div>
    </div> 
   </Link>
  )
}

export default Newscard