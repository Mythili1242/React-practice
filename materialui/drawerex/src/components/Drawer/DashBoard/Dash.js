import React from 'react';
import { Box } from '@mui/material';
import {Typography} from '@mui/material';
import {useSelector} from 'react-redux';
import Grid from '@mui/material/Grid';
import CardsCode from './CardsCode';
import { CardsData } from '../../../data/CardsData';
const Dash = () => {
  const isOpen=useSelector((state)=>state.drawer.isOpen)
  return (
    // <Box component="main" sx={{ flexGrow: 1,pl: {xs:3,sm:33 },mt:3 }}>Dashboard <Typography paragraph>
    <Box component="main" sx={{ml:isOpen?33:5}}>Dashboard <Typography paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
    sapien faucibus et molestie ac.
  </Typography>
  <Grid container spacing={3} >
    {CardsData.map(item=>(
<CardsCode title={item.title} url={item.url}/>
    ))}   

  </Grid>
  
  
  </Box>

  )
}

export default Dash;