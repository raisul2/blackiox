import { Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { black, blackLight } from '../Customvariable'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BentoIcon from '@mui/icons-material/Bento';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DraftsIcon from '@mui/icons-material/Drafts';
import { NavLink } from 'react-router-dom';


const Sidebar = ({ pageRefs }) => {


    return (
        <Stack gap={10} alignItems='center' width={1} m={{ xs: 0, md: 5 }} >
          
           {/**  <Typography textTransform='uppercase' variant="h2" display={{ xs: 'none', md: 'flex' }} textAlign='center' color={black}>blac<span style={{fontWeight:'300',
             color:blackLight
            }} >kiox</span></Typography>*/}
             <Stack display={{ xs: 'none', md: 'flex' }}>
                 <img src="https://via.placeholder.com/200x45.jpg" alt="" />
             </Stack>
            <Stack direction={{ xs: 'row', md: "column" }} gap={2.5} color={blackLight}   >
                <SidebarLInkName pageRefs={pageRefs} />
            </Stack>
            <Typography display={{ xs: 'none', md: 'flex' }} variant="body2" textAlign='center' color={blackLight}>© 2022 blackiox
                Created by  blackiox </Typography>
                
        </Stack>
    )
}

export default Sidebar



function SidebarLInkName({pageRefs }) {
    const sidebarlinkname = [
        {
            linkname: 'home',
            link: '/',
            icon: <HomeIcon />
        },
        {
            linkname: 'about',
            link: 'about',
            icon: <PersonIcon />
        },
        {
            linkname: 'portfolio',
            link: 'portfolio',
            link2: 'portfolio',
            icon: <BentoIcon />
        },
        {
            linkname: 'news',
            link: 'news',
            link2: 'news',
            icon: <ReceiptIcon />
        },
        {
            linkname: 'contact',
            link: 'contact',
            icon: <DraftsIcon />
        },
    ]
    
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({ behavior:'auto' });
  };

    const sidebarlinkstyle = {

        gap: { xs: 0, md: .5 },
        alignItems: { xs: 'center', md: 'center' },
        justifyContent: { xs: 'center', md: 'start' },

    }
    let activeStyle = {
        color: black

    }
    let unactiveStyle = {
        color: blackLight

    }
    return (
        <>
            {
                sidebarlinkname.map((item, index) => (
                    
                    <NavLink  style={({ isActive }) =>
                        isActive ? activeStyle : unactiveStyle
                    } to={item.link} >
                        <Stack  onClick={() => scrollIntoView(item.linkname === 'portfolio' ? 'news' : 'portfolio'  )} direction={{ xs: 'column', md: 'row' }} sx={sidebarlinkstyle}  >
                            <span>{item.icon}</span>

                            <Typography variant='h6' textTransform='capitalize' >{item.linkname}</Typography>
                        </Stack>
                    </NavLink>

                ))
            }

        </>
    )

}