import React from 'react';
import Box from '@mui/system/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const theme = createTheme({
  // Paramètres du thème
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
          backgroundColor: 'white',
          boxShadow: 3,
          borderRadius: 2,
          width: '100%',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              Résumé de la qualité du sommeil
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Durée totale du sommeil: {sleepData.totalSleep}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              Pourcentage de sommeil REM: {sleepData.remPercentage}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              Pourcentage de sommeil profond: {sleepData.deepSleepPercentage}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Nombre de réveils: {sleepData.awakenings}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default SleepQuality;
