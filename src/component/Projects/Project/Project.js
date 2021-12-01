import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
const Project = (props) => {
    let navigate = useNavigate()
    const { id, name, main_img
    } = props.project

    const handleCardClick = id => {
        const url = `${id.id}`
        navigate(url);

    }
    return (
        <div style={{ margin: '10px 0' }} onClick={() => handleCardClick({ id })}  >
            <Grid  >



                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>


                <CardMedia style={{ width: '90%' }}
                    component="img"

                    image={main_img}
                    alt="green iguana"
                />



            </Grid>

        </div>
    );
};

export default Project;