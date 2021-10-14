import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

import { Grid, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    footerContent1: {
        // fontSize:"1px",
        // "@media only screen and (max-width: 600px)": {
        //     fontSize:"1px",
        // },
    "&.mainViewContainer .overViewConetnt": {
        fontSize:"1px",
        "@media only screen and (max-width: 600px)": {
            fontSize:"1px",
        },
    },
}
}))



let logo = "https://dec4365vfd8ox.cloudfront.net/images/logo/aleenta.png"

// --------------Icons-------------------------
let youtube = "https://dec4365vfd8ox.cloudfront.net/images/socoalMediaIcons/youtube.png"
let linkedin = "https://dec4365vfd8ox.cloudfront.net/images/socoalMediaIcons/linkedin.png"
let whatsapp = "https://dec4365vfd8ox.cloudfront.net/images/socoalMediaIcons/whatsapp.png"
let instagram = "https://dec4365vfd8ox.cloudfront.net/images/socoalMediaIcons/instagram.png"


const Footer = () => {

  const classes = useStyles();

  
    return ( 
        <>
            {/* <Grid container className="footerContainer" align="center">
                <Grid item xs={12} md={12}>
                    <img src={logo} className="footerLogoImg" />
                </Grid>
                <Grid item xs={12} md={12} className="footerContainer" >
                    <a href='https://youtube.com/channel/UCDYzoY_dXlSQn-nRR7C-NXg'target="_blank" >
                        <img src={youtube} className="footersocoalMediaIcons" />
                    </a>
                    <a href='https://www.linkedin.com/in/mangala-narayan-a6936b25' target="_blank">
                        <img src={linkedin} className="footersocoalMediaIcons" />
                    </a>
                    <a href="https://www.instagram.com/invites/contact/?i=vyvw7tgs0jxi&utm_content=mkpdld8" target="_blank">
                        <img src={instagram} className="footersocoalMediaIcons" />
                    </a>
                    <img src={whatsapp} className="footersocoalMediaIcons" />
                </Grid>
                <Grid item xs={12} md={12} className="footerContainer" >
                    <Typography className="footerContent">
                        <CopyrightIcon/>2021 - Aleenta Wellbeing. All Rights Reserved. The certification names are the trademarks of their respective owners.
                    </Typography>
                </Grid>
            </Grid> */}
            {/* <Grid container className="footerContainer">
                <Grid item xs={12} md={2}  className="footerLogoImgContainer"  align="center">
                    <img src={logo} className="footerLogoImg" />
                </Grid>
                <Grid item xs={12} md={8} className="footerContentContainer"  align="center">
                    <Typography className="footerContent1" style={{fontWeight:"600",}}>
                        <CopyrightIcon/>2021 - Aleenta Wellbeing. All Rights Reserved. The certification names are the trademarks of their respective owners.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={2} className="footersocoalMediaIconsContainer"  align="center" >
                    <a href='https://youtube.com/channel/UCDYzoY_dXlSQn-nRR7C-NXg'target="_blank" >
                        <img src={youtube} className="footersocoalMediaIcons" />
                    </a>
                    <a href='https://www.linkedin.com/in/mangala-narayan-a6936b25' target="_blank">
                        <img src={linkedin} className="footersocoalMediaIcons footersocoalMediaIcons1" />
                    </a>
                    <a href="https://www.instagram.com/invites/contact/?i=vyvw7tgs0jxi&utm_content=mkpdld81" target="_blank">
                        <img src={instagram} className="footersocoalMediaIcons footersocoalMediaIcons1" />
                    </a>
                    <img src={whatsapp} className="footersocoalMediaIcons footersocoalMediaIcons1" />
                </Grid>
                
            </Grid> */}
            <Grid container className="footerContainer">
                <Grid item xs={12} md={2}  className="footerLogoImgContainer"  align="center">
                    <img src={logo} className="footerLogoImg" />
                </Grid>
                <Grid item xs={0} md={8} className="footerContentContainer"  align="center">
                </Grid>
                <Grid item xs={12} md={2} className="footersocoalMediaIconsContainer"  align="center" >
                    <a href='https://youtube.com/channel/UCDYzoY_dXlSQn-nRR7C-NXg'target="_blank" >
                        <img src={youtube} className="footersocoalMediaIcons footersocoalMediaIcons1" />
                    </a>
                    <a href='https://www.linkedin.com/in/mangala-narayan-a6936b25' target="_blank">
                        <img src={linkedin} className="footersocoalMediaIcons footersocoalMediaIcons1" />
                    </a>
                    <a href="https://www.instagram.com/invites/contact/?i=vyvw7tgs0jxi&utm_content=mkpdld81" target="_blank">
                        <img src={instagram} className="footersocoalMediaIcons footersocoalMediaIcons1" />
                    </a>
                    <a href="https://wa.me/916362925160" target="_blank">
                        <img src={whatsapp} className="footersocoalMediaIcons footersocoalMediaIcons1" />
                    </a>
                </Grid>
                <Grid item xs={12} md={12} className="footerContentContainer"  align="center">
                    {/* <Typography className="footerContent1" style={{fontWeight:"600",}}> */}
                    <p className="footerContent1" style={{fontWeight:"600"}}>
                        <CopyrightIcon/>2021 - Aleenta Wellbeing. All Rights Reserved. The certification names are the trademarks of their respective owners.
                    </p>
                </Grid>
                
            </Grid>
        </>
     );
}
 
export default Footer;