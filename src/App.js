import React from 'react'
import Animation from './animations/Animation'
import './app.scss'
import {HashRouter as Router , Routes , Route} from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import ServicePage from './pages/servicepage/ServicePage'
import AboutPage from './pages/aboutpage/AboutPage'
import BlogPage from './pages/blogpage/BlogPage'
import ContactPage from './pages/contactpage/ContactPage'
import ServiceDetailspage from './pages/servicedetails/ServiceDetailspage'
import BlogDetailspage from './pages/blogdetails/BlogDetailspage'
import ScrollTop from './Scrolltop'
const App = () => {
  return (
     <div className="app">
    <Router>
    <ScrollTop/>
    <Routes>
        <Route element={<Layout/>} >
             <Route index element={<Home/>} />
             <Route path='service' >
              
             <Route index element={<ServicePage/>}/>
             <Route  path='servicedetails' element={<ServiceDetailspage/>}/>
             </Route>
             <Route path='servicedetails' element={<ServiceDetailspage/>}/>
              
             <Route path='about' element={<AboutPage/>} />
             <Route path='blog'  >
             <Route  index element={<BlogPage/>} />
             <Route  path='blogdetails' element={<BlogDetailspage/>}>
             <Route  index element={<BlogDetailspage/>} />

             </Route>

             </Route>
             <Route  path='blogdetails' element={<BlogDetailspage/>} />
             <Route path='contact' element={<ContactPage/>} />
            
        </Route>
    </Routes>
    </Router>
     </div>
  )
}

export default App