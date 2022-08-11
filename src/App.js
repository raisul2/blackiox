import React, { useEffect, useState,useLayoutEffect, useRef } from 'react'
import { Box, Stack } from '@mui/material'
import Layout from './Layout'
import { HashRouter as Router , Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import News from './pages/News'
import Contact from './pages/Contact'
import About2 from './pages/About2'
import News2 from './pages/News2'
import Portfolio2 from './pages/Portfolio2'
import GridLoader from 'react-spinners/GridLoader'
import { black } from './Customvariable'

const App = () => {



  const pageRefs = useRef({});
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => (
      setLoading(false)
    ), 4000)
  }, [])


  
  return (
    <Box>



      {
        loading ? (
          <Stack height='100vh' alignItems='center' justifyContent='center' >
            <GridLoader color={black} loading={loading} size={20} />
          </Stack>
        ) : (


     <Router> 
            <Routes>
              <Route path='/' element={<Layout  pageRefs={pageRefs} />}>

                <Route index element={<Home />} />
                <Route path='about' >

                  <Route index element={<About  pageRefs={pageRefs} />} />
                  <Route path='about2' element={<About2 />} />
                </Route>
                <Route path='portfolio'>
                  <Route index element={<Portfolio pageRefs={pageRefs} />} />
                  <Route path='portfolio2' element={<Portfolio2 />} />
                </Route>
                <Route path='news'>
                  <Route index element={<News pageRefs={pageRefs}/>} />
                  <Route path='news2' element={<News2 />} />
                </Route>
                <Route path='contact' element={<Contact />} />

              </Route>

            </Routes>
            </Router>
        
        )

      }
    </Box>
  )
}

export default App




