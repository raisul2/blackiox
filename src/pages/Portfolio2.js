import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'

import { black, blackLight, whiteDark } from '../Customvariable'
import { slideType } from '../Animation'

const Portfolio2 = () => {

    return (
        <Stack
            component={motion.div}
            variants={slideType}
            initial='hidden'
            animate='animate'
            transition={{ duration: 1, type: 'spring' }}
            gap={2} className='container-fluid' py={8}>
            <Grid container gap={3} xs={12} md={12} justifyContent='space-between' >
                <Grid item overflow='hidden' container >
                    <Stack p={5} boxShadow={2} border={5} borderColor={blackLight} bgcolor={'white'} borderRadius={1} >

                        <img src="https://via.placeholder.com/1000x800.jpg" alt="" />
                    
                    </Stack>
                </Grid>

                <Grid bgcolor={'white'} boxShadow={2} borderRadius={1} container xs={12} md={12} alignItems='start' justifyContent='start' p={5} item >
                    <Typography variant="h2" textTransform='capitalize' color={black}>how i create this project</Typography>
                    <Typography variant="h6" color={blackLight}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, incidunt pariatur? Totam harum dolores quia nesciunt dicta iusto, tenetur cupiditate nobis ea fugiat illum et rem molestias commodi consequuntur eius!lorelore Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta nihil, at vitae quod pariatur laudantium tempora provident atque enim dolorum excepturi veritatis ipsum, blanditiis eius inventore quisquam? Dolor, in.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, incidunt pariatur? Totam harum dolores quia nesciunt dicta iusto, tenetur cupiditate nobis ea fugiat illum et rem molestias commodi consequuntur eius!lorelore Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta nihil, at vitae quod pariatur laudantium tempora provident atque enim dolorum excepturi veritatis ipsum, blanditiis eius inventore quisquam? Dolor, in.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, incidunt pariatur? Totam harum dolores quia nesciunt dicta iusto, tenetur cupiditate nobis ea fugiat illum et rem molestias commodi consequuntur eius!lorelore Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta nihil, at vitae quod pariatur laudantium tempora provident atque enim dolorum excepturi veritatis ipsum, blanditiis eius inventore quisquam? Dolor, in.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, incidunt pariatur? Totam harum dolores quia nesciunt dicta iusto, tenetur cupiditate nobis ea fugiat illum et rem molestias commodi consequuntur eius!lorelore Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta nihil, at vitae quod pariatur laudantium tempora provident atque enim dolorum excepturi veritatis ipsum, blanditiis eius inventore quisquam? Dolor, in.
                    </Typography>
                </Grid>

            </Grid>





        </Stack>

    )
}

export default Portfolio2



