import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

let logoImg = "https://dec4365vfd8ox.cloudfront.net/images/logo/aleenta.png";
let coach = "https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/theCoach.jpeg"

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
                <Grid item xs={0} sm={0} xl={0} md={4} align='center' className="whatsapp">
                        <a href="https://wa.me/916362925160" target="_blank" style={{textDecoration:"none",color:"black"}}>
                            <Typography className="contactContent" align='center' style={{fontWeight:"600"}}>
                                Whatsapp number: +916362925160
                            </Typography>
                        </a>
                           
                </Grid>
                <Grid item xs={12} md={4} align='center'>
                    <img 
                        className="logoImg"
                        src={logoImg}
                    />
                    <p align='center' style={{fontWeight:"600",padding:"2% 20% 0% 20%"}}>
                        Near Meenakshi temple 
                        Bannerghatta Road 
                        Bangalore-560076
                    </p>
                </Grid>
                <Grid item xs={12} sm={0} xl={0} md={0} lg={0} align='center' className="whatsapp1" >
                        <a href="https://wa.me/916362925160" target="_blank" style={{textDecoration:"none",color:"black"}}>
                            <Typography className="contactContent" align='center' style={{fontWeight:"600"}}>
                                Whatsapp number: +916362925160
                            </Typography>
                        </a>
                           
                </Grid>
                <Grid item xs={12} md={4} align='center' alignItems="flex-end">
                        <a href="mailto:programs@aleenta.in" target="_blank" style={{textDecoration:"none",color:"black"}}>
                            <Typography className="contactContent" align='center' style={{fontWeight:"600"}}>
                                 Programs@aleenta.in 
                            </Typography>
                        </a>
                </Grid>
                {/* <Grid item xs={12} md={12} align='center' >
                    <Grid container>
                        <Grid item xs={12} md={4} align='center'>
                            <Typography className="contactContent" align='center' style={{fontWeight:"600"}}>
                                what's app: +916362925160
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} align='center'>
                            {/* <Typography className="contactContent" align='center'>
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
                </Grid> */}
            </Grid>


            {/* <Grid container>
                <Grid item xs={12} md={12} align='center' >
                    <p className="askTheCoach" >
                        Ask the Coach
                    </p>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img src={coach} className="askTheCoachImg" />
                </Grid>
                <Grid item xs={12} md={6} >
                    
                </Grid>
            </Grid> */}
        </Container>
     );
}
 
export default Contact;