import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function MyFooter() {
  return (
    <footer>
      <AppBar position="static" sx={{ height: '60px' }}>
        <Toolbar>
          <Typography variant="body1" component="div" sx={{ flexWrap: 'wrap' }}>
          Toufik Dellys |
          </Typography>
          <Typography component="div" sx={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
            &bull;
          </Typography>
          <Typography variant="body1" component="div">
          Nathan Thibault |
          </Typography>
          <Typography component="div" sx={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
            &bull;
          </Typography>
          <Typography variant="body1" component="div">
          Priscila Carvalho  | 
          </Typography>
          <Typography component="div" sx={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
            &bull;
          </Typography>
          <Typography variant="body1" component="div" sx={{ marginRight: '1rem' }}>
          Marie-Pier Dubois | 
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body2" component="div">
          William Bitton
          </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
}

export default MyFooter;
