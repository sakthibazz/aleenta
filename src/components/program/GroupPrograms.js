import React, { Component, useEffect } from 'react';

import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

// -------------Images----------------------------

import relationshipsGroup from "../../images/programs/groupPrograms/relationshipsGroup.jpg"
import spirituality from "../../images/programs/groupPrograms/spirituality.jpg"
import wellnessGroup from "../../images/programs/groupPrograms/wellnessGroup.jpg"
import happinessGroup from "../../images/programs/groupPrograms/happinessGroup.jpeg"

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


const GroupPrograms = ({history}) => {

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
                    <Typography className="topText" style={{fontSize:"22px"}}>
                    	Programs <ArrowRightIcon/> Group Programs
                    </Typography>
                </Grid>

                {/*------------------------ Happiness coaching ------------------------------ */}

                <Grid container align="center" id="happiness" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Happiness coaching  
                        </Typography>
                        <Typography className="programsTitle">
                            Discover the Happiness that is within You! 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={happinessGroup}
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
                        One has to find his/her true sources of happiness in order to 
                        live a happy and successful life. Aleenta's Happiness program is 
                        the right choice for anybody who wishes to be happy at all times, make right decisions, 
                        maintain healthy relationships and inspire others to be happy! 
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



                {/*------------------------ 	Spiritual coaching  ------------------------------ */}
                
                <Grid container align="center" id="spritual" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Spiritual coaching
                        </Typography>
                        <Typography className="programsTitle">
                            Every human has a Spiritual quotient – which some have discovered, some in the path of 
                            discovering and few, are yet to discover. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={spirituality}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Spiritual coaching 
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        Aleenta provides an excellent space for individuals 
                        who are in this path to seek their higher purpose, 
                        to experience and celebrate their achievements and finally attain a state of complete Well-being. This results in excellent health, better relationships and a high quality of life! 
                        The client will be able to see the true meaning of Life in this program.
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


            {/*------------------------ Relationship coaching   ------------------------------ */}
                
                <Grid container align="center" id="relation" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Relationship coaching 
                        </Typography>
                        <Typography className="programsTitle">
                            Life is all about relationships, where one cannot not relate to 
                            anybody! Funny as it may sound, it is the truth! 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={relationshipsGroup}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Relationship coaching   
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        Relationship coaching creates ideas and insights on how to maintain existing 
                        relationships and create new healthy relationships. In this process of learning and discovering, 
                        the client as an individual will transform himself/herself for a better 
                        Self to maintain healthy relationships in every area of their life. 
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


                 {/*------------------------ Wellness coaching    ------------------------------ */}
                
                 <Grid container align="center" id="wellness" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Wellness coaching  
                        </Typography>
                        <Typography className="programsTitle">
                            Sponsor your employee for one-on-one coaching in any area of development. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={wellnessGroup}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Wellness coaching  
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        In this program, we offer group coaching (Organisations/Institutions/Schools) for 
                        all individuals coming from different cultures, 
                        demographics and status and for nuclear families.   
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
                        Topics include :
                    </Typography>

                    <Typography className="programscontent1" align='Left'>
                        {bull} how to stay positive and healthy in mind and body.
                    </Typography>
                    <Typography className="programscontent1" align='Left'>
                        {bull} how to handle and overcome difficult situations.
                    </Typography>
                    <Typography className="programscontent1" align='Left'>
                        {bull} how to maintain healthy relationships. 
                    </Typography>
                    <Typography className="programscontent1" align='Left'>
                        {bull} how to transform obstacles into opportunities to grow in personal and professional areas.
                    </Typography>
                    <Typography className="programscontent1" align='Left'>
                        {bull} how to perform well and excel in your roles at home, work and social environment. 
                    </Typography>
                    <Typography className="programscontent1" align='Left'>
                        {bull} how to become an inspiration to others in their wellness story.
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

            </Grid>


        </>
     );
}
 
export default GroupPrograms;