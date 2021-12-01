import { Box } from '@mui/system';
import React from 'react';
import OthersSlideIteams from '../OthersSlideItems/OthersSlideIteams';
import Profile from '../Profile/Profile';
import './slidebar.css'

const SlideBar = () => {

    return (
        <Box className="slidebar-container" sx={{
            backgroundColor: 'rgba(91, 168, 231, 0.11)'
        }}>
            <Profile
            ></Profile>
            <OthersSlideIteams>
            </OthersSlideIteams>
        </Box >
    );
};

export default SlideBar;