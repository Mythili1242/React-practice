import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles=makeStyles({
    card:{
        display:'flex'
    },
    cardDetails:{
        flex:1  
        // flex:1 to take total available space
    },
    cardMedia:{
        width:160
    }
})

const PostCard = ({post}) => {
    const classes=useStyles();
  return (
    <Grid item xs={12} md={6}>
        <CardActionArea component="a" href='#'>
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent>
                        <Typography component='h2' variant='h5'>{post.title}</Typography>
                        {/* the component is an <h2> element, but the visual style is determined by the "h5" variant. */}
                        <Typography variant='subtitle1' color='textSecondary'>{post.date}</Typography>
                        <Typography variant="subtitle1" paragraph>{post.description}</Typography>
                        <Typography variant="subtitle1" style={{color:"skyblue"}}>Continue Reading...</Typography>
                    </CardContent>
                </div>
                {/* hidden xsdown hides this image below xs size */}
                <Hidden xsDown>
                    <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
                </Hidden>
            </Card>
        </CardActionArea>
        {/* card action area is for creating ripple effect */}
    </Grid>
  )
}

export default PostCard