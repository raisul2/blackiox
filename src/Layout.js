import React, { useRef } from 'react'
import { Grid } from '@mui/material'
import { white, whiteDark } from './Customvariable'
import Sidebar from './pages/Sidebar'
import { Outlet } from 'react-router-dom'


const Layout = ({ pageRefs }) => {

  const sidebarlayoutstyle = {
    height: { xs: '10vh', md: '100vh' },
    width: { xs: 1, md: 0 },
    bgcolor: white,
    boxShadow: 2,
    alignItems: 'center',
    justifyContent: 'center',
    py: .5,


  }

  const pagelaoutstyle = {

    height: { xs: '90vh', md: '100vh' },
    overflow: 'auto',
    bgcolor: whiteDark,

  }




  return (
    <Grid container position='fixed' zIndex={100} justifyContent='space-between' >
      {/** sidebar layout  */}
      <Grid item container sx={sidebarlayoutstyle} order={{xs:2,md:1}} md={2}>
        <Sidebar pageRefs={pageRefs}  />
      </Grid>
      {/** pagelaout layout  */}
      <Grid  item  sx={pagelaoutstyle} xs={12} md={10} order={{xs:1, md:2}} >
        <Outlet />
      </Grid>
    </Grid>
  )
}     

export default Layout