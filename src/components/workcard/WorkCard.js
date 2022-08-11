import React from 'react'
import './workcard.scss'
import  {motion} from 'framer-motion' 
const WorkCard = () => {
  return (
    

    <div 
   
     className='work-card' >
      <img
    
       src="https://res.cloudinary.com/anisx/image/upload/v1659174468/abigail-keenan-99C5lrAyxpQ-unsplash_hbtoq9.jpg" alt="" />
        <div className="text-wrapper">
            <h4>Development</h4>
            <h3>Getting teckits to see big show</h3>
            <button>case study</button>
        </div>
    </div> 
    
  )
}

export default WorkCard