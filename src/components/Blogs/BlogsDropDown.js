import React, { Component } from 'react';
import { Grid, Typography,Card  } from '@material-ui/core';
import { withRouter, Link } from "react-router-dom";


import ArrowRightIcon from '@material-ui/icons/ArrowRight';


// s3://aleentapublicimages/images/blogs/DropDownImgs/


let BlogDropDownImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/blogs/DropDownImgs/BlogDropDownImg1.jpg'
let BlogDropDownImg2 = 'https://dec4365vfd8ox.cloudfront.net/images/blogs/blog2Imgs/key.jpg'
// let cardImg3 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService03.jpg'
// let cardImg4 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService04.jpg'

// import icon1 from '../../images/dropDown/icon1.png'

function noop(val=true){
}

const BlogsDropDown = ({history,setOpen=noop,open}) => {

    return ( 
        <>
            <Grid item className="hrTag" style={{marginTop:" 1px",marginBottom:" 1%"}}>

            </Grid>
        <Grid container  className= "additionalServicesContainer" style={{marginTop:"5px"}}>
            {/* <Grid item xs={12} md={12}>
                <Typography className="topText">
                    Additional Services
                </Typography>
            </Grid>   */}
            <Grid container style={{backgroundColor:"#fbf2de"}}>
                {/* <Grid item xs={12} md={12} align="center">               
                    <Typography className="additionalDrop_content" >
                        Inner Metamorphosis
                    </Typography>
                </Grid> */}

{/* ----------------------------card-1----------------------------------- */}
                <Grid item xs={12} md={12}>
                    <Grid container align="center">
                        <Grid item xs={12} md={3} className="articalCardGrid">
                            <Link to="/blogsPage1" style={{textDecoration:"none"}}>
                                <Card className="articalCard" style={{width:"90%",height:"90%"}} 
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                        <Typography className="additionalDrop_articles1">
                                            Inner Metamorphosis
                                        </Typography>
                               
                                    <Card container className="articalCard1"  style={{height:"70%"}} >
                                        <img src={BlogDropDownImg1}  style={{width:"100%",height:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"24%"}}>
                                        <Typography className="additionalDrop_articles2" >
                                            {/* Inner Metamorphosis */}
                                            <span style={{fontStyle:"italic"}}> “Transformation means literally going beyond your form.” </span>        
                                                                    - Wayne Dyer
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid>

{/* ----------------------------card-2----------------------------------- */}
                        <Grid item xs={12} md={3} className="articalCardGrid">
                            <Link to="/blogPage2" style={{textDecoration:"none"}}>
                                <Card className="articalCard" style={{width:"90%",height:"90%"}} 
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                        <Typography className="additionalDrop_articles1">
                                            Key to Success!
                                        </Typography>
                               
                                    <Card container className="articalCard1"  style={{height:"60%"}} >
                                        <img src={BlogDropDownImg2}  style={{width:"100%",height:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"34%"}}>
                                        <Typography className="additionalDrop_articles2" >
                                            {/* Inner Metamorphosis */}
                                            <span style={{fontStyle:"italic"}}> “Awareness is the key ingredient in Success. If you have it, teach it. If you lack it, seek it!.” </span>        
                                                                    - Michael Kitson
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid>

                        {/* <Grid item xs={12} md={3} className="articalCardGrid">
                            <Link to="/additionArtTherapy" style={{textDecoration:"none"}}>
                                <Card className="articalCard" style={{width:"90%",height:"80%"}}
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="articalCard1"  style={{height"80%"}} >
                                        <img src={cardImg2}  style={{width:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"20%"}}>
                                        <Typography className="additionalDrop_articles">
                                            ART THERAPY
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid> */}
{/* ----------------------------card-3----------------------------------- */}

                        {/* <Grid item xs={12} md={3} className="articalCardGrid">
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
                        </Grid> */}

{/* ----------------------------card-4----------------------------------- */}

                        {/* <Grid item xs={12} md={3} className="articalCardGrid">
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
                        </Grid> */}

                    </Grid>
                </Grid>
                
            </Grid>         
        </Grid>
        </>
     );
}
 
export default BlogsDropDown;