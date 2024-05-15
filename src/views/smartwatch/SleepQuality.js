import React from 'react';
import Box from '@mui/system/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Public Sans', 
      'sans-serif', 
      '-apple-system', 
      'BlinkMacSystemFont', 
      '"Segoe UI"', 
      'Roboto', 
      '"Helvetica Neue"', 
      'Arial', 
      'sans-serif', 
      '"Apple Color Emoji"', 
      '"Segoe UI Emoji"', 
      '"Segoe UI Symbol"'
    ].join(','),
  },
});

const SleepQuality = () => {
  // Données fictives pour la qualité du sommeil
  const sleepData = {
    totalSleep: '7h 30m',
    remPercentage: '25%', // 25% de REM sur le total du sommeil
    deepSleepPercentage: '20%', // 20% de sommeil profond
    awakenings: 3 // Nombre de réveils
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          p: 2,
          width: '100%',
          backgroundColor: 'transparent',
          width: '100%', // Makes the Box responsive
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography fontWeight='bold' sx={{ color: '#FBFAF5' }}>
            &nbsp;Durée totale du sommeil: <Typography sx={{ color: '#FBFAF5'  }}> &nbsp;{sleepData.totalSleep} </Typography>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography fontWeight='bold' sx={{ color: '#FBFAF5' }}>
            &nbsp;Pourcentage de sommeil REM: <Typography sx={{ color: '#FBFAF5' }}> &nbsp;{sleepData.remPercentage} </Typography>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography fontWeight='bold' sx={{ color: '#FBFAF5' }}>
              &nbsp;Pourcentage de sommeil profond: <Typography sx={{ color: '#FBFAF5' }}>&nbsp;{sleepData.deepSleepPercentage}</Typography>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography fontWeight='bold' sx={{ color: '#FBFAF5' }}>
              &nbsp;Nombre de réveils: <Typography sx={{ color: '#FBFAF5' }}>&nbsp;{sleepData.awakenings}</Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default SleepQuality;
