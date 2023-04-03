import React from 'react'
import { Typography, Button, Grid } from '@mui/material'
import { darkTheme, lightTheme } from '../themes'

export default function ProjectCard(props) {
    const { name, description, link, image, index, lightMode } = props

    const styles = {
        cardStyle: {
            borderRadius: '14px',
            overflow: 'hidden',
            backgroundColor: lightMode ? lightTheme : darkTheme,
            boxShadow: '2px 2px 6px 3px lightgray'
        }
    }
    return (
        // <Grid container  >
        <Grid item lg={8} xs={11} sm={9} md={9} container alignItems={'center'} justifyContent="space-between" style={styles.cardStyle} className={index && (index % 2 == 0 ? "animate__animated animate__fadeInRight" : "animate__animated animate__fadeInLeft") || "animate__animated animate__fadeInRight"}>
            <Grid item lg={7} xs={12} sm={12} md={7} container gap={3} p={3} justifyContent="center">
                <Grid item lg={11} xs={12} sm={10} md={10} container gap={4} >

                    <Typography variant='h5' fontWeight={'bold'}>{name}</Typography>
                    <Typography variant='body2'>
                        {description} <br />
                        <Typography variant='caption' sx={{ opacity: 0.5 }}>{link}</Typography>
                    </Typography>
                    <Button variant='contained' sx={{ borderRadius: 17, width: 150, backgroundColor: 'gold', color: 'black' }} href={link} target='_blank'> View  </Button>
                </Grid>
            </Grid>
            <Grid item lg={5} xs={12} sm={12} md={5} >
                <a href={link} target='_blank'   >
                    <img src={image} width="105%" style={{ marginBottom: -5 }} />
                </a>
            </Grid>
            {/* </Grid> */}
        </Grid>)
}
