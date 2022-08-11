import React from 'react'
import WorkCard from '../../components/workcard/WorkCard'
import './work.scss'
import {motion} from 'framer-motion'
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";      
import "swiper/css/pagination";


// import required modules
import { Pagination,Autoplay} from "swiper";
import SectionTitle from '../../components/sectiontitle/SectionTitle';

const Work = () => {
  return (
    <div className='work'>
    <div className="container">
 
        <SectionTitle heading={'Our Works'} 
          subheading={'There are many vtions of passages of Lorem Ipsum available, but the majority have suffered. There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.'}
         />
         
          <Swiper
     
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
        320: {
         
          slidesPerView: 1,
        },
        768: {
          
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >

            {
                [1,2,3,4,5,6,7,8,9,10].map((item)=>(

                  <SwiperSlide>
                <WorkCard/>
              
                 
                  </SwiperSlide>
                ))
            }
      </Swiper>
    </div>
       
          </div>

  
  )
}

export default Work