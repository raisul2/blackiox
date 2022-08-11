import React from 'react'
import './pagetitle.scss'
const PageTitle = ({pagetitle}) => {
  return (
    <div  className='pagetitle'>
          
          <h1>{pagetitle}</h1>
    </div>
  )
}

export default PageTitle