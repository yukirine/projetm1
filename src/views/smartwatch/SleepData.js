import { Fragment } from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import SleepQuality from './SleepQuality';
const theme = createTheme({
  // Paramètres du thème
});

const sleepData = () => {
  // Données pour l'hypnogramme
  const sleepStages = {
    labels: ["22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
    datasets: [
      {
        label: 'Stages of Sleep',
        data: [1, 2, 2, 3, 2, 3, 2, 1, 0],  // Simulation des stades de sommeil
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        stepped: true, // Crée un effet d'escalier pour représenter les transitions de sommeil
      }
    ]
  };

  const options = {
    scales: {
      y: {
        ticks: {
          // Correspondance des indices aux stades de sommeil
          callback: function(value) {
            switch(value) {
              case 0: return "Éveil";
              case 1: return "Léger";
              case 2: return "Profond";
              case 3: return "REM";
              default: return "";
            }
          }
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            padding: 2,  // Ajoute un padding autour du contenu
            margin: 2,  // Ajoute une marge extérieure pour séparer le composant des autres éléments
            backgroundColor: 'white',  // Définit un fond gris clair pour le composant
            borderRadius: 1,  // Arrondit les coins de la Box
            boxShadow: 1 , // Applique une ombre légère pour un effet 3D subtil
            height: '55vh', // Hauteur ajustée pour inclure le graphique
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Grid container spacing={2} alignItems="center" sx={{ width: '100%', height: '100%' }}>
            <Grid item xs={12}>
              <Box sx={{ height: '25vh', width: '100%' }}>
                <Line data={sleepStages} options={options} />
              </Box>
            </Grid>
            <Grid item xs={12}> {/* Prend 6 colonnes sur 12, donc la moitié de l'espace disponible */}
                <Box sx={{ height: '10vh', width: '100%' }}>
                    <SleepQuality />
                </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
};

export default sleepData;

