import React from 'react';
import { Divider, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import { makeStyles } from '@mui/styles';
import SideDrawer from './SideDrawer';


//useStyles is material UI s inbuilt css
const useStyles=makeStyles((theme)=>({
    title:{
        flexGrow:1
    },
    tagline:{
        fontSize:20,
        textTransform:'uppercase',
        fontFamily:'montserrat'
    }
}))

function Header(){
    const classes=useStyles();
    return (
        <>
        <Toolbar >
            <SideDrawer>
            <IconButton color='inherit'><MenuIcon /></IconButton>
            </SideDrawer>
            <Typography variant='h6' className={classes.title}>Blogging website</Typography>
            <IconButton color='inherit'><Badge badgeContent={4} color='error'><NotificationsIcon /></Badge></IconButton>
            <IconButton color='inherit'><AccountCircleIcon /></IconButton>
        </Toolbar>
        <Divider />
        <Toolbar className={classes.tagline}>Express your emotions through words</Toolbar>
        </>
    )
}
export default Header;
