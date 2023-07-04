import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from '../components/ImageData.json'
import ControlledAccordions from '../components/acc'
import SimpleBottomNavigation from '../components/Bottom'


function Description() {
  return (
    <>
<Container sx={{marginBottom:"30px"}}>
  <Box>
    <Typography variant='h4' sx={{marginTop:12,marginBottom:4}}>
      Immerse into the Falls
    </Typography>
  </Box>
  <Box sx={{display:"flex",height:"500px"}}>
    <Box sx={{flex:"70%"}}>
      <img width="100%" height="100%" src='https://img.freepik.com/free-photo/fog-dark-clouds-mountains_1204-503.jpg?size=626&ext=jpg&ga=GA1.2.2062000237.1682413494&semt=sph' alt='noimage'/>
    </Box>
    <Box sx={{ width: "100%", height: "100%", overflowY: 'scroll',flex:"30%",marginLeft:"10px",marginTop:"-16px" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  </Box>
  <Box sx={{marginTop:"10px"}}>
    <Typography variant='h6'>
      About this picture
    </Typography>
    <Typography>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores vero quas explicabo officiis, pariatur reiciendis vel, alias nihil quo dolores fuga autem id. Dolor aperiam dolorem libero sint eligendi expedita?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum blanditiis necessitatibus facilis voluptates corporis libero fugiat, non ut aliquid reprehenderit iure dicta expedita vel. Sequi delectus nulla consectetur enim.
    </Typography>
  </Box>
  <Box sx={{marginTop:"10px"}}>
    <Typography variant='h6'>
      Frequently asked questions
    </Typography>
    <ControlledAccordions />
  </Box>
</Container>
<SimpleBottomNavigation />
    </>
  )
}

export default Description;