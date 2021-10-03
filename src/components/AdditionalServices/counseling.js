import React, { Component } from 'react';

import { Grid, Typography,Card  } from '@material-ui/core';
import { withRouter, Link } from "react-router-dom";


import ArrowRightIcon from '@material-ui/icons/ArrowRight';

//-----------------------Icons-----------------------
let counseling2 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/counseling2.jpg'
// import counseling3 from '../../images/additionalServices/counseling3.jpg'
// import counseling4 from '../../images/additionalServices/counseling4.jpg'


let divider = "https://dec4365vfd8ox.cloudfront.net/images/programs/corporatePrograms/divider.png"

let cardImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/cardImg1.jpg'
let cardImg2 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/cardImg2.jpg'
let cardImg3 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/cardImg3.jpg'
let cardImg4 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/cardImg4.jpg'
// import icon1 from '../../images/dropDown/icon1.png'


const AdditionCounseling = () => {
    return ( 
        <>
            <Grid container  className= "additionalMeditationContainer">
                <Grid item xs={12} md={12}>
                    <Typography className="topText">
                        Aleenta Additional Services <ArrowRightIcon/> Counseling
                    </Typography>
                </Grid>
                <Grid container style={{backgroundColor:"#fbf2de"}} >
                    <Grid item xs={12} md={12} >
                        <Typography className="meditationTitle1"  align="center">
                            We offer counselling services for people who are unable to identify 
                            the root cause of their problems 
                            and who are trying hard to find ways to handle them.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img className="additionMeditationImg1" src={cardImg4} />
                    </Grid>
                    <Grid item xs={12} md={12} className="meditationDiv">
                        
                    </Grid>
                    <Grid item xs={12} md={12} className="bellowMeditationDiv" >
                        <Typography className="meditationContent1" align='Left'>
                            Questioning backwards, deep contemplation and reflection are the 
                            three steps used in our process design. It helps in identifying, understanding and 
                            handling day to day problems that have become chronic over time. 
                        </Typography>
                        <Typography className="meditationContent1" align='Left'>
                            Our work in this area is to only listen and bring about self-generated 
                            ideas as to what is good for the client and what is not. 
                            One of them is when and how to say NO.
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img className="dividerImgCorpProgram"src={divider} />
                    </Grid>

                    {/* ======================================================================================================================== */}

                   
                    <Grid container style={{backgroundColor:"white"}}>
                        <Grid item xs={12} md={12}>
                            <img className="additionMeditationImg1" src={counseling2} />
                        </Grid>
                        <Grid item xs={12} md={12} className="meditationDiv">
                            
                        </Grid>
                        <Grid item xs={12} md={12} className="bellowMeditationDiv" >
                            <Typography className="meditationContent1" align='Left'>
                                Client's happiness is our utmost priority, we thrive to bring back the smiles 
                                and the joy of living in our client's life
                            </Typography>
                            <Typography className="meditationContent4" align='Left'>
                                Identifying the client's inner strength and how to use it to bring about 
                                solutions is a part of main focus.
                            </Typography>
                            <Typography className="meditationContent4" align='Left'>
                                We work with a highly professional approach where utmost 
                                priority is given to the client's privacy, confidentiality and trust. 
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                Please note: In certain cases, where the client needs medical or other 
                                professional attention, we certainly recommend and guide our clients to the concerned 
                                experienced specialists in our Bangalore (India) based network.  
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                Get in touch with us at www.additionalservices@aleenta.in 
                                to avail our counselling sessions.
                            </Typography>
                            <Grid item xs={12} md={12}>
                                <img className="dividerImgCorpProgram"src={divider} />
                            </Grid>
                           
                        </Grid>
                    </Grid>
                    

                    {/* ======================================================================================================================================= */}
                   
                    {/* <Grid container style={{backgroundColor:"white"}}>
                        <Grid item xs={12} md={12}>
                            <img className="additionMeditationImg1" src={counseling3} />
                        </Grid>
                        <Grid item xs={12} md={12} className="meditationDiv">
                            
                        </Grid>
                        <Grid item xs={12} md={12} >
                           
                            <Grid item xs={12} md={12}>
                                <img className="dividerImgCorpProgram"src={divider} />
                            </Grid>
                        </Grid>
                    </Grid> */}

                     {/* ======================================================================================================================================= */}
                   
                     {/* <Grid container style={{backgroundColor:"white"}}>
                        {/* <Grid item xs={12} md={12}>
                            <img className="additionMeditationImg1" src={counseling4} />
                        </Grid>
                        <Grid item xs={12} md={12} className="meditationDiv">
                            
                        </Grid> */}
                        {/* <Grid item xs={12} md={12} >
                           
                            <Grid item xs={12} md={12}>
                                <img className="dividerImgCorpProgram"src={divider} />
                            </Grid>
                        </Grid>
                    </Grid>  */}

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
                                    <Link to="/additionMeditation" style={{textDecoration:"none"}}>
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
                                    <Link to="/additionArtTherapy" style={{textDecoration:"none"}}>
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
                                    <Link to="/additionSelfHealing" style={{textDecoration:"none"}}>
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

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
     );
}
 
export default AdditionCounseling;

