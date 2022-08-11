import { Grid, Stack, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { black, blackLight, white, whiteDark } from '../Customvariable'
import { motion } from 'framer-motion'
import { opacityType } from '../Animation'
const About = ({ pageRefs }) => {

  
   return (
      <Stack ref={el => pageRefs.current = { ...pageRefs.current, about: el }} alignItems='center' justifyContent='center' minHeight='100vh' py={8} >



         <Stack
            component={motion.div}
            variants={opacityType}
            initial='hidden'
            animate='animate'
            bgcolor={white} p={{ md: 7, xs: 3 }}
            borderRadius={3}
            boxShadow={2}
            className='container-fluid'    >
            <Grid container gap={2} justifyContent='space-between' >
               <Grid item container xs={12} md={6} order={{ xs: 2, md: 1 }}     >
                  <Grid item container gap={3} xs={12}  >
                     <Box>
                        
                        <Typography variant="h2" textTransform='capitalize' color={black} >
                        developer & designer
                        </Typography>

                        <Typography variant="h6" mt={1} color={blackLight} width={1} >
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolorum aut cum. Dicta nemo corrupti exercitationem sequi beatae temporibus minima

                           Dicta nemo corrupti exercitationem sequi beatae temporibus minima laborum debitis esse architecto eligendi, asperiores, qui soluta, fugiat facilis!
                           Lorem ipsum dolor,
                           <br />
                           <br />sit amet consectetur adipisicing elit. Inventore dolorum aut cum. Dicta nemo corrupti exercitationem sequi beatae temporibus minima laborum debitis esse architecto eligendi, asperiores, qui soluta, fugiat facilis!
                        </Typography>

                     </Box>


                     <Link to='about2' >
                        <Button variant="contained" color="primary">
                           read more
                        </Button>
                     </Link>

                  </Grid>


               </Grid>

               <Grid position='relative' item xs={12} container alignItems='center' justifyContent='center' md={5.5}
                  order={{ xs: 1, md: 2 }}

                  overflow='hidden'>
           <Stack mt={5} borderRadius={100} p={2} height={{ md: '300px', xs: '250px' }} width={{ md: '300px', xs: '250px' }} overflow='hidden' border={10} borderColor={whiteDark} >
                   {/**about png use or jpg */}
                <img src="https://via.placeholder.com/300x300.jpg"

                   style={{ borderRadius: '100%' }} alt="" />
               </Stack>
                  <Stack width="100%" display={{ xs: 'none', md: 'flex' }} >

                     <svg width="100" height="100"
                        style={{ position: 'absolute', right: '0', top: '0' }}
                        viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.circle
                           initial={{ fill: '#E1DCDC' }}
                           animate={{ fill: whiteDark }}

                           transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
                           cx="75" cy="75" r="75" />
                        <motion.circle
                           initial={{ fill: whiteDark }}
                           animate={{ fill: '#E1DCDC' }}
                           transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
                           cx="75" cy="75" r="50" />
                     </svg>
                  </Stack>

               </Grid>
            </Grid>
         </Stack>
      </Stack>
   )
}

export default About


