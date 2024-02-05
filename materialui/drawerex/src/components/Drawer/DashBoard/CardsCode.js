import React from 'react'
import  { Grid,CardActionArea, CardContent,Card, Typography, Divider, CardMedia } from "@mui/material";

const CardsCode = ({title,url}) => {
  return (
    <Grid item xs={12} md={4} lg={3}  >
{/* <CardActionArea>
    <Card sx={{  width: "320px",
  height: "320px"}}>
        <CardContent>
<img src={url}  style={{height:"auto",maxHeight:"250px",width:"auto",maxWidth:"250px"}}/>
<Divider />
<Typography>{title}</Typography>
        </CardContent>
    </Card>
</CardActionArea> */}

<CardActionArea>
    <Card sx={{height:210}}>
        <CardContent >
<CardMedia component="img" image={url}     alt="green iguana"
     height={140}   ></CardMedia>
{/* <Divider /> */}
<Typography   variant="body1" component="div" >{title}</Typography>
        </CardContent>
    </Card>
</CardActionArea>
    </Grid>
  )
}

export default CardsCode