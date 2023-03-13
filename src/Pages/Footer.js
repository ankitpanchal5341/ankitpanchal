import React from 'react'
import Grid from '@mui/material/Grid'
import { Button, Typography } from '@mui/material'
import LinkedIn from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
    return (
        <Grid
            container
            spacing={1}
            p={2}
            pt={6}
            pb={6}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"

        >
            <Grid item lg={4} xs={11} md={4} sm={4} container justifyContent={'center'} alignItems="center">
                <Button> <LinkedIn /></Button>
                <Button> <InstagramIcon /></Button>
                <Button> <FacebookIcon /></Button>
                <Button> <WhatsAppIcon /></Button>
                <Grid container justifyContent={'center'} pt={2}>
                    <Typography variant='overline'>All rights reserved <a href='#'>Ankit Panchal</a>&nbsp;@2023</Typography>

                </Grid>
            </Grid>

        </Grid>
    )
}
