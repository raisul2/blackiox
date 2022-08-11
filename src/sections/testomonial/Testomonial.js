import React, { useState } from 'react'
import TestomonialCard from '../../components/teasomonialcard/TestomonialCard'
import './testomonial.scss'
 // Import Swiper React components
 import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
 import "swiper/css";      
 import "swiper/css/pagination";
 
 
 // import required modules
 import { Pagination,Autoplay} from "swiper";
const Testomonial = () => {

  
      const data = [
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
        {
           text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod eius voluptatum animi repellendus maiores? Velit, est voluptas maiores iusto ex quam perferendis tempora officiis excepturi aliquam. Dicta, necessitatibus architecto.',
           name:'JOHANDOECEO, OF GOOGLE',
           img:''
        },
      ]

      const [avaterActive, setAvaterActive] = useState(data)



  return (
    <div className='testomonial'>
    <div className="container">
  

    <Swiper
     
     slidesPerView={1}
     spaceBetween={30}
   
   autoplay={{
     delay: 3500,
     disableOnInteraction: false,
     }}
     modules={[Pagination,Autoplay]}
     className="mySwiper"
   >

                 {
                    avaterActive.map((item, index)=>(
                     
                        <SwiperSlide>
                        <TestomonialCard/>
                        </SwiperSlide>
                        
                    ))
                 }                    
   </Swiper>
            
    </div>

    </div>
  )
}

export default Testomonial



