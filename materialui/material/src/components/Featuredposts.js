import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles=makeStyles({     //if you dont need theme you can avoid it
title:{
    '&.MuiTypography-root': {    //iam increasing specificity using this as default styles are overriding my own styles
    fontSize: '40px',
    },
    fontFamily: "montserrat",   
},
cover:{
    backgroundImage:'url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) !important',
    backgroundPosition:'center',
    padding:'35px 25px'
}
})

function Featuredposts() {
    const classes=useStyles();
  return (
    <Card className={classes.cover}>
        <CardContent className={classes.textContainer}>
            <Typography className={classes.title} gutterBottom>Title of a longer featured blog post</Typography> 
             {/* gutterbottom adds space below */}
            <Typography variant='h5'>Multiple lines of text that forms a lede,informing new readers quickly and effeciently about what's the most important thing in this post's contents </Typography>
        </CardContent>
        <CardActions><Button variant='text' className={classes.btn}>Read more...</Button></CardActions>
    </Card>
  )
}

export default Featuredposts