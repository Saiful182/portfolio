
import { Grid, Link, Typography } from '@mui/material';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box } from '@mui/system';
import './contactme.css'
const ContactMe = () => {
    return (
        <div className="contact-container">
            <Grid style={{ justifyContent: 'center' }} container xs={12}>

                <Grid >
                    <Box  >

                        <Typography variant="h4" >Email: saifulislamcse0@gmail.com</Typography>
                        <Typography variant="h4" >Call: 01625627572</Typography>
                        <Typography variant="h4" >or <Link style={{ cursor: 'pointer', textDecoration: 'none', color: '#551A8B' }} href="javascript:void(
        window.open(
          'https://form.jotform.com/213334833645456',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )">Click Hare</Link> </Typography>
                    </Box>
                </Grid>

            </Grid>


        </div >

    );
};

export default ContactMe;