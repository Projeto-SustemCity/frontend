import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Box, Grid } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#7d974e", height: "120px" }} justifyContent="center">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="sustemcity@gmail.com" target="_blank">
                                <EmailIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                          
                                <a href="https://github.com/Projeto-SustemCity" target="_blank">
                                    <GitHubIcon style={{ fontSize: 60, color: "white" }} />
                                </a>
                            </Box>


                        </Box>


                    
                    <Box style={{ backgroundColor: "#7d974e 80%", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;