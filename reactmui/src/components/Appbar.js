import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function Appbar() {
  return (
    <AppBar>
        <Toolbar>
<CameraAltIcon />
        <Typography variant='h5'>My Photography</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Appbar;