import React from 'react'
import SectionTitle from '../../components/sectiontitle/SectionTitle'
import  './servicedetails.scss'
const ServiceDetailspage = () => {
  return (
     <div className="service-details-wrapper">

    <div  className='servicedetails'>
    <div className="container">

      <div className="grid">
         <div className="left">
           <img src="https://res.cloudinary.com/anisx/image/upload/v1658040229/cld-sample.jpg" alt="" />
         </div>
         <div className="right">
                
                 <div className="service1">
                   <h3>Our sercice #1</h3>
                   <h1>Proceess of metel</h1>
                   <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem impedit iure quia quo recusandae?</h3>
                    <div className="works">
                      <h2>How we works?
                        </h2>
                        
                         <List/>
                         <List/>
                         <List/>
                         <List/>
                         <List/>
                         <List/>
                        
                      
                    </div>
                 </div>
           
         </div>
      </div>

     </div>

    </div>

    <div  className='servicedetails service2 '>
    <div className="container">

      <div className="grid">
        
         <div className="right">
                
                 <div className="service1">
                   <h3>Our sercice </h3>
                   <h1>Providing Service</h1>
                   <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem impedit iure quia quo recusandae?</h3>
                    <div className="works">
                      <h2>Our Working Process
                        </h2>
                        
                         <List/>
                         <List/>
                         <List/>
                         <List/>
                         <List/>
                         <List/>
                        
                      
                    </div>
                 </div>
           
         </div>
         <div className="left">
           <img src="https://res.cloudinary.com/anisx/image/upload/v1658040229/cld-sample.jpg" alt="" />
         </div>
      </div>

     </div>

    </div>

    <div  className='servicedetails'>
    <div className="container">

      <div className="grid">
         <div className="left">
           <img src="https://res.cloudinary.com/anisx/image/upload/v1658040229/cld-sample.jpg" alt="" />
         </div>
         <div className="right">
                
                 <div className="service1">
                   <h3>Our sercice #1</h3>
                   <h1>Proceess of metel</h1>
                   <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem impedit iure quia quo recusandae?</h3>
                    <div className="works">
                      <h2>How we works?
                        </h2>
                        
                         <List/>
                         <List/>
                         <List/>
                         <List/>
                         <List/>
                         <List/>
                        
                      
                    </div>
                 </div>
           
         </div>
      </div>

     </div>

    </div>


      
     <div className="plan  servicedetails service2">
      <div className="container">

          <SectionTitle  heading={'Our Budget Plan'} subheading={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'} />
           <div className="plan-grid">
              {
                [1,2,3].map((item)=>(
               <div className="item">
                   <PlanCard/>
               </div>
                ))
              }

      </div>
           </div>
     </div>



    </div>
  )
}

export default ServiceDetailspage



function  List() {
    return(
       <div className="list">
          <span><i class="fa-solid fa-check"></i></span>
           <span>Your Business Skills But </span>
       </div>
    )
}







function PlanCard() {
  
   return(
    <div className="plancard">
        
          <h2>Basic</h2>
          <h1>$45</h1>
          <h3>USD Per Month</h3>
           <div className="name">
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
           </div>
           <button> PURCHASE NOW</button>
    </div>
   )
}