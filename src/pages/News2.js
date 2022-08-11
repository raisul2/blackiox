import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { white, black, blackLight, whiteDark } from '../Customvariable'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from 'framer-motion'
import { slideType } from '../Animation';

const News2 = () => {
  return (
    <Stack
      component={motion.div}
      variants={slideType}
      initial='hidden'
      animate='animate'
      transition={{ duration: 1, type: 'spring' }}
      className='container-fluid' py={8} >
      <Grid container gap bgcolor={white} borderRadius={1} overflow='hidden' >
        <Grid item xs={12}>
          <Stack p={{ md: 5, xs: 3 }} border={5} borderColor={'white'} borderRadius={1} >

            <img src="https://via.placeholder.com/600x600.jpg" alt="" />
          </Stack>
        </Grid>

        <Grid item gap={1} xs={12} px={{ sm: 5, xs: 3 }} >

          <Typography variant="h6" textTransform='body1' mb={2} color={blackLight}>by alex watson 05 april 2022</Typography>
          <Typography variant="h2" color={black}>Format releases a new tool that enables direct video hosting   </Typography>


          <Typography variant="h6" color={blackLight}>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas excepturi vero, hic fugiat culpa neque officia, ipsum laboriosam aspernatur nemo impedit, sit quasi dolorum quisquam nam adipisci voluptatum. Ducimus, expedita.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas excepturi vero, hic fugiat culpa neque officia, ipsum laboriosam aspernatur nemo impedit, sit quasi dolorum quisquam nam adipisci voluptatum. Ducimus, expedita.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas excepturi vero, hic fugiat culpa neque officia, ipsum laboriosam aspernatur nemo impedit, sit quasi dolorum quisquam nam adipisci voluptatum. Ducimus, expedita.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas excepturi vero, hic fugiat culpa neque officia, ipsum laboriosam aspernatur nemo impedit, sit quasi dolorum quisquam nam adipisci voluptatum. Ducimus, expedita.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas excepturi vero, hic fugiat culpa neque officia, ipsum laboriosam aspernatur nemo impedit, sit quasi dolorum quisquam nam adipisci voluptatum. Ducimus, expedita.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, ipsam velit eaque fuga doloremque illum qui? Eveniet dicta eaque unde aspernatur modi vel architecto, explicabo, ipsa aut tempora eos id.
          </Typography>

          <Grid item boxShadow={2} xs={12} my={3} p={{ sm: 6, xs: 3 }} bgcolor={whiteDark} borderRadius={1} >


            <Typography variant="h2" color={black}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste odit dicta voluptatem dolorum quidem suscipit omnis, expedita laborum maxime nulla officiis sunt asperiores ,,
            </Typography>


          </Grid>

          <Typography variant="h6" color={blackLight}>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas excepturi vero, hic fugiat culpa neque officia, ipsum laboriosam aspernatur nemo impedit, sit quasi dolorum quisquam nam adipisci voluptatum. Ducimus, expedita.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas excepturi vero, hic fugiat culpa neque officia, ipsum laboriosam aspernatur nemo impedit, sit quasi dolorum quisquam nam adipisci voluptatum. Ducimus, expedita.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas excepturi vero, hic fugiat culpa neque officia, ipsum laboriosam aspernatur nemo impedit, sit quasi dolorum quisquam nam adipisci voluptatum. Ducimus, expedita.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas excepturi vero, hic fugiat culpa neque officia, ipsum laboriosam aspernatur nemo impedit, sit quasi dolorum quisquam nam adipisci voluptatum. Ducimus, expedita.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas excepturi vero, hic fugiat culpa neque officia, ipsum laboriosam aspernatur nemo impedit, sit quasi dolorum quisquam nam adipisci voluptatum. Ducimus, expedita.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, ipsam velit eaque fuga doloremque illum qui? Eveniet dicta eaque unde aspernatur modi vel architecto, explicabo, ipsa aut tempora eos id.
          </Typography>





        </Grid>



        <Grid item container p={{ sm: 5, xs: 3 }} gap alignItems='center' direction='row' >

          <Typography variant="body1" fontWeight='bold' textTransform='capitalize' color={black}>shear:</Typography>

          <IconBox />
        </Grid>


      </Grid>

    </Stack>
  )
}

export default News2




const icondata = [
  <FacebookIcon fontSize='small' />,
  <InstagramIcon fontSize='small' />,
  <TwitterIcon fontSize='small' />

]

function IconBox() {
  return (
    <>
      {
        icondata.map((item) => (
          <Stack sx={{ cursor: 'pointer' }} >
            {item}
          </Stack>
        ))
      }

    </>
  )
}