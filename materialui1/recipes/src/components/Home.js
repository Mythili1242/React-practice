import React from 'react'
import { Container, Divider } from '@mui/material';

import Header from "./Header"
import RecipeList from '../components/RecipeList';
import {useDispatch,useSelector} from "react-redux";
const Home = () => {
  const dispatch=useDispatch();
  const {clicked,ingredient}=useSelector((state)=>state.entered);
  return (
    <Container>
    <Header isSearch={true} />
    <Divider />
    {console.log(clicked)}
   {clicked?<RecipeList />:"Please Use the search option to get recipes"}
   </Container> 
  )
}

export default Home