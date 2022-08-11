import React from 'react'
import './sectiontitle.scss'
const SectionTitle = ({heading,subheading}) => {
  return (
    <div className="section-title">

    <h1>{heading}</h1>
        <h3>{subheading}</h3>
 </div>
  )
}

export default SectionTitle