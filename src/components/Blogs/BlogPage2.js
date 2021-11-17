import React, { Component,useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";
import Footer from "../footer";


let blog2Img1 = 'https://dec4365vfd8ox.cloudfront.net/images/blogs/blog2Imgs/give-up.jpg';
let blog2Img2 = 'https://dec4365vfd8ox.cloudfront.net/images/blogs/blog2Imgs/awareness.jpg';
let blog2Img3 = 'https://dec4365vfd8ox.cloudfront.net/images/blogs/blog2Imgs/achieve.jpg';


let upcircle = 'https://dec4365vfd8ox.cloudfront.net/images/blogs/upcircle.png';
let downcircle = 'https://dec4365vfd8ox.cloudfront.net/images/blogs/downcircle.png';


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

const BlogPage2 = ({history}) => {

    useEffect(() => {
        const unlisten = history.listen(() => {
          window.scrollTo(0, 0);
        });
        return () => {
          unlisten();
        }
      }, []);

    const classes = useStyles();

    return ( 
        <>
        <Container maxWidth="lg" className={`${classes.mainViewContainer} mainViewContainerBlog`}>
            <Grid container>
                <Grid item xs={12} md={12}  className={classes.mainGridContainer}>
                    <Typography className='blogTitle' align='center'>
                        Key to Success!
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        Why are we afraid when we think of our Success?. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        Why are we afraid of moments of extreme Happiness?. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        Why do we always say that we jinxed it when we are close to either?.
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        For most of us, in the dim background of our minds, 
                        thoughts of self-doubt linger constantly. Thoughts of repetitive failures, 
                        thoughts of putting in hard work but no results, thoughts of insecurity, 
                        thoughts of procrastination, 
                        thoughts of being judged and ridiculed and so on. 
                    </Typography>

                </Grid>
                <Grid item xs={12} md={12}>
                    <img 
                        className="blog1Image1"
                        src={blog2Img1}
                    />
                </Grid>
                <Grid item xs={12} md={12} className="blogDiv">
                    
                </Grid>
                <Grid item xs={12} md={12} >

                    {/* <Typography className="blogcontent1" align='center' style={{fontStyle:"italic"}}>
                        “Who looks outside, dreams. Who looks inside, awakes.”
                                                                – Carl Jung
                    </Typography> */}

                    <Typography className="blogcontent1" align='Left'>
                     One and only thing that is stopping us to move further is FEAR.   
                    </Typography>


                    <Typography className="blogcontent1" align='Left'>
                        Fear of something bad may happen
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        Fear of failures 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        Fear of losing something or someone 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        Fear of facing the harsh world once the moment of 
                        bliss of achievement expires and so on....
                    </Typography>



                    <Typography className="blogcontent1" align='Left'>
                        And for some big achievers, fear of nothing more to do after achieving their goals successfully or 
                        fulfilling their biggest dreams, also becomes an obstacle.
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        Life as we know it, is like a mixed salad. It has all the 
                        tastes and textures that our tongue can sense – sweetness, 
                        bitterness, sour, spice, pungent, hot, cold, crispy, crunchy, sharpness, softness, acidic etc..
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        We must know in awareness that all of this is a part of our 
                        palatial satisfaction in order to identify and appreciate the dish as a whole.
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        Awareness is the key to your Success!
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
                        src={blog2Img2}
                    />
                </Grid>

                <Grid item xs={12} md={12} className="blogDiv">
                    
                </Grid>

                <Grid item xs={12} md={12} >
                    <Typography className="blogcontent1" align='Left'>
                        So, my friend, watch yourself when you 
                        plan to take that leap toward success with your goals. 
                        See the futility of your mind which brings that fear quotient to a 
                        level where you give up on that goal or that dream. When you do give up, 
                        one fine day, you look back and see that the goals and dreams seem so 
                        ancient that it feels like a past-life memory. You only have regrets of not trying. 
                        Become aware of all of that which is 
                        controlling your actions, decisions and that which questions your free will. 
                    </Typography>
                    {/* <Typography className="blogcontent1" align='Left' style={{fontWeight:"600",fontStyle: "italic"}}>
                        Gratitude set in. Humility followed. Faith in Self and the higher Self strengthened. 
                        Attachments ceased to exist, Love became constant. 
                    </Typography> */}

                    <Typography className="blogcontent1" align='Left'>
                        Walk with no fear, worst is you fall. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        Take inspiration from a soon to-be-toddler; 
                        how the baby falls over and over again inspite of getting back up on it's feet. 
                        The child never gives up. No one teaches him/her to walk. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        This is the mindset we need to adapt at important crossroads in our 
                        lives – an unwavering persistence of a child who is trying and trying 
                        without any feeling of disappointment, without blaming anybody, 
                        without giving up and worst of all, without having self-pity. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        Your goals and dreams may seem to be beyond reach, 
                        but believe in yourself as a whole – y our body, your mind, your spirit and each 
                        and every cell of your body. And of course, 
                        that entity for which we have different names; Nature, Universe, God, Brahman etc.. 
                    </Typography>

                   
                </Grid>

                <Grid item xs={12} md={12} >
                    <img 
                        className="blog1Image3 blog2Image3"
                        src={blog2Img3}
                    />
                </Grid>
                <Grid item xs={12} md={12} className="blogDiv">
                    
                </Grid>

                <Grid item xs={12} md={12} >
                    <Typography className="blogcontent1" align='Left'>
                        When you have achieved the impossible, every moment and every day 
                        is precious because you live it fully in awareness – an awareness of 
                        Happiness and Success which resonates echoes of inspiration to people around you!
                    </Typography>

                    <Typography className="blogcontent1" align='Left'>
                        We humans have the greatest ability and every right to live 
                        each and every moment in this blissful state of awareness. 
                    </Typography>
                    <Typography className="blogcontent1" align='Left'>
                        I would like to quote a Sanskrit Subhashita which ideally fits in this article: 
                    </Typography>
                    {/* <Typography className="blogcontent1" align='Left' style={{fontWeight:"600",fontStyle: "italic"}}>
                        Gratitude set in. Humility followed. Faith in Self and the higher Self strengthened. 
                        Attachments ceased to exist, Love became constant. 
                    </Typography> */}
                    <Typography className="blogcontent1" align='Left'>
                     <span style={{fontStyle: "italic"}}>"Mum Niyatim Niychami"</span> which means <span style={{fontStyle: "italic"}}>“I control my destiny”</span>
                    </Typography>
                    

                </Grid>

                <Grid item xs={12} md={12} >
                    <img 
                        className="blog1Image4"
                        src={downcircle}
                    />
                </Grid>
               
            </Grid>
        </Container>
        <Footer />
        </>
     );
}
 
export default BlogPage2;