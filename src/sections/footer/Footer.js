import React from 'react'
import './footer.scss'
const Footer = () => {
  return (
 

       <div className="footer">
       <div className="container">

            <div className="top">
                <h2>Enough Talk, Let's Build Something Together</h2>
                 <button>contact</button>
            </div>
                <div className="item">

            <div className="bottom">
                <div className="left">
                    <div className="logo">
                     <img src="img/logo.svg" alt="" />
                    </div>
                     <h5>Copyright © 2022 All rights reserved by Rainbow-Themes. Built with love in Bangladesh All rights reserved.</h5>
                </div>
                <div className="link">
                  <Footerlink/>
                </div>
                <div className="link">
                  <Footerlink/>
                </div>

                <div className="sayhellow">
                   <h3>Say Hellow</h3>
                   <div className="text">

                   <h5>Email: admin@example.com</h5>
                   <h5>Email: admin@example.com</h5>
                   <h5>phone:0329430 3294 8323</h5>
                   </div>
                    <div className="icon">
                        <span><i class="fa-brands fa-facebook-f"></i></span>
                        <span><i class="fa-brands fa-instagram"></i></span>
                        <span><i class="fa-brands fa-linkedin-in"></i></span>
                    </div>
                </div>
            </div>
            
       </div>
                </div>
       </div>

    
  
  )
}

export default Footer




function Footerlink() {
   
    return (
      <div className="footerlink">
         <h3>Quick Link</h3>
          <h5>portfolio</h5>
          <h5>about</h5>
          <h5>our blog</h5>
          <h5>our team</h5>
          <h5>contact</h5>
      </div>
    )
}