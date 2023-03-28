// import React, { Component, useState } from 'react';
// import { AccordionDetails, AccordionSummary, Grid, Typography,  Accordion} from '@material-ui/core';

// // import icon13 from "../../images/dropDown/aboutDD/What_is_wellbeing.png"
// // import icon15 from "../../images/dropDown/aboutDD/Who_needs_wellbeing.png"
// // import icon12 from "../../images/dropDown/aboutDD/Why_Aleenta.png"
// // import icon1 from "../../images/dropDown/aboutDD/The_coach.png"



// import { makeStyles } from "@material-ui/core/styles";

// //-----------------------Icons-----------------------
// let icon13 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/What_is_wellbeing.png'
// let icon15 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Why_Aleenta.png'
// let icon12 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/Who_needs_wellbeing.png'
// let icon1 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icn/The_coach.png'






// const useStyles = makeStyles(theme => ({
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//       },
// }));


// const WhatIsWB = () => {
//   return <>
//     <Typography className="aboutDropDown_subContent" >
        // According to Oxford dictionary Well-being means – 
        // a state in which your physical, mental, and 
        // spiritual health are in balance, 
        // unlocking your body's natural healing abilities. 
        // Our program fits every human being who wishes to 
        // be in charge of their lives, who wants to fulfil 
        // their major goals and have an awareness and an 
        // undertaking toward a state of overall wellbeing. 
//     </Typography>
//   </>
// }

// const WhyAleenta = () => {
//   return <>
//     <Typography className="aboutDropDown_subContent">
        // We follow a natural, friendly approach that 
        // consists of a co-creative relationship with the client/clients. 
        // At Aleenta, everything that is important to the client is captured 
        // to bring about excellent ways to Self discovery and move in the direction 
        // of achieving success in the 
        // Client's/Organisation's area of priority. We serve all genders of all age groups.
//     </Typography>
//   </>
// }

// const WhoNeedsWB = () => {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
//   return <>
//     <Typography className="aboutDropDown_subContent" >
//         Anyone who : 
        // <ul>
        //   <li>
        //       wants to seek Awareness on overall wellbeing to 
        //       become a Healthy, Happy and a Successful person. 
        //   </li>
        //   <li>
        //       wishes to make lifestyle changes to become 
        //       their best Self to lead a Happy, Healthy and a fulfilling Life.
        //   </li>
        //   <li>
        //       is thriving to adapt a positive Mindset 
        //   </li>
        //   <li>
        //       wants to work on their Time management, 
        //       Self confidence and Self esteem to strike a balance between personal, 
        //       professional and social aspects of their lives.
        //   </li>
        // </ul>
        
//     </Typography>
//   </>
// }

// // 97581E
// // fontStyle: "italic"
// const Coach = () => {
//   return <>
//     <Typography className="aboutDropDown_subContent">
        // <span className="span2" style={{color:"tomato",fontWeight:"600"}}>
        //     Mangala Narayan</span> is a Certified Wellbeing Coach,
        // who has mastered coaching through her Life 
        // experiences with children and people who wished to 
        // achieve their goals of Life in their pursuit of fulfilment and happiness. 
        // She is an excellent motivator, a great listener who hand holds her clients 
        // and manoeuvres through a highly positive transformational process. 
        // She is also a Visual Artist and a Meditation Practitioner by profession. 
        // She has a natural ability to motivate, 
        // inspire and support clients in their paramount endeavours. 
//     </Typography>
//   </>
// }

// const whatIsWBTitle = <Typography className="aboutDropDown_heading1" >
//                             What is Well-being ?
//                         </Typography>
// const whyAleentaTitle = <Typography className="aboutDropDown_heading1" >
//                         Why Aleenta ?
//                       </Typography>

// const whoNeedsWBTitle = <Typography className="aboutDropDown_heading1" >
//                           Who needs Well-being ?
//                         </Typography>

// const coachTitle = <Typography className="aboutDropDown_heading1" >
//                     The Coach
//                   </Typography>

// const DesktopAbout = () => {
//   return <>
//         <Grid item xs={12} md={8}>
//                 <Grid container  spacing={0}>
//                     <Grid item align="center" xs={2} md={1}>
//                         <img className="dropDownIcons" src={icon13} />
//                     </Grid>
//                     <Grid item xs={10} md={5}>
//                         {
//                           whatIsWBTitle
//                         }
//                         <WhatIsWB />
//                     </Grid>

//                     <Grid item align="center" xs={2} md={1}>
//                         <img className="dropDownIcons" src={icon15} />
//                     </Grid>
//                     <Grid item xs={10} md={5}>
//                         {
//                           whyAleentaTitle
//                         }
//                         <WhyAleenta />
//                     </Grid>
                    
//                     <Grid item align="center" xs={2} md={1}>
//                         <img className="dropDownIcons" src={icon12} />
//                     </Grid>
//                     <Grid item xs={10} md={5}>
                    
//                         {
//                           whoNeedsWBTitle
//                         }
//                         <WhoNeedsWB />
//                     </Grid>

//                     <Grid item align="center" xs={2} md={1}>
//                         <img className="dropDownIcons" src={icon1} />
//                     </Grid>
//                     <Grid item xs={10} md={5}>
//                         {
//                           coachTitle
//                         }
//                         <Coach />
//                     </Grid>
//                 </Grid> 
//             </Grid>
//   </>
// }

// const MobileAbout = () => {
//   const [expanded, setExpanded] = useState('')
  
//   const handleAccordion = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   }
//   return <>
//     <Grid item xs={12} md={8}>
//       <Accordion expanded={expanded == 'panel1'} onChange={handleAccordion('panel1')}>
//         <AccordionSummary>
//           <img className="dropDownIcons" src={icon13} style={{marginRight: '10px'}} />
//           {
//             whatIsWBTitle
//           }
//         </AccordionSummary>
//         <AccordionDetails>
//           <WhatIsWB />
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded == 'panel2'} onChange={handleAccordion('panel2')}>
//       <AccordionSummary>
//         <img className="dropDownIcons" src={icon15} style={{marginRight: '10px'}} />
//           {
//             whyAleentaTitle
//           }
//         </AccordionSummary>
//         <AccordionDetails>
//           <WhyAleenta />
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded == 'panel3'} onChange={handleAccordion('panel3')}>
//       <AccordionSummary>
//         <img className="dropDownIcons" src={icon12} style={{marginRight: '10px'}} />
//           {
//             whoNeedsWBTitle
//           }
//         </AccordionSummary>
//         <AccordionDetails style={{flexDirection: 'column'}}>
//           <WhoNeedsWB />
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded == 'panel4'} onChange={handleAccordion('panel4')}>
//       <AccordionSummary>
//         <img className="dropDownIcons" src={icon1} style={{marginRight: '10px'}}/>
//           {
//             coachTitle
//           }
//         </AccordionSummary>
//         <AccordionDetails>
//           <Coach />
//         </AccordionDetails>
//       </Accordion>
//     </Grid>
//   </>
// }



// const About = ({desktop = false}) => {
    
//     const classes = useStyles();
//     const bull = <span className={classes.bullet}>•</span>;

//     return ( 
//         <>
//         <Grid item className="hrTag" style={{marginTop:" 1px",marginBottom:" 1%"}}>

//         </Grid>
//         <Grid container className="aboutContainer aboutTitleContainer1" spacing={2}>
//             <Grid item xs={12} md={4}>
                // <Typography className='abotTitle'>
                //     <span className="span1" style={{color:"tomato",fontWeight:"600",}}>Aleenta</span > is an ancient Sanskrit word which means "A rewarding life".
                //       At Aleenta Wellbeing, we provide a space and motivation for 
                //       the client to explore venues/methods/techniques to overcome 
                //       challenges that are on the way to succeeding in their endeavours. 
                //       We guide and support our clients on finding a harmonious balance between the mind, 
                //       body and spirit that contributes to his/her total well-being. 
                // </Typography>
//             </Grid>
//             {
//               desktop ? <DesktopAbout /> : <MobileAbout />
//             }
            
              
//         </Grid>
//         </>
//      );
// }
 
// export default About;




import React, { Component } from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { withRouter, Link } from "react-router-dom";


// import cardImg1 from "../../images/aboutDetails/theCoachEdited.jpeg"
// import cardImg2 from "../../images/aboutDetails/whyAleenta.jpeg"
// import cardImg3 from "../../images/aboutDetails/whatIsWellBeing.jpeg"
// import cardImg4 from "../../images/aboutDetails/whoNeedsWellBeing.jpeg"
// import splitCircle from "../../images/aboutDetails/splitCircle.png"

//-----------------------Icons-----------------------
let cardImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/theCoachEdited.jpeg'
// let cardImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/theCoach.jpeg'

let cardImg2 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/whyAleenta.jpeg'
let cardImg3 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/whatIsWellBeing.jpeg'
let cardImg4 = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/whoNeedsWellBeing.jpeg'

let splitCircle = 'https://dec4365vfd8ox.cloudfront.net/images/aboutDetails/splitCircle.png'




// import icon1 from '../../images/dropDown/icon1.png'

function noop(val=true){
}

const About = ({history,setOpen=noop,open}) => {

    return ( 
        <>
            <Grid item className="hrTag" style={{marginTop:" 1px",marginBottom:" 1%"}}>

            </Grid>
        <Grid container  className= "additionalServicesContainer" style={{marginTop:"5px",backgroundColor:"#fbf2de"}}>
            {/* <Grid item xs={12} md={12}>
                <Typography className="topText">
                    Additional Services
                </Typography>
            </Grid>   */}
            <Grid container>
                <Grid item xs={12} md={10}>
                    <p className='abotTitle1'>
                            <span className="span1" style={{fontWeight:"600",}}>Aleenta </span > 
                                is an ancient Sanskrit word which means "A rewarding life".
                                At Aleenta Wellbeing, we provide a space and motivation for 
                                the client to explore venues/methods/techniques to overcome 
                                challenges that are on the way to succeeding in their endeavours. 
                                We guide and support our clients on finding a harmonious balance between the mind, 
                                body and spirit that contributes to his/her total well-being. 
                    </p>
                </Grid>
            </Grid>
            <Grid container >
                {/* <Grid item xs={12} md={6}>               
                    <Typography className="additionalDrop_content">
                        Come have a practical experience of Silence at Aleenta Wellbeing!
                    </Typography>
                </Grid> */}

{/* ----------------------------card-1----------------------------------- */}
                <Grid item xs={12} md={12}>
                    <Grid container align="center">
                        {/* <Grid item xs={12} md={3} className="articalCardGrid">
                            <Link to="/aboutDetails#coach" style={{textDecoration:"none"}}>
                                <Card className="aboutCoachCard" 
                                // style={{width:"90%",height:"70%"}}
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="aboutCoachCard1"  >
                                        <img src={cardImg1}   />
                                        
                                    </Card>
                                    <Card container  >
                                        <Typography className="additionalDrop_articles" >
                                            THE COACH
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid> */}

                        <Grid item xs={12} md={3} className="articalCardGrid">
                        <Link to="/aboutDetails#coach" style={{textDecoration:"none"}}>


                            <Card className='aboutCoachCard'
                                onClick={()=>
                                    setOpen(true)}
                            >
                                <CardContent className='aboutCoachCard1'>
                                    <img className='aboutCoachCardImage' src={cardImg1} style={{width:"100%",height:"100%", objectFit: "cover"}}   />
                                </CardContent>
                                <Typography className="additionalDrop_articles" >
                                    THE COACH
                                </Typography>
                            </Card>


                        </Link>
                        </Grid>

{/* ----------------------------card-2----------------------------------- */}

                        <Grid item xs={12} md={3} className="articalCardGrid">
                            <Link to="/aboutDetails#why" style={{textDecoration:"none"}}>
                                <Card className="aboutCard" 
                                // style={{width:"90%",height:"70%"}}
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="aboutCard1"  style={{height:"80%"}} >
                                        <img src={cardImg2}  style={{width:"100%",height:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"20%"}}>
                                        <Typography className="additionalDrop_articles" style={{fontWeight:"600"}}>
                                            Why Aleenta ?
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid>
{/* ----------------------------card-3----------------------------------- */}

                        <Grid item xs={12} md={3} className="articalCardGrid">
                            <Link to="/aboutDetails#what" style={{textDecoration:"none"}}>
                                <Card className="aboutCard" 
                                // style={{width:"90%",height:"70%"}}
                                // style={{width:"90%",height:"226px"}} 
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="articalCard1"  style={{height:"80%"}} >
                                        <img src={cardImg3}  style={{width:"100%",height:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"20%"}}>
                                        <Typography className="additionalDrop_articles" style={{fontWeight:"600"}}>
                                            What is Well-being ?
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid>

{/* ----------------------------card-4----------------------------------- */}

                        <Grid item xs={12} md={3} className="articalCardGrid">
                            <Link to="/aboutDetails#who" style={{textDecoration:"none"}}>
                                <Card className="aboutCard"  
                                // style={{width:"90%",height:"70%"}}
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="aboutCard1"  style={{height:"80%"}} >
                                        <img src={cardImg4}  style={{width:"100%",height:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"20%"}}>
                                        <Typography className="additionalDrop_articles" style={{fontWeight:"600"}}>
                                            WHO NEEDS WELL-being ?
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid>
                </Grid>
                </Grid> 
            </Grid>  
            <Grid container className='aboutDef'>
                <Grid item xs={12} md={2} >
                    <img className='splitCircle' src={splitCircle} />
                </Grid>
                <Grid item xs={12} md={10}>
                    <p className='abotTitle'>
                            <span className="span1" style={{fontWeight:"600",}}>Aleenta </span > 
                                is an ancient Sanskrit word which means "A rewarding life".
                                At Aleenta Wellbeing, we provide a space and motivation for 
                                the client to explore venues/methods/techniques to overcome 
                                challenges that are on the way to succeeding in their endeavours. 
                                We guide and support our clients on finding a harmonious balance between the mind, 
                                body and spirit that contributes to his/her total well-being. 
                    </p>
                </Grid>
            </Grid>
                
        </Grid>
      
        </>
     );
}
 
export default About;