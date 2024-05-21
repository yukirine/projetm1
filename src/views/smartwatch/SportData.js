import React, { Fragment } from 'react';
import Box from '@mui/system/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography'; // Import pour le texte
import { Bar } from 'react-chartjs-2';  // Importation du composant Bar
import 'chart.js/auto';
import SportStat from './SportStat';
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

const options = {
  scales: {
    y: {
      grid: {
        display: true, // Désactive l'affichage de la grille pour l'axe Y
      },
    },
    x: {
      grid: {
        display: false, // Désactive l'affichage de la grille pour l'axe X
      },
    }
  },
  maintainAspectRatio: false, // S'assure que l'aspect ratio n'est pas maintenu
};
const Pedometer = () => {
  const colors = [
    'rgba(255, 99, 132, 0.5)', // Red
    'rgba(54, 162, 235, 0.5)', // Blue
    'rgba(255, 206, 86, 0.5)',  // Yellow
    'rgba(75, 192, 192, 0.5)',  // Green
    'rgba(153, 102, 255, 0.5)', // Purple
    'rgba(255, 159, 64, 0.5)',  // Orange
    'rgba(199, 199, 199, 0.5)', // Grey
    'rgba(163, 205, 89, 0.5)',  // Light green

  ];

  // Utilize these colors in your dataset
  const caloriesData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
    datasets: [
      {
        label: 'Calories brûlées par jour',
        data: [600, 650, 300, 400, 700, 450, 600, 350, 300, 450, 500, 350, 400, 500, 700],  // Example data for 15 days
        backgroundColor: colors, // Apply different background colors for each bar
        borderColor: colors.map(color => color.replace('0.5', '1')), // Brighter color for border
        borderWidth: 1
      }
    ]
  };

  const sportData = {
    duration: '45 minutes',
    calories: '300 kcal',
    avgHeartRate: '140 bpm'
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            padding: 2,
            margin: 2,
            backgroundColor: 'white',
            borderRadius: 1,
            boxShadow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '100%', // Makes the Box responsive
          }}
        >
          <Typography variant="h6" component="h2" sx={{ marginBottom: 2, fontSize: '1.8rem', fontWeight: 'bold', textAlign: "center" }}>
            &nbsp;Résumé de l'activité sportive
          </Typography>
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <SportStat />
          </Box>
          <Box sx={{ width: '100%', height: '30vh' }}>
            <Bar data={caloriesData} options={options} />
          </Box>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
};

export default Pedometer;

