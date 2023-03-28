import React from 'react';
import MuiCarousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import { Container, Grid, Typography } from '@material-ui/core';


const Item = ({ item }) => {
    return (
        <Paper
            elevation={0}
            square
        >
            <Grid container className="carouselPaper">
                <Grid item xs={12} md={8}>
                    <img 
                        className="carouselImage"
                        src={item.image}
                        alt={item.name}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography className="imageSideText2">
                        {item.title}
                    </Typography> 
                </Grid>
            </Grid>
        </Paper>
    )
}

const Carousel = ({
    items
}) => {
    return (
        <MuiCarousel
            cycleNavigation="false"
            className="muiCarouselContainer"
            interval='5000'
            animation='slide'
        >
            {
                items?.map((item, i) => <Item key={i} item={item} />)
            }
        </MuiCarousel>
    );
};

export default Carousel;