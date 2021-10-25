import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

let logoImg = "https://dec4365vfd8ox.cloudfront.net/images/logo/aleenta.png";

const useStyles = makeStyles(theme => ({
    mainViewContainer: {
        margin:"0%",
        maxWidth: "100%",
        paddingLeft: "0%",
        paddingTop:"0%",
        paddingRight:"0%",
        "& .MuiContainer-root": {
            paddingLeft: "0%",
        }, 
        "& .MuiContainer-maxWidthLg": {
            maxWidth: "100%",
        },
    },
}));

const Contact = () => {

    const classes = useStyles();

    return ( 
        <Container maxWidth="lg" className={`${classes.mainViewContainer} mainViewContainerContact`}>
            <Grid container>
                <Grid item xs={12} md={12}  className={classes.mainGridContainer} align='center'>
                    <Typography className='contactTitle' align='center'>
                        We are here to help
                    </Typography>
                    <Typography className='contactUs' align='center'>
                        Contact Us
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} align='center'>
                    <img 
                        className="logoImg"
                        src={logoImg}
                    />
                </Grid>
                <Grid item xs={12} md={12} align='center' >
                    <Grid container>
                        <Grid item xs={12} md={4} align='center'>
                            <Typography className="contactContent" align='center'>
                                Phone: +916362925160
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} align='center'>
                            <Typography className="contactContent" align='center'>
                                Address: 75, Phase 2, Classic Orchards,
                                Bannerghatta Road,
                                Bangalore 560076,
                                Karnataka, India.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} align='center'>
                            <Typography className="contactContent" align='center'>
                            <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default Contact;