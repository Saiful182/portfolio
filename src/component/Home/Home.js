import { Grid } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SlideBar from '../SlideBar/SlideBar';
import { Route, Routes } from 'react-router';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import './home.css'
import Education from '../Education/Education';
const Home = () => {


    return (
        <Box className='full-container' sx={{
            flexGrow: 1
        }}>
            <Grid style={{ alignItems: 'center' }} container >
                <Grid item xs={12} sm={6} lg={4} md={4}>
                    <SlideBar ></SlideBar>
                </Grid>
                <Grid item xs={12} sm={6} lg={8} md={8}>

                    <Routes>
                        <Route path="/" element={<AboutMe />} />
                        <Route path="contact" element={<ContactMe />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="education" element={<Education />} />

                    </Routes>
                </Grid>

            </Grid>
        </Box >
    );
};

export default Home;