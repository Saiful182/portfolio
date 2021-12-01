import { Typography } from '@mui/material';
import React from 'react';

const EducationInfo = (props) => {
    const { name, Year, Institute, Result, Subject } = props.info;
    return (
        <div style={{ margin: '20px 0' }}>
            <Typography style={{ textDecoration: 'underline', color: '#551A8B' }} variant="h4">{name}</Typography>
            <Typography variant="h5">{Institute}</Typography>
            <Typography variant="p">Result: {Result}</Typography>
            <Typography variant="p"> Year:{Year}</Typography>
            <Typography variant="h5">Subject:{Subject}</Typography>

        </div>
    );
};

export default EducationInfo;