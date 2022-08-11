import React from 'react'
import ContactinfoCard from '../../components/contactinfocard/ContactinfoCard'
import PageTitle from '../../components/pagetitle/PageTitle'
import './contactpage.scss'
const ContactPage = () => {
  return (
    <div className='contact-page  '>
          <PageTitle pagetitle={'Contact Page'} />
          <div className="wrapper-contact  ">
                  <div className="container">

           <div className="contact-info ">
               {
                [1,2,3].map((itme)=>(
                      <div className="item">
                        <ContactinfoCard/>
                      </div>
                ))
               }
          </div>
                  </div>
           </div>



            <div className="text-fild-container ">
            <div className="container padding ">
            <div className="textfild-grid">

            
                 <div className="left">
                   <h1>Contact Us.</h1>
                   <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</h5>
                    <div className="text-filds">
                      <input type="text" placeholder='Your Name' />
                      <input type="email" placeholder='Your Email' />
                      <input type="number" placeholder='Your Phone Number' />
                      <input type="text" placeholder='Subject' />
                       <textarea name="" id=""
                       placeholder='Messages'
                        cols="30" rows="5"></textarea>
                     <button>submit now</button>
                    </div>
                 </div>
                 <div className="right">
                       <div className="img">
                        <img src="https://res.cloudinary.com/anisx/image/upload/v1659292199/samples/animals/alexander-andrews-JYGnB9gTCls-unsplash_dqpx3p.jpg" alt="" />
                       </div>
                 </div>
            </div>
            </div>
            </div>


    </div>
  )
}

export default ContactPage