
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link as ReLink } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import './othersslidebar.css';
import { Box } from '@mui/system';
const OthersSlideIteams = () => {



    const style = {
        textDecoration: 'none',
        color: 'black',
    }
    return (
        <div >
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
                <Grid container xs={12}>
                    <Grid xs={12}>
                        <Typography style={{ margin: '20px auto', color: '#551A8B' }}>Contact with me</Typography>
                    </Grid>
                    <Grid xs={12} className="contact-container">

                        <Box style={{ display: 'flex', justifyContent: 'center' }} >
                            <EmailIcon style={{ padding: '0 5px' }} />
                            <Typography >saifulislamcse0@gmail.com</Typography>
                        </Box>


                        <Box style={{ display: 'flex', justifyContent: 'center' }} >
                            <CallIcon style={{ padding: '0 5px' }} />
                            <Typography >01625627572</Typography>
                        </Box>


                    </Grid>

                </Grid>

            </Grid >
        </div>

    );
};

export default OthersSlideIteams;