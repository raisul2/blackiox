import React from 'react'
import { Grid, Stack, Typography, Button } from '@mui/material'
import { black, white } from '../Customvariable'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import { motion } from 'framer-motion'
import { opacityType } from '../Animation';

const Contact = () => {

  const contactDetailsdata = [
    {
      name: 'call now',
      value: '+77 022 177 05 05',
      icon: <PhoneIcon fontSize='small' />
    },
    {
      name: 'location',
      value: 'Ave 11, New York, USA',
      icon: <LocationOnIcon fontSize='small' />
    },
    {
      name: 'gmail',
      value: 'mail@gmail.com',
      icon: <MarkunreadIcon fontSize='small' />
    },
  ]

  const inputstyle = {
    borderRadius: 1, minHeight: '6vh', overflow: 'hidden',
    width: '100%', boxShadow: 2
  }

  return (
    <Stack
      component={motion.div}
      variants={opacityType}
      initial='hidden'
      animate='animate'
      gap={{ md: 4, xs: 3 }}
      justifyContent='center'
      minHeight='100vh'
      py={{ sm: 7, xs: 8 }}
      px={{ sm: 7, xs: 3 }} className='container-fluid' >


      <Typography variant="h2" textTransform={'capitalize'} color={black} >Get in Touch</Typography>

      <Grid container gap={{ xs: 8, md: 0 }} justifyContent='space-between'    >

        <Grid item container direction='column' gap p={{ xs: 2.5, md: 5 }} md={5} borderRadius={1} bgcolor={white} boxShadow={2} >

          <Typography variant="h2" textTransform='capitalize' color={black} >our contact</Typography>
          <Typography variant="h6" color={black} >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut dolores, ullam temporibus impedit quibusdam deleniti voluptatibus dicta asperiores repellen
          </Typography>
          {
            contactDetailsdata.map((item) => (
              <Stack mt={1}

              > <ContactDetailsbox name={item.name} value={item.value} icon={item.icon} /> </Stack>
            ))
          }
        </Grid>

        <Grid item contaienr md={6} xs={12} >



          <Stack alignItems='start' height={1} justifyContent='space-between' gap={2}>

            <Stack sx={inputstyle} >
              <input type="text" name="name" required placeholder='Name' />
            </Stack>
            <Stack sx={inputstyle} >
              <input type="email" name="email" required placeholder='Email' />
            </Stack>
            <Stack sx={inputstyle}  >
              <textarea name="message" cols="30" required rows="10" placeholder='Message' ></textarea>
            </Stack>


            <Button variant="contained" width={1 / 2} color="primary">
              send message
            </Button>
          </Stack>

        </Grid>

      </Grid>
    </Stack>
  )
}

export default Contact



function ContactDetailsbox({ name, value, icon }) {
  return (
    <Stack gap direction

      alignItems='start' justifyContent='start'

    >
      <Stack borderRadius={100} color={white} p={1} bgcolor={black}  >
        {icon}
      </Stack>

      <Stack>

        <Typography variant="body1" fontWeight='bold' textTransform='capitalize' color={black}> {name} </Typography>

        <Typography variant="caption" color={black}>{value}</Typography>
      </Stack>

    </Stack>
  )
}


