import React from 'react'
import { Link } from 'react-router-dom'
import './servicecard.scss'
const ServiceCard = () => {
  return (
    <Link to='servicedetails' >


    <div className='service-card-wrapper'>
            <span><i class="fa-solid fa-industry"></i></span>
           <h3>businessStratagy</h3>
           <h5>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</h5>
    </div>
    </Link>
  )
}

export default ServiceCard