import React, { Component, useEffect, useState } from 'react';
import { withRouter, Link } from "react-router-dom";


import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import Footer from "../footer";

// ------------------Icons------------------------

    // import Mangallam from "../../images/dropDown/corporatePro/Mangallam.png"
    // import Happiness from "../../images/dropDown/corporatePro/Happiness.png"
    // import Meditation_sessions from "../../images/dropDown/corporatePro/Meditation_sessions.png"
    // import Personal_coaching from "../../images/dropDown/corporatePro/Personal_coaching.png"

    let Mangallam = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/corporatePro/Mangallam.png";
    let Happiness = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/corporatePro/Happiness.png";
    let Meditation_sessions = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/corporatePro/Meditation_sessions.png";
    let Personal_coaching = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/corporatePro/Personal_coaching.png";


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
            <Grid container className="corporateContainer  corporateTitleContainer">
                
                <Grid item xs={12} md={12}>
                    < Grid container className="topText" style={{paddingLeft: '18px'}}>
                       
                       
                       
                       
                    <Grid item xs={6} md={3} className={subHeading !='Mangallam'
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
                        </Grid>








                       
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

                {/*------------------------ Mangalam------------------------------ */}

                <Grid container id="mangallam" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={MANGALLAM}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Typography className="programsHeading">
                                    Mangallam
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                
                                <Typography className="programscontent1" align='Left' style={{fontStyle:"italic",fontWeight:"600"}}>
                                    Health is not just the absence of a disease. It is an inner 
                                    joyfulness that should be ours all the time; a state of positive well-being. -- Deepak Chopra
                                </Typography>
                                <Typography className="programscontent1" align='Left'>
                                    In this program, employees learn techniques on how to 
                                    stay positive and healthy – in body and in mind. 
                                    The outcome of this program includes increased levels of mindfulness, 
                                    empathy, higher performance and team dynamics. 
                                </Typography>

                                <Typography className="programscontent" align='Left'>
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

                <Grid container id="happiness" style={{backgroundColor:"white"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={happinessIndividual}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Typography className="programsHeading shortContent">
                                    Happiness coaching
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>

                                <Typography className="programscontent1" align='Left' style={{fontStyle:"italic",fontWeight:"600"}}>
                                    Happiness is when what you think, what you say, and what you do are in harmony. -- Mahatma Gandhi
                                </Typography>

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

                                <Typography className="programscontent" align='Left'>
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
                </Grid>
                
                


            {/*------------------------ Meditation sessions  ------------------------------ */}


            <Grid container id="meditation" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={meditation}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Typography className="programsHeading shortContent">
                                    Meditation sessions 
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                <Typography className="programscontent1" align='Left'>
                                    Meditation is an approach that consists of a set of techniques practiced to 
                                    understand the emotions and behaviour of Self and others. 
                                    {/* (Add the Link for meditation in additional services) */}
                                </Typography>
                                
                                    <Typography className="programscontent1" align='Left'>
                                        Click <Link to="/additionMeditation" style={{textDecoration:"none",color:"black",fontWeight:"600"}}>here </Link> to Know more about Meditation
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

                                <Typography className="programscontent" align='Left'>
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


                 
                <Grid container id="personal" style={{backgroundColor:"white"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={PersonalCorporate}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Typography className="programsHeading shortContent">
                                    Personal Coaching
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>

                                <Typography className="programscontent1" align='Left'>
                                    Sponsor your employee for one-on-one coaching in any area of development. 
                                </Typography>

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

                                <Typography className="programscontent" align='Left'>
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

            </Grid>

            <Footer />
        </>
     );
}
 
export default CorporatePrograms;