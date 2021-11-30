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
const Home = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box className='full-container' sx={{
            flexGrow: 1
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={4} md={4}>
                    <SlideBar ></SlideBar>
                </Grid>
                <Grid item xs={12} sm={6} lg={8} md={8}>

                    <Routes>
                        <Route path="/" element={<AboutMe />} />
                        <Route path="contact" element={<ContactMe />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<ContactMe />} />
                        <Route path="contact" element={<ContactMe />} />
                        <Route path="contact" element={<ContactMe />} />
                    </Routes>
                </Grid>

            </Grid>
        </Box >
    );
};

export default Home;