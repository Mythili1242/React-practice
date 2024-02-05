import React, { useState } from 'react';
import { Toolbar } from '@mui/material';
import { Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import RecipeList from './RecipeList';
import { useDispatch,useSelector } from 'react-redux';
import { entered } from './RecipeSlice';
import IconButton from '@mui/material/IconButton';
import Home from './Home';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {InputAdornment} from "@mui/material";
import {TextField} from '@mui/material';
const useStyles=makeStyles({
  cursor_prop:{
    cursor:"pointer"
  }
});

const Header = ({isSearch}) => {
  const classes=useStyles();
const navigate=useNavigate();
    const dispatch=useDispatch();
    const [name,setName]=useState();
    const {clicked,ingredient}=useSelector((state)=>state.entered);

    // let isSearch=true;
    // const Search = styled('div')(({ theme }) => ({
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: alpha(theme.palette.common.black, 0.15),
    //     '&:hover': {
    //       backgroundColor: alpha(theme.palette.common.black, 0.25),
    //     },
    //     marginLeft: 0,
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //       marginLeft: theme.spacing(1),
    //       width: 'auto',
    //     },
    //   }));
      
      // const SearchIconWrapper = styled('div')(({ theme }) => ({
      //   // padding: theme.spacing(0, 2),
      //   // height: '100%',
      //     position: 'absolute',
        
      //    pointerEvents: 'all',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'left',
      // }));
      
      // const StyledInputBase = styled(InputBase)(({ theme }) => ({
      //   color: 'inherit',
      //   width: '100%',
      //   '& .MuiInputBase-input': {
      //     padding: theme.spacing(1, 1, 1, 0),
      //     // vertical padding + font size from searchIcon
      //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      //     transition: theme.transitions.create('width'),
      //     [theme.breakpoints.up('sm')]: {
      //       width: '12ch',
      //       '&:focus': {
      //         width: '20ch',
      //       },
      //     },
      //   },
      // }));

      function HandleClick(){
        console.log("first",name);
        if (!name) {
          alert("Search box can not be empty")
        } else {
          dispatch(entered({clicked:true,ingredient:name}));
        }
      
      }

      function HandleChange(event){
        // console.log(event.target.value); 
  //       event.preventDefault(); // Prevent the default behavior of the click event
  // event.stopPropagation();
        setName(event.target.value)}
      
  return (
    <>
    <Toolbar >
        <img src={require('./logo.png')} alt='no' width={30} onClick={()=>{navigate("/")}} className={classes.cursor_prop}></img>
        <Typography variant='h5' ml={2} flexGrow={1} fontFamily={"Montserrat"} onClick={()=>{navigate("/")}} className={classes.cursor_prop}>Recipe Finder</Typography>
    {/* {isSearch &&    <Search>
            <SearchIconWrapper >
                <IconButton onClick={HandleClick}>
              <SearchIcon  />
              </IconButton>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
             
              
              onChange={HandleChange}
              value={name}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
} */}


<TextField
 variant="standard"
 placeholder='Search'
 onChange={HandleChange}
 value={name}
  InputProps={{
    startAdornment: (
      <InputAdornment>
        <IconButton onClick={HandleClick}>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
    </Toolbar>
    </>
  )
}

export default Header;