import React, { Component, useState } from 'react';

import { Grid, Typography, Button  } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";


//-----------------------Icons-----------------------
import what from '../../images/dropDown/what.png'
import why from '../../images/dropDown/why.png'
import who from '../../images/dropDown/who.png'
import theCoach from '../../images/dropDown/theCoach.png'


//-----------------------use-Style------------------------

const useStyles = makeStyles((theme) => ({
    profileIconButton: {
        marginTop: "4%",
        marginLeft: "4%",
        marginRight: "50%",
        padding:"0",
        width:"80%",
        height:'100%',
        background: "#F8F9F9",
        // border: "1px solid #005a86",
        borderRadius: 25,
        color: "black",
        // textTransform: "capitalize",
        fontWeight: 600,
        fontSize: 16,
        "&:hover": {
        //   border: "1px solid",
          background: "#FFD741",
          color: "black",
        },
      },

      profileIconButton1: {
        marginTop: "4%",
        marginLeft: "4%",
        marginRight: "50%",
        padding:"0",
        width:"80%",
        height:'100%',
        background: "#FFD741",
        // border: "1px solid #005a86",
        borderRadius: 25,
        color: "black",
        // textTransform: "capitalize",
        fontWeight: 600,
        fontSize: 16,
        "&:hover": {
        //   border: "1px solid ",
          background: "#FFD741",
          color: "black",
        },
      },
}));

const Program = ({history,setOpen,open}) => {

   { console.log(setOpen,open);}
  const classes = useStyles();

  const [programType, setProgramType] = useState('corporatePrograms');


    return ( 
        <>
            <hr style={{color:"white",height:"3px",paddingTop:"-20px"}}/>
            <Grid container className="aboutContainer  aboutTitleContainer" spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography>
                    	Our programs are tailored to our client's 
                        needs – be it Corporate, Individual or Group.  
                    </Typography>

                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={12}>
                            {programType==='corporatePrograms'?
                                <Button
                                    variant="contained"
                                    // className={classes.profileIconButton1}
                                    className={`${classes.profileIconButton1} programTypeButton1`}
                                    onClick={() => setProgramType('corporatePrograms')}
                                >
                                    <Grid container>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                Corporate Programs 
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                (For Teams and Employees)
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Button>
                            :
                                <Button
                                    variant="contained"
                                    className={`${classes.profileIconButton} programTypeButton`}
                                    onClick={() => setProgramType('corporatePrograms')}
                                    >
                                        <Grid container>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                Corporate Programs
                                             </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                (For Teams and Employees)
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Button>
                            }
                        </Grid>

                        <Grid item xs={12} md={12}>
                            {programType==='individualCoaching'?
                                <Button
                                    variant="contained"
                                    className={`${classes.profileIconButton1} programTypeButton1`}
                                    onClick={() => setProgramType('individualCoaching')}
                                >
                                    <Grid container>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                Individual Coaching  
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                (For You, Your Friends and Family)
                                            </Typography>
                                        </Grid>
                                    </Grid>  
                                </Button>
                            :
                                <Button
                                    variant="contained"
                                    className={`${classes.profileIconButton} programTypeButton`}
                                    onClick={() => setProgramType('individualCoaching')}
                                >
                                    <Grid container>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                Individual Coaching  
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                (For You, Your Friends and Family)
                                            </Typography>
                                        </Grid>
                                    </Grid>  
                                </Button>
                            }
                        </Grid>
                            

                        <Grid item xs={12} md={12}>
                            {programType==='groupCoaching'?
                                <Button 
                                    variant="contained"
                                    className={`${classes.profileIconButton1} programTypeButton1`}
                                    onClick={() => setProgramType('groupCoaching')}
                                    style={{marginBottom:"10px"}}
                                >
                                    <Grid container>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                Group Coaching 
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                (For Friends and Family)
                                            </Typography>
                                        </Grid>
                                    </Grid> 
                                </Button>
                            :
                                <Button 
                                    variant="contained"
                                    className={`${classes.profileIconButton} programTypeButton`}
                                    onClick={() => setProgramType('groupCoaching')}
                                    style={{marginBottom:"10px"}}
                                >
                                    <Grid container>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                Group Coaching
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography style={{textTransform:"capitalize"}}>
                                                (For Friends and Family)
                                            </Typography>
                                        </Grid>
                                    </Grid> 
                                </Button>
                            }
                        </Grid>
                       
                    </Grid>
                    {/* {programType === 'individualCoaching'
                        ?<Typography>
                           Explore programs for You, your family and your friends.
                        </Typography>
                        :null
                    }
                    {programType === 'groupCoaching'
                        ?<Typography>
                           Any group of friends or family can come together and 
                           enjoy the process of transformation in any area of interest 
                           (Example: Relationships, Spiritual growth, Parenting etc..).
                        </Typography>
                        :null
                    } */}
                    
                </Grid>
                <Grid item xs={12} md={8}>
                    {programType === 'corporatePrograms'
                    ?
                        <Grid container>

                            <Grid item xs={12} md={6}>
                                <Grid container>
                                    <Grid item xs={2} md={2}>
                                        <img src={what} />
                                    </Grid>
                                    <Grid item xs={10} md={10}>
                                    <Link to='/corporatePrograms#mangallam'
                                    style={{textDecoration: "none",color: "#000000",}}>
                                        <Typography className="aboutDropDown_heading"
                                            onClick={()=>
                                            setOpen(true)}
                                         variant='h6'>
                                            Mangallam
                                        </Typography>
                                    </Link>
                                        <Typography className="aboutDropDown_subContent">
                                            A package of Wellness coaching program which consists of 
                                            group coaching for all levels of employees in an Organisation 
                                            on how to stay positive and healthy – in body and in mind. 
                                            The outcome of this program include increased levels of mindfulness, 
                                            empathy, higher performance and team dynamics. 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            
                            <Grid item xs={2} md={1}>
                                <img src={why} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/corporatePrograms#happiness' style={{textDecoration: "none",color: "#000000",}}>
                                <Typography className="aboutDropDown_heading" variant='h6'
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    Happiness coaching  
                                </Typography>
                            </Link>
                                <Typography className="aboutDropDown_subContent">
                                    One has to find his/her true sources of 
                                    happiness in order to live a happy and successful life. 
                                    Aleenta's Happiness program is the right choice for 
                                    anybody who wishes to be happy in all areas of Life. 
                                    This program increases an individual's 
                                    potential to be focused, more present and more productive.  
                                </Typography>
                            </Grid>

                            <Grid item xs={2} md={1}>
                                <img src={who} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/corporatePrograms#meditation' style={{textDecoration: "none",color: "#000000",}}>
                                <Typography className="aboutDropDown_heading" variant='h6'
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    Meditation sessions 
                                </Typography>
                            </Link>
                                <Typography className="aboutDropDown_subContent">
                                    To improve Focus and Concentration –  
                                    Upto 50 people in a batch.  (12/24 hours – Annual calendar program) 
                                </Typography>
                            </Grid>
                            <Grid item xs={2} md={1}>
                                <img src={theCoach} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/corporatePrograms#personal' style={{textDecoration: "none",color: "#000000",}}>

                                <Typography className="aboutDropDown_heading" variant='h6'
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    Personal Coaching 
                                </Typography>
                            </Link>
                                <Typography className="aboutDropDown_subContent">
                                    Sponsor your employee for one-on-one coaching in any area of development. 
                                    Ex: Time Management, Optimism, Positive Attitude, 
                                    Diversity and Inclusion, Passion, Clarity and Direction.  
                                </Typography>
                            </Grid>
                        </Grid>  
                    :null}
{/* -------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------ */}
                    {programType === 'individualCoaching'
                    ?
                        <Grid container>
                            <Grid item xs={2} md={1}>
                                <img src={what} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/individualPrograms#nature' style={{textDecoration: "none",color: "#000000",}}>
                                <Typography className="aboutDropDown_heading" variant='h6'
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    Nature coaching 
                                </Typography>
                                </Link>
                                <Typography className="aboutDropDown_subContent">
                                    In this one-on-one coaching program, the client will discover 
                                    his/her true nature with an organic approach. 
                                    The Process incorporates peeling off the layers 
                                    of years of conditioning and limiting beliefs which act as obstacles in the 
                                    client's way of achieving his/her major goals.
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={2} md={1}>
                                <img src={theCoach} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/individualPrograms#timeManage' style={{textDecoration: "none",color: "#000000",}}>
                                <Typography className="aboutDropDown_heading"
                                onClick={()=>
                                    setOpen(true)}
                                     variant='h6'>
                                    Time Management  
                                </Typography>
                            </Link>
                                <Typography className="aboutDropDown_subContent">
                                    This program is ideal for students and people 
                                    who are juggling with work, home and social environments and are 
                                    finding it difficult to strike a balance between all of them.
                                </Typography>
                            </Grid>

                            <Grid item xs={2} md={1}>
                                <img src={who} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/individualPrograms#adolescent' style={{textDecoration: "none",color: "#000000",}}>
                                <Typography className="aboutDropDown_heading"
                                onClick={()=>
                                    setOpen(true)}
                                     variant='h6'>
                                	Adolescent coaching (ages 12 to 20)
                                </Typography>
                                <Typography className="aboutDropDown_subContent">
                                    Do you feel the environment you are living in 
                                    is not supportive of your ideas, thoughts and feelings? 
                                    Are your inhibitions stopping you from having high 
                                    Self-esteem and high Self-confidence in personal/ academic/ social environments? Aleenta's 
                                    Adolescent coaching is the right program for you/your child! 
                                </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={2} md={1}>
                                <img src={theCoach} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/individualPrograms#social' style={{textDecoration: "none",color: "#000000",}}>
                                <Typography className="aboutDropDown_heading" 
                                onClick={()=>
                                    setOpen(true)}
                                     variant='h6'>
                                    Social Inhibitions 
                                </Typography>
                            </Link>
                                <Typography className="aboutDropDown_subContent">
                                    This program is ideal for individuals who are active on 
                                    social media but not the same when they encounter 
                                    real-life social situations. This program is 
                                    uniquely designed for each individual that 
                                    begins with an opening up process and ends with Self-discovery, 
                                    high Self-confidence and high Self-esteem.
                                </Typography>
                            </Grid>

                            <Grid item xs={2} md={1}>
                                <img src={who} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/individualPrograms#selfExpression' style={{textDecoration: "none",color: "#000000",}}>
                                <Typography className="aboutDropDown_heading"
                                onClick={()=>
                                    setOpen(true)}
                                     variant='h6'>
                                    Self expression  
                                </Typography>
                                </Link>
                                <Typography className="aboutDropDown_subContent">
                                    This program is ideal for adolescents and youth who are 
                                    continuously engaged in their studies and 
                                    activities that inhibits them from expressing 
                                    themselves in a natural and healthy way.  
                                </Typography>
                            </Grid>

                            <Grid item xs={2} md={1}>
                                <img src={why} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/individualPrograms#creative' style={{textDecoration: "none",color: "#000000",}}>
                                <Typography className="aboutDropDown_heading" 
                                onClick={()=>
                                    setOpen(true)}
                                     variant='h6'>
                                    Creative coaching 
                                </Typography>
                            </Link>
                                <Typography className="aboutDropDown_subContent">
                                    Tapping into the client's creative potential is a 
                                    fun and creative process that Aleenta offers. 
                                    Apart from discovering one's inner creative 
                                    potential that can be rightly applied in various 
                                    scenarios – be it at work, family or social scenarios, 
                                    we explore together various techniques to excel in identifying, 
                                    assimilating and achieving the client's goals of life.  
                                </Typography>
                            </Grid>

                        </Grid>  
                    :null}


{/* ------------------------------------------------------------------------------------------------------------------
====================================================================================================================
====================================================================================================================== */}


                    {programType === 'groupCoaching'
                    ?
                        <Grid container spacing={1}>
                            <Grid item xs={2} md={1}>
                                <img src={what} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            
                        <Link to='/GroupPrograms#happiness' style={{textDecoration: "none",color: "#000000",}}>

                                <Typography className="aboutDropDown_heading" 
                                onClick={()=>
                                    setOpen(true)}
                                     variant='h6'>
                                    Happiness coaching 
                                </Typography>
                            </Link>
                                <Typography className="aboutDropDown_subContent">
                                    Discover the happiness that is within you! One has to find 
                                    his/her true sources of happiness in order to live a happy and successful life. 
                                    Aleenta's Happiness program is the right choice for anybody who wishes to be 
                                    happy at all times and make others happy.    
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={2} md={1}>
                                <img src={theCoach} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/GroupPrograms#spritual' style={{textDecoration: "none",color: "#000000",}}>
                                <Typography className="aboutDropDown_heading" 
                                onClick={()=>
                                    setOpen(true)}
                                     variant='h6'>
                                    Spiritual coaching   
                                </Typography>
                            </Link>
                                <Typography className="aboutDropDown_subContent">
                                    Every human has a Spiritual quotient – which some have discovered, 
                                    some in the path of discovering and few, are yet to discover. 
                                    Aleenta provides an excellent space for individuals who 
                                    are in this path to seek their purpose, to experience and 
                                    celebrate their achievements and 
                                    finally attain a state of complete Well-being.
                                </Typography>
                            </Grid>

                            <Grid item xs={2} md={1}>
                                <img src={who} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/GroupPrograms#relation' style={{textDecoration: "none",color: "#000000",}}>
                                <Typography className="aboutDropDown_heading" 
                                onClick={()=>
                                    setOpen(true)}
                                     variant='h6'>
                                    Relationship coaching  
                                </Typography>
                            </Link>
                                <Typography className="aboutDropDown_subContent">
                                    Life is all about relationships, where one can not not relate to anybody! 
                                    Relationship coaching creates ideas and insights on how to maintain existing 
                                    relationships and create new healthy relationships. 
                                    In this process of learning and discovering, 
                                    the client as an individual will transform himself/herself for a 
                                    better Self to maintain healthy relationships.  
                                </Typography>
                            </Grid>
                            <Grid item xs={2} md={1}>
                                <img src={theCoach} />
                            </Grid>
                            <Grid item xs={10} md={5}>
                            <Link to='/GroupPrograms#wellness' style={{textDecoration: "none",color: "#000000",}}>
                                <Typography className="aboutDropDown_heading"
                                onClick={()=>
                                    setOpen(true)}
                                     variant='h6'>
                                    Wellness coaching 
                                </Typography>
                            </Link>
                                <Typography className="aboutDropDown_subContent">
                                    In this program, we offer group coaching (Organisations/Institutions/Schools) 
                                    for all individuals coming from different cultures, 
                                    demographics and status. Topics include:
                                </Typography>

                                <Typography className="aboutDropDown_subContent">
                                	how to stay positive and healthy in mind and body. 
                                </Typography>
                                <Typography className="aboutDropDown_subContent">
                                	how to handle and overcome difficult situations.
                                </Typography>
                                <Typography className="aboutDropDown_subContent">
                                	how to transform obstacles into opportunities
                                    to grow in personal and professional areas.    
                                </Typography>
                                <Typography className="aboutDropDown_subContent">
                                    how to perform well and excel in your roles at home, 
                                    work and social environment.     
                                </Typography>
                            </Grid>
                        </Grid>
                    :null}
                </Grid>
                
            </Grid>
        </>
     );
}
 
export default withRouter(Program);