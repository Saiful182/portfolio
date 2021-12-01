import { Avatar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../../Images/Profile.jpg';
import './profile.css'
const Profile = () => {
    return (
        <div className="avater-container">
            <Avatar
                alt="Remy Sharp"
                src={ProfilePic}
                sx={{ width: 200, height: 200, margin: 'auto', textAlign: 'center' }}
            />

            <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/"> <Typography sx={{
                margin: 2,

            }} variant="h3">Md. Saiful Islam</Typography></Link>
            <Typography variant="h5">Web Developer</Typography>
        </div>
    );
};

export default Profile;