import React, { Component, useEffect } from 'react';

import { Grid, Typography,Card  } from '@material-ui/core';
import { withRouter, Link } from "react-router-dom";


import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import divider from "../../images/divider2.png"

//-----------------------Icons-----------------------


// import selfHealing2 from "../../images/pgm_and_add_optimized_images/additionalServices/additionalService03.jpg"

let selfHealing2 = 'https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/additionalServices/additionalService03.jpg'




let cardImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService01.jpg'
let cardImg2 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService02.jpg'
let cardImg3 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService03.jpg'
let cardImg4 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService04.jpg'



const AdditionSelfHealing = ({history}) => {

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
                                Self-healing techniques
                           </Typography>
                       </Grid>
                    </Grid>
                </Grid>
                <Grid container style={{backgroundColor:"#fbf2de"}} >
                    <Grid item xs={12} md={12} className="MeditationContentGrid" >
                        <Typography className="meditationTitle1"  align="center">
                            Inhale and exhale. Repeat. This is what we do normally; 
                            the length of either depends on our 
                            state of mind and state of action or reaction. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}  style={{backgroundColor:"#fbf2de"}}>
                        <img className="additionMeditationImg1" src={selfHealing2} />
                    </Grid>
                    <Grid item xs={12} md={12} className="meditationDiv">
                        
                    </Grid>
                    <Grid item xs={12} md={12} className="bellowMeditationDiv">
                        <Typography className="meditationContent1" align='Left'>
                            Breathing in synchronisation with awareness brings multitude of health 
                            benefits to anyone who practices right breathing techniques on a daily basis. 
                            Right breathing helps the mind to calm down and Rhythmic breathing increases 
                            focus and concentration. When the rhythmic breathing technique is repeatedly practices 
                            along with hand mudras and an 
                            awareness of the movement of breath, many health ailments disappear. 
                        </Typography>
                        {/* <Typography className="meditationContent1" align='Left'>
                            That is the magic in the Right way of Breathing!
                        </Typography> */}
                        <Typography className="meditationContent1" align='Left'>
                            Self healing is an ancient technique used to cure diseases 
                            and to keep one's health at an optimum level. 
                            It consists of auto-suggestion (on a mental plane) incorporated 
                            with rhythmic breathing and creative Visualisation. In today's world, 
                            different techniques such as Quantum healing by Deepak Chopra and Heal your body techniques 
                            by Dr. Joe Dispenza have been taken seriously by many, worldwide. 
                            These methodologies have worked for people who completely have faith in their thought power. 
                        </Typography>
                        <Typography className="meditationContent1" align='Left'>
                                Thought is the key here. Self-generated thoughts that are positive, 
                                clear and crisp, communicate and gently command the cells of the pain area to self heal. 
                                {/* When one sees the progression and then the results, they are in awe of this 
                                technique which they first thought may not completely produce required results.  */}
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                Get in touch with us at <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to avail our 
                                Self-healing sessions by our team of experienced counsellors at Aleenta Wellbeing. 
                            </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img className="dividerImgCorpProgram"src={divider} />
                    </Grid>

                    {/* ======================================================================================================================== */}

                   
                    {/* <Grid container style={{backgroundColor:"white"}}>
                        <Grid item xs={12} md={12}>
                            <img className="additionMeditationImg1" src={selfHealing2} />
                        </Grid>
                        <Grid item xs={12} md={12} className="meditationDiv">
                            
                        </Grid>
                        <Grid item xs={12} md={12} className="bellowMeditationDiv">
                            <Typography className="meditationContent1" align='Left'>
                                Thought is the key here. Self-generated thoughts that are positive, 
                                clear and crisp, communicate and gently command the cells of the pain area to self heal. 
                                When one sees the progression and then the results, they are in awe of this 
                                technique which they first thought may not completely produce required results. 
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                Get in touch with us at www.additionalservices@aleenta.in to avail our Self-healing sessions. 
                            </Typography>
                            <Grid item xs={12} md={12}>
                                <img className="dividerImgCorpProgram"src={divider} />
                            </Grid>
                        </Grid>
                    </Grid> */}
                    

                    {/* ======================================================================================================================================= */}
                   
                    <Grid container>
                        <Grid item xs={12} md={12} >
                            <Typography className="meditationTitle"  align="center">
                                RELATED SERVICES
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <Grid container align="center" >
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
                                    <Link to="/artTherapy" style={{textDecoration:"none"}}>
                                        <Card className="articalCard" style={{width:"80%",height:"80%"}} >
                                            <Card container className="articalCard1"  style={{height:"80%"}} >
                                                <img src={cardImg2}  style={{width:"100%"}}/>
                                            </Card>
                                            <Card container  style={{height:"20%"}}>
                                                <Typography className="programsHeading2">
                                                    ART THERAPY
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
 
export default AdditionSelfHealing;

