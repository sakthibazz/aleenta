import React, { Component, useEffect } from 'react';

import { Grid, Typography,Card  } from '@material-ui/core';
import { withRouter, Link } from "react-router-dom";

import divider from "../../images/divider2.png"


import ArrowRightIcon from '@material-ui/icons/ArrowRight';

//-----------------------Icons-----------------------

// import artTherapyImg1 from "../../images/pgm_and_add_optimized_images/additionalServices/additionalService02.jpg"
// import artTherapyImg2 from "../../images/pgm_and_add_optimized_images/additionalServices/artTherapy3.jpg"

let artTherapyImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/additionalServices/additionalService02.jpg'
let artTherapyImg2 = 'https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/additionalServices/artTherapy3.jpg'



// let divider = "https://dec4365vfd8ox.cloudfront.net/images/divider2.png"

let cardImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService01.jpg'
let cardImg2 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService02.jpg'
let cardImg3 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService03.jpg'
let cardImg4 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService04.jpg'


const AdditionArtTherapy = ({history}) => {

    useEffect(() => {
        const unlisten = history.listen(() => {
          window.scrollTo(0, 0);
        });
        return () => {
          unlisten();
        }
      }, []);


    return ( 
        <>
            <Grid container  className= "additionalMeditationContainer">
                <Grid item xs={12} md={12}>
                    < Grid container className="topText">
                       
                       <Grid item xs={12} md={12}>
                           <Typography className="topTextHeading" align="center">
                                Expressive Art Therapy
                           </Typography>
                       </Grid>
                    </Grid>
                </Grid>
                <Grid container style={{backgroundColor:"#fbf2de"}} >
                    <Grid item xs={12} md={12} className="MeditationContentGrid"  >
                        <Typography className="meditationTitle1"  align="center">
                            Expressive Art Therapy is a practice used to rid unnecessary baggage and 
                            invoke a creative thought process through creative Visualization.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img className="additionMeditationImg1" src={artTherapyImg1} />
                    </Grid>
                    <Grid item xs={12} md={12} className="meditationDiv">
                        
                    </Grid>
                    <Grid item xs={12} md={12} className="bellowMeditationDiv">
                        <Typography className="meditationContent1" align='Left'>
                            Art is a practice that develops a sense of freedom to express oneself. 
                            It brings about a beautiful transformation in the practitioner. 
                            It is also a healthy and an interesting medium to release negative emotions, 
                            experience heightened levels of positivity, increase playfulness and above all an 
                            improved high Self-esteem and high Self-confidence that has been 
                            either hindered or even lost while growing up as a child. 
                        </Typography>
                        <Typography className="meditationContent1" align='Left'>
                                These sessions are designed based on the participant's age, lifestyle and levels of Stress. 
                                {/* In my experience with creating Art for more than 20 years, 
                                I believe and confirm that Art increases an individual's Happiness quotient resulting 
                                in a stress free Life – be it in a child or an adult. */}
                        </Typography>
                    </Grid>
                    {/* <Grid item xs={12} md={12}>
                        <img className="dividerImgCorpProgram"src={divider} />
                    </Grid> */}

                    {/* ======================================================================================================================== */}

                   
                    {/* <Grid container style={{backgroundColor:"white"}}>
                        <Grid item xs={12} md={12}>
                            <img className="additionMeditationImg1" src={artTherapyImg2} />
                        </Grid>
                        {/* <Grid item xs={12} md={12} className="meditationDiv">
                            
                        </Grid> 
                        <Grid item xs={12} md={12} className="bellowMeditationDiv">
                            <Typography className="meditationContent1" align='Left'>
                                These sessions are designed based on participant's age, lifestyle and levels of Stress. 
                                In my experience with creating Art for more than 20 years, 
                                I believe and confirm that Art increases an individual's Happiness quotient resulting 
                                in a stress free Life – be it in a child or an adult.
                            </Typography>
                            <Grid item xs={12} md={12}>
                                <img className="dividerImgCorpProgram"src={divider} />
                            </Grid>
                        </Grid>
                    </Grid> */}
                    

                    {/* ======================================================================================================================================= */}
                   
                    <Grid container style={{backgroundColor:"white"}}>
                        <Grid item xs={12} md={12}>
                            <img className="additionMeditationImg1" src={artTherapyImg2} />
                        </Grid>
                        {/* <Grid item xs={12} md={12} className="meditationDiv">
                            
                        </Grid> */}
                        <Grid item xs={12} md={12} className="bellowMeditationDiv">
                            <Typography className="meditationContent1" align='Left'>
                                Art is an improvised mode of expression used to release inhibitions and to express oneself, 
                                to collaborate with Confidence. Art therapy relieves stress and anxiety, boosts self-esteem and confidence, uplifts mood, helps one to become more self aware, 
                                ability to process difficult emotions and supports mental health.
                            </Typography>
                            {/* <Typography className="meditationContent1" align='Left'>
                                As a parent, an Art teacher and a Meditation teacher, 
                                I have realised how true this quote is.    
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                “It is the supreme art of the teacher to awaken joy in creative expression and knowledge.”
                                – Albert Einstein 
                            </Typography> */}
                            <Typography className="meditationContent1" align='Left'>
                                Get in touch with us at <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to avail our Art therapy sessions for 
                                all age groups starting from 5 years and above.
                            </Typography>
                            <Grid item xs={12} md={12}>
                                <img className="dividerImgCorpProgram"src={divider} />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* ======================================================================================================================== */}

                    <Grid container>
                        <Grid item xs={12} md={12} >
                            <Typography className="meditationTitle"  align="center">
                                RELATED SERVICES
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <Grid container align="center" >
                                <Grid item xs={12} md={4} className="articalCardGrid">
                                    <Link to="/selfHealing" style={{textDecoration:"none"}}>
                                        <Card className="articalCard" style={{width:"80%",height:"80%"}} >
                                            <Card container className="articalCard1"  style={{height:"80%"}} >
                                                <img src={cardImg3}  style={{width:"100%"}}/>
                                            </Card>
                                            <Card container  style={{height:"20%"}}>
                                                <Typography className="programsHeading2">
                                                    SELF-HEALING TECHNIQUES
                                                </Typography>
                                            </Card>
                                        </Card>
                                    </Link>
                                </Grid>

                                <Grid item xs={12} md={4} className="articalCardGrid">
                                    <Link to="/meditation" style={{textDecoration:"none"}}>
                                        <Card className="articalCard" style={{width:"80%",height:"80%"}} >
                                            <Card container className="articalCard1"  style={{height:"80%"}} >
                                                <img src={cardImg1}  style={{width:"100%"}}/>
                                            </Card>
                                            <Card container  style={{height:"20%"}}>
                                                <Typography className="programsHeading2">
                                                    MEDITATION
                                                </Typography>
                                            </Card>
                                        </Card>
                                    </Link>
                                </Grid>

                                <Grid item xs={12} md={4} className="articalCardGrid">
                                    <Link to="/counseling" style={{textDecoration:"none"}}>
                                        <Card className="articalCard" style={{width:"80%",height:"80%"}} >
                                            <Card container className="articalCard1"  style={{height:"80%"}} >
                                                <img src={cardImg4}  style={{width:"100%"}}/>
                                            </Card>
                                            <Card container  style={{height:"20%"}}>
                                                <Typography className="programsHeading2">
                                                    COUNSELING
                                                </Typography>
                                            </Card>
                                        </Card>
                                    </Link>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
     );
}
 
export default AdditionArtTherapy;

