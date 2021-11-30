
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link as ReLink } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './othersslidebar.css';

const OthersSlideIteams = () => {

    const style = {
        textDecoration: 'none',
        color: 'black',
    }
    return (
        <div className="all-links-container" >
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className="link-container" xs={12}>
                    <Link style={style}
                        to="projects"> Projects</Link>
                    <Link style={style}
                        to="education"> Education</Link>
                    <Link style={style}
                        to="contact"> Contact Me</Link>
                </Grid>
                <Grid className="icon-ancor-container" xs={12}>
                    <Typography style={{ margin: '10px', color: '#551A8B' }}>Find me on</Typography>
                    <ReLink style={{ cursor: 'pointer' }} href="https://www.facebook.com/sf.robin1" target="_blank"> <FacebookIcon /> </ReLink>
                    <ReLink style={{ cursor: 'pointer' }} href="https://github.com/Saiful182" target="_blank"> <GitHubIcon /> </ReLink>
                    <ReLink style={{ cursor: 'pointer' }} href="https://www.linkedin.com/in/saiful-islam-a74497216" target="_blank"> <LinkedInIcon /> </ReLink>

                </Grid>


            </Grid >
        </div>

    );
};

export default OthersSlideIteams;