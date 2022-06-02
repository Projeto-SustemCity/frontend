import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={2.5} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos' >Siga-nos nas redes sociais </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            
                            <a href="sustemcity@gmail.com" target="_blank">
                                <EmailIcon className='redes' />
                            </a>
                            <a href="https://github.com/Projeto-SustemCity" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>

                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos2'>© 2022 Copyright:</Typography>
                        </Box>
                        <Box className='textos2'>
                            <a target="_blank" href="sustemcity@gmail.com">
                                <Typography variant="subtitle2" gutterBottom align="center" className='textos2'>SustemCity</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;