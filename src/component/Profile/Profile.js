import { Avatar, Typography } from '@mui/material';
import React from 'react';
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

            <Typography sx={{
                margin: 2,

            }} variant="h3">Md. Saiful Islam</Typography>
            <Typography sx={{ margin: 'auto' }} variant="h5">Web Developer</Typography>
        </div>
    );
};

export default Profile;