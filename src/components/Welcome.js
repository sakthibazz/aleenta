import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from "@material-ui/core/styles";

import Footer from './footer';


// import '../../node_modules/bootstrap/dist/css/bootstrap.css'



//------------Carousel reusable component-------------------------
import Carousel from '../reusableComponents/Carousel';


import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';

import image1 from '../images/welcome/image1.jpg'
import image2 from '../images/welcome/image2.jpg'
import image3 from '../images/welcome/image3.jpg'
import image4 from '../images/welcome/image4.jpg'

// import Aman from '../../images/About_Us/Aman.jpg'
// import Mahesh from '../../images/About_Us/Mahesh.jpg'
// import rajesh from '../../images/About_Us/rajesh.jpg'

const useStyles = makeStyles(theme => ({
    mainViewContainer: {
        margin:"0%",
        maxWidth: "100%",
        paddingLeft: "0%",
        paddingTop:"0%",
        paddingRight:"0%",
        paddingBottom:"0",
        marginBottom:"0",
        "& .MuiContainer-root": {
            paddingLeft: "0%",
        }, 
        "& .MuiContainer-maxWidthLg": {
            maxWidth: "100%",
        },
    },
    imageGridContainer:{
         margin:"0",
        maxWidth: "100%",
        paddingLeft: "0",
        paddingTop:"0%",
        paddingRight:"0%",
        "& .MuiContainer-root": {
            paddingLeft: "0%",
            paddingTop:'0',
            marginTop:'0',
        }, 
        "& .MuiContainer-maxWidthLg": {
            maxWidth: "100%",
        },
    }
}));



const Welcome = ({
    // auth,
    history
}) => {
    // const { isAuthenticated, user } = auth;

    // useEffect(() => {
    //     if(isAuthenticated) {
    //         if(user?.role?.r_id === 1) {
    //             history.push('/admin/dashboard');
    //         } else if(user?.role?.r_id === 2) {
    //             history.push('/dashboard');
    //         }
    //     }
    // }, [auth])

    const classes = useStyles();

    const items = [
        {
            name: 'Image_1',
            image:image1,
            title:"see what you don't see",
        },
        {
            name: 'Image_2',
            image:image2,
            title:"FIND THE KEY TO YOUR WELLBEING",
        },
        {
            name: 'Image_3',
            image:image3,
            title:"TAP INTO YOUR CREATIVE POTENTIAL",
        },
        {
            name: 'Image_4',
            image:image4,
            title:"INCREASE YOUR HAPPINESS QUOTIENT",
        }
    ]

    return (
        // <Container maxWidth="lg" className="mainViewContainer">
        <Container maxWidth="lg" className={`${classes.mainViewContainer} mainViewContainer`}>
            {/* <hr/> */}
           <Grid container className={classes.imageGridContainer} style={{backgroundColor:"#fbf2de"}}>
                <Grid item xs={12} md={12} >
                    {/* <Carousel items={items} /> */}
                      <Grid id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000" style={{paddingTop:"15px",marginTop:'-15px'}}> 
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                            <div class="carousel-inner" >
                                    <div class="carousel-item active">
                                        <Grid container>
                                            <Grid item xs={12} md={8}>
                                                <img class="d-block w-60 carouselImage" src={image1}  alt="First slide"/>
                                                <Typography className="imageSideText1" align="center" style={{color:"#97581E"}}>
                                                    Nature COACHING
                                                </Typography> 
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <Typography className="imageSideText2">
                                                    See What You Don't See
                                                </Typography> 
                                            </Grid>
                                        </Grid>
                                    
                                    </div>

                                    <div class="carousel-item">
                                    <Grid container>
                                            <Grid item xs={12} md={8}>
                                                <img class="d-block w-60 carouselImage" src={image3} alt="First slide"/>
                                                <Typography className="imageSideText1"  align="center" style={{color:"#4B2F5E"}}>
                                                    CREATIVE COACHING
                                                </Typography> 
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <Typography className="imageSideText2">
                                                    Tap Into Your Creative Potential
                                                </Typography> 
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div class="carousel-item">
                                        <Grid container>
                                            <Grid item xs={12} md={8}>
                                                <img class="d-block w-60 carouselImage" src={image4} alt="First slide"/>
                                                <Typography className="imageSideText1" align="center" style={{color:"#E5CF49"}}>
                                                    HAPPINESS COACHING
                                                </Typography> 
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <Typography className="imageSideText2">
                                                    Up Your Happiness Quotient
                                                </Typography> 
                                            </Grid>
                                        </Grid>
                                    </div>


                                    <div class="carousel-item">
                                    <Grid container>
                                            <Grid item xs={12} md={8}>
                                                <img class="d-block w-60 carouselImage" src={image2} alt="First slide"/>
                                                <Typography className="imageSideText1" align="center" style={{color:"#BA0110"}}>
                                                    WELLBEING COACHING
                                                </Typography> 
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <Typography className="imageSideText2">
                                                    Find The Key To Your Wellbeing
                                                </Typography> 
                                            </Grid>
                                        </Grid>
                                    </div>
                                   
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"  style={{backgroundColor:"gray",borderRadius:"50px"}}></span>
                                    <span class="sr-only"></span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:"gray",borderRadius:"50px"}} ></span>
                                    <span class="sr-only"></span>
                                </a>
                                </Grid>


                </Grid>
            </Grid> 


            {/* ==================================================================================================================================================
            ===========================================================================================================================================================
            =========================================================================================================================================================== */}
         {/* <Grid container className={classes.imageGridContainer} style={{backgroundColor:"#fbf2de",marginTop:"20%"}}>
                <Grid item xs={12} md={12} >
            <div id="slider">
                <ul class="slides">

                    <li class="single-slide slide-2">
                        <div class="slide-image animate">
                        <img src={image1} class="from-left" alt="image-1" />     
                        </div>
                        <div class="slide-content">
                            <div class="animate">
                                <h2 class="from-bottom">
                                    see what you don't see
                                </h2>                   
                            </div>
                        </div>
                    </li>

                    <li class="single-slide slide-3">
                        <div class="slide-image animate">
                            <img src={image2} class="from-left" alt="image-2" />
                        </div>    
                        <div class="slide-content">
                        <div class="animate">
                                <h2 class="from-bottom">
                                    FIND THE KEY TO YOUR WELLBEING
                                </h2>
                            </div>
                        </div>

                    </li>

                    <li class="single-slide slide-4">
                        <div class="slide-image animate">
                            <img src={image3} class="from-left" alt="image-3" />
                        </div>
                        <div class="slide-content">
                        <div class="animate">
                                <h2 class="from-bottom">
                                    TAP INTO YOUR CREATIVE POTENTIAL
                                </h2>
                            </div>
                        </div>
                    </li>

                    <li class="single-slide slide-4">
                        <div class="slide-image animate">
                            <img src={image4} class="from-left" alt="image-3" />
                        </div>
                        <div class="slide-content">
    
                            </div>

                            <div class="animate">
                                <h2 class="from-bottom">
                                UP YOUR HAPPINESS QUOTIENT
                                </h2>
                            </div>
                    </li>
                
            </ul>
        </div>
        </Grid>
        </Grid> */}
       
         {/* {{<script src="js/TweenMax.min.js"></script>    
        <script src="js/jquery.js"></script>
        <script src="js/main.js"></script>}}  */}

    {/* ===========================================================================================================================================================================================
    ==========================================================================================================================================================================================
    ======================================================================================================================================================================================= */}
                 
            <Grid container>
                <Grid item xs={12} md={12} >

                    <Typography  varient="h3" className="bKSIyengar" align='center'>
                        “Health is a state of complete harmony of the body, mind, and spirit. When one is free from physical 
                        disabilities and mental distractions, the gates of the soul open.” ― BKS Iyengar
                    </Typography>

                    <Typography className="overView" varient="h3" align='center'>
                        Overview
                    </Typography> 

                    
                    <Typography className="overViewConetnt" varient="h3" align='center' style={{paddingBottom:"2%"}}>
                        Aleenta is an ancient Sanskrit word which means 
                        “A rewarding life”. At Aleenta, we design programs 
                        with a holistic approach for an all-round well-being of our Clients. 
                        We believe that every person is unique in his/her own way – in thought, 
                        emotion and in action. The outcome of our programs are
                        Self-discovery and Self-awareness in the realms of health, happiness and success. 
                    </Typography> 
                </Grid>
            </Grid>
            <Footer />
        </Container>

    );
};


export default Welcome;