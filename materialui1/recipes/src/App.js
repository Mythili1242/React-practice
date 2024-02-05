
// import { Container, Divider } from '@mui/material';
// import './App.css';
// import Header from './components/Header';
// import RecipeList from './components/RecipeList';
// import {useDispatch,useSelector} from "react-redux";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Instructions from './components/Instructions';
function App() {
  // const app_id="a56b2ae5";
  // const app_key="f7905207d19c7836db0716c7887dbb37"
  // async function fetching(){
  //   try {
  //     //var data=await fetch(`/search?q=chicken&app_id=${app_id}&app_key=${app_key}&from=0&to=20&calories=591-722&health=alcohol-free`);
  //     var data=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=a56b2ae5&app_key=f7905207d19c7836db0716c7887dbb37`);
  //     var data=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
  //     let d=await data.json();
       
  //     console.log(d)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // fetching();
  // const dispatch=useDispatch();
  // const {clicked,ingredient}=useSelector((state)=>state.entered);
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Home />} > </Route>
      <Route path='/instructions' element={<Instructions />} > </Route>
    </Routes>
   </Router>
   {/* <Container>
    <Header />
    <Divider />
    {console.log(clicked)}
   {clicked?<RecipeList />:"Please Use the search option to get recipes"}
   </Container>  */}
   </> 
  );
}

export default App;



