import { Fragment } from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Bar } from 'react-chartjs-2';  // Importation du composant Bar
import 'chart.js/auto';

const theme = createTheme({
  // Paramètres du thème
});

const SportData = () => {
  // Données pour le graphique des pas avec un graphique à barres
  const stepsData = {
    labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
    datasets: [
      {
        label: 'Nombre de pas',
        data: [1468,114,745,259,1264,660,925],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }
    ]
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
            height: '40vh', // Hauteur ajustée pour inclure le graphique
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Utilisation du Grid pour organiser les éléments horizontalement */}
          <Grid container spacing={2} alignItems="center" sx={{ width: '70%', height: '100%' }}>
            {/* Grid item pour les données */}
            <Grid item xs={4}>
              <Box sx={{ backgroundColor: 'lightgray', padding: 2, height: '100%' }}>
                <h3>Calories Brûlées: 500 cal</h3>
                <h3>Kilomètres Parcourus: 3.2 km</h3>
                <h3>Nombre de Pas: 7000</h3>
              </Box>
            </Grid>

            {/* Grid item pour le graphique */}
            <Grid item xs={8}>
              <Box sx={{ height: '20vh', width: '100%' }}>
                <Bar data={stepsData} options={{ maintainAspectRatio: false }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
};

export default SportData;
