import React, { Component, useEffect, useState } from 'react';
import { withRouter, Link } from "react-router-dom";


import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import Footer from "../footer";

// ------------------Icons------------------------

    // import  Mangallam from "../../images/Mangallam.png"

    // import Mangallam from "../../images/dropDown/corporatePro/Mangallam.png"
    // import Happiness from "../../images/dropDown/corporatePro/Happiness.png"
    // import Meditation_sessions from "../../images/dropDown/corporatePro/Meditation_sessions.png"
    // import Personal_coaching from "../../images/dropDown/corporatePro/Personal_coaching.png"

    let Mangallam = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Mangallam.png";
    let Happiness = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Happiness.png";
    let Meditation_sessions = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Meditation_sessions.png";
    let Personal_coaching = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Personal_coaching.png";



// -------------Images----------------------------

    // import MANGALLAM from "../../images/pgm_and_add_optimized_images/programs/corporatePrograms/Optimized_mangallam.jpeg"
    // import happinessIndividual from "../../images/pgm_and_add_optimized_images/programs/corporatePrograms/Optimized_happinessIndividual.jpg"
    // import meditation from "../../images/pgm_and_add_optimized_images/programs/corporatePrograms/Optimized_meditation.jpg"
    // import PersonalCorporate from "../../images/pgm_and_add_optimized_images/programs/corporatePrograms/Optimized_PersonalCorporate.jpg"

let MANGALLAM = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/corporatePrograms/Optimized_mangallam.jpeg";
let happinessIndividual = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/corporatePrograms/Optimized_happinessIndividual.jpg";
let meditation = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/corporatePrograms/Optimized_meditation.jpg";
let PersonalCorporate = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/corporatePrograms/Optimized_PersonalCorporate.jpg";

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


const CorporatePrograms = ({history}) => {

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
                
                <Grid item xs={12} md={12}>
                    < Grid container className="topText">
                       
                       <Grid item xs={12} md={12}>
                           <Typography className="topTextHeading" align="center">
                                Corporate Programs
                           </Typography>
                       </Grid>
                       
                       
                    {/* <Grid item xs={6} md={3} className={subHeading !='Mangallam'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <div className="tab1">
                        <img className="img-class" src={Mangallam}/>
                        <Link to='#mangallam' style={{textDecoration: "none",color: "#000000",}}>
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Mangallam")
                                    } 
                                }
                            >
                                Mangallam
                            </Typography>
                        </Link>
                        </div>
                        </Grid>

                        <Grid item xs={6} md={3} className={subHeading !='Happiness'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <div className="tab1">
                        <img className="img-class" src={Happiness}/>
                        <Link to='#happiness' style={{textDecoration: "none",color: "#000000",}}>
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Happiness")
                                    } 
                                }
                            >
                                Happiness coaching
                            </Typography>
                        </Link>
                        </div>
                        </Grid>
                       
                        <Grid item xs={6} md={3} className={subHeading !='Meditation'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <div className="tab1">
                        <img className="img-class" src={Meditation_sessions}/>
                        <Link to='#meditation' style={{textDecoration: "none",color: "#000000",}}>
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Meditation")
                                    } 
                                }
                            >
                                Meditation sessions
                            </Typography>
                        </Link>
                        </div>
                        </Grid>
                        

                        <Grid item xs={6} md={3} className={subHeading !='Personal'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <div className="tab1">
                        <img className="img-class" src={Personal_coaching}/>
                        <Link to='#personal' style={{textDecoration: "none",color: "#000000",}}>
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Personal")
                                    } 
                                }
                            >
                                Personal Coaching
                            </Typography>
                        </Link>
                        </div>
                        </Grid> */}








                       
                        {/* <Grid item xs={2} md={1} >
                            <img className="dropDownIcons1" src={Mangallam} align="right" />
                        </Grid>
                        <Grid item xs={10} md={2} className={subHeading !='Mangallam'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <Link to='#mangallam' style={{textDecoration: "none",color: "#000000",}}>
                            <Typography className="programHeading1"
                                onClick={()=>{
                                        setSubHeading("Mangallam")
                                    } 
                                }
                            >
                                Mangallam
                            </Typography>
                        </Link>
                        </Grid>
                        <Grid item xs={2} md={1}>
                            <img src={Happiness} className="dropDownIcons1" align="right" />
                        </Grid>
                        <Grid item xs={10} md={2} className={subHeading !='Happiness'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <Link to='#happiness' style={{textDecoration: "none",color: "#000000",}}>
                            <Typography className="programHeading1"
                                onClick={()=>{
                                        setSubHeading("Happiness")
                                    } 
                                }
                            >
                                Happiness coaching
                            </Typography>
                        </Link>
                        </Grid>
                        <Grid item xs={2} md={1}>
                            <img src={Meditation_sessions} className="dropDownIcons1" align="right" />
                        </Grid>
                        <Grid item xs={10} md={2} className={subHeading !='Meditation'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <Link to='#meditation' style={{textDecoration: "none",color: "#000000",}}>
                        
                            <Typography className="programHeading1"
                                onClick={()=>{
                                        setSubHeading("Meditation")
                                    } 
                                }
                            >
                                Meditation sessions
                            </Typography>
                        </Link>
                        </Grid>
                        <Grid item xs={2} md={1}>
                            <img src={Personal_coaching} className="dropDownIcons1" align="right" />
                        </Grid>
                        <Grid item xs={10} md={2} className={subHeading !='Personal'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <Link to='#personal' style={{textDecoration: "none",color: "#000000",}}>
                        
                            <Typography className="programHeading1"
                                onClick={()=>{
                                        setSubHeading("Personal")
                                    } 
                                }
                            >
                                Personal Coaching
                            </Typography>
                        </Link>
                        </Grid> */}
                    </Grid>
                </Grid>

                <Grid item xs={12} md={12} style={{backgroundColor:"#fbf2de",paddingTop:"2%"}} >
                    <Typography className="programsPageHeading" align="center" style={{fontStyle:"italic"}}>
                        Health is not just the absence of a disease. It is an inner joyfulness that should be ours all the time; a state of positive well-being. -- Deepak Chopra
                    </Typography>
                    <Typography className="programsPageParagraph" align="center">
                        At Aleenta's corporate programs, employees learn techniques on how to stay integral, 
                        positive and healthy – in body and in mind. The outcome of this program includes increased 
                        levels of mindfulness, empathy, higher performance and team dynamics. 
                        Our program specialises in boosting an individual's morale in all aspects of their life.
                    </Typography>
                </Grid>

                {/*------------------------ Mangalam------------------------------ */}

                <Grid container id="mangallam" style={{backgroundColor:"#fbf2de",paddingTop:"2%",paddingBottom:"2%"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={MANGALLAM}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>

                            <div className="tab1">
                                <img className="img-class" src={Mangallam}/>
                                    <Typography className="img-title programsHeading">
                                        Mangallam Body, Mind and Spirit workshop
                                    </Typography>
                            </div>
                      
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                
                                <Typography className="programscontent1" align='Left' >
                                    Mangallam is a Sanskrit word which means Well-being.
                                </Typography>
                                <Typography className="programscontent" align='Left'>
                                    Mangallam Body, Mind and Spirit workshop is a 2-day Wellness 
                                    Awareness workshop that focuses on achieving a balance between 
                                    the three dimensions of Life: Body, Mind and Spirit. 
                                    Our methodology includes Breathing techniques, deep introspective processes, 
                                    mindfulness meditation and open-minded 
                                    interactive space that helps create awareness on:
                                </Typography>
                        
                                <Typography className="programscontent" align='Left'>
                                    <ul>
                                        <li>improving team dynamics</li>
                                        <li>executing time bound issues with ease</li>
                                        <li>dealing with scenarios that cause discomfort (individual and team)</li>
                                        <li>dealing with ego clashes</li>
                                        <li>dealing with personal disturbances that affect their work-life balance</li>
                                        <li>improving emotional intelligence</li>
                                        <li>increasing work satisfaction and</li>
                                        <li>inculcating a practice of sharing and gaining.</li>
                                    </ul>
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Contact us with your requirements at  <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to know more.
                                </Typography>
                            </Grid>
                            {/* <Grid item xs={12} md={12}>
                                <img 
                                    className="dividerImgCorpProgram"
                                    src={divider}
                                />
                            </Grid> */}
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} md={12}>
                        <img 
                            className="dividerImgCorpProgram"
                            src={divider}
                        />
                    </Grid> */}
                </Grid>

                {/*------------------------ 	Happiness coaching ------------------------------ */}

                {/* <Grid container id="happiness" style={{backgroundColor:"white"}}> */}
                    <Grid item xs={12} md={6} style={{paddingTop:"2%",paddingBottom:"2%",backgroundColor:"white"}}>
                        <img 
                            className="mangallamImg groupImg4"
                            src={happinessIndividual}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} style={{backgroundColor:"white"}}>
                        <Grid container>
                            <Grid item xs={12} md={12}>

                            <div className="tab1 ">
                                <img className="img-class" src={Happiness}/>
                                    <Typography className="img-title programsHeading" >
                                        Mangallam Online
                                    </Typography>
                            </div>

                                {/* <Typography className="programsHeading shortContent">
                                    Happiness coaching
                                </Typography> */}
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12} style={{paddingTop:"2%",paddingBottom:"2%"}}>

                                <Typography className="programscontent1" align='Left'>
                                    In this Personal Transformation program that runs for 3 months (12 hours), 
                                    employees in a team learn to grow and transform themselves to own the 
                                    Organisation's Vision and achieve great success in their team projects.
                                </Typography>

                                <Typography className="programscontent" align='Left' style={{fontStyle:"italic",fontWeight:"600"}}>
                                    If you begin to understand what you are without trying to change it, then, 
                                    what you are undergoes a transformation.--Jiddu Krishnamurti
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Personal Transformation is all about not changing what you are but 
                                    identifying what you truly are – your Self nature and working toward enhancing, 
                                    nurturing and strengthening your Self.
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    In this program, we work on multiple domains such as Mindfulness, 
                                    Time management, Team work, Focus, Clarity and Direction, Gratitude and Acceptance, 
                                    Self-management, Optimism, Trust and Honesty, increasing one's Happiness quotient, 
                                    Emotional intelligence and Wellness.
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Benefits of this program: A highly positive outcome in the area where 
                                    the Client/Organisation aims/hopes to transform.
                                </Typography>

                                <Typography className="programscontent" align='Left' style={{paddingTop:"3%"}}>
                                    Contact us with your requirements at  <a href="mailto:programs@aleenta.in" target="_blank" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to know more.
                                </Typography>
                            </Grid>
                            {/* <Grid item xs={12} md={12}>
                                <img 
                                    className="dividerImgCorpProgram"
                                    src={divider}
                                />
                            </Grid> */}
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} md={12}>
                        <img 
                            className="dividerImgCorpProgram"
                            src={divider}
                        />
                    </Grid> */}
                {/* </Grid> */}
                
                


            {/*------------------------ Meditation sessions  ------------------------------ */}


            <Grid container id="meditation"  style={{backgroundColor:"#fbf2de", paddingTop:"2%",paddingBottom:"2%"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={meditation}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>

                            <div className="tab1 shortContent">
                                <img className="img-class" src={Meditation_sessions}/>
                                    <Typography className="img-title programsHeading" >
                                        Meditation sessions
                                    </Typography>
                            </div>

                                {/* <Typography className="programsHeading shortContent">
                                    Meditation sessions 
                                </Typography> */}
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                <Typography className="programscontent1" align='Left'>
                                    Pre-requisites: Must have attended Mangallam Online Program.
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Meditation is a set of techniques practiced to understand the 
                                    emotions and behaviour of Self and others. Regular practice of 
                                    Meditation results in a breakthrough in the 
                                    realms of Self-improvement and Self-transformation.
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Annual/ 9 months program that helps employees/individuals on a consistent basis to:
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    <ul>
                                        <li>Reflect on the topics discussed in Mangallam Online</li>
                                        <li>Regain the lost energy</li>
                                        <li>Relax and</li>
                                        <li>Rejuvenate</li>
                                    </ul>
                                </Typography>
                                
                                    <Typography className="programscontent" align='Left'>
                                        Click <Link to="/additionMeditation" style={{textDecoration:"none",color:"black",fontWeight:"600"}}>here </Link> to Know more about Meditation
                                    </Typography>
                                

                                <Typography className="programscontent" align='Left'style={{paddingTop:"3%"}}>
                                    Contact us with your requirements at <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to know more.
                                </Typography>
                            </Grid>
                            {/* <Grid item xs={12} md={12} >
                                <img 
                                    className="dividerImgCorpProgram"
                                    src={divider}
                                />
                            </Grid> */}
                        </Grid> 
                    </Grid>
                    {/* <Grid item xs={12} md={12}>
                        <img 
                            className="dividerImgCorpProgram"
                            src={divider}
                        />
                    </Grid> */}
                </Grid>
                


                 {/*------------------------ Personal Coaching   ------------------------------ */}


                 
                <Grid container id="personal" style={{paddingTop:"2%",paddingBottom:"2%",backgroundColor:"white"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={PersonalCorporate}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>

                            <div className="tab1 shortContent">
                                <img className="img-class" src={Personal_coaching}/>
                                    <Typography className="img-title programsHeading" >
                                        Corporate One-on-one coaching
                                    </Typography>
                            </div>
                                {/* <Typography className="programsHeading shortContent">
                                    Personal Coaching
                                </Typography> */}
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>

                                <Typography className="programscontent1" align='Left'>
                                    Sponsor your employee for one-on-one coaching in any area of development. 
                                </Typography>

                                <Typography className="programscontent" align='Left'>
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

                                <Typography className="programscontent" align='Left' style={{paddingTop:"3%"}}>
                                    Contact us with your requirements at <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to know more.
                                </Typography>
                            </Grid>
                            {/* <Grid item xs={12} md={12}>
                                <img 
                                    className="dividerImgCorpProgram"
                                    src={divider}
                                />
                            </Grid> */}
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
 
export default CorporatePrograms;