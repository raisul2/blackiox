import { Stack, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { black, blackLight, white } from '../Customvariable'
import { motion } from 'framer-motion'
import { Box } from '@mui/system'
const News = ({ pageRefs }) => {

  const newsData = [
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },
    {
      newstitle: 'Format releases a new tool that enables direct video',
      img: 'https://via.placeholder.com/300x300.jpg',
      creatorname:'by alex watson'

    },





  ]

  return (

    <Stack ref={el => pageRefs.current = { ...pageRefs.current, news: el }} className='container-fluid' py={8} >
      <Typography variant="h2" textTransform={'capitalize'} color={black} > Latest News
      </Typography>


      <Grid mt={4} container gap={2} alignItems='center' justifyContent={{ sm: 'start', xs: 'start' }} >

        {
          newsData.map((item, index) => (
            <Grid key={index}
              boxShadow={2} borderRadius={1}
              overflow='hidden'
              component={motion.div}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index / 3, duration: 1, type: 'tween' }}
              item bgcolor={white} xs={12} sm={5} md={3.5}>
              <BlogBox img={item.img} newstitle={item.newstitle} creatorname={item.creatorname} />
            </Grid>

          ))
        }

      </Grid>

    </Stack>

  )
}

export default News

function BlogBox({ img ,newstitle,creatorname}) {

  return (
    <Link to='news2' >
      <Grid container sx={{ cursor: 'pointer' }} borderRadius={1} overflow='hidden' height='50vh' >
        <Grid item xs={12} height={{ md: '30vh', xs: '25vh' }}  >

          <img src={img} alt="" />
        </Grid>

        <Grid item container xs={12}
          justifyContent='center'
          height={{ md: '30vh', xs: '25vh' }} p={3}>
          <Box>

            <Typography variant="caption" textTransform='capitalize' color={blackLight}>{creatorname}05 april 2022</Typography>
            <Typography variant="body1"
              fontWeight='bold'
              color={black}>{newstitle}</Typography>

            <Typography variant='body2' sx={{
              textDecoration: 'underline', cursor: 'pointer',
              '&:hover': {
                color: blackLight
              }
            }} textTransform='capitalize' fontWeight='bold' color={black}>read more</Typography>

          </Box>
        </Grid>


      </Grid>
    </Link>
  )

}



