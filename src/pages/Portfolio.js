import { Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { black, white, whiteDark } from '../Customvariable'
import { motion } from 'framer-motion'
import { slideType } from '../Animation'
import { Link } from 'react-router-dom'

export const portfoliodata = [
  {
    category: 'app development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'app development',
    productLink:'',
  

  },
  {
    category: 'ux/ui design',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'ux/ui design',
    productLink:'',
  
  },
  {
    category: 'app development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'app development',
    productLink:'',
  

  },
  {
    category: 'web development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'web development',
    productLink:'',
  
  },
  {
    category: 'web development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'web development',
    productLink:'',
  
  },
  {
    category: 'web development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'web development',
    productLink:'',
  
  },
  {
    category: 'web development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'web development',
    productLink:'',
  
  },
  {
    category: 'web development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'web development',
    productLink:'',
  
  },
  {
    category: 'app development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'app development',
    productLink:'',
  

  },
  {
    category: 'app development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'app development',
    productLink:'',
  

  },
  {
    category: 'ux/ui design',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'ux/ui design',
    productLink:'',
  
  },
  {
    category: 'ux/ui design',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'ux/ui design',
    productLink:'',
  
  },
  {
    category: 'ux/ui design',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'ux/ui design',
    productLink:'',
  
  },
  {
    category: 'ux/ui design',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'ux/ui design',
    productLink:'',
  
  },
  {
    category: 'ux/ui design',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'ux/ui design',
    productLink:'',
  
  },
  {
    category: 'ux/ui design',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'ux/ui design',
    productLink:'',
  
  },
  {
    category: 'ux/ui design',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'ux/ui design',
    productLink:'',
  
  },
  {
    category: 'app development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'app development',
    productLink:'',
  

  },
  {
    category: 'app development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'app development',
    productLink:'',
  

  },
  {
    category: 'app development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'app development',
    productLink:'',
  

  },
  {
    category: 'app development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'app development',
    productLink:'',
  

  },
  {
    category: 'app development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'app development',
    productLink:'',
  

  },
  {
    category: 'web development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'web development',
    productLink:'',
  
  },
  {
    category: 'web development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'web development',
    productLink:'',
  
  },
  {
    category: 'web development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'web development',
    productLink:'',
  
  },
  {
    category: 'web development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'web development',
    productLink:'',
  
  },
  {
    category: 'app development',
    img: 'https://via.placeholder.com/300x300.jpg',
    productName: 'app development',
    productLink:'',
  

  },
]

const Portfolio = ({ pageRefs }) => {


  const [catyData, setCatyData] = useState(portfoliodata)


  const filterCategorys = (item) => {

    const result = portfoliodata.filter((curData) => {
      return curData.category === item
    });
    setCatyData(result)

  }


  const [hoverbox, setHoverbox] = useState(-1)

  const hoverboxStyle = {
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: 1,
    height: 1,
    bgcolor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textAlign: 'center'
  }


  const portfolioboxstyle = {
    borderRadius: 1,
    position: 'relative',
    overflow: 'hidden',
    height: { xs: '20vh', sm: '35vh', md: '32vh' },
    bgcolor: white
  }


  return (
    <Stack ref={el => pageRefs.current = { ...pageRefs.current, portfolio: el }} className='container-fluid' py={8} >
      <Typography variant="h2" textTransform={'capitalize'} color={black} > Creative Portfolio</Typography>

      <CategoryName filterCategorys={filterCategorys} setCatyData={setCatyData} />

      <Grid
        component={motion.div}
        variants={slideType}
        initial='hidden'
        animate='animate'
        transition={{ duration: .3, type: 'tween' }}
        mt={4} container gap={2} alignItems='center' justifyContent={{ sm: 'start', xs: 'start' }} >

        {
          catyData.map((item, index) => (
            <Grid
              boxShadow={2}
              kay={index}
              component={motion.div}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index / 3, duration: 1, type: 'tween' }}
              item xs={5.5} md={3.8} sx={portfolioboxstyle} onMouseEnter={() => setHoverbox(index)} onMouseLeave={() => setHoverbox(-1)} >

              <img src={item.img} alt="" />

              {
                hoverbox === index ?
                  <Stack
                    component={motion.div}
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: .4, type: 'tween' }}
                    sx={hoverboxStyle}>
                    <Typography variant="h3" textTransform='capitalize' color={white}  >{item.productName}</Typography>

                  <a href={item.productLink}>
                  <Typography variant="caption" sx={{
                      textDecoration: 'underline', '&:hover': {
                        color: whiteDark
                      }
                    }} color={white} textTransform='capitalize' >product link</Typography>

                  </a>  
                    <Link to='portfolio2' >
                      <Typography variant='overline' mt={1} sx={{
                        '&:hover': {
                          border: 1, borderColor: white, px: 1
                        }
                      }} color={white}>learn more</Typography>
                    </Link>
                  </Stack>

                  : ""


              }

            </Grid>

          ))
        }
      </Grid>

    </Stack>
  )
}

export default Portfolio

function CategoryName({ filterCategorys, setCatyData }) {
  const categoryname = [

    {
      name: 'app development'
    },
    {
      name: 'ux/ui design'
    },
    {
      name: 'web development'
    },
  ]

  const hover = {
    '&:hover': {
      border: 1,

    }
  }

  return (
    <Stack direction gap={{ xs: 2, sm: 4 }} mt={2} >
      <Stack sx={hover} px={.5} >

        <Typography
          fontSize={{ md: '1rem', xs: '.6rem', sm: '.8rem' }} fontWeight='bold'
          onClick={() => setCatyData(portfoliodata)} variant="h5" textTransform='capitalize' sx={{ cursor: 'pointer' }} color={black}>all</Typography>
      </Stack>
      {
        categoryname.map((item, index) => (
          <Stack sx={hover} px={.5} >

            <Typography key={index}

              onClick={() => filterCategorys(item.name)} variant="h5"
              fontSize={{ md: '1rem', xs: '.6rem', sm: '.8rem' }} fontWeight='bold'
              textTransform='capitalize' sx={{ cursor: 'pointer' }} color={black}>{item.name}</Typography>
          </Stack>

        ))
      }
    </Stack>
  )


}