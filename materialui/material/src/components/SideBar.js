import { Grid, Link, Typography } from '@mui/material'
import React from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles((theme)=>({
    sideBarAboutBox:{
        padding:theme.spacing(2)
    },
    sideBarSection:{
        marginTop:theme.spacing(3)
    }
}))

const SideBar = (props) => {
    const classes=useStyles();
    const {archives,description,social,title}=props;
  return (
    <Grid item xs={12} md={4}>
<Paper elevation={0} className={classes.sideBarElevationBox}>
    <Typography variant='h6' gutterBottom>{title}</Typography>
    <Typography>{description}</Typography>
</Paper>
<Typography variant='h6' gutterBottom className={classes.sideBarSection}>Archives</Typography>
{archives.map((archive)=>(
    <Link display="block" variant='body1' href={archives.title} key={archives.title}>{archive.title}</Link>
))}
<Typography variant='h6' gutterBottom className={classes.sideBarAboutBox}>Social</Typography>
{social.map((network)=>(
    <Link display="block" variant='body1' href="#" key={network.name}>
        <Grid container direction="row" spacing={1} alignItems='center'>
            <Grid item><network.icon /></Grid>
            <Grid item>{network.name}</Grid>
        </Grid>
    </Link>
))}

    </Grid>
  )
}

export default SideBar