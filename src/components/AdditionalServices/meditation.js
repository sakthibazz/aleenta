import React, { Component, useEffect } from 'react';

import { Grid, Typography,Card  } from '@material-ui/core';
import { withRouter, Link } from "react-router-dom";
import divider from "../../images/divider2.png"

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

//-----------------------Images-----------------------
// import additionMeditationImg1 from "../../images/pgm_and_add_optimized_images/additionalServices/additionalService01.jpg"
// import additionMeditationImg2 from "../../images/pgm_and_add_optimized_images/additionalServices/meditation2.jpg"

let additionMeditationImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/additionalServices/additionalService01.jpg'
let additionMeditationImg2 = 'https://dec4365vfd8ox.cloudfront.net/images/pgm_and_add_optimized_images/additionalServices/meditation2.jpg'

// let divider = "https://dec4365vfd8ox.cloudfront.net/images/divider2.png"

let cardImg1 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService01.jpg'
let cardImg2 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService02.jpg'
let cardImg3 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService03.jpg'
let cardImg4 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/additionalService04.jpg'


const AdditionMeditation = ({history}) => {

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
                    <Typography className="topText">
                        Additional Services <ArrowRightIcon/> Meditation
                    </Typography>
                </Grid>
                <Grid container style={{backgroundColor:"#fbf2de"}} >
                    <Grid item xs={12} md={12} >
                        <Typography className="meditationTitle"  align="center">
                            Why are people looking for ways to destress – Is meditation the way?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img className="additionMeditationImg1" src={additionMeditationImg1} />
                    </Grid>
                    <Grid item xs={12} md={12} className="meditationDiv">
                        
                    </Grid>
                    <Grid item xs={12} md={12} className="bellowMeditationDiv">
                        <Typography className="meditationContent1" align='Left'>
                            The world as we know it has become busier, louder, 
                            and more stressful in the age of Covid-19. That is why 
                            many people are looking for ways to escape the everyday hustle and bustle and turning to 
                            meditation to find inner peace during these unsettling times. 
                        </Typography>
                        <Typography className="meditationContent1" align='Left'>
                            Meditation is known in all parts of the world and 
                            people have different approach to meditate. Some are 
                            related to faith, religion, culture etc...Nevertheless, 
                            meditation has less to do with faith and more to do with mindfulness, 
                            in other words developing awareness: it targets 
                                <Typography className="meditationContent3"> •	Alleviating stress</Typography>
                                <Typography className="meditationContent3"> •	Directing attention</Typography>
                                <Typography className="meditationContent3"> •	Clearing the mind</Typography>
                                <Typography className="meditationContent3"> •	Achieving emotional stability and </Typography>
                                <Typography className="meditationContent3"> •	Attaining a state of inner peace.</Typography>
                        </Typography>

                        <Typography className="meditationContent1" align='Left'>
                            Practising meditation clears the head and shifts the focus onto the present 
                            moment by training the individual to breathe deeply and slowly while being more 
                            conscious of the 5 senses. It helps one to Experience emotional balance, 
                            peace of mind and joy in the heart.  
                        </Typography>
                        <Typography className="meditationContent1" align='Left'>
                            Learn the techniques of meditation and establish a daily practice that will benefit 
                            you for the rest of your life!
                        </Typography>
                    </Grid>
                    {/* <Grid item xs={12} md={12}>
                        <img className="dividerImgCorpProgram"src={divider} />
                    </Grid> */}

                    {/* ======================================================================================================================== */}

                    <Grid item xs={12} md={12}>
                        <img className="additionMeditationImg1" src={additionMeditationImg2} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography className="meditationTitle"  align="center">
                            We offer the following techniques.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Grid container align="center">
                            <Grid item xs={12} md={4}>
                                <Card className="meditationTechnique">
                                    <Card container style={{backgroundColor:"#fbf2de"}} >
                                        <Typography className="programsHeading1">
                                            Guided meditation
                                        </Typography>
                                    </Card>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Card className="meditationTechnique">
                                    <Card container style={{backgroundColor:"#fbf2de"}} >
                                        <Typography className="programsHeading1">
                                            Mantra meditation
                                        </Typography>
                                    </Card>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Card className="meditationTechnique">
                                    <Card container style={{backgroundColor:"#fbf2de"}} >
                                        <Typography className="programsHeading1">
                                            Mindfulness meditation
                                        </Typography>
                                    </Card>
                                </Card>
                            </Grid>
                        </Grid>
                        
                        
                        
                    </Grid>
                    <Grid item xs={12} md={12} style={{backgroundColor:"white"}}>
                        <Typography className="programsHeading">
                            Guided meditation
                        </Typography>
                        <Typography className="meditationContent2" align='Left'>
                            This process involves a trained practitioner or teacher 
                            giving detailed instructions that enable participants to 
                            visualise relaxing situations or mental images to experience 
                            calmness and tranquility. The trainer also explains how the mind 
                            operates while meditating and how participants can 
                            implement such practices into their everyday lives.
                        </Typography>
                        <Typography className="meditationContent2" align='Left'>
                            Meditation, once mastered, need not be sitting in a quiet place 
                            with closed eyes and palms in a specific mudra, 
                            it can be practiced at anytime of the day!  
                        </Typography>

                        <Typography className="programsHeading">
                            Mantra meditation
                        </Typography>
                        <Typography className="meditationContent2" align='Left'>
                            This type of meditation can be practised on a daily basis 
                            while sitting with eyes closed and seated in a comfortable position. 
                            It involves an attempt to experience a deeper level of awareness and stay 
                            in tune with the environment. It involves the repetitive production of a word, phrase, or 
                            combination of sounds in a voice that can be low or high in order to clear the head. One 
                            famous meditation sound is “Om” which is also been scientifically proven as the Sound of the Universe. 
                            Bhramari, Chakradhyana, Om, etc produces Vibrations inside the body that calms the nerves, sets the 
                            imbalances that causes stress and disease in the body.
                        </Typography>


                        <Typography className="programsHeading">
                            Mindfulness meditation
                        </Typography>
                        <Typography className="meditationContent2" align='Left'>
                            This practice is about becoming more conscious of the present moment. 
                            It also involves focusing on the ideas crossing one’s mind and watching without 
                            judgement. This practice enables one to realise and focus on patterns that occur, 
                            with a high level of awareness. It is also useful in directing attention to an 
                            object or to one’s breathing while monitoring ideas, emotions, and/or bodily sensations. 
                            Its techniques, which stem from Buddhist teachings, help to control the emotions, relieve stress, 
                            enhance resilience, develop creativity, and encourage positivity in all aspects of life. 
                            According to a study by Harvard University in the US, mindfulness is capable of altering 
                            depressed individuals’ brains.
                        </Typography>
                        {/* <Typography className="meditationContent2" align='Left'>
                            Experience the ultimate satisfaction of every meal you have. 
                            Seeing and recognising the nutrients, savouring the taste, 
                            experiencing the freshness of the food you’re eating.   
                        </Typography> */}

                        {/* <Grid item xs={12} md={12}>
                            <img className="dividerImgCorpProgram"src={divider} />
                        </Grid> */}

                        <Typography className="programsHeading">
                                Benefits
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                Practising meditation and mindfulness for six to eight weeks can alleviate stress, 
                                enhance attention span, lower blood pressure, improve depressive symptoms, reduce cortisol levels, 
                                improve emotional well-being, and treat inflammation and hypertension.
                            </Typography>

                            <Typography className="meditationContent1" align='Left'>
                                Meditation practice increases one's Happiness quotient resulting in experiencing 
                                Life to the fullest!   
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                Get in touch with us at <a href="mailto:programs@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> programs@aleenta.in </a>to avail our one of a 
                                kind Meditation sessions. 
                            </Typography>
                            <Grid item xs={12} md={12}>
                                <img className="dividerImgCorpProgram"src={divider} />
                            </Grid>

                    </Grid>
                    {/* <Grid item xs={12} md={12} className="bellowMeditationDiv" >
                            <Typography className="programsHeading">
                                Benefits
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                Practising meditation and mindfulness for six to eight weeks can alleviate stress, 
                                enhance attention span, lower blood pressure, improve depressive symptoms, reduce cortisol levels, 
                                improve emotional well-being, and treat inflammation and hypertension.
                            </Typography>

                            <Typography className="meditationContent1" align='Left'>
                                Meditation practice increases one's Happiness quotient resulting in experiencing 
                                Life to the fullest!   
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                Get in touch with us at <a href="mailto:additionalservices@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> additionalservices@aleenta.in </a>to avail our one of a 
                                kind Meditation sessions. 
                            </Typography>
                            <Grid item xs={12} md={12}>
                                <img className="dividerImgCorpProgram"src={divider} />
                            </Grid>
                        </Grid> */}


                    {/* ======================================================================================================================================= */}
                   
                    {/* <Grid container style={{backgroundColor:"white"}}>
                        <Grid item xs={12} md={12}>
                            <img className="additionMeditationImg1" src={additionMeditationImg3} />
                        </Grid>
                        <Grid item xs={12} md={12} className="meditationDiv">
                            
                        </Grid>
                        <Grid item xs={12} md={12} className="bellowMeditationDiv" >
                            <Typography className="programsHeading">
                                Benefits
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                Practising meditation and mindfulness for six to eight weeks can alleviate stress, 
                                enhance attention span, lower blood pressure, improve depressive symptoms, reduce cortisol levels, 
                                improve emotional well-being, and treat inflammation and hypertension.
                            </Typography>

                            <Typography className="meditationContent1" align='Left'>
                                Meditation practice increases one's Happiness quotient resulting in experiencing 
                                Life to the fullest!   
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                Get in touch with us at <a href="mailto:additionalservices@aleenta.in" style={{textDecoration:"none",color:"black",fontWeight:"600"}}> additionalservices@aleenta.in </a>to avail our one of a 
                                kind Meditation sessions. 
                            </Typography>
                            <Grid item xs={12} md={12}>
                                <img className="dividerImgCorpProgram"src={divider} />
                            </Grid>
                        </Grid>
                    </Grid> */}
                    

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
                                    <Link to="/additionCounseling" style={{textDecoration:"none"}}>
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
 
export default AdditionMeditation;

