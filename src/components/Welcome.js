import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from "@material-ui/core/styles";


//------------Carousel reusable component-------------------------
import Carousel from '../reusableComponents/Carousel';


import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';

import image1 from '../images/welcome/image1.jpg'
import image2 from '../images/welcome/image2.jpg'
import image3 from '../images/welcome/image3.jpg'
import image4 from '../images/welcome/image4.jpg'

// import Aman from '../../images/About_Us/Aman.jpg'
// import Mahesh from '../../images/About_Us/Mahesh.jpg'
// import rajesh from '../../images/About_Us/rajesh.jpg'

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



const Welcome = ({
    // auth,
    history
}) => {
    // const { isAuthenticated, user } = auth;

    // useEffect(() => {
    //     if(isAuthenticated) {
    //         if(user?.role?.r_id === 1) {
    //             history.push('/admin/dashboard');
    //         } else if(user?.role?.r_id === 2) {
    //             history.push('/dashboard');
    //         }
    //     }
    // }, [auth])

    const classes = useStyles();

    const items = [
        {
            name: 'Image_1',
            image:image1,
            title:"see what you don't see",
        },
        {
            name: 'Image_2',
            image:image2,
            title:"FIND THE KEY TO YOUR WELLBEING",
        },
        {
            name: 'Image_3',
            image:image3,
            title:"TAP INTO YOUR CREATIVE POTENTIAL",
        },
        {
            name: 'Image_4',
            image:image4,
            title:"UP YOUR HAPPINESS QUOTIENT",
        }
    ]

    return (
        // <Container maxWidth="lg" className="mainViewContainer">
        <Container maxWidth="lg" className={`${classes.mainViewContainer} mainViewContainer`}>
            <hr/>
            <Grid container >
                <Grid item xs={12} md={12} >
                    <Carousel items={items} />
                  </Grid>
            </Grid>
                 
            <Grid container>
                <Grid item xs={12} md={12} >
                    <Typography className="overView" varient="h3" align='center'>
                        Overview
                    </Typography> 
                    <Typography className="overViewConetnt" varient="h3" align='center'>
                        Aleenta is an ancient Sanskrit word which means 
                        “A rewarding life”. At Aleenta, we design programs 
                        with a holistic approach for an all-round well-being of our Clients. 
                        We believe that every person is unique in his/her own way – in thought, 
                        emotion and in action. The outcome of our programs are
                        Self-discovery and Self-awareness in the realms of health, happiness and success. 
                    </Typography> 
                </Grid>
            </Grid>

        </Container>

    );
};


export default Welcome;