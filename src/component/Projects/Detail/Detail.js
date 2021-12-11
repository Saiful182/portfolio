import { Grid, Link, Typography } from '@mui/material';
import React from 'react';



const Detail = (props) => {
    const { name, main_img, Discription, technologies, client_site_link, server_site_link, live_site, img1, img2, img3, img4, img5, img6 } = props.project;
    return (
        <div>
            <Typography variant="h4">{name}</Typography>
            <img style={{ margin: '20px 0', width: '80%' }} src={main_img} alt="" />
            <Typography style={{ margin: '10px' }} variant="h5">Description</Typography>
            <Typography variant="p">{Discription}</Typography>
            <Typography style={{ margin: '10px' }} variant="h5">Technology</Typography>
            <Typography variant="p">{technologies}</Typography>
            <Grid style={{ justifyContent: ' center' }} container spacing={4} >
                <Grid item sx={4}>
                    <Link style={{ textDecoration: 'none' }} href={client_site_link}>Client Site Link</Link>
                </Grid>
                <Grid item sx={4}>
                    <Link style={{ textDecoration: 'none' }} href={server_site_link}>Server Site Link</Link>
                </Grid><Grid item sx={4}>
                    <Link style={{ textDecoration: 'none' }} href={live_site}>Live Site</Link>
                </Grid>

            </Grid>
            <Typography style={{ margin: '10px' }} variant="h5">Screenshoots</Typography>
            <img style={{ margin: '20px 0', width: '80%' }} src={img1} alt="" />
            <img style={{ margin: '20px 0', width: '80%' }} src={img2} alt="" />
            <img style={{ margin: '20px 0', width: '80%' }} src={img3} alt="" />
            <img style={{ margin: '20px 0', width: '80%' }} src={img4} alt="" />
            <img style={{ margin: '20px 0', width: '80%' }} src={img5} alt="" />
            <img style={{ margin: '20px 0', width: '80%' }} src={img6} alt="" />
        </div>
    );
};

export default Detail;