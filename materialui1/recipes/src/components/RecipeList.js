import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
const RecipeList = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [result,setResult]=useState();
    const {clicked,ingredient}=useSelector((state)=>state.entered);
    useEffect(()=>{
        async function fetching(){
            try {
                console.log(ingredient,clicked)
              var response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`)
              let a=await response.json();
            setResult(a.meals);
              console.log(a);
              console.log(Array.isArray(a.meals))
            } 
            catch (error) {
              console.log(error)
            }
          }
          fetching();
    },[ingredient])

// function instructionsFun(matter,name,pic){
  function instructionsFun(recip){
    // console.log(matter)
    navigate("/instructions", {
        state: {
          // content: matter,
          // name:name,
          // picture:pic
          recip:recip
        },})
}
   
  return (
    <Grid container mt={3} >
        <Grid container  gap={5}>
            {console.log(ingredient)}
            {result && result.map((recipe)=>(
  <Grid item>
    {/* onClick={()=>instructionsFun(recipe.strInstructions,recipe.strMeal,recipe.strMealThumb)} */}
    <Card sx={{maxWidth:345}} style={{cursor:"pointer"}} onClick={()=>instructionsFun(recipe)}>
        <CardMedia  >
            <img src={recipe.strMealThumb} height={240} alt='nothing'  /> 
            {/* width={240} */}
        </CardMedia>
        <CardContent>
            <Typography style={{ wordWrap: "break-word" }}>{recipe.strMeal}</Typography>
            </CardContent>
    </Card>   
  </Grid>
            ))}
          
        </Grid>

    </Grid>
  )
}

export default RecipeList;