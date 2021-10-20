import React, { Component } from 'react';
import { Grid, Typography,Card  } from '@material-ui/core';
import { withRouter, Link } from "react-router-dom";


import ArrowRightIcon from '@material-ui/icons/ArrowRight';

//-----------------------Icons-----------------------
// let cardImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/cardImg1.jpg'
// let cardImg2 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/cardImg2.jpg'
// let cardImg3 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/cardImg3.jpg'
// let cardImg4 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/cardImg4.jpg'

let cardImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService01.jpg'
let cardImg2 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService02.jpg'
let cardImg3 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService03.jpg'
let cardImg4 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService04.jpg'

// import icon1 from '../../images/dropDown/icon1.png'

function noop(val=true){
}

const AdditionalServices = ({history,setOpen=noop,open}) => {

    return ( 
        <>
        <Grid container  className= "additionalServicesContainer" style={{marginTop:"5px"}}>
            <Grid item xs={12} md={12}>
                <Typography className="topText">
                    Aleenta Additional Services
                </Typography>
            </Grid>  
            <Grid container style={{backgroundColor:"#fbf2de"}}>
                <Grid item xs={12} md={6}>               
                    <Typography className="additionalDrop_content">
                        Come have a practical experience of Silence at Aleenta Wellbeing!
                    </Typography>
                </Grid>

{/* ----------------------------card-1----------------------------------- */}
                <Grid item xs={12} md={12}>
                    <Grid container align="center">
                        <Grid item xs={12} md={3} className="articalCardGrid">
                            <Link to="/additionMeditation" style={{textDecoration:"none"}}>
                                <Card className="articalCard" style={{width:"90%",height:"80%"}} 
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="articalCard1"  style={{height:"80%"}} >
                                        <img src={cardImg1}  style={{width:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"20%"}}>
                                        <Typography className="additionalDrop_articles">
                                            MEDITATION
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid>

{/* ----------------------------card-2----------------------------------- */}

                        <Grid item xs={12} md={3} className="articalCardGrid">
                            <Link to="/additionArtTherapy" style={{textDecoration:"none"}}>
                                <Card className="articalCard" style={{width:"90%",height:"80%"}}
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="articalCard1"  style={{height:"80%"}} >
                                        <img src={cardImg2}  style={{width:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"20%"}}>
                                        <Typography className="additionalDrop_articles">
                                            ART THERAPY
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid>
{/* ----------------------------card-3----------------------------------- */}

                        <Grid item xs={12} md={3} className="articalCardGrid">
                            <Link to="/additionSelfHealing" style={{textDecoration:"none"}}>
                                <Card className="articalCard" style={{width:"90%",height:"80%"}} 
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="articalCard1"  style={{height:"80%"}} >
                                        <img src={cardImg3}  style={{width:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"20%"}}>
                                        <Typography className="additionalDrop_articles">
                                            SELF-HEALING TECHNIQUES
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid>

{/* ----------------------------card-4----------------------------------- */}

                        <Grid item xs={12} md={3} className="articalCardGrid">
                            <Link to="/additionCounseling" style={{textDecoration:"none"}}>
                                <Card className="articalCard" style={{width:"90%",height:"80%"}} 
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="articalCard1"  style={{height:"80%"}} >
                                        <img src={cardImg4}  style={{width:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"20%"}}>
                                        <Typography className="additionalDrop_articles">
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
        </>
     );
}
 
export default AdditionalServices;