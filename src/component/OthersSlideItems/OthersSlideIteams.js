
import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const OthersSlideIteams = () => {
    const style = {
        textDecoration: 'none',
        color: 'black',
        margin: '10px'

    }
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={12}>
                <Link style={style}
                    to="contact"> Contact Me</Link> <br />
                <Link style={style}
                    to="projects"> Projects</Link>
            </Grid>

        </Grid >

    );
};

export default OthersSlideIteams;