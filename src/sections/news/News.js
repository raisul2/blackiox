import React from 'react'
import Newscard from '../../components/newscard/Newscard'
import SectionTitle from '../../components/sectiontitle/SectionTitle'
import './news.scss'
const News = () => {
  return (
    <div className='news'>
    <div className="container">
    <SectionTitle   heading={'Latest News'} subheading={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'} />
       <h3 className='view'>View all</h3>
        <div className="news-grid">
            {
                [1,2,3].map((item)=>(
                    <div className="item">
                         <Newscard/>
                    </div>
                ))
            }
        </div>
    </div>


    </div>
  )
}

export default News