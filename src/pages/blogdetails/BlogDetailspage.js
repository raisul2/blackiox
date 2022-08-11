import React from 'react'
import Newscard from '../../components/newscard/Newscard'
import SectionTitle from '../../components/sectiontitle/SectionTitle'
import './blogdetails.scss'
const BlogDetailspage = () => {
  return (
    <div>
        <div className="container">

       <div className="blog-details">

        <div className="img">
          <img src="https://res.cloudinary.com/anisx/image/upload/v1658040229/cld-sample.jpg" alt="" />
        </div>
        <h2>THis is the blog title and this is just exmple</h2>
        <h5>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.
        </h5>
        <BlogDetailcode/>
        <h5>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.
        </h5>
       </div>

     

           
        </div>
        <div className="related-blog">

 <div className="container">

<SectionTitle heading={'Related Blogs '} />
<div className="related-grid">
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
    </div>
  )
}

export default BlogDetailspage

function BlogDetailcode() {
        
  return(
     <div className="blogcode">
       <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed cupiditate culpa porro beatae, optio voluptatum qui ratione corrupti quam debitis modi nobis! Magnam hic odit, iusto officiis quia ab.</h3>
     </div>
  )
}


