import React, { Component, useState } from 'react';

import { Grid, Typography, Button  } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";


let icon18 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon18.png'
let icon19 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon19.png'
let icon17 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon17.png'


//-----------------------CorpPrograms Icons-----------------------
let icon2 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon2.png'
let icon3 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon3.png'
let icon14 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon14.png'
let icon1 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon1.png'

//-----------------------IndiPrograms Icons-----------------------
let icon4 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon4.png'
let icon7 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon7.png'
let icon5 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon5.png'
let icon8 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon8.png'
let icon6 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon6.png'
let icon9 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon9.png'

//-----------------------GroupPrograms Icons-----------------------
// import icon2 from 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon2.png'
// import icon3 from 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon3.png'
let icon10 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon10.png'
let icon11 = 'https://dec4365vfd8ox.cloudfront.net/images/dropDown/icon11.png'

//-----------------------use-Style------------------------

const useStyles = makeStyles((theme) => ({
    profileIconButton: {
        marginTop: "4%",
        marginLeft: "4%",
        marginRight: "50%",
        padding:"0",
        width:"80%",
        height:'80px',
        background: "#F8F9F9",
        // border: "1px solid #005a86",
        borderRadius: 25,
        color: "black",
        // textTransform: "capitalize",
        fontWeight: 600,
        fontSize: 16,
        "@media only screen and (max-width: 600px)": {
            marginLeft:"10%",
        },
        "&:hover": {
        //   border: "1px solid",
          background: "#FFE481",
          color: "black",
        },
      },

      profileIconButton1: {
        marginTop: "4%",
        marginLeft: "4%",
        marginRight: "50%",
        padding:"0",
        width:"80%",
        height:'80px',
        background: "#FFE481",
        // border: "1px solid #005a86",
        borderRadius: 25,
        color: "black",
        // textTransform: "capitalize",
        fontWeight: 600,
        fontSize: 16,
        "@media only screen and (max-width: 600px)": {
            marginLeft:"10%",
        },
        "&:hover": {
        //   border: "1px solid ",
          background: "#FFE481",
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
            <Grid item className="hrTag" style={{marginTop:" 1px",marginBottom:" 1%"}}>

            </Grid>
            <Grid container className="aboutContainer  aboutTitleContainer1" spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography className='abotTitle'>
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
                                    <Grid align="center" item xs={2} md={2}>
                                        <img className="dropDownIcons" src={icon18} />
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
                                            A package of Wellness coaching program which consists of group 
                                            coaching for all levels of employees in an Organisation. 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            
                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon3} />
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
                                    One has to find his/her true sources of happiness in 
                                    order to live a happy and successful life. Aleenta's 
                                    Happiness program is the right choice for 
                                    anybody who wishes to be happy in all areas of Life.   
                                </Typography>
                            </Grid>

                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon19} />
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
                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon1} />
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
                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon4} />
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
                                    In this one-on-one coaching program, the client will 
                                    discover his/her true nature using an organic approach. 
                                </Typography>
                            </Grid>
                            
                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon7} />
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
                                    This program is ideal for students and people who are 
                                    juggling with work, home and social environments and are finding it 
                                    difficult to strike a balance between all of them.
                                </Typography>
                            </Grid>

                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon5} />
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
                                    Do you feel the environment you are living in is not supportive 
                                    of your ideas, thoughts and feelings? Are your inhibitions 
                                    stopping you from having high Self-esteem and high Self-confidence 
                                    in personal/ academic/ social environments? Aleenta's 
                                    Adolescent coaching is the right program for you! 
                                </Typography>
                                </Link>
                            </Grid>
                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon17} />
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
                                    This program is ideal for individuals who are active on social media but not the 
                                    same when they encounter real-life social situations. 
                                </Typography>
                            </Grid>

                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon6} />
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
                                    continuously engaged in their studies and activities that inhibits them 
                                    from expressing themselves in a natural and healthy way. 
                                </Typography>
                            </Grid>

                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon18} />
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
                                    Tapping into the client's creative potential is a fun 
                                    and creative process that Aleenta offers.   
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
                            <Grid align="center" item xs={2} md={1}>
                                <img  className="dropDownIcons" src={icon3} />
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
                                    Discover the happiness that is within you!     
                                </Typography>
                            </Grid>
                            
                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon11} />
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
                                </Typography>
                            </Grid>

                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon10} />
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
                                    Life is all about relationships, where one cannot not relate to anybody! 
                                    Funny as it may sound, it is the truth! 
                                </Typography>
                            </Grid>
                            <Grid align="center" item xs={2} md={1}>
                                <img className="dropDownIcons" src={icon18} />
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
                                    demographics and status and for nuclear families     
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