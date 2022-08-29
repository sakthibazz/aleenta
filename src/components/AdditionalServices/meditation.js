import React, { Component, useEffect, useState } from 'react';

import { Grid, Typography, Card, Button,} from '@material-ui/core';
import { withRouter, Link } from "react-router-dom";
import divider from "../../images/divider2.png"
// import DialogModal from '../../reusableComponents/DialogModal'
import MeditationDialog from './MeditationDialog';
import CloseIcon from '@material-ui/icons/Close';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { makeStyles } from "@material-ui/core/styles";

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

let meditationPageVideo1 = 'https://dec4365vfd8ox.cloudfront.net/images/additionalServices/MeditationPageVideo1.MOV'





const useStyles = makeStyles((theme) => ({

    meditationRegisterButton: {
        width:"14%",
        height:'60px',
        background: "#FFE481",
        borderRadius: 25,
        color: "black",
        fontWeight: "600",
        fontSize: "35px",
        "@media only screen and (max-width: 600px)": {
            height:'40px',
            width:"50%",
        },
        "&:hover": {
          background: "#FFE481",
        },
      },
}));



const AdditionMeditation = ({history}) => {

    // const [open, setOpen] = useState(true);

    useEffect(() => {
        const unlisten = history.listen(() => {
          window.scrollTo(0, 0);
        });
        return () => {
          unlisten();
        }
      }, []);

    //   useEffect(() => {
    //     setOpen(true)
    //   }, []);

      const classes = useStyles();

    return ( 
        <>
            <Grid container  className= "additionalMeditationContainer">


                <Grid item xs={12} md={12}>
                    < Grid container className="topText">
                       
                       <Grid item xs={12} md={12}>
                           <Typography className="topTextHeading" align="center">
                                Meditation
                           </Typography>
                       </Grid>
                    </Grid>
                </Grid>
                <Grid container style={{backgroundColor:"#fbf2de"}} >
                    {/* <Grid item xs={12} md={12} className="MeditationContentGrid" >
                        <Typography className="meditationTitle"  align="center">
                            Why are people looking for ways to destress?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img className="additionMeditationImg1" src={additionMeditationImg1} />
                    </Grid> */}
                    <Grid item xs={12} md={12} align="center" className="MeditationContentGrid" >

                        <Typography className="meditationVideoTitle" align="center">
                            POORNAM 
                        </Typography>

                        <Typography className="meditationTitle1" style={{paddingTop:"1%"}} align="center">
                        A one of a kind, one year-long Meditation program that transforms you to be a happy, healthy and a successful person.  
                        </Typography>

                        {/* <video className='meditationPageVideo1Class' autoPlay loop >
                            <source src={meditationPageVideo1} type="video/mp4" />
                        </video> */}
                        <video
                            id="meditationPageVideo1Id"
                            className='meditationPageVideo1Class'
                            src={meditationPageVideo1} 
                            autoPlay
                            controls
                            // muted
                            loop
                        />
                    </Grid>
                    <Grid item xs={12} md={12} className="bellowMeditationDiv">
                    <Typography className="meditationContent1" align='center' style={{fontWeight:"600",color:"#363535"}}>
                            In the external intensity of the pandemic and it's shortcomings, 
                            Poornam provides YOU a space to unwind, 
                            retreat and renew for a whole year. 
                        </Typography>

                        <Typography className="meditationContent1" align='Left'>
                            Poornam commenced on Monday, 16th May, 2022, on the auspicious day of 
                            Buddha Poornima (Birthday of Buddha) at 7.15 am (Indian Standard Time) 
                            and concludes on May 5th 2023 on the occasion of Buddha Poornima. 
                        </Typography>

                        <Typography className="meditationContent1" align='Left'>
                            The one year program consists of sessions every Saturday 
                            from 7.15am to 8AM and includes the commencing(Monday, 16th may 2022) 
                            and concluding(Friday, 5th May 2023) sessions. 
                        </Typography>

                        <Typography className="meditationContent1" align='Left' style={{fontWeight:"600"}}>
                            Program schedule: 
                        </Typography>
                        <Typography className="meditationPoornamContent1" align='Left'>
                            40 minutes session at 7.20 AM every Saturday, from 21st May, 2022 to 5th May, 2023. 
                        </Typography>

                        <Typography className="meditationContent1" align='Left'>
                            <span style={{fontWeight:"600"}}>What we do:</span> Breath, Sound/Silence and Meditation
                            <ul>
                                <li>
                                    Pranayama
                                </li>
                                <li>
                                    Mantra chanting / mental affirmations
                                </li>
                                <li>
                                    Meditation
                                </li>
                            </ul>
                        </Typography>

                        <Typography className="meditationContent1" align='Left'>
                        <span style={{fontWeight:"600"}}>What you get from the Program:</span>
                            <ul>
                                <li>
                                    Master human relationships 
                                </li>
                                <li>
                                    Saying goodbye to past hurts and traumatic attachments 
                                </li>
                                <li>
                                    Building new boundaries 
                                </li>
                                <li>
                                    Practice Self regulation
                                </li>
                                <li>
                                    Achieve freedom from fear, anxiety and panic attacks 
                                </li>
                                <li>
                                    Open your heart to receive good health and Universal compassion and
                                </li>
                                <li>
                                    A harmonious balance between Body, Mind and the inner Spirit
                                </li>
                            </ul>
                        </Typography>

                        <Typography className="meditationContent1" align='Left'>
                            For Corporate/ group discounts, send an email to <a href="mailto:programs@aleenta.in" target="_blank" style={{textDecoration:"none",color:"black"}}> programs@aleenta.in </a> or 
                            a whatsapp text on <a href="https://wa.me/916362925160" target="_blank"  style={{textDecoration:"none",color:"black"}} > +916362925160 </a>.
                            with the number of participants/ employees.
                            Regular price of the Program: Rs.12,000/- .
                        </Typography>

                        <Typography className="meditationContent1" align='Left'>
                            <span style={{fontWeight:"600"}}>Register at <a href="mailto:programs@aleenta.in" target="_blank" style={{textDecoration:"none",color:"#ec9e31"}}> programs@aleenta.in </a> or send a text on 
                            WhatsApp at</span> <a href="https://wa.me/916362925160" target="_blank" style={{textDecoration:"none",color:"#ec9e31"}}> +916362925160 </a>.
                        </Typography>

                        <Typography className="meditationContent1" align='Left' style={{fontWeight:"600"}}>
                            Other services:
                        </Typography>
                        <Typography className="meditationPoornamContent1" align='Left'>
                            Private Spiritual Mentoring:
                            We provide private mentoring in meditation techniques, mantra instruction and building a personal 
                            Sadhana or a Spiritual practice. Contact the above mentioned What's App number. 
                        </Typography>

                        <Typography className="meditationContent1" align='Left'>
                            Personal one-on-one Coaching: Check<Link to="/individualPrograms" style={{textDecoration:"none",color:"#ec9e31"}}> Individual programs 
                            </Link> under Programs Menu.
                        </Typography>

                        <Typography className="meditationContent1" align='Left'>
                            Personal Counselling: Check <Link to="/counseling" style={{textDecoration:"none",color:"#ec9e31"}}> Counselling 
                            </Link> under Additional services Menu.
                             
                        </Typography>

                        <Typography className="meditationContent1" align='center' style={{fontWeight:"600",color:"#363535"}}>
                            Come, join us in this blissful journey of Self knowing, Self awareness and Self Transformation!
                        </Typography>
                        {/* <Grid item xs={12} md={12} align='center' style={{marginTop:"4%"}}>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdv9WCV9Dp6wx0xEKvE7KlJyUS-y511l36jIXwZmjf9KvwOdA/viewform" target="_blank" style={{textDecoration:"none",color:"black"}}>
                                <Button className='meditationRegisterButton'>Register Now</Button>
                            </a>
                        </Grid>  */}







                        <Grid item xs={12} md={12} align='center' style={{marginTop:"2%"}}>
                            <a href="https://rzp.io/l/aleenta_poornam" target="_blank" style={{textDecoration:"none",color:"black",fontWeight:"600"}}>
                                <Button
                                    variant="contained"
                                    className={classes.meditationRegisterButton}
                                >
                                    <Typography align='center'  style={{fontSize:"18px",textTransform:"capitalize",fontWeight:"600"}}>
                                        Register Now
                                    </Typography>
                                </Button>
                            </a>
                        </Grid>








                    </Grid>
                    <Grid item xs={12} md={12} className="meditationDiv">
                        
                    </Grid>
                    <Grid item xs={12} md={12} className="bellowMeditationDiv">
                        {/* ---------------old content------------------------ */}
                        <Typography className="meditationContent1" align='Left'>
                            Come have a practical experience of Silence at Aleenta Wellbeing!
                        </Typography>
                        <Typography className="meditationContent1" align='Left'>
                            The world as we know it has become busier, louder, 
                            and more stressful in the age of Covid-19. That is why 
                            many people are looking for ways to escape the everyday hustle and bustle and turning to 
                            meditation to find inner peace during these unsettling times. 
                        </Typography>
                        <Typography className="meditationContent1" align='Left'>
                            Meditation is known in all parts of the world and 
                            people have different approaches to meditate. Some are 
                            related to faith, religion, culture etc...Nevertheless, 
                            meditation has less to do with faith and more to do with mindfulness, 
                            in other words, developing awareness. Benefits include:
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

                    {/* <Grid item xs={12} md={12}>
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
                    </Grid>*/}


                    <Grid item xs={12} md={12} style={{backgroundColor:"white"}}>
                        <Typography className="programsHeading">
                        <span className="underLine">Guided meditation</span>
                            
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
                            <span className="underLine">Mantra meditation</span>
                          
                        </Typography>
                        <Typography className="meditationContent2" align='Left'>
                            This type of meditation can be practised on a daily basis 
                            while sitting with eyes closed and seated in a comfortable position. 
                            It involves an attempt to experience a deeper level of awareness and stay 
                            in tune with the environment. It involves the repetitive production of a word, phrase, or 
                            combination of sounds in a voice that can be low or high in order to clear the head. One 
                            famous meditation sound is “Om” which is also been scientifically proven as the Sound of the Universe. Sounds 
                            Bhramari, Chakradhyana, Om, etc produce vibrations inside the body that calms the nerves and sets the 
                            imbalances that causes stress and disease in the body.
                        </Typography>


                        <Typography className="programsHeading">
                        <span className="underLine"> Mindfulness meditation</span>
                            
                        </Typography>
                        <Typography className="meditationContent2" align='Left'>
                            This practice is about becoming more conscious of the present moment. 
                            It also involves focusing on the ideas crossing one’s mind and watching without 
                            judgement. This practice enables one to realise and focus on patterns that occur, 
                            with a high level of awareness. It is also useful in directing attention to an 
                            object or to one’s breathing while monitoring ideas, emotions, and/or bodily sensations. 
                            Its techniques, which stem from Buddhist teachings, help to control the emotions, relieve stress, 
                            enhance resilience, develop creativity and encourage positivity in all aspects of life. 
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
                            <span className="underLine"> Benefits </span>
                                
                            </Typography>
                            <Typography className="meditationContent1" align='Left'>
                                Practising meditation and mindfulness for six to eight weeks can alleviate stress, 
                                enhance attention span, lower blood pressure, improve depressive symptoms, reduce cortisol levels, 
                                improve emotional well-being, and treat inflammation and hypertension.
                            </Typography>

                            {/* <Typography className="meditationContent1" align='Left'>
                                Meditation practice increases one's Happiness quotient resulting in experiencing 
                                Life to the fullest!   
                            </Typography> */}
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
            {/* <DialogModal
                // title="POORNAM"
                children={<MeditationDialog />}
                openPopup={open}
                setOpenPopup={setOpen}
            /> */}
        </>
     );
}
 
export default AdditionMeditation;

