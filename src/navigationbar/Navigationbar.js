import React, { useState } from 'react'
import './navigarionbar.scss'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
const Navigationbar = () => {
 const [hidenav, setHidenav] = useState(false)
 const [Stickynav, setStickynav] = useState(false)
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  if (scrollPos > 100) {
          setStickynav(true)
        }else if(scrollPos < 30){
            
            setStickynav(false)
  }
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
  return (
    <div className={ Stickynav ? 'nav-wrapper fixed ' : 'nav-wrapper '  }  > 
    <div className="container">

        <div className="nav-grid">
             <div className="item-logo">
                <img src="img/logo.svg" alt="" />
             </div>
             <div className="item-navlink">
             <Desktopnav/>
             <span onClick={()=> setHidenav(true)}  ><i class="fa-solid fa-bars"></i></span>
           {
            hidenav  &&  <Mobilenav setHidenav={setHidenav} Stickynav={Stickynav} />
           }
            
                </div>
             </div>
        </div>
    </div>
  )
}

export default Navigationbar


function Mobilenav({setHidenav, Stickynav}) {
    return (
        <motion.div
         initial={{opacity:0,}}
         animate={{opacity:1,}}
         transition={{duration:.1,  ease:'backInOut' }}
         className="mobilenav">
         <span onClick={()=>setHidenav(false)}  style={{color:setHidenav ? 'black' : 'red'}} ><i class="fa-solid fa-xmark"></i></span>
         <div onClick={()=>setHidenav(false)} className="outherclick"></div>
         <div className="wrappers">
            <NavLinks setHidenav={setHidenav} />
            </div>
        </motion.div>
    )
}
function Desktopnav() {
    return (
        <div className="desktopnav">
         
      
            <NavLinks/>
      
        </div>
    )
}


function NavLinks({setHidenav}) {

    const navliksdata = [
        {
            name:'home',
            link:'/'
        },
        {
            name:'service',
            link:'service'
        },
        {
            name:'about',
            link:'about'
        },
        {
            name:'blog',
            link:'blog'
        },
        {
            name:'contact',
            link:'contact'
        },
    ]

     return(
          <>
           {
            navliksdata.map((item)=>(
           <NavLink to={item.link}
              
           >  <li onClick={()=>setHidenav(false)}>{item.name}</li></NavLink>
            ))
           }
          </>
     )
}