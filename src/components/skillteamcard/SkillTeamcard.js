import React from 'react'
import './skillteamcard.scss'
import {motion} from 'framer-motion'
const SkillTeamcard = () => {
  return (

    <div className='skillteam-card'>
      <img src="https://res.cloudinary.com/anisx/image/upload/v1659270884/samples/animals/huston-wilson-WyDr1KFS23Y-unsplash_gl5z6b.jpg" alt="" />
     <div
      
       
      className="cardlear">
     <div className="icon">
                        <span><i class="fa-brands fa-facebook-f"></i></span>
                        <span><i class="fa-brands fa-instagram"></i></span>
                        <span><i class="fa-brands fa-linkedin-in"></i></span>
                    </div>
        <div className="text">

         <h2>jhon dew</h2>
          <h5>sr.Web Developer</h5>
        </div>
     </div>
    </div>
  )
}

export default SkillTeamcard