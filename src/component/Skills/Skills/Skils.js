import { Grid, Typography } from '@mui/material';
import React from 'react';
import SingleSkill from '../SingleSkil/SingleSkill';

const Skils = () => {
    const skils = [
        {
            "id": 1,
            "name": "CSS",
            "ratting": 5,
            "img": "https://i.postimg.cc/XNLHj5T0/creative-css3-tutorials.jpg"
        },
        {
            "id": 2,
            "name": "Bootstrap",
            "ratting": 5,
            "img": "https://i.postimg.cc/qMm5LKLG/bootstrap.png"
        },
        {
            "id": 3,
            "name": "Express.js",
            "ratting": 4,
            "img": "https://i.postimg.cc/tC759M3h/express.png"
        },
        {
            "id": 4,
            "name": "Firebase",
            "ratting": 5,
            "img": "https://i.postimg.cc/9FNLThm8/firebase.png"
        },
        {
            "id": 5,
            "name": "GitHub",
            "ratting": 5,
            "img": "https://i.postimg.cc/hPGCfjBQ/github.png"
        },
        {
            "id": 6,
            "name": "Heroku",
            "ratting": 4,
            "img": "https://i.postimg.cc/KzFfFcfz/heruko.png"
        },
        {
            "id": 7,
            "name": "Html",
            "ratting": 5,
            "img": "https://i.postimg.cc/JzDP52t1/html.png"
        },
        {
            "id": 8,
            "name": "JS",
            "ratting": 4,
            "img": "https://i.postimg.cc/YSQRJL1Z/js.png"
        },
        {
            "id": 9,
            "name": "Metarial UI",
            "ratting": 4,
            "img": "https://i.postimg.cc/rwBgnNt5/metarial.png"
        },
        {
            "id": 10,
            "name": "Netlify",
            "ratting": 5,
            "img": "https://i.postimg.cc/V6RRNyZF/netlify.jpg"
        },
        {
            "id": 11,
            "name": "MongoDb",
            "ratting": 4,
            "img": "https://i.postimg.cc/8kZ4QS6p/mongodb.jpg"
        },
        {
            "id": 12,
            "name": "Node JS",
            "ratting": 4,
            "img": "https://i.postimg.cc/d3V9kWzc/node.png"
        },
        {
            "id": 13,
            "name": "React",
            "ratting": 5,
            "img": "https://i.postimg.cc/25ddHRYf/react-logo.jpg"
        },
        {
            "id": 14,
            "name": "Tailwind",
            "ratting": 5,
            "img": "https://i.postimg.cc/C1mGgGdP/tailwind.jpg"
        },
        {
            "id": 15,
            "name": "VS Code",
            "ratting": 5,
            "img": "https://i.postimg.cc/pdMYYVgZ/vscode.png"
        },
        {
            "id": 16,
            "name": "Photoshop",
            "ratting": 4,
            "img": "https://i.postimg.cc/FzCVjy4d/ps.jpg"
        },
        {
            "id": 17,
            "name": "Exel",
            "ratting": 4,
            "img": "https://i.postimg.cc/1zF7sjZW/exel.png"
        },
        {
            "id": 18,
            "name": "bootstrap",
            "ratting": 4,
            "img": "https://i.postimg.cc/brrQNZtz/ms-word.png"
        }
    ]
    return (
        <div style={{ marginLeft: '40px' }}>
            <Typography style={{ margin: '20px' }} variant="h4">My Skils in this perticular topic</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} >
                {
                    skils.map(skill => <SingleSkill skill={skill} key={skill.id}></SingleSkill>)
                }
            </Grid>
        </div>
    );
};

export default Skils;