import React from 'react'
import Newscard from '../../components/newscard/Newscard'
import PageTitle from '../../components/pagetitle/PageTitle'
import SectionTitle from '../../components/sectiontitle/SectionTitle'
import './Blogpage.scss'
const BlogPage = () => {
  return (
    <div className='blog-page'>
    <PageTitle pagetitle={'Blog Page'} />
    <div className="bloglist container">

           <SectionTitle heading={'Blog list'}/>
             <div className="bloglist-grid">
                  
                  {
                    [1,2,3,4,5,6,7,8,8,10,11,12,13,14,15].map((item)=>(
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

export default BlogPage