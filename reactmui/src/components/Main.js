import React from 'react';
import { Container, ImageList, ImageListItem, Typography } from '@mui/material'
import ImageData from './ImageData.json'

function Main() {
  return (
    <>
    <Container style={{"marginTop":"70px","textAlign":"center"}}>
        <Typography variant='h3'>Our Latest Version of Photography</Typography>
        <Typography paragraph>Pleasure to take your photos as well,Please fill the below form for any invite requests</Typography>
    </Container>
    <Container>
        <ImageList rowHeight={370} cols={3}>
            {ImageData.map(items => 
                <ImageListItem key={items.id} cols={1}>
                    <img src={items.img} alt={items.title} />
                </ImageListItem>
            )}
            
        </ImageList>
    </Container>
    </>
  )
}

export default Main