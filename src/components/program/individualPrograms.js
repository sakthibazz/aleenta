import React, { Component, useEffect, useState } from 'react';
import { withRouter, Link } from "react-router-dom";

import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';




import Footer from "../footer";

// ------------------Icons------------------------

// import Adolescent from "../../images/dropDown/individualPro/Adolescent.png"
// import Creative_coaching from "../../images/dropDown/individualPro/Creative_coaching.png"
// import Individual_natureCoaching from "../../images/dropDown/individualPro/Individual_natureCoaching.png"
// import Self_expression from "../../images/dropDown/individualPro/Self_expression.png"
// import Social_inhibitions from "../../images/dropDown/individualPro/Social_inhibitions.png"
// import Time_management from "../../images/dropDown/individualPro/Time_management.png"

let Adolescent = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/individualPro/Adolescent.png";
let Creative_coaching = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/individualPro/Creative_coaching.png";
let Individual_natureCoaching = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/individualPro/Individual_natureCoaching.png";
let Self_expression = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/individualPro/Self_expression.png";
let Social_inhibitions = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/individualPro/Social_inhibitions.png";
let Time_management = "https://dec4365vfd8ox.cloudfront.net/images/dropDown/individualPro/Time_management.png";

// -------------Images----------------------------

// import adolescent from "../../images/pgm_and_add_optimized_images/programs/individualPrograms/adolescent.jpg"
// import selfExpression from "../../images/pgm_and_add_optimized_images/programs/individualPrograms/selfExpression.jpg"
// import socialInhibitions from "../../images/pgm_and_add_optimized_images/programs/individualPrograms/socialInhibitions.jpg"
// import creativeCoaching from "../../images/pgm_and_add_optimized_images/programs/individualPrograms/creativeCoaching.jpg"
// import timeManagement1 from "../../images/pgm_and_add_optimized_images/programs/individualPrograms/timeManagementNew.jpg"
// import natureCoaching1 from "../../images/pgm_and_add_optimized_images/programs/individualPrograms/Optimized_natureCoaching1.jpg"

let adolescent = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/individualPrograms/adolescent.jpg";
let selfExpression = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/individualPrograms/selfExpression.jpg";
let socialInhibitions = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/individualPrograms/socialInhibitions.jpg";
let creativeCoaching = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/individualPrograms/creativeCoaching.jpg";
let timeManagement1 = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/individualPrograms/timeManagementNew.jpg";
let natureCoaching1 = "https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/programs/individualPrograms/Optimized_natureCoaching1.jpg";



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


const IndividualPrograms = ({history}) => {

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
                < Grid container className="topText" style={{paddingLeft: '18px'}} >
                        <Grid item xs={6} md={2} className={subHeading !='Nature'
                                  ? "programHeading1Grid1"
                                  :"programHeading1Grid3"
                                } > 
                        <div className="tab">
                        <img className="img-class" src={Individual_natureCoaching}/>
                        <Link to='#nature' style={{textDecoration: "none",color: "#000000",}}>
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Nature")
                                    } 
                                }
                            >
                                Nature coaching
                            </Typography>
                        </Link>
                        </div>
                        </Grid>
                        <Grid item xs={6} md={2} className={subHeading !='Creative'
                                  ? "programHeading1Grid1"
                                  :"programHeading1Grid3"
                                } > 
                        <div className="tab">
                        <img src={Creative_coaching} className="img-class"/>
                        <Link to='#creative' style={{textDecoration: "none",color: "#000000",}} >
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Creative")
                                    } 
                                }
                            >
                                Creative coaching
                            </Typography>
                        </Link>
                        </div>
                        </Grid>
                        <Grid item xs={6} md={2} className={subHeading !='Adolescent'
                                  ? "programHeading1Grid1"
                                  :"programHeading1Grid3"
                                } > 
                        <div className="tab">
                        <img src={Adolescent} className="img-class"/>
                        <Link to='#adolescent' style={{textDecoration: "none",color: "#000000",}} >
                        
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Adolescent")
                                    } 
                                }
                            >
                                Adolescent coaching
                            </Typography>
                        </Link>
                        </div>
                        </Grid>
                        <Grid item xs={6} md={2} className={subHeading !='Time'
                                  ? "programHeading1Grid1"
                                  :"programHeading1Grid3"
                                }> 
                        <div className="tab">
                        <img src={Time_management} className="img-class"/>
                        <Link to='#timeManage' style={{textDecoration: "none",color: "#000000",}}  >
                        
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Time")
                                    } 
                                }
                            >
                                Time Management
                            </Typography>
                        </Link>
                        </div>
                        </Grid>

                        <Grid item xs={6} md={2} className={subHeading !='Self'
                                  ? "programHeading1Grid1"
                                  :"programHeading1Grid3"
                                } > 
                        <div className="tab">
                        <img src={Self_expression} className="img-class"/>
                        <Link to='#selfExpression' style={{textDecoration: "none",color: "#000000",}} >
                        
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Self")
                                    } 
                                }
                            >
                                Self-expression
                            </Typography>
                        </Link>
                        </div>
                        </Grid>

                        <Grid item xs={6} md={2} className={subHeading !='Social'
                                  ? "programHeading1Grid1"
                                  :"programHeading1Grid3"
                                }> 
                        <div className="tab">
                        <img src={Social_inhibitions} className="img-class"/>
                        <Link to='#social' style={{textDecoration: "none",color: "#000000",}}>
                        
                            <Typography className="img-title"
                                onClick={()=>{
                                        setSubHeading("Social")
                                    } 
                                }
                            >
                                Social Inhibitionsg
                            </Typography>
                        </Link>
                        </div>
                        </Grid>

                       


                    </Grid>
                </Grid>

                {/*------------------------ Nature ------------------------------ */}


                <Grid container id="nature" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={natureCoaching1}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Typography className="programsHeading shortContent">
                                    Nature coaching 
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                    

                            <Grid item xs={12} md={12}>
                                <Typography className="programscontent1" align='Left'>
                                    The Process incorporates peeling off the layers of years of 
                                    conditioning and limiting beliefs which act as obstacles in the 
                                    client's way of growth in their area of interest and achieving his/her major goals of life. 
                                    Identifying Self Nature in their own ways by questioning and identifying one's small wins or 
                                    invisible wins, failures and capabilities is a part of this process of Self discovery.  
                                </Typography>

                                <Typography className="programscontent" align='Left' style={{fontWeight:"600"}}>
                                    In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                                    are maintained throughout the coaching relationship.  
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Contact us with your requirements at  <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to know more.
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

               



                {/*------------------------ 	Creative coaching  ------------------------------ */}


                <Grid container id="creative" style={{backgroundColor:"white"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={creativeCoaching}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Typography className="programsHeading">
                                    Creative coaching
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                <Typography className="programscontent1" align='Left'>
                                    Sometimes, an individual is unaware of their true potential, 
                                    of their true creative nature. We tap into this area of the 
                                    Client by brainstorming and questioning. We work together in 
                                    discovering the client's inner creative potential that can be 
                                    rightly applied in various scenarios – be it at work, family or social. 
                                    We explore together various techniques to excel in identifying, 
                                    assimilating and achieving the client's major goals of life. 
                                    In partnership with the Client, we nurture the creativity 
                                    and innovative side of the Client in this program.     
                                </Typography>

                                <Typography className="programscontent" align='Left' style={{fontWeight:"600"}}>
                                    In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                                    are maintained throughout the coaching relationship.  
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Contact us with your requirements at  <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to know more.
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
                
                


            {/*------------------------ Adolescent coaching (ages 11 to 20)   ------------------------------ */}

                <Grid container id="adolescent" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={adolescent}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Typography className="programsHeading">
                                    Adolescent coaching (ages 12 to 20) 
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                <Typography className="programscontent1" align='Left'>
                                    In this type of coaching, we work with teens/adolescents, who would want to explore their inner self and talents, 
                                    tap into their creative potential to excel in studies and have a healthy personal and social life.
                                    Social media which can take an individual in the best direction to achieve his/her goals, sometimes, 
                                    can actually lead them in the opposite direction. In this direction, they experience insecurity, fear 
                                    of failure/losing, broken 
                                    relationships, peer pressure, low self-esteem and low self confidence. Our contribution at Aleenta
                                    is to identify (in partnership with the adolescent client) these
                                    external factors that affect one's inner strength and potential. We work together to overcome the 
                                    negative aspects, identify action plans to move forward and to stay on track to achieve success and happiness! 
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Another reason to contact us; When do you know that you/your child needs coaching? 
                                    When a teen/adolescent knows what to achieve but is not able to go forward with it due to some blocks – external, emotional and situational, which makes it even harder for them to go with the flow of life. At this point, the teen/adolescent needs an accountability partner who helps the client to identify these blocks and motivates them to move toward their goals with increased focus and zeal!

                                </Typography>

                                {/* <Typography className="programscontent" align='Left' style={{fontWeight:"600"}}>
                                    In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                                    are maintained throughout the coaching relationship.  
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Contact us with your requirements at programs@aleenta.in to know more.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12} >
                                <img 
                                    className="dividerImgCorpProgram"
                                    src={divider}
                                />*/}
                            </Grid> 
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography className="programscontent" align='Left' style={{fontWeight:"600"}}>
                            In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                            are maintained throughout the coaching relationship.  
                        </Typography>

                        <Typography className="programscontent" align='Left'>
                            Contact us with your requirements at  <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to know more.
                        </Typography>
{/*                             
                        <img 
                            className="dividerImgCorpProgram"
                            src={divider}
                        /> */}
                    </Grid>
                </Grid>
                
               
    

                 {/*------------------------ Time Management    ------------------------------ */}



                 <Grid container id="timeManage" style={{backgroundColor:"white"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={timeManagement1}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Typography className="programsHeading">
                                    Time Management
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                <Typography className="programscontent1" align='Left'>
                                    When one feels overloaded, trapped, irritable, incompetent, drained and harassed, that is when you know that you need to manage your time and prioritize. Bad planning, faulty estimation of time, ignoring facts and being addicted to the challenge of crises are few reasons why we end up feeling all the above.
                                    Aleenta's Time Management program offers personalised designs to plan, prioritize and execute your work on a daily/ weekly/monthly basis. 

                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Positive outcome of this program is that; Work gets done on time thereby increasing one's Self confidence and energy to take up more work. A calm and peaceful state of mind and good relationships are a few other results of this program. 
                                </Typography>

                                {/* <Typography className="programscontent" align='Left' style={{fontWeight:"600"}}>
                                    In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                                    are maintained throughout the coaching relationship.  
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Contact us with your requirements at programs@aleenta.in to know more.
                                </Typography>*/}
                            </Grid>
                            {/* <Grid item xs={12} md={12} >
                                <img 
                                    className="dividerImgCorpProgram"
                                    src={divider}
                                /> 
                            </Grid>*/}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography className="programscontent" align='Left' style={{fontWeight:"600"}}>
                            In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                            are maintained throughout the coaching relationship.  
                        </Typography>

                        <Typography className="programscontent" align='Left'>
                            Contact us with your requirements at  <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to know more.
                        </Typography>

                        {/* <img 
                            className="dividerImgCorpProgram"
                            src={divider}
                        /> */}
                    </Grid>
                </Grid>
                
                
               

                  {/*------------------------ Self-expression ------------------------------ */}

                  <Grid container id="selfExpression" style={{backgroundColor:"#fbf2de"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={selfExpression}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>  
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Typography className="programsHeading shortContent">
                                    Self-expression
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                            <Typography className="programscontent1" align='Left'>
                                In this program, we offer fun activities and excellent self 
                                expression techniques to identify and clear the factors that 
                                are hindering the growth of an adolescent in their physical, emotional and social areas. 
                                Keeping an Art Journal, writing their personal story, narrating
                                major incidents that have caused trauma or extreme joy in their lives are a 
                                few methodologies we impart. Our Expresseive Art activites play a major role in 
                                removal of hidden negative emotions to a great extent!
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

                        <Typography className="programscontent" align='Left' style={{fontWeight:"600"}}>
                            In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                            are maintained throughout the coaching relationship.  
                        </Typography>

                    <Typography className="programscontent" align='Left'>
                        Contact us with your requirements at  <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to know more.
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




                  {/*------------------------ Social inhibitions ------------------------------ */}



                  <Grid container id="social" style={{backgroundColor:"white"}}>
                    <Grid item xs={12} md={6}>
                        <img 
                            className="mangallamImg"
                            src={socialInhibitions}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Typography className="programsHeading shortContent">
                                    Social Inhibitions
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} className="corporateProDiv">
                    
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                <Typography className="programscontent1" align='Left'>
                                    This program is uniquely designed for each individual 
                                    that begins with an opening up process and ends with 
                                    Self-discovery, high Self-confidence and high Self-esteem. 
                                    Feelings of low self confidence, fear of communication and 
                                    fear of being judged are few challenges people often face in 
                                    social gatherings. Our program brings in a natural process of opening up and 
                                    achieving Self confidence in a short span of time. 
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

                                <Typography className="programscontent" align='Left' style={{fontWeight:"600"}}>
                                    In all our Individual and personal coaching programs, Honesty, Trust and Confidentiality 
                                    are maintained throughout the coaching relationship.  
                                </Typography>

                                <Typography className="programscontent" align='Left'>
                                    Contact us with your requirements at  <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a> to know more.
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
 
export default IndividualPrograms;