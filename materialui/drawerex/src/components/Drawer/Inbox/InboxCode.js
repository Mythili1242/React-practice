import React from 'react'
import { useLocation } from 'react-router-dom';
import { Box, ButtonBase, Grid, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import {useSelector} from "react-redux";

const InboxCode = () => {
  let location=useLocation();

 let open=location.state.open;
 const isOpen = useSelector((state) => state.drawer.isOpen);
  return (
<>
{console.log(open)}
<Grid container sx={{ml:isOpen?33:5}}>
    <Box component="main"
 >Indexcode <Typography paragraph>
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
  </Box>

  <Paper sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        
      }}  >
         <Grid container  >
  <Grid item>
<ButtonBase sx={{ width: 128, height: 128 }}>
  <img src='https://source.unsplash.com/random' style={{  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',}} ></img>
  </ButtonBase>
</Grid>
<Grid item xs={12} sm container> 
  <Grid item xs container direction="column" spacing={2}>
  <Grid item xs>
  <Typography variant='h5'>Standard licence</Typography>
  <Typography variant='h6'>Full resolution 1920x1080 • JPEG</Typography>
  <Typography variant='h6'>ID: 1030114</Typography>
</Grid>
</Grid></Grid>
</Grid>
  </Paper>
  
  
  </Grid> 
 
  
 </>
  )
}

export default InboxCode;