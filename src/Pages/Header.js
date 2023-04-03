import { Button, Grid, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { darkTheme, lightTheme } from '../themes';
import { Link } from 'react-router-dom';
import { DarkMode, LightMode } from '@mui/icons-material';

export default function Header(props) {
    const { lightMode, setLightMode } = props;
    return (
        <Grid
            container justifyContent={"space-between"}
            style={{
                backgroundColor: lightMode ? 'white' : 'black',
                zIndex: 100, position: 'fixed', borderRadius: '12px',
                boxShadow: '0px 2px 6px lightgray',

            }}
            spacing={2}
            p={'2vh'}>
            <Grid item lg={2} xs={12} sm={4} md={4} container justifyContent={"center"} >
                <Link to="/" style={{ textDecoration: 'none' }}>
                    {(window.innerWidth > 720) ? "Ankit Panchal" : null}
                </Link>

            </Grid>
            <Grid item lg={4} xs={12} sm={4} md={4} container justifyContent={'center'}
                gap={2}>
                <Grid item lg={3} xs={3} sm={3} md={3}  >
                    <Link to={'/about'} style={{ textDecoration: "none" }}>
                        <Button sx={lightMode ? lightTheme : darkTheme} size="small" >
                            About

                        </Button>
                    </Link>
                </Grid>
                <Grid item lg={3} xs={3} sm={3} md={3}  >
                    <Button sx={lightMode ? lightTheme : darkTheme} size="small" >
                        Projects
                    </Button>
                </Grid>
                <Grid item lg={2} xs={2} sm={2} md={2}  >
                    <Button sx={lightMode ? lightTheme : darkTheme} size="small" >
                        Contact
                    </Button>

                </Grid>
                <Grid item lg={2} xs={2} sm={2} md={2}  >
                    <Tooltip title={lightMode ? 'Dark Mode' : 'Light Mode'}>
                        <Button size="small" onClick={() => setLightMode(prev => !prev)} >
                            {lightMode ?
                                <DarkMode />
                                : <LightMode />
                            }
                        </Button>
                    </Tooltip>

                </Grid>
            </Grid>
        </Grid>
    )
}
