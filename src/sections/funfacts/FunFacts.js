import React from 'react'
import FunFactsCard from '../../components/funfactscard/FunFactsCard'
import SectionTitle from '../../components/sectiontitle/SectionTitle'
import './funfacts.scss'
const FunFacts = () => {
  return (
    <div className='funfacts'>
     <div className="container">
        <SectionTitle heading={'Our Fun Facts'}/>
        <div className="funfacts-grid">

            {
                [1,2,3].map((item)=>(
                    <div className="item">

                    <FunFactsCard/>
                    </div>
                ))
            }
        </div>
     </div>


    </div>
  )
}

export default FunFacts