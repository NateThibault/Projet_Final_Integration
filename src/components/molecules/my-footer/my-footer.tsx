"use client"
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function MyFooter() {
  return (
    <footer style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
      <AppBar position="static" sx={{ height: '10%' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="body1" component="div" sx={{ display: 'flex' }}>
            <Box sx={{ mr: '0.5rem', fontSize: '1rem', textAlign: 'center' }}>
              Toufik Dellys | Nathan Thibault | Priscila Carvalho | Marie-Pier Dubois | William Bitton
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
}

export default MyFooter;
