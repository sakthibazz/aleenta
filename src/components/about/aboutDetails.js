import React, { Component, useEffect, useState } from 'react';
import { withRouter, Link } from "react-router-dom";


import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import ScrollAnimation from 'react-animate-on-scroll';


import Footer from "../footer";





// import splitCircle from "../../images/aboutDetails/splitCircle.png"

// ------------------Icons------------------------

// import icon13 from "../../images/dropDown/aboutDD/What_is_wellbeing.png"
// import icon15 from "../../images/dropDown/aboutDD/Who_needs_wellbeing.png"
// import icon12 from "../../images/dropDown/aboutDD/Why_Aleenta.png"
// import icon1 from "../../images/dropDown/aboutDD/The_coach.png"

let icon13 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/What_is_wellbeing.png'
let icon15 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Why_Aleenta.png'
let icon12 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Who_needs_wellbeing.png'
let icon1 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/The_coach.png'



// -------------Images----------------------------


// import cardImg1 from "../../images/aboutDetails/theCoach.jpeg"
// import cardImg2 from "../../images/aboutDetails/whyAleenta.jpeg"
// import cardImg3 from "../../images/aboutDetails/whatIsWellBeing.jpeg"
// import cardImg4 from "../../images/aboutDetails/whoNeedsWellBeing.jpeg"

// import PiChart from "../../images/aboutDetails/PiChart.png"


let cardImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/theCoach.jpeg'
let cardImg2 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/whyAleenta.jpeg'
let cardImg3 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/whatIsWellBeing.jpeg'
let cardImg4 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/whoNeedsWellBeing.jpeg'

let PiChart = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/PiChart.png'





let divider = "https://dec4365vfd8ox.cloudfront.net/images/programs/corporatePrograms/divider1.png";

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


const AboutDetails = ({history}) => {

    useEffect(() => {
        const unlisten = history.listen(() => {
          window.scrollTo(0, 0);
        });
        return () => {
          unlisten();
        }
      }, []);

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [subHeading, setSubHeading] = useState(null);


    useEffect(() => {
        const hash = history.location.hash
        if (hash && document.getElementById(hash.substr(1))) {
            // Check if there is a hash and if an element with that id exists
            document.getElementById(hash.substr(1)).scrollIntoView({behavior: "smooth"})
        }
    }, [history.location.hash]) 

    return ( 
        <>
            <Grid container className="corporateContainer  corporateTitleContainer" style={{backgroundColor:"white"}}>
                
                
            
                    <Grid container style={{backgroundColor:"#FBF7EE"}}>
                    
                       <Grid item xs={12} md={7} >
                            <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOut' delay={0.3}  duration={1}>
                                <img src={PiChart} className='aboutDetailsChart'/>
                            </ScrollAnimation>
                       </Grid>
                   
                       <Grid item xs={12} md={5} >
                       <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' delay={0.5}  duration={1}>
                       <p className='abotTitle2'>
                            <span className="span1" style={{fontWeight:"600",}}>Aleenta </span > 
                                is an ancient Sanskrit word which means "A rewarding life".
                                At Aleenta Wellbeing, we provide a space and motivation for 
                                the client to explore venues/methods/techniques to overcome 
                                challenges that are on the way to succeeding in their endeavours. 
                                We guide and support our clients on finding a harmonious balance between the mind, 
                                body and spirit that contributes to his/her total well-being. 
                        </p>
                        </ScrollAnimation>
                        </Grid>
                    </Grid>

                {/*------------------------ the coach------------------------------ */}

                <Grid container id="coach" style={{backgroundColor:"#fbf2de",paddingTop:"0%",paddingBottom:"2%"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={cardImg1}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>

                            <div className="tab1 shortContent">
                                <img className="img-class" src={icon1}/>
                                    <Typography className="img-title programsHeading">
                                        The Coach
                                    </Typography>
                            </div>
                      
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>

                            <Grid item xs={12} md={12}>

                                <Typography className="programscontent" align='Left'>
                                    <span className="span2" style={{color:"tomato",fontWeight:"600"}}>Mangala Narayan </span> 
                                    is a Certified Wellbeing Coach,
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

 {/*-------------------------------------------------- 	Why ------------------------------ */}

                {/* <Grid container id="happiness" style={{backgroundColor:"white"}}> */}
                    <Grid item xs={12} md={6} id="why" style={{paddingBottom:"2%",backgroundColor:"white"}}>
                        <img 
                            className="mangallamImg groupImg4"
                            src={cardImg2}
                            // style={{backgroundColor:"white"}}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} style={{backgroundColor:"white"}}>
                        <Grid container>
                            <Grid item xs={12} md={12}>

                            <div className="tab1 shortContent ">
                                <img className="img-class" src={icon12}/>
                                    <Typography className="img-title programsHeading" >
                                        Why Aleenta
                                    </Typography>
                            </div>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12} style={{paddingTop:"2%",paddingBottom:"2%"}}>

                             
                                <Typography className="programscontent" align='Left'>
                                    We follow a natural, friendly approach that 
                                    consists of a co-creative relationship with the client/clients. 
                                    At Aleenta, everything that is important to the client is captured 
                                    to bring about excellent ways to Self discovery and move in the direction 
                                    of achieving success in the 
                                    Client's/Organisation's area of priority. We serve all genders of all age groups.
                                </Typography>

                            </Grid>
                
                        </Grid>
                    </Grid>
                
                
                


            {/*------------------------ What WB  ------------------------------ */}


            <Grid container id="what"  style={{backgroundColor:"#fbf2de", paddingTop:"2%",paddingBottom:"2%"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={cardImg3}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>

                            <div className="tab1 shortContent">
                                <img className="img-class" src={icon13}/>
                                    <Typography className="img-title programsHeading" >
                                        What is Well-being ?
                                    </Typography>
                            </div>

                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                              

                                <Typography className="programscontent" align='Left'>
                                    According to Oxford dictionary Well-being means – 
                                    a state in which your physical, mental, and 
                                    spiritual health are in balance, 
                                    unlocking your body's natural healing abilities. 
                                    Our program fits every human being who wishes to 
                                    be in charge of their lives, who wants to fulfil 
                                    their major goals and have an awareness and an 
                                    undertaking toward a state of overall wellbeing. 
                                </Typography>

                
                            </Grid>
                        </Grid> 
                    </Grid>
                </Grid>
                


                 {/*------------------------ who needs WB?   ------------------------------ */}


                 
                <Grid container id="who" style={{paddingTop:"2%",paddingBottom:"2%",backgroundColor:"white"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={cardImg4}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>

                            <div className="tab1 shortContent">
                                <img className="img-class" src={icon15}/>
                                    <Typography className="img-title programsHeading" >
                                        Who needs Well-being ?
                                    </Typography>
                            </div>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>

                                <Typography className="programscontent1" align='Left'>
                                    Anyone who :
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    <ul>
                                        <li>
                                            wants to seek Awareness on overall wellbeing to 
                                            become a Healthy, Happy and a Successful person. 
                                        </li>
                                        <li>
                                            wishes to make lifestyle changes to become 
                                            their best Self to lead a Happy, Healthy and a fulfilling Life.
                                        </li>
                                        <li>
                                            is thriving to adapt a positive Mindset 
                                        </li>
                                        <li>
                                            wants to work on their Time management, 
                                            Self confidence and Self esteem to strike a balance between personal, 
                                            professional and social aspects of their lives.
                                        </li>
                                    </ul>
                                </Typography>     
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img 
                            className="dividerImgCorpProgram"
                            src={divider}
                        />
                    </Grid>
                </Grid>
                <Footer />
            </Grid>

            
        </>
     );
}
 
export default AboutDetails;