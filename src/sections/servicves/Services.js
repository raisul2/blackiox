import React from 'react'
import SectionTitle from '../../components/sectiontitle/SectionTitle'
import ServiceCard from '../../components/servicecard/ServiceCard'
import './services.scss'
const Services = ({heading, subheading}) => {
  return (
    <div  className='services' >
     <div className="container">
        <div className="service-grid">
           <SectionTitle  heading={heading}

            subheading={subheading}
           />
            <div className="item-cards">
            <div className="item-cards-grid">

                 {
                    [1,2,3,4,5,6,7,8,9].map((itme)=>(
                        <div className="item">
                            <ServiceCard/>
                        </div>
                    ))
                 } 
            </div>
            </div>
        </div>
     </div>

    </div>
  )
}

export default Services