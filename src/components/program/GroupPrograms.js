import React, { Component, useEffect, useState } from 'react';
import { withRouter, Link } from "react-router-dom";

import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import Footer from "../footer";


// ------------------Icons------------------------

// import Group_happiness from "../../images/dropDown/groupPro/Group_happiness.png"
// import Group_relationships from "../../images/dropDown/groupPro/Group_relationships.png"
// import Group_spiritual from "../../images/dropDown/groupPro/Group_spiritual.png"
// import Group_wellness from "../../images/dropDown/groupPro/Group_wellness.png"

let Group_happiness = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Group_happiness.png";
let Group_relationships = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Group_relationships.png";
let Group_spiritual = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Group_spiritual.png";
let Group_wellness = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Group_wellness.png";



// -------------Images----------------------------

// import relationshipsGroup from "../../images/pgm_and_add_optimized_images/programs/groupPrograms/Optimized_relationshipsGroup.jpg"
// import spirituality from "../../images/pgm_and_add_optimized_images/programs/groupPrograms/Optimized_spirituality.jpg"
// import wellnessGroup from "../../images/pgm_and_add_optimized_images/programs/groupPrograms/Optimized_wellnessGroup.jpg"
// import happinessGroup from "../../images/pgm_and_add_optimized_images/programs/groupPrograms/Optimized_happinessGroup.jpg"

let relationshipsGroup = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/groupPrograms/Optimized_relationshipsGroup.jpg";
let spirituality = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/groupPrograms/Optimized_spirituality.jpg";
let wellnessGroup = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/groupPrograms/Optimized_wellnessGroup.jpg";
let happinessGroup = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/groupPrograms/Optimized_happinessGroup.jpg";



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


const GroupPrograms = ({history}) => {

    useEffect(() => {
        const unlisten = history.listen(() => {
          window.scrollTo(0, 0);
        });
        return () => {
          unlisten();
        }
      }, []);

    const [subHeading, setSubHeading] = useState(null);

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
                < Grid container className="topText" >

                        <Grid item xs={12} md={12}>
                           <Typography className="topTextHeading" align="center">
                                Group Programs
                           </Typography>
                       </Grid>

                {/* <Grid item xs={6} md={3} className={subHeading !='Happiness'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <div className="tab1">
                        <img className="img-class" src={Group_happiness}/>
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

                        <Grid item xs={6} md={3} className={subHeading !='Spiritual'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <div className="tab1">
                        <img className="img-class" src={Group_spiritual}/>
                        <Link to='#spritual' style={{textDecoration: "none",color: "#000000",}}>
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Spiritual")
                                    } 
                                }
                            >
                                Spiritual coaching
                            </Typography>
                        </Link>
                        </div>
                        </Grid>
                       
                        <Grid item xs={6} md={3} className={subHeading !='Relationship'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <div className="tab1">
                        <img className="img-class" src={Group_relationships}/>
                        <Link to='#relation' style={{textDecoration: "none",color: "#000000",}}>
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Relationship")
                                    } 
                                }
                            >
                                Relationship coaching
                            </Typography>
                        </Link>
                        </div>
                        </Grid>
                        

                        <Grid item xs={6} md={3} className={subHeading !='Wellness'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <div className="tab1">
                        <img className="img-class" src={Group_wellness}/>
                        <Link to='#wellness' style={{textDecoration: "none",color: "#000000",}}>
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Wellness")
                                    } 
                                }
                            >
                                Wellness coaching
                            </Typography>
                        </Link>
                        </div>
                        </Grid> */}










                        {/* <Grid item xs={2} md={1} >
                            <img className="dropDownIcons1" src={Group_happiness} align="right" />
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
                            <img src={Group_spiritual} className="dropDownIcons1" align="right" />
                        </Grid>
                        <Grid item xs={10} md={2} className={subHeading !='Spiritual'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <Link to='#spritual' style={{textDecoration: "none",color: "#000000",}}>
                            <Typography className="programHeading1"
                                onClick={()=>{
                                        setSubHeading("Spiritual")
                                    } 
                                }
                            >
                                Spiritual coaching
                            </Typography>
                        </Link>
                        </Grid>
                        <Grid item xs={2} md={1}>
                            <img src={Group_relationships} className="dropDownIcons1" align="right" />
                        </Grid>
                        <Grid item xs={10} md={2} className={subHeading !='Relationship'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <Link to='#relation' style={{textDecoration: "none",color: "#000000",}}>
                        
                            <Typography className="programHeading1"
                                onClick={()=>{
                                        setSubHeading("Relationship")
                                    } 
                                }
                            >
                                Relationship coaching
                            </Typography>
                        </Link>
                        </Grid>
                        <Grid item xs={2} md={1}>
                            <img src={Group_wellness} className="dropDownIcons1" align="right" />
                        </Grid>
                        <Grid item xs={10} md={2} className={subHeading !='Wellness'
                                  ? "programHeading1Grid"
                                  :"programHeading1Grid2"
                                }> 
                        <Link to='#wellness' style={{textDecoration: "none",color: "#000000",}}>
                        
                            <Typography className="programHeading1"
                                onClick={()=>{
                                        setSubHeading("Wellness")
                                    } 
                                }
                            >
                                Wellness coaching
                            </Typography>
                        </Link>
                        </Grid> */}
                    </Grid>
                </Grid>

                {/*------------------------ Happiness coaching ------------------------------ */}

                <Grid container id="happiness" style={{backgroundColor:"#fbf2de"}} style={{paddingTop:"2%",paddingBottom:"2%"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={happinessGroup}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <div className="tab1 shortContent">
                                    <img className="img-class" src={Group_happiness}/>
                                        <Typography className="img-title programsHeading" >
                                            Happiness coaching
                                        </Typography>
                                </div>
                                {/* <Typography className="programsHeading shortContent">
                                    Happiness coaching
                                </Typography> */}
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                <Typography className="programscontent1" align='Left'>
                                    One has to find his/her true sources of happiness in order to 
                                    live a happy and successful life. Aleenta's Happiness program is 
                                    the right choice for anybody who wishes to be happy at all times, make right decisions, 
                                    maintain healthy relationships and inspire others to be happy! 
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
                    {/* <Grid item xs={12} md={12}>
                        <img 
                            className="dividerImgCorpProgram"
                            src={divider}
                        />
                    </Grid> */}
                </Grid>




                {/*------------------------ 	Spiritual coaching  ------------------------------ */}



                <Grid container id="spritual" style={{backgroundColor:"white"}} style={{paddingTop:"2%",paddingBottom:"2%"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={spirituality}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                            <div className="tab1 shortContent">
                                <img className="img-class" src={Group_spiritual}/>
                                    <Typography className="img-title programsHeading" >
                                        Spiritual coaching
                                    </Typography>
                            </div>
                                {/* <Typography className="programsHeading shortContent">
                                    Spiritual coaching
                                </Typography> */}
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                <Typography className="programscontent1" align='Left'>
                                    Aleenta provides an excellent space for individuals 
                                    who are in this path to seek their higher purpose, 
                                    to experience and celebrate their achievements and finally attain a state of complete Well-being. This results in excellent health, better relationships and a high quality of life! 
                                    The client will be able to see the true meaning of Life in this program.
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


    


            {/*------------------------ Relationship coaching   ------------------------------ */}

            <Grid container id="relation" style={{backgroundColor:"#fbf2de"}}  style={{paddingTop:"2%",paddingBottom:"2%"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={relationshipsGroup}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>

                            <div className="tab1">
                                <img className="img-class" src={Group_relationships}/>
                                    <Typography className="img-title programsHeading" >
                                        Relationship coaching
                                    </Typography>
                            </div>
                                {/* <Typography className="programsHeading">
                                    Relationship coaching
                                </Typography> */}
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                <Typography className="programscontent1" align='Left'>
                                    Relationship coaching creates ideas and insights on how to maintain existing 
                                    relationships and create new healthy relationships. In this process of learning and discovering, 
                                    the client as an individual will transform himself/herself for a better 
                                    Self to maintain healthy relationships in every area of their life. 
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
                
              

                 {/*------------------------ Wellness coaching    ------------------------------ */}

                 <Grid container id="wellness" style={{backgroundColor:"white"}} style={{paddingTop:"2%",paddingBottom:"2%"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg groupImg4"
                            src={wellnessGroup}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>

                            <div className="tab1">
                                <img className="img-class" src={Group_wellness}/>
                                    <Typography className="img-title programsHeading" >
                                        Wellness coaching
                                    </Typography>
                            </div>
                                {/* <Typography className="programsHeading">
                                    Wellness coaching
                                </Typography> */}
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                <Typography className="programscontent1" align='Left'>
                                    In this program, we offer group coaching (Organisations/Institutions/Schools) for 
                                    all individuals coming from different cultures, 
                                    demographics and status and for nuclear families.   
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
                                    Topics include :
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    {bull} how to stay positive and healthy in mind and body.
                                </Typography>
                                <Typography className="programscontent" align='Left'>
                                    {bull} how to handle and overcome difficult situations.
                                </Typography>
                                <Typography className="programscontent" align='Left'>
                                    {bull} how to maintain healthy relationships. 
                                </Typography>
                                <Typography className="programscontent" align='Left'>
                                    {bull} how to transform obstacles into opportunities to grow in personal and professional areas.
                                </Typography>
                                <Typography className="programscontent" align='Left'>
                                    {bull} how to perform well and excel in your roles at home, work and social environment. 
                                </Typography>
                                <Typography className="programscontent" align='Left'>
                                    {bull} how to become an inspiration to others in their wellness story.
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
 
export default GroupPrograms;