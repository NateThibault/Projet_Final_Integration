"use client"
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function MyFooter() {
  return (
    <footer>
      <AppBar position="static" sx={{ height: '10%' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="body1" component="div" sx={{ display: 'flex' }}>
            <Box sx={{ mr: '0.5rem' }}>Toufik Dellys |</Box>
            <Box sx={{ mr: '0.5rem' }}>Nathan Thibault |</Box>
            <Box sx={{ mr: '0.5rem' }}>Priscila Carvalho |</Box>
            <Box sx={{ mr: '0.5rem' }}>Marie-Pier Dubois |</Box>
            <Box>William Bitton</Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
}

export default MyFooter;
