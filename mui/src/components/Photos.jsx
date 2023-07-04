import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import ImageData from './ImageData.json'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import { createTheme,ThemeProvider } from '@mui/material';
import Link from '@mui/material/Link';

function Photos() {
    const theme=createTheme({
        components:{
            MuiTypography:{       //component to which you wANT TO APPLY THEME.HERE IT IS TYPOGRAPHY COMPONENTS
                variants:[{
                    props:{
                        variant:'body2'   //variant you want to change
                    },
                    style:{               //give styles for that particular variant
                        fontSize:11,
                        color:"red"
                    },
                },
                {
                    props:{
                        variant:'body3'
                    },
                    style:{
                        fontSize:14
                    },
                }  
            ]
            }
        }
    })
    
    //sx is styling extension which is similar to style prop.the basic diiference is that it can use predefined styles,colors etc.ex:primary,text
    //style prop also can use theme based values but useTheme hook is used to access the current theme object and theme based values are retrieved from theme object
  //ex: const theme = useTheme();
//   const styles = {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.text.primary,
//   };

    return (
    <>
    <Container sx={{marginY:12}} >  
 
           <Grid container spacing={2}>
           <ThemeProvider theme={theme}>
           {
        ImageData.map(item=>
            <Grid item xs={12} sm={6} md={4}  >
            <Paper  elevation={3} >
                <Link href="/desc" underline="hover">
<img src={item.img} alt={item.title} style={{"width":"100%","height":"200px"}} /></Link>
<Box sx={{marginLeft:"10px"}}>
<Typography variant='h6' component='h1'>{item.title}</Typography>
</Box>
<Box sx={{marginLeft:"10px",display:"flex",alignItems:"center"}}>
    <AccessTimeIcon sx={{width:"15px"}}/>
    <Typography variant='p' >5 hours</Typography>
</Box>
<Box sx={{display:"flex",marginTop:"10px"}}>
<Rating name="read-only" sx={{marginLeft:"8px"}} value={2.5} readOnly precision={0.5}/>
<Typography variant='body3' component='p' sx={{marginLeft:"6px"}}>2.5</Typography>
<Typography variant='body3' component='p' sx={{marginLeft:"6px"}}>(655 reviews)</Typography>
</Box>
<Box>
    <Typography variant='body2' sx={{marginLeft:"12px",marginTop:"10px",paddingBottom:"5px"}}>From C 456</Typography>
</Box>
    </Paper>    
            </Grid>
     )
    }
    </ThemeProvider>
    </Grid> 
    
</Container>
    </>
  )
}

export default Photos