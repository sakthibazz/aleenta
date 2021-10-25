import React, { Component } from 'react';
import { Grid, Typography,  } from '@material-ui/core';

import icon13 from "../../images/dropDown/aboutDD/What_is_wellbeing.png"
import icon15 from "../../images/dropDown/aboutDD/Who_needs_wellbeing.png"
import icon12 from "../../images/dropDown/aboutDD/Why_Aleenta.png"
import icon1 from "../../images/dropDown/aboutDD/The_coach.png"



import { makeStyles } from "@material-ui/core/styles";

//-----------------------Icons-----------------------
// let icon13 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDD/What_is_wellbeing.png'
// let icon15 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDD/Who_needs_wellbeing.png'
// let icon12 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDD/Why_Aleenta.png'
// let icon4 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDD/The_coach.png'






const useStyles = makeStyles(theme => ({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
}));






const About = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    return ( 
        <>
        <Grid item className="hrTag" style={{marginTop:" 1px",marginBottom:" 1%"}}>

        </Grid>
        <Grid container className="aboutContainer aboutTitleContainer1" spacing={2}>
            <Grid item xs={12} md={4}>
                <Typography className='abotTitle'>
                    <span className="span1" style={{color:"#97581E",fontWeight:"600",fontStyle: "italic"}}>Aleenta</span > is an ancient Sanskrit word which means " A rewarding life".
                    At Aleenta, we design a personalised holistic approach for an all-round wellbeing of our Clients 
                    because every person is unique in his/her own way - in thought, emotion and in action.
                    The outcome of our programs are Self discovery and Self awareness in a healthy and successful way.
                </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container  spacing={0}>
                    <Grid item align="center" xs={2} md={1}>
                        <img className="dropDownIcons" src={icon13} />
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <Typography className="aboutDropDown_heading1" variant='h6'>
                            What is Well-being ?
                        </Typography>
                        <Typography className="aboutDropDown_subContent" >
                            According to Oxford dictionary Well-being means – 
                            A state of being comfortable, healthy, or happy. 
                            Our program fits every human being who wishes to 
                            be in charge of their lives, who wants to fulfil 
                            their major goals and have an awareness and an 
                            undertaking toward a state of overall wellbeing. 
                        </Typography>
                    </Grid>

                    <Grid item align="center" xs={2} md={1}>
                        <img className="dropDownIcons" src={icon15} />
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <Typography className="aboutDropDown_heading1" variant='h6'>
                        	Why Aleenta ?
                        </Typography>
                        <Typography className="aboutDropDown_subContent">
                            We follow a natural, friendly approach that 
                            consists of a co-creative relationship with the client/clients. 
                            At Aleenta, everything that is important to the client is captured 
                            to bring about excellent ways to Self discovery and move in the direction 
                            of achieving success in the 
                            Client's/Organisation's area of priority. We serve all genders of all age groups.
                        </Typography>
                    </Grid>
                    
                    <Grid item align="center" xs={2} md={1}>
                        <img className="dropDownIcons" src={icon12} />
                    </Grid>
                    <Grid item xs={10} md={5}>
                    
                        <Typography className="aboutDropDown_heading1" variant='h6'>
                        	Who needs Well-being ?
                        </Typography>
                        <Typography className="aboutDropDown_subContent" >
                            {bull} Anyone who : Wants to seek Awareness on overall wellbeing to 
                            become a Healthy, Happy and a Successful person. 
                        </Typography>
                        <Typography className="aboutDropDown_subContent" >
                            {bull} Anyone who : Wishes to make lifestyle changes to become 
                            their best Self to lead a Happy, Healthy and a fulfilling Life. 
                        </Typography>
                        <Typography className="aboutDropDown_subContent">
                            {bull} Anyone who : Is thriving to adapt a positive Mindset 
                        </Typography>
                        <Typography className="aboutDropDown_subContent">
                            {bull} Anyone who : Wants to work on their Time management, 
                            Self confidence and Self esteem to strike a balance between personal, 
                            professional and social aspects of their lives.   
                        </Typography>
                    </Grid>

                    <Grid item align="center" xs={2} md={1}>
                        <img className="dropDownIcons" src={icon1} />
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <Typography className="aboutDropDown_heading1" variant='h6'>
                            The Coach
                        </Typography>
                        <Typography className="aboutDropDown_subContent">
                            <span className="span2" style={{color:"#97581E",fontWeight:"600",fontStyle: "italic"}}>
                                Mangala Narayan</span> is a Certified Wellbeing Coach,
                            who has mastered coaching through her Life 
                            experiences with children and people who wished to 
                            achieve their goals of Life in their pursuit of fulfilment and happiness. 
                            She is an excellent motivator, a great listener who hand holds her clients 
                            and manoeuvres through a highly positive transformational process. 
                            She is also a Visual Artist and a Meditation Practitioner by profession. 
                            She has a natural ability to motivate, 
                            inspire and support clients in their paramount endeavours. 
                        </Typography>
                    </Grid>
                </Grid> 
            </Grid>
              
        </Grid>
        </>
     );
}
 
export default About;