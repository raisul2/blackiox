import React from 'react'
import './about.scss'
const About = () => {
  return (
    <div  className='about'>
      <div className="container">
            <div className="about-grid">
                 <div className="item-image">
              
                    <div className="img">

                     <img src="https://res.cloudinary.com/anisx/image/upload/v1659270884/samples/animals/huston-wilson-WyDr1KFS23Y-unsplash_gl5z6b.jpg" alt="" />
                    </div>
              
                 </div>
                 <div className="item-text">
                    <h1>About</h1>
                    <h3>There are many variations of passages of Lorem available</h3>
                    <h5>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.
There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</h5>
                    <div className="sub-text-wrap">
                     {
                        [1,2].map((item)=>(
                            <div className="item">
                                <h2>Who we are</h2>
                                <h5>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.
There are </h5>
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

export default About