import { Grid } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import SlideBar from '../SlideBar/SlideBar';
import { Route, Routes } from 'react-router';
import ContactMe from '../ContactMe/ContactMe';
import AboutMe from '../AboutMe/AboutMe';
import './home.css'
import Education from '../Education/Education';
import Projects from '../Projects/Projects/Projects';
import Blogs from '../Blogs/Blogs';
import DetailsProject from '../Projects/DetailsProject/DetailsProject';
import Skils from '../Skills/Skills/Skils';

const Home = () => {


    return (
        <Box className='full-container' sx={{
            flexGrow: 1
        }}>
            <Grid container >
                <Grid className='left-side-container' xs={12} sm={6} lg={4} md={4}>
                    <SlideBar ></SlideBar>
                </Grid>
                <Grid style={{ justifyContent: 'center', alignItems: 'center !important' }} container xs={12} sm={6} lg={8} md={8}>
                    <Routes>
                        <Route path="/" element={<AboutMe />} />
                        <Route path="contact" element={<ContactMe />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="education" element={<Education />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="projects/:Id" element={<DetailsProject />} />
                        <Route path="skils" element={<Skils />} />
                    </Routes>
                </Grid>

            </Grid>
        </Box >
    );
};

export default Home;