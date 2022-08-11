import { Stack, Typography, Button } from '@mui/material'
import React from 'react'
import { black, blackLight, white } from '../Customvariable'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from 'framer-motion'
import { slideType } from '../Animation';

const HomeStyle = {
  HomeWrap: {
    borderRadius: 3,
    p: { md: 7, xs: 3 },
    bgcolor: white,
    justifyContent: 'space-between',
    minHeight: '60vh',
    width: 1,
    boxShadow: 2
  },
  icontAndbuttonWraper:{
     justifyContent:'space-between',
     gap:3
  },
  iconStyle:{
    cursor: 'pointer', '&:hover': {
      bgcolor: blackLight
    },bgcolor:black, p:1, borderRadius:100 ,color:white
  },

 
   
}



const Home = () => {




  return (
    <Stack
      component={motion.div}
      variants={slideType}
      initial='hidden'
      animate='animate'
      transition={{ duration: 1, type: 'spring' }}
      className='container-fluid' alignItems='center' minHeight={1} justifyContent='center' >
      <Stack sx={HomeStyle.HomeWrap} >
        <Stack>
          {/**title */}
          <Typography variant="h1" color={black}>
            Hello world <br />
            I am a Front End Developer
          </Typography>
          {/** sub title */}
          <Typography variant="h3" my={3} color={blackLight}>
            I create an efficient UI mobile or web design also UX research to make sure that I get what people needs and strategy for interaction design.
          </Typography>
        </Stack>

        {/**  main icon and button  wraper */}
        <Stack   alignItems={{ md: 'center', xs: 'start' }}   direction={{ sm: 'row', xs: 'column' }}  sx={HomeStyle.icontAndbuttonWraper}  >
          {/**  button   */}
         <a href="">
          <Button variant="contained" color='primary' >
            download cv
          </Button>
         </a>
          {/**  icon wraper   */}
          <Stack direction='row' gap >
            {/**  icon box */}
            <IconBox />
         
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Home

const icondata = [
  {
   icon: <FacebookIcon fontSize='small' />,
   link:''

  },
  {
    icon:<InstagramIcon fontSize='small' />,
    link:''

  },
  {

   icon: <GitHubIcon fontSize='small' />,
   link:''
  },
  {
   icon: <TwitterIcon fontSize='small' />,
   link:''

  }

]

function IconBox() {
  return (
    <>
      {
        icondata.map((item, index) => (
        <a href={item.link}>
          <Stack key={index}
            sx={HomeStyle.iconStyle}
            component={motion.div}
            initial={{ scale: index - 1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', delay: index / 2 }}>
            {/** icon set up  */}
            {item.icon}
          </Stack>
        </a>
        ))
      }

    </>
  )
}