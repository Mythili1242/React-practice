import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material'
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles({
    text:{
        "width":"500px",
        "margin":"5px"
    }
})


function Form() {
    const classes=useStyles();
  return (
   
    <center>
        <Container>
            <Typography variant='h4'>Contact Form</Typography>
            <form>
                <TextField type='text' label="Name" variant='outlined' className={classes.text} ></TextField><br/>
                <TextField type='email' label="Email" variant='outlined' style={{"width":"500px","margin":"5px"}}></TextField><br/>
                <TextField type='text' label="Event" variant='outlined' className={classes.text} ></TextField><br/>
                <TextField type='text' label="Address" variant='outlined' className={classes.text} ></TextField><br/>
           <Button variant='contained' color='primary'>Submit</Button>
            </form>
        </Container>
    </center>
  )
}

export default Form