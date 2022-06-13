import React, { Component } from 'react';

import { Grid, Typography, Card, Button,} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { SettingsInputComponent } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({

    meditationRegisterButton: {
        width:"14%",
        height:'60px',
        background: "#FFE481",
        borderRadius: 25,
        color: "black",
        fontWeight: "600",
        fontSize: "35px",
        "@media only screen and (max-width: 1040px)": {
            height:'40px',
            width:"40%",
        },
        "@media only screen and (max-width: 600px)": {
            height:'40px',
            width:"70%",
        },
        "&:hover": {
          background: "#FFE481",
        },
      },
}));

const MeditationDialog = () => {

      const classes = useStyles();

    return ( 
        <>
            <Grid item xs={12} md={12} align='center' style={{marginTop:"2%"}}>

                <p>
                    Poornam is a year-long program that consists of guided meditation sessions 
                    every Saturday from 7.15AM to 8AM by Meditation expert and Wellbeing coach, 
                    Mangala Narayan. Poornam commences on Monday, 16th May, 2022, on the auspicious 
                    day of Buddha Poornima and 
                    concludes on May 5th 2023 on the occasion of Buddha Poornima.
                </p>

                <p>
                    Introductory offer of Rs 7,500/- per person is 
                    available only if registered before 12:00 am of 17th 
                    June 2022 after which the program 
                    fee will be at the regular price of Rs.12,000/- per person.
                </p>

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
        </>
     );
}
 
export default MeditationDialog;