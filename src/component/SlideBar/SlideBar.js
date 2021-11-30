import { Box } from '@mui/system';
import React from 'react';
import OthersSlideIteams from '../OthersSlideItems/OthersSlideIteams';
import Profile from '../Profile/Profile';

const SlideBar = () => {

    return (
        <Box sx={{ backgroundColor: 'rgba(50, 50, 120, 0.5)' }}>
            <Profile
            ></Profile>
            <OthersSlideIteams>
            </OthersSlideIteams>

        </Box >
    );
};

export default SlideBar;