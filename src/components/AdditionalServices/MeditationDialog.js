import React, { Component } from 'react';

import { Grid, Typography, Card, Button,} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { SettingsInputComponent } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({

    meditationRegisterButton: {
        width:"20%",
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
                    Introductory offer for the entire program is at Rs.7,500/- (Regular price: Rs.12,000/-)
                </p>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdv9WCV9Dp6wx0xEKvE7KlJyUS-y511l36jIXwZmjf9KvwOdA/viewform" target="_blank" style={{textDecoration:"none",color:"black",fontWeight:"600"}}>
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