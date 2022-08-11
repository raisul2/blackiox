import React from 'react'
import PageTitle from '../../components/pagetitle/PageTitle'
import Services from '../../sections/servicves/Services'
import './servicepage.scss'
const ServicePage = () => {
  return (
    <div className='main-sercice-page' > 
    <div>
    <PageTitle  pagetitle={'ServicePage'} />
         <Services heading={'Digital Marketing'} subheading={'There are many vtions of passages of Lorem Ipsum available, but the majority have suffered. There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.'} />
    </div>
    <div>

         <Services 
           
          heading={'Strategy'} subheading={'There are many vtions of passages of Lorem Ipsum available, but the majority have suffered. There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.'} />
         
    </div>
    <div>

         <Services 
           
          heading={'Creative Agency'} subheading={'There are many vtions of passages of Lorem Ipsum available, but the majority have suffered. There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.'} />
         
    </div>
    <div>

         <Services 
           
          heading={'Development'} subheading={'There are many vtions of passages of Lorem Ipsum available, but the majority have suffered. There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.'} />
         
    </div>

    </div>
  )
}

export default ServicePage