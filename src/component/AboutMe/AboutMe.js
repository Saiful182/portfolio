import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './aboutme.css'
const AboutMe = () => {
    return (
        <div className="whole-right-side" >
            <Box className="resume-container">
                <Typography variant="h2">
                    Hi, I am saiful, <Typography variant="h4">and i am a react web developer.Hare you can find my all information.Click Hare to to download my
                        <Link to="" as={Button} > Resume</Link>
                    </Typography>
                </Typography>
            </Box>
        </div>
    );
};

export default AboutMe;