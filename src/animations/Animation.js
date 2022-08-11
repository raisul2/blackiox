import React from 'react'
import {motion} from 'framer-motion'
const Animation = () => {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" >
    <motion.ellipse
         initial={{rx:10, ry: 100}}
         animate={{rx:80, ry:30}}
         transition={{duration:1, repeat:Infinity, repeatType:'reverse'}}
     cx="100" cy="100" fill="#B3261E"/>
    </svg>
  )
}

export default Animation