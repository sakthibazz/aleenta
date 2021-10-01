import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import Footer from "../footer"



import blog1Img1 from '../../images/blogs/blog1Img1.jpg'
import upcircle from '../../images/blogs/upcircle.png'
import blog1Img2 from '../../images/blogs/blog1Img2.jpg'
import downcircle from '../../images/blogs/downcircle.png'

import { makeStyles } from "@material-ui/core/styles";




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
}));

const Blogs = () => {

    const classes = useStyles();

    return ( 
        <Container maxWidth="lg" className={`${classes.mainViewContainer} mainViewContainerBlog`}>
            <Grid container>
                <Grid item xs={12} md={12}  className={classes.mainGridContainer}>
                    <Typography className='blogTitle' align='center'>
                        My journey from a day dreamer to a Life coach.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <img 
                        className="blog1Image1"
                        src={blog1Img1}
                    />
                </Grid>
                <Grid item xs={12} md={12} className="blogDiv">
                    
                </Grid>
                <Grid item xs={12} md={12} >
                    <Typography className="blogcontent1" align='Left'>
                    A dreamer and a nature lover as a child, 
                    I grew up extremely independant. I changed schools 
                    (due to unavoidable reasons) and stayed in boarding schools and college hostels. 
                    I was a shy child but turned out to be a confident and moderately outgoing person 
                    who loved to be by herself, given a chance!. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                    Marriage happened, a new family was created. 
                    An immense gratitude overflowed my heart when I held my little ones in my arms 
                    for the first time. I had a moderately fulfilling family life with 
                    parents and relatives around me for most of the years. 
                    Yet, there was a void, a huge one, which I constantly was trying to 
                    fill by searching for the person or opportunity or a miracle, 
                    could be anything – I had no idea! 
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        Then came the pressures, challenges, 
                        shocking surprises and problems that took a toll on my 
                        health – all in one go. Depression, loneliness, hopelessness, 
                        dissappoinment and many other traits of losing it all, 
                        creeped in. A beautiful state arose from this bitterness – Solitude. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        The search ended when I rose from the ashes of helplessness. Then, 
                        I found it, the one thing that I was destined to be, the one thing that I found my purpose in. 
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        It was a part of my own self. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        My deeper side, my inner core that remained dormant for many years,
                        began to activate itself. A state of intelligence became constant. 
                        Continuous learning and application happened on a regular basis. 
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        Blooming was in progress! 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        A part of me began to relate to all the other people; 
                        in thought and in action. A deep understanding of workings 
                        of the mind took me to another world. A world where 
                        I am the only witness of thoughts – thoughts of 
                        judgement, of jealousy, of fear, of anger, of dominance, of controlling, 
                        of cursing, of love, of compassion, of overwhelm, 
                        of kindness and many more.....no end to them thoughts! The truth unraveled.  
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        What seemed to be me and mine expanded. 
                        What seemed to be not me and not mine also expanded. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        But they were two different states. In my internal state, 
                        I expanded to the outer world. In my external state, 
                        I became the smallest thing, a speck or sometimes, nothing.   
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        All this happened in the due course of inner workings within myself, 
                        performing spiritual sadhanas (spiritual discipline), 
                        chanting sanskrit slokas and mantras, meditating and 
                        brainstorming with Gurus to find answers to my questions. 
                        Most importantly, it was when I worked with cancer affected 
                        children did I go through a transformation that said loud and clear that; 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        “ You and only you, are the barrier to your personal upliftment and You and only you, 
                        are the door to your personal empowerment”.    
                    </Typography>
                </Grid>
                
                <Grid item xs={12} md={12} >
                    <img 
                        className="blog1Image2"
                        src={upcircle}
                    />
                </Grid>
                <Grid item xs={12} md={12} >
                    <img 
                        className="blog1Image3"
                        src={blog1Img2}
                    />
                </Grid>

                <Grid item xs={12} md={12} className="blogDiv">
                    
                </Grid>

                <Grid item xs={12} md={12} >
                    <Typography className="blogcontent1" align='Left'>
                        Life is something we take for granted. 
                        All the people, things, comforts, privileges, challenges we have in our realm of Life, 
                        are channels of Self-empowerment through which we can achieve our highest purpose in life. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left' style={{fontWeight:"600",fontStyle: "italic"}}>
                        Gratitude set in. Humility followed. Faith in Self and the higher Self strengthened. 
                        Attachments ceased to exist, Love became constant. 
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        I saw beauty of Life and its nature in anything I set my eyes on. I became present in all moments.
                        Awareness was the highest point I reached in this process of seeing!  
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        I observed that people were completely lost in thoughts, ideals, 
                        beliefs, principles that only stopped them from achieving bigger 
                        goals and reaching higher horizons. 
                        I realised many did not know what they are capable of, in the first place. 
                        They could not recognise that they too can 
                        achieve bigger things with their inner potential and grit.  
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        Life coaching certification course opened up venues to address these 
                        real-life scenarios in a highly structured, 
                        flexible and a compatible way!
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        The quote “Health is Wealth” hit me hard 
                        when I encountered a serious health condition five years ago. 
                        Overall wellbeing became my mantra since then. A state of awareness followed. 
                        Awareness on what goes into my body, mind and heart. Awareness on what came out of my body, 
                        mind and heart. Awareness on what stayed back in either of the three dimensions of my being. 
                        Anything that stayed, brought an imbalance causing pain, 
                        discomfort, restlessness, heartache and many ailments that could be avoided in the first place.  
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        I took to cleansing my entire system (Gross and subtle)– 
                        through Chakra meditation, through Self-introspection, 
                        through Contemplation, Breathing techniques, Self healing processes, 
                        by keeping a Journal and questioning myself on why and how. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        It worked wonders and now I want to share these findings of mine – 
                        tried and tested methods, to any person I meet next.   
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        A Wellbeing Coach I am, ready to offer my services to you!    
                    </Typography>
                </Grid>

                <Grid item xs={12} md={12} >
                    <img 
                        className="blog1Image4"
                        src={downcircle}
                    />
                </Grid>
               
            </Grid>
            <Footer />
        </Container>
     );
}
 
export default Blogs;