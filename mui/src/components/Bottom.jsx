import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from './Mod';

export default function SimpleBottomNavigation() {


  return (
    <Box >
      <BottomNavigation
        showLabels
       
      >
        <BasicModal />
      </BottomNavigation>
    </Box>
  );
}