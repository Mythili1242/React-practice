import React from 'react'
import Header from './Header'
import { Container, Divider, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
 import {makeStyles} from "@material-ui/styles"


 const useStyles=makeStyles({
  typo:{
   "&::first-letter":{
    testTransform:"capitalize",
    fontSize:"30px",
    color:"red"
   }
  },
  title:{
    textTransform:"uppercase",
     " &.css-ahj2mt-MuiTypography-root" :{
      marginTop:"30px"
    },
    "&::first-letter":{
      testTransform:"capitalize",
      fontSize:"30px",
      color:"red"
  },
},
  ingredients:{
   
 
  },
  side:{
    overflow: "hidden",
      float: "left",
      width: "20%", // each item takes half of the container width
      boxSizing: "border-box", // include padding and border in the width
     


 },
 side1:{
  overflow: "hidden",
  listStyleType:"none",
  "& li": {
    position: "relative",
    paddingLeft: "20px", // Adjust as needed
    "&::before": {
      content: "'-'",
      position: "absolute",
      left: "0",
    },
}
 },
 instructions:{
  whiteSpace:"pre-line"
 }
});
const Instructions = () => {
  const classes=useStyles();
    // const params=useParams();
    // const {matter}=params;
    const location = useLocation();

  // const content = location.state.content;
  // const name=location.state.name;
  // const picture=location.state.picture;
  const recip=location.state.recip;
  const recipArray = Object.entries(recip)
let a;

 

 
  return (
    <Container >
        <Header isSearch={false} />
        <Divider />
        <Typography variant='h4' fontFamily={"Montserrat"} gutterBottom mt={5} ><center>{recip.strMeal}</center></Typography>
      <center> <img src={recip.strMealThumb} height={440} alt='nothing'  /> </center> 
    <Typography className={classes.title} >ingredients</Typography>
      <ul className={classes.side}>
      {console.log(recipArray)}
       {recipArray && recipArray.map((recipe, index) => (
  //  <li key={index}>{recipe[0].includes("strIngredient")&&recipe[1]}</li>
  <>

{(recipe[0].includes("strIngredient")&& (recipe[1]!=""))&& <span><li>{recipe[1]}</li></span>}
{/* {(recipe[0].includes("strMeasure")&& (recipe[1]!=""))&& <span className={classes.side}><li>{recipe[1]}</li></span>} */}

{/* {(recipe[0].includes("strIngredient") || recipe[0].includes("strMeasure")) &&
            recipe[1] !== "" && (
              <li key={index} >
                {recipe[1]}
              </li>
            )} */}
</>
  ))}
      </ul>

      <ul className={classes.side1}>
      {console.log(recipArray)}
       {recipArray && recipArray.map((recipe, index) => (
  //  <li key={index}>{recipe[0].includes("strIngredient")&&recipe[1]}</li>
  <>


{(recipe[0].includes("strMeasure")&& (recipe[1]!=""))&& <span ><li>{recipe[1]}</li></span>}

{/* {(recipe[0].includes("strIngredient") || recipe[0].includes("strMeasure")) &&
            recipe[1] !== "" && (
              <li key={index} >
                {recipe[1]}
              </li>
            )} */}
</>
  ))}
      </ul>
      <Typography className={classes.title} >Instructions</Typography>
        <Typography lineHeight={2} className={classes.instructions} mb={5}>{recip.strInstructions}</Typography>
    </Container>
    
  )
}

export default Instructions