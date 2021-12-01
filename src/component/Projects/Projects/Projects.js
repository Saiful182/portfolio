import { Grid, Typography } from '@mui/material';
import React from 'react';
import Project from '../Project/Project';
import './projects..css'
const Projects = () => {
    const projects = [
        {
            "id": 1,
            "name": "Classy Watch Store",
            "Discription": "It is a watch selling website for men and women.Where user can buy diffrent kind of watch.For user and admin log in i used firebase authentication system.User and admin has a diffrent Ui and function in this website.Admin can add remeve new product also can accept and delete user order.On the other hand user can only delete his order from his/her cart.There is a review section in this site.I used mongodb as databased system for this website",
            "technologies": "html,css,bootstrap,react bootstrap,react,node.js,express.js,mongodb,firebase,axios,react router dom,hruko",
            "client_site_link": "https://github.com/Saiful182/Classy-Watch-Client-Site",
            "server_site_link": "https://github.com/Saiful182/classy-each-store-server",
            "live_site": "https://classy-watch-store.web.app",
            "main_img": "https://i.postimg.cc/3RPdSg50/classy-head.png",
            "img1": "https://i.postimg.cc/7Ydgvkx2/classy-home-1.png",
            "img2": "https://i.postimg.cc/1XzpSRnp/class-home-3.png",
            "img3": "https://i.postimg.cc/K8TtxHzs/classy-home-2.png",
            "img4": "https://i.postimg.cc/28V4X6fY/classy-hot-delas.png",
            "img5": "https://i.postimg.cc/ZKMLTNL0/classy-selected-product.png",
            "img6": "https://i.postimg.cc/wjRQ3BW2/Cart.png"
        },
        {
            "id": 2,
            "name": "Tour International bd",
            "Discription": "Its a travel agency website where agency probides diffrent tour pakages for users.user can choose tour pakages after log in.For user authentication i used firbase.User can cheak his selected pakages and also can delete them.For save these information i used mongodb.There is a small admin part wwhere admin can add new destination pakages.",
            "technologies": ":html,css Bootstrap, React, React Router Dom, React Bootstrap, Firebase, Mongodb, heruko, axios.",
            "client_site_link": "https://github.com/Saiful182/Tour-international-server",
            "server_site_link": "https://github.com/Saiful182/Tour-internation-clientsite",
            "live_site": "https://tour-international-ltd.web.app/",
            "main_img": "https://i.postimg.cc/1z7gFkvH/tour-head.png",
            "img1": "https://i.postimg.cc/MHwMTckg/tour-1.png",
            "img2": "https://i.postimg.cc/4xXhRNDn/tour-3.png",
            "img3": "https://i.postimg.cc/9Xq9GkPX/tour-4.png",
            "img4": "https://i.postimg.cc/7ZXJHr49/tour-5.png",
            "img5": "https://i.postimg.cc/C54ZfFS5/tour-2.png",
            "img6": "https://i.postimg.cc/DykX5c5r/tour-6.png"
        },
        {
            "id": 3,
            "name": "Peoples care hospital",
            "Discription": "Its a web site for hospital where user can take diffrent hoispital service and take apppontments from doctors.user have to login form take any appointment.No database used in this website.",
            "technologies": "html,css,Bootstrap, React, React Router Dom, React Bootstrap, Firebase, Netlify.",
            "client_site_link": "https://github.com/Saiful182/Classy-Watch-Client-Site",
            "server_site_link": "https://github.com/Saiful182/classy-each-store-server",
            "live_site": "https://classy-watch-store.web.app",
            "main_img": "https://i.postimg.cc/VkY5VfTg/hospita-head.png",
            "img1": "https://i.postimg.cc/NjtRGxHs/hopital-2.png",
            "img2": "https://i.postimg.cc/9X4dL02h/hospital-3.png",
            "img3": "https://i.postimg.cc/65ndNPTb/hospital-4.png",
            "img4": "https://i.postimg.cc/xd08hxbm/hospital-6.png",
            "img5": "https://i.postimg.cc/TPC16Vr4/1.png",
            "img6": "https://i.postimg.cc/B6b6QjpQ/hoipital-1.png"
        }
    ]
    return (
        <div className="project-container">
            <Typography style={{ margin: '20px' }} variant="h3">My Best Projects</Typography>
            <Grid spacing={1} >
                {
                    projects.map(project => <Project key={project.id} project={project} ></Project>)
                }
            </Grid>
        </div>
    );
};

export default Projects;