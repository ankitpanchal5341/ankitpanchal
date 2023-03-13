import React from 'react'
import { Button, Grid, Tooltip, Typography } from '@mui/material'
import { hero_image } from '../assests'
import 'animate.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { darkTheme, lightTheme } from '../themes';


export default function Hero({ lightMode, setLightMode }) {
    const widthX = window.innerWidth
    console.log("widthX", widthX)

    return (
        <Grid container style={{ position: 'relative' }}>
            <Grid item lg={12} xs={12} sm={12} md={12}
                container justifyContent={"space-between"}
                style={{
                    backgroundColor: lightMode ? 'white' : 'black',
                    zIndex: 100, position: 'fixed', borderRadius: '12px',
                    boxShadow: '0px 2px 6px lightgray',

                }}
                spacing={2}
                p={'2vh'}>
                <Grid item lg={2} xs={12} sm={4} md={4} container justifyContent={"center"}>
                    {(widthX > 720) ? "Ankit Panchal" : null}

                </Grid>
                <Grid item lg={4} xs={12} sm={4} md={4} container justifyContent={'center'}
                    gap={2}>
                    <Grid item lg={3} xs={3} sm={3} md={3} container >
                        <Button sx={lightMode ? lightTheme : darkTheme} size="small" >
                            About

                        </Button>
                    </Grid>
                    <Grid item lg={4} xs={4} sm={4} md={4} container >
                        <Button sx={lightMode ? lightTheme : darkTheme} size="small" >
                            Projects
                        </Button>
                    </Grid>
                    <Grid item lg={3} xs={3} sm={3} md={3} container >
                        <Button sx={lightMode ? lightTheme : darkTheme} size="small" >
                            Contact
                        </Button>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={12} xs={12} sm={12} md={12} container justifyContent={"space-between"} pt={widthX > 680 ? "9vh" : '14vh'} >
                <Grid item lg={6} xs={12} sm={6} md={6} container justifyContent={'center'} alignItems="center" p={2}>
                    <Grid item lg={9} xs={11} sm={11} md={11} gap={2} container className="animate__animated animate__fadeInLeft">
                        <Typography color={'red'} fontSize={17} style={{ textTransform: 'uppercase' }}>Software Developer</Typography>
                        <Typography variant='h3' fontWeight={"bold"}>Hello,  my name <br /> is <span style={{ color: 'red' }}>Ankit Panchal</span></Typography>
                        <Typography variant='subtitle1' color={'gray'} >
                            Strong in design and integration with intuitive problem-solving skills.
                            Proficient in ReactJS, HTML, CSS, JAVASCRIPT, and Next Js .
                            Passionate about implementing and launching new projects.
                            {/* Ability to translate business requirements into technical solutions. */}

                        </Typography>
                        <Grid container pt={4} gap={3}>
                            <Button variant='contained' sx={{ backgroundColor: 'gold', color: 'black' }}> Hire Me </Button>
                            <Button variant='outlined' style={lightMode ? lightTheme : darkTheme}><LinkedInIcon /> LinkedIn</Button>
                            <Tooltip title={lightMode ? 'Dark Mode' : 'Light Mode'}>
                                <Button size="small" onClick={() => setLightMode(prev => !prev)} >
                                    {lightMode ?
                                        <DarkModeIcon />
                                        : <LightModeIcon />
                                    }
                                </Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={6} xs={12} sm={6} md={6} container justifyContent={'flex-end'} >
                    <img src={hero_image} width={'100%'} className="animate__animated animate__fadeInRight" alt="hero image" />
                </Grid>

            </Grid>

        </Grid >

    )
}
