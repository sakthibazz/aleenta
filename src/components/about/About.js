import React, { Component } from 'react';
import { Grid, Typography,  } from '@material-ui/core';

//-----------------------Icons-----------------------
import what from '../../images/dropDown/what.png'
import why from '../../images/dropDown/why.png'
import who from '../../images/dropDown/who.png'
import theCoach from '../../images/dropDown/theCoach.png'


const About = () => {
    return ( 
        <>
        <hr></hr>
        <Grid container className="aboutContainer aboutTitleContainer" spacing={2}>
            <Grid item xs={12} md={4}>
                <Typography className='abotTitle'>
                    Aleenta  is an ancient Sanskrit word which means " A rewarding life".
                    At Aleenta, we design a personalised holistic approach for an all-round wellbeing of our Clients 
                    because every person is unique in his/her own way - in thought, emotion and in action.
                    The outcome of our programs are Self discovery and Self awareness in a healthy and successful way.
                </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container  spacing={0}>
                    <Grid item xs={12} md={1}>
                        <img src={what} />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography className="aboutDropDown_heading" variant='h6'>
                            What is Well-being 
                        </Typography>
                        <Typography className="aboutDropDown_subContent" >
                            According to Oxford dictionary Well-being means – 
                            A state of being comfortable, healthy, or happy. 
                            Our program fits every human being who wishes to 
                            be in charge of their lives, who wants to fulfil 
                            their major goals and have an awareness and an 
                            undertaking toward a state of overall wellbeing. 
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={1}>
                        <img src={why} />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography className="aboutDropDown_heading" variant='h6'>
                        	Why Aleenta
                        </Typography>
                        <Typography className="aboutDropDown_subContent">
                            We follow a natural, friendly approach that 
                            consists of a co-creative relationship with the client/clients. 
                            At Aleenta, everything that is important to the client is captured 
                            to bring about excellent ways to Self discovery and move in the direction 
                            of achieving success in the 
                            Client's/Organisation's area of priority. We serve all genders of all age groups.
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12} md={1}>
                        <img src={who} />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography className="aboutDropDown_heading" variant='h6'>
                        	Who needs Well-being 
                        </Typography>
                        <Typography className="aboutDropDown_subContent" >
                        	Wants to seek Awareness on overall wellbeing to 
                            become a Healthy, Happy and a Successful person. 
                        </Typography>
                        <Typography className="aboutDropDown_subContent" >
                        	Wishes to make lifestyle changes to become 
                            their best Self to lead a Happy, Healthy and a fulfilling Life. 
                        </Typography>
                        <Typography className="aboutDropDown_subContent">
                        	Are thriving to adapt a positive Mindset 
                        </Typography>
                        <Typography className="aboutDropDown_subContent">
                        	Wants to work on their Time management, 
                            Self confidence and Self esteem to strike a balance between personal, 
                            professional and social aspects of their lives.   
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={1}>
                        <img src={theCoach} />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography className="aboutDropDown_heading" variant='h6'>
                            The coach
                        </Typography>
                        <Typography className="aboutDropDown_subContent">
                            Mangala Narayan is a Certified Wellbeing Coach,
                            who has mastered coaching through her Life 
                            experiences with children and people who wished to 
                            achieve their goals of Life in their pursuit of fulfilment and happiness. 
                            She is an excellent motivator, a great listener who hand holds her clients 
                            and manoeuvres through a highly positive transformational process. 
                            She is also a Visual Artist and a Meditation Practitioner by profession. 
                            She has a natural ability to motivate, 
                            inspire and support clients in their paramount endeavours. 
                        </Typography>
                    </Grid>
                </Grid> 
            </Grid>
              
        </Grid>
        </>
     );
}
 
export default About;