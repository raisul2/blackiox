import { Grid, Box, Stack, Typography, Avatar } from '@mui/material'
import React from 'react'
import { black, blackLight, white, whiteDark } from '../Customvariable'
import { Swiper, SwiperSlide } from "swiper/react";
import { slideType } from '../Animation'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from 'framer-motion'
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const About2 = () => {

    const funfactsdata = [
        {
            name: 'projects completed',
            value: '77'
        },
        {
            name: 'happy clients',
            value: '32k'
        },
        {
            name: 'lines of code',
            value: '3k'
        },
    ]

    const skillsdata = [
        {
            name: 'html',
            value: '90'
        },
        {
            name: 'css/scss',
            value: '80'
        },
        {
            name: 'react',
            value: '70'
        },
        {
            name: 'framer-motion',
            value: '60'
        },
        {
            name: 'ux/ui design',
            value: '50'
        },
        {
            name: 'three.js',
            value: '40'
        },
        {
            name: 'figma',
            value: '30'
        },
        {
            name: 'content-design',
            value: '20'
        },
    ]


    return (
        <Stack
            component={motion.div}
            variants={slideType}
            initial='hidden'
            animate='animate'
            transition={{ duration: 1, type: 'spring' }}
            gap={8} bgcolor={white} p={{ md: 7, xs: 3 }} className='container-fluid' >

            {/**skills section  */}
            <Stack gap={2} >
                <Typography variant="h2" textTransform={'capitalize'} color={black} > my Skills </Typography>
                <Grid container rowGap={2} justifyContent='space-between' >
                    {
                        skillsdata.map((item) => (
                            <Grid item md={5.8} xs={12} >
                                <SkillComponent name={item.name} value={item.value} />
                            </Grid>
                        ))
                    }

                </Grid>
            </Stack>
            {/** fun facts  */}
            <Stack gap={2} >
                <Typography variant="h2" textTransform={'capitalize'} color={black} >
                    Fun Facts </Typography>
                <Grid container gap={2} justifyContent='space-between' >
                    {
                        funfactsdata.map((item) => (
                            <Grid item xs={12} sm={3}  >

                                <FunFactsbox name={item.name} value={item.value} />
                            </Grid>

                        ))
                    }


                </Grid>

            </Stack>

            {/** TESTMONIAL */}

            <Stack boxShadow={2} p={{ md: 7, xs: 2 }} gap={2} border={5} borderColor={whiteDark} borderRadius={1} >
                <Typography variant="h2" textTransform={'capitalize'} color={black} > testomonial </Typography>
                <Grid container gap={2} >
                    <Grid item sm={5.8} xs={12} >
                        <Typography variant="h1" color={blackLight}>
                            WHAT OUR CLIENTS SAY’S
                        </Typography>
                    </Grid>
                    <Grid item sm={5.8} xs={12} >
                        <Swiper
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {[1, 2, 3, 4].map((item) => (
                                <SwiperSlide>
                                    <TestomonialBox />
                                </SwiperSlide>
                            ))
                            }
                        </Swiper>
                    </Grid>
                </Grid>
            </Stack>

            {/** my story */}

            <Stack gap={4} >
                <Typography variant="h2" textTransform={'capitalize'} color={black} > my story </Typography>
                <Grid container alignItems={{ md: 'start', xs: 'center' }} justifyContent={{ md: 'space-between', xs: 'center' }} >
                    <Grid item xs={12} sm={5.5}>
                        <Stack boxShadow={2} borderRadius={1} p={2} height={{ md: '400px', xs: '250px' }} width={{ md: '400px', xs: '250px' }} overflow='hidden' border={5} borderColor={whiteDark} >
                            <img src="https://via.placeholder.com/300x300.jpg"
                             style={{ borderRadius: '100%' }} alt="" />
                        </Stack>
                    </Grid>
                    <Grid item md={6}>
                        <Typography mt={{ xs: 3, md: 0 }} variant="h6" color={blackLight}>

                            <Typography variant="h2" color={black}>Hello i'am Lorem ipsum </Typography>
                            <br />
                            amet consectetur adipisicing elit. Eligendi velit reiciendis enim sapiente voluptatem exercitationem tenetur excepturi perspiciatis atque quas sunt impedit, quidem vero porro odio fugiat beatae itaque vitae.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi repudiandae autem eius quod? Dicta, est! Eos, facilis rem. Dicta omnis
                            i'am Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit reiciendis enim sapiente voluptatem exercitationem tenetur excepturi perspiciatis atque quas sunt impedit, quidem vero porro odio fugiat beatae itaque vitae.lore Lorem ipsum
                            i'am Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit reiciendis enim sapiente voluptatem exercitationem tenetur <br />
                            dolor sit amet consectetur adipisicing elit. Dolore modi repudiandae autem eius quod? Dicta, est! Eos, facilis
                        </Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    )
}

export default About2


{/**  single Componentts start */ }


{/**  1)  skill Componentts */ }

function SkillComponent({ name, value }) {


    return (
        <Stack gap>
            <Stack justifyContent='space-between' direction='row' >
                <Typography variant="h6" color={black}>{name}</Typography>
                <Typography variant="h6" color={black}>{value}%</Typography>
            </Stack>
            <Stack boxShadow={2} borderRadius={10} height='1vh' bgcolor={whiteDark} width={1} position='relative' >
                <Stack borderRadius={10} height='1vh' bgcolor={black} sx={{ width: `${value}%`, position: 'absolute', left: 0, top: 0 }} > </Stack>
            </Stack>
        </Stack>
    )

}





{/* 2)  funFacktsbox Componentts */ }

function FunFactsbox({ name, value }) {

    return (
        <Stack boxShadow={2} borderRadius={1} p={5} textAlign='center' alignItems='center' justifyContent='center' border={5} borderColor={whiteDark} minHeight='15vh' >
            <Typography variant="h3" color={black}>{value}+</Typography>
            <Typography variant="h6" textTransform='capitalize' color={black}>{name}</Typography>
        </Stack>
    )

}




{/**  3)  testomonialBox Componentts */ }
function TestomonialBox() {

    return (


        <Stack boxShadow={2} minHeight='40vh' p={{ md: 4, xs: 2 }} justifyContent='space-between' borderRadius={1} width={1} bgcolor={whiteDark} >
            <Typography variant="h4" textAlign='start' color={blackLight}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio reprehenderit temporibus omnis quos officiis, laboriosam quia autem voluptatibus soluta blanditiis dolorum neque excepturi, similique, cumque illo eveniet velit! Provident!
            </Typography>
            <Stack direction alignItems='center' gap justifyContent='space-between'>
                <Stack color={blackLight}  >
                    <VolunteerActivismIcon
                        fontSize='large' />
                </Stack>
                {/** avater with name  */}
                <Stack gap direction >
                    <Box>
                        <Typography variant="body2" color={black} textAlign='end' textTransform='capitalize' >diona seow</Typography>
                        <Typography variant="caption" color={blackLight} textAlign='end' >ceo&founder</Typography>
                    </Box>
                    <Avatar>
                        <img src="https://via.placeholder.com/100x100.jpg" alt="" />
                    </Avatar>

                </Stack>

            </Stack>

        </Stack>

    )
}