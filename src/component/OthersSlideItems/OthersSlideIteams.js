
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import './othersslidebar.css';
const OthersSlideIteams = () => {
    const style = {
        textDecoration: 'none',
        color: 'black',
    }
    return (
        <div className="link-container">
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={12}>

                    <Link style={style}
                        to="projects"> Projects</Link>
                    <Link style={style}
                        to="education"> Education</Link>
                    <Link style={style}
                        to="contact"> Contact Me</Link>
                </Grid>
                <Grid className="icon-ancor-container" xs={12}>
                    <Typography>Find me on</Typography>
                    <Link to="">${FacebookIcon}</Link>
                    <Link to=""></Link>
                    <Link to=""></Link>
                </Grid>

            </Grid >
        </div>

    );
};

export default OthersSlideIteams;