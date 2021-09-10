import React, { Component, useEffect } from 'react';

import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

// -------------Images----------------------------

import adolescent from "../../images/programs/individualPrograms/adolescent.jpg"
import selfExpression from "../../images/programs/individualPrograms/selfExpression.jpg"
import socialInhibitions from "../../images/programs/individualPrograms/socialInhibitions.jpg"
import timeManagement from "../../images/programs/individualPrograms/timeManagement.jpg"
import creativeCoaching from "../../images/programs/individualPrograms/creativeCoaching.jpeg"
import natureCoaching from "../../images/programs/individualPrograms/natureCoaching.jpeg"

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


const IndividualPrograms = ({history}) => {

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
                    	Programs <ArrowRightIcon/> Individual Programs
                    </Typography>
                </Grid>

                {/*------------------------ Nature ------------------------------ */}

                <Grid container align="center" id="nature" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Nature coaching  
                        </Typography>
                        <Typography className="programsTitle">
                            In this one-on-one coaching program, the client will 
                            discover his/her true nature using an organic approach. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={natureCoaching}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Nature coaching 
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        The Process incorporates peeling off the layers of years of 
                        conditioning and limiting beliefs which act as obstacles in the 
                        client's way of growth in their area of interest and achieving his/her major goals of life. 
                        Identifying Self Nature in their own ways by questioning and identifying one's small wins or 
                        invisible wins, failures and capabilities is a part of this process of Self discovery.  
                    </Typography>

                    <Typography className="programscontent1" align='Left' style={{fontWeight:"600"}}>
                        In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                        are maintained throughout the coaching relationship.  
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



                {/*------------------------ 	Creative coaching  ------------------------------ */}
                
                <Grid container align="center" id="creative" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Creative coaching  
                        </Typography>
                        <Typography className="programsTitle">
                            Tapping into the client's creative potential is a 
                            fun and creative process that Aleenta offers. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={creativeCoaching}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Creative coaching  
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        Sometimes, an individual is unaware of their true potential, 
                        of their true creative nature. We tap into this area of the 
                        Client by brainstorming and questioning. We work together in 
                        discovering the client's inner creative potential that can be 
                        rightly applied in various scenarios – be it at work, family or social. 
                        We explore together various techniques to excel in identifying, 
                        assimilating and achieving the client's major goals of life. 
                        In partnership with the Client, we nurture the creativity 
                        and innovative side of the Client in this program.     
                    </Typography>

                    <Typography className="programscontent1" align='Left' style={{fontWeight:"600"}}>
                        In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                        are maintained throughout the coaching relationship.  
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


            {/*------------------------ Adolescent coaching (ages 11 to 20)   ------------------------------ */}
                
                <Grid container align="center" id="adolescent" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Adolescent coaching (ages 12 to 20)  
                        </Typography>
                        <Typography className="programsTitle">
                        Do you feel the environment you are living in is not 
                        supportive of your ideas, thoughts and feelings? Are your 
                        inhibitions stopping you from having high Self-esteem and high 
                        Self-confidence in personal/ academic/ social environments? 
                        Aleenta's Adolescent coaching is the right program for you! 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={adolescent}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Adolescent coaching (ages 12 to 20)  
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        In this type of coaching, we work with teens/adolescents, who would want to explore their inner self and talents, 
                        tap into their creative potential to excel in studies and have a healthy personal and social life.
                        Social media which can take an individual in the best direction to achieve his/her goals, sometimes, 
                        can actually lead them in the opposite direction. In this direction, they experience insecurity, fear 
                        of failure/losing, broken 
                        relationships, peer pressure, low self-esteem and low self confidence. Our contribution at Aleenta
                         is to identify (in partnership with the adolescent client) these
                        external factors that affect one's inner strength and potential. We work together to overcome the 
                        negative aspects, identify action plans to move forward and to stay on track to achieve success and happiness! 
                    </Typography>

                    <Typography className="programscontent1" align='Left'>
                    Another reason to contact us; When do you know that you/your child needs coaching? 
When a teen/adolescent knows what to achieve but is not able to go forward with it due to some blocks – external, emotional and situational, which makes it even harder for them to go with the flow of life. At this point, the teen/adolescent needs an accountability partner who helps the client to identify these blocks and motivates them to move toward their goals with increased focus and zeal!

                    </Typography>

                    <Typography className="programscontent1" align='Left' style={{fontWeight:"600"}}>
                        In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                        are maintained throughout the coaching relationship.  
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


                 {/*------------------------ Time Management    ------------------------------ */}
                
                 <Grid container align="center" id="timeManage" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Time Management 
                        </Typography>
                        <Typography className="programsTitle">
                            This program is ideal for students and people who are juggling with work, 
                            home and social environments and are finding it difficult to strike a 
                            balance between all of them.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={timeManagement}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Time Management   
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                    When one feels overloaded, trapped, irritable, incompetent, drained and harassed, that is when you know that you need to mangae your time and prioritize. Bad planning, faulty estimation of time, ignoring facts and being addicted to the challenge of crises are few reasons why we end up feeling all the above.
Aleenta's Time Management program offers personalised designs to plan, prioritize and execute your work on a daily/ weekly/monthly basis. 

                    </Typography>

                    <Typography className="programscontent1" align='Left'>
                    Positive outcome of this program is that; Work gets done on time thereby increasing one's Self confidence and energy to take up more work. A calm and peaceful state of mind and good relationships are a few other results of this program. 
                    </Typography>

                    <Typography className="programscontent1" align='Left' style={{fontWeight:"600"}}>
                        In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                        are maintained throughout the coaching relationship.  
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


                  {/*------------------------ Self-expression ------------------------------ */}

                  <Grid container align="center" id="selfExpression" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Self-expression 
                        </Typography>
                        <Typography className="programsTitle">
                            This program is ideal for adolescents and youth who are continuously engaged in their studies and activities that inhibits them from expressing themselves in a natural and healthy way. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={selfExpression}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Self-expression 
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        In this program, we offer fun activities and excellent self 
                        expression techniques to identify and clear the factors that 
                        are hindering the growth of an adolescent in their physical, emotional and social areas. 
                        Keeping an Art Journal, writing their personal story, narrating
                        major incidents that have caused trauma or extreme joy in their lives are a 
                        few methodologies we impart. Our Expresseive Art activites play a major role in 
                        removal of hidden negative emotions to a great extent!
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

                    <Typography className="programscontent1" align='Left' style={{fontWeight:"600"}}>
                        In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                        are maintained throughout the coaching relationship.  
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



                  {/*------------------------ Social inhibitions ------------------------------ */}

                  <Grid container align="center" id="social" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={12}>
                        <Typography className="programsHeading">
                            Social inhibitions 
                        </Typography>
                        <Typography className="programsTitle">
                            This program is ideal for individuals who are 
                            active on social media but not the same when they encounter 
                            real-life social situations. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="mangallamImg"
                            src={socialInhibitions}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} className="corporateProDiv">
                    
                </Grid>

                {/* <Grid item xs={12} md={12} className="programsTitle">
                    Social inhibitions
                </Grid> */}
                <Grid item xs={12} md={12} >
                    <Typography className="programscontent1" align='Left'>
                        This program is uniquely designed for each individual 
                        that begins with an opening up process and ends with 
                        Self-discovery, high Self-confidence and high Self-esteem. 
                        Feelings of low self confidence, fear of communication and 
                        fear of being judged are few challenges people often face in 
                        social gatherings. Our program brings in a natural process of opening up and 
                        achieving Self confidence in a short span of time. 
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

                    <Typography className="programscontent1" align='Left' style={{fontWeight:"600"}}>
                        In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                        are maintained throughout the coaching relationship.  
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
 
export default IndividualPrograms;