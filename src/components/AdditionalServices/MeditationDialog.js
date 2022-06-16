import React, { Component } from 'react';

import { Grid, Typography, Card, Button,} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import DateRangeIcon from '@material-ui/icons/DateRange';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import { SettingsInputComponent } from '@material-ui/icons';


let popUpMainImg = 'https://dec4365vfd8ox.cloudfront.net/images/welcome/poornamPopUp/popUpMainImg.png';
let popUpSemiCircle = 'https://dec4365vfd8ox.cloudfront.net/images/welcome/poornamPopUp/popUpSemiCircle.png';
let popUpStar = 'https://dec4365vfd8ox.cloudfront.net/images/welcome/poornamPopUp/popUpStar.png';




const useStyles = makeStyles((theme) => ({

    meditationRegisterButton: {
        width:"24%",
        height:'60px',
        background: "#FFE481",
        borderRadius: 25,
        color: "black",
        fontWeight: "600",
        fontSize: "35px",
        "@media only screen and (max-width: 965px)": {
            height:'40px',
            width:"40%",
        },
        "@media only screen and (max-width: 600px)": {
            height:'40px',
            width:"48%",
        },
        "&:hover": {
          background: "#FFE481",
        },
      },
}));

const MeditationDialog = () => {

      const classes = useStyles();

    // return ( 
    //     <>
    //         <Grid item xs={12} md={12} align='center' style={{marginTop:"2%"}}>

    //             <p>
    //                 Poornam is a year-long program that consists of guided meditation sessions 
    //                 every Saturday from 7.15AM to 8AM by Meditation expert and Wellbeing coach, 
    //                 Mangala Narayan. Poornam commences on Monday, 16th May, 2022, on the auspicious 
    //                 day of Buddha Poornima and 
    //                 concludes on May 5th 2023 on the occasion of Buddha Poornima.
    //             </p>

    //             <p>
    //                 Introductory offer of Rs 7,500/- per person is 
    //                 available only if registered before 12:00 am of 17th 
    //                 June 2022 after which the program 
    //                 fee will be at the regular price of Rs.12,000/- per person.
    //             </p>

                // <a href="https://rzp.io/l/aleenta_poornam" target="_blank" style={{textDecoration:"none",color:"black",fontWeight:"600"}}>
                //     <Button
                //         variant="contained"
                //         className={classes.meditationRegisterButton}
                //         style={{marginBottom:"2%",marginTop:"2%"}}
                //     >
                //     <Typography style={{fontSize:"16px",textTransform:"capitalize",fontWeight:"600"}}>
                //         Register Now
                //     </Typography>
                //     </Button>
                // </a>
    //         </Grid>
    //     </>
    //  );


    return(
        <>
            <Grid container>
                <Grid item xs={12} sm={4} md={4} className='popUpImgGrid'>
                    <img src={popUpMainImg} style={{width:"100%"}}></img>
                </Grid>
                <Grid item xs={12}  sm={8} md={8}>
                    <Grid container className='popUpContantGrid'>
                        <Grid item xs={12} md={12}>
                            <p className='popUpContantText'>
                                <span style={{fontWeight:"600",color:"#C07752"}}>Poornam Meditation</span> is a one year program conducted by Mangala Narayan,
                                a Wellbeing coach and a meditation Expert. Avail the introductory offer at Rs. 7500/-
                                by registering before 12 noon, 30th june, 2022.
                            </p>
                        </Grid>
                        <Grid item xs={12} md={12} align="center">
                            <p className='popUpContentPoints'>
                                <DateRangeIcon /> Saturday from 7.20am to 8am 
                                <span style={{fontSize:"30px"}}> | </span> 
                                <span style={{fontWeight:"800",fontSize:"22px"}}>₹</span> Regular price 12,000 
                                <span style={{fontSize:"30px"}}> | </span><FormatListBulletedIcon /> 52 Sessions
                            </p>
                            <p className='popUpContentList'>
                                <ul style={{listStyle:"none"}}>
                                    <li><DateRangeIcon /> Saturday from 7.20am to 8am </li>
                                    <li><span style={{fontWeight:"800",fontSize:"22px"}}>₹</span> Regular price 12,000</li>
                                    <li><FormatListBulletedIcon /> 52 Sessions</li>
                                </ul>
                            </p>
                        </Grid>
                        <Grid item xs={12} md={12} align="center">
                            <a href="https://rzp.io/l/aleenta_poornam" target="_blank" style={{textDecoration:"none",color:"black",fontWeight:"600"}}>
                                <Button
                                    variant="contained"
                                    className={classes.meditationRegisterButton}
                                    style={{marginBottom:"2%",marginTop:"2%"}}
                                >
                                <Typography style={{fontSize:"16px",textTransform:"capitalize",fontWeight:"600"}}>
                                    Register Now
                                </Typography>
                                </Button>
                            </a>
                        </Grid>
                        <Grid item xs={12} md={12} align="right">
                            <img src={popUpStar} className="popUpStar1" />
                        </Grid>
                        <Grid item xs={12} md={12} align="right">
                            <img src={popUpSemiCircle} className="popUpSemiCircle1" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
 
export default MeditationDialog;