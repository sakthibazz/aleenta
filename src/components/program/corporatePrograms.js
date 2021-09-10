import React, { Component, useEffect } from 'react';

import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

// -------------Images----------------------------

import mangallam from "../../images/programs/corporatePrograms/mangallam.jpg"
import happinessIndividual from "../../images/programs/corporatePrograms/happinessIndividual.jpg"
import meditation from "../../images/programs/corporatePrograms/meditation.jpg"
import PersonalCorporate from "../../images/programs/corporatePrograms/PersonalCorporate.jpeg"

import divider from "../../images/programs/corporatePrograms/divider.png"

import ArrowRightIcon from '@material-ui/icons/ArrowRight';


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
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
}));


const CorporatePrograms = ({history}) => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    useEffect(() => {
        const hash = history.location.hash
        if (hash && document.getElementById(hash.substr(1))) {
            // Check if there is a hash and if an element with that id exists
            document.getElementById(hash.substr(1)).scrollIntoView({behavior: "smooth"})
        }
    }, [history.location.hash]) 

    return ( 
        <>
            <Grid container className="corporateContainer  corporateTitleContainer">
                
                <Grid item xs={12} md={12}>
                    <Typography className="topText">
                    	Programs <ArrowRightIcon/> Corporate Programs
                    </Typography>
                </Grid>

                {/*------------------------ Mangalam------------------------------ */}

                <Grid container align="center" id="mangallam" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Mangallam
                        </Typography>
                        <Typography className="programsTitle">
                            Health is not just the absence of a disease. It is an inner 
                            joyfulness that should be ours all the time; a state of positive well-being. --Deepak Chopra
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={mangallam}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Mangallam
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        In this program, employees learn techniques on how to 
                        stay positive and healthy – in body and in mind. 
                        The outcome of this program includes increased levels of mindfulness, 
                        empathy, higher performance and team dynamics. 
                    </Typography>

                    <Typography className="programscontent1" align='Left'>
                        A specially designed program that improves the Emotional 
                        quotient of employees that inculcates positive attitude, 
                        right communication and empathy. As Plato has been noted to 
                        say: "All learning has an emotional base." Mangallam brings 
                        more focus on this emotional foundation and its results on an 
                        individual's behavioural pattern. A deep process of perceiving, 
                        using, understanding and managing emotions clubbed with self awareness, 
                        other's/organisational awareness results in improved 
                        self management and improved relationship management. 
                    </Typography>

                    <Typography className="programscontent1" align='Left'>
                        Contact us with your requirements at programs@aleenta.in to know more.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} className="programsTitle">
                        <img 
                            className="dividerImgCoroProgram"
                            src={divider}
                        />
                </Grid>



                {/*------------------------ 	Happiness coaching ------------------------------ */}
                
                <Grid container align="center" id="happiness" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Happiness coaching 
                        </Typography>
                        <Typography className="programsTitle">
                            Happiness is when what you think, what you say, and what you do are in harmony. --Mahatma Gandhi
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={happinessIndividual}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Happiness coaching 
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        This program increases an individual's potential to be 
                        more focused, more present and more productive because of 
                        increased sense of fulfilment. This is achieved by a deep 
                        process of identifying the client's passion and finding ways of 
                        pursuing it and perform to their highest potential.  
                    </Typography>

                    {/* <Typography className="programscontent1" align='Left'>
                        A specially designed program that improves the Emotional 
                        quotient of employees that inculcates positive attitude, 
                        right communication and empathy. As Plato has been noted to 
                        say: "All learning has an emotional base." Mangallam brings 
                        more focus on this emotional foundation and its results on an 
                        individual's behavioural pattern. A deep process of perceiving, 
                        using, understanding and managing emotions clubbed with self awareness, 
                        other's/organisational awareness results in improved 
                        self management and improved relationship management. 
                    </Typography> */}

                    <Typography className="programscontent1" align='Left'>
                        Contact us with your requirements at programs@aleenta.in to know more.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} className="programsTitle">
                        <img 
                            className="dividerImgCoroProgram"
                            src={divider}
                        />
                </Grid>


            {/*------------------------ Meditation sessions  ------------------------------ */}
                
                <Grid container align="center" id="meditation" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Meditation sessions 
                        </Typography>
                        <Typography className="programsTitle">
                            To improve Focus and Concentration –  Upto 50 people in a batch.  
                            (12/24 hours – Annual calendar program)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={meditation}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Meditation sessions  
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        Meditation is an approach or a technique practiced to 
                        understand the emotions and behaviour of Self and others. 
                        {/* (Add the Link for meditation in additional services) */}
                    </Typography>

                    {/* <Typography className="programscontent1" align='Left'>
                        A specially designed program that improves the Emotional 
                        quotient of employees that inculcates positive attitude, 
                        right communication and empathy. As Plato has been noted to 
                        say: "All learning has an emotional base." Mangallam brings 
                        more focus on this emotional foundation and its results on an 
                        individual's behavioural pattern. A deep process of perceiving, 
                        using, understanding and managing emotions clubbed with self awareness, 
                        other's/organisational awareness results in improved 
                        self management and improved relationship management. 
                    </Typography> */}

                    <Typography className="programscontent1" align='Left'>
                        Contact us with your requirements at programs@aleenta.in to know more.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} className="programsTitle">
                        <img 
                            className="dividerImgCoroProgram"
                            src={divider}
                        />
                </Grid>


                 {/*------------------------ Personal Coaching   ------------------------------ */}
                
                 <Grid container align="center" id="personal" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Personal Coaching
                        </Typography>
                        <Typography className="programsTitle">
                            Sponsor your employee for one-on-one coaching in any area of development. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={PersonalCorporate}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Personal Coaching   
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        Areas include: Time Management, Optimism, Positive Attitude, Diversity and Inclusion, Passion, 
                        Clarity and Direction, Self-management, Wellness, Trust and Honesty.  
                        {/* (Add the Link for meditation in additional services) */}
                    </Typography>

                    {/* <Typography className="programscontent1" align='Left'>
                        A specially designed program that improves the Emotional 
                        quotient of employees that inculcates positive attitude, 
                        right communication and empathy. As Plato has been noted to 
                        say: "All learning has an emotional base." Mangallam brings 
                        more focus on this emotional foundation and its results on an 
                        individual's behavioural pattern. A deep process of perceiving, 
                        using, understanding and managing emotions clubbed with self awareness, 
                        other's/organisational awareness results in improved 
                        self management and improved relationship management. 
                    </Typography> */}

                    <Typography className="programscontent1" align='Left'>
                        Contact us with your requirements at programs@aleenta.in to know more.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} className="programsTitle">
                        <img 
                            className="dividerImgCoroProgram"
                            src={divider}
                        />
                </Grid>

            </Grid>


        </>
     );
}
 
export default CorporatePrograms;