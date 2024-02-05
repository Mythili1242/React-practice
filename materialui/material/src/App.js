// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Container from '@mui/material/Container'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SideBar from './components/SideBar';
import Featuredposts from './components/Featuredposts';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { featuredPosts, sidebar } from './Data/data';
import PostCard from './components/PostCard';
import {makeStyles} from '@mui/styles';
import Footer from './components/Footer';

const useStyles=makeStyles((theme)=>({
  mainGrid:{
   // marginTop: '24px !important'  //theme.spacing(3) is not working
   '&.css-hyum1k-MuiToolbar-root':{
    marginTop: '24px '
   }
  }
}))


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  const classes=useStyles();
  return (
  //   <div className="App">

  //  {/* press ctrl+spacebar for getting suggestions in attribute values.ex:In between color='here press'  */}
  //  {/* also by pressing ctrl+space in between tag gives suggestions for different attributes or props */}
  //  <Button color='inherit'style={{backgroundColor:"pink"}} variant='contained' size='large' startIcon={<SendIcon />} endIcon={<DeleteForeverIcon />} disableRipple disableElevation>Click</Button>  
  //  {/* inherit-it inherits the color which is most suitable for web pages..background property in style overrides color proprty..disables ripple effect and elevation property */}
  //   </div>

/* <Container maxWidth="xl" >Hello world</Container>  */
// container places content in the center.adds space on either ends acc to the screen sixe.has maxwidth propertty.if maxwidth is md..it can take width upto md breakpoint if screen sixe is less it adjusts its width accoring to screeen size..if more than takes md width
<>
<ThemeProvider theme={darkTheme}>
<Container>
  <Header />
  <Featuredposts />
  <br />
  <Grid container spacing={4}>  
  {/* container- component will have flex container behaviour */}
    {featuredPosts.map((posts)=>(
      <PostCard post={posts} key={posts.title} />
    )
      
    )}
  </Grid>
  <Grid container spacing={5} className={classes.mainGrid}>
    <Main title='From the Firehose' />
    <SideBar title={sidebar.title} description={sidebar.description} social={sidebar.social} archives={sidebar.archives} />
  </Grid>
</Container>
<Footer title="footer" description="Something here to give the footer a purpose!" />
</ThemeProvider> 

</>

  )
}

export default App;