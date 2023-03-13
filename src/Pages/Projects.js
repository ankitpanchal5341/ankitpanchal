import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ProjectCard from './ProjectCard'
import { projectData } from './projectData'
export default function Projects({ lightMode }) {


    return (
        <Grid container pt={4}>
            <Grid item lg={12} xs={12} sm={12} md={12} flexDirection='column' container justifyContent={'center'} alignItems="center" p={4}>
                <Typography variant="h4" fontWeight={'bold'}>Latest Projects</Typography>
                <hr color='gold' width={100} />
            </Grid>
            <Grid container item lg={12} xs={12} sm={12} md={12} justifyContent="center" alignItems={'center'} mb={4} gap={4}>
                {projectData.map((item, index) => <ProjectCard lightMode={lightMode} key={index} index={index} name={item.name} description={item.description} link={item.link} image={item.image} />)}
            </Grid>
        </Grid>)
}
