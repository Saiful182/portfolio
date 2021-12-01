import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './aboutme.css'
const AboutMe = () => {
    return (
        <div className="whole-right-side" >
            <Box className="resume-container">
                <Typography variant="h2">
                    Hi, I am saiful, <Typography variant="h4">and i am a web developer.Hare you can find my all information.Click Hare to to download my
                        <Link style={{ textDecoration: 'none' }} href="https://drive.google.com/drive/folders/1Zs9sZ3LH9_ZweEajLdMetaroTH4QPLVa" target="_blank" > <Typography variant="h4">Resume</Typography></Link>
                    </Typography>
                </Typography>
            </Box>
        </div>
    );
};

export default AboutMe;