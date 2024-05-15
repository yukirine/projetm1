import { Fragment } from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';  // Importation du composant Typography
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

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

const HearthRate = () => {
  // URL de l'image du cœur
  const heartImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Liked.svg/1280px-Liked.svg.png";

  // Données pour le graphique
  const data = {
    labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
    datasets: [
      {
        label: 'Rythme Cardiaque',
        data: [55, 50, 68, 115, 75, 80, 55],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
      }
    ]
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
            height: '50vh', // Ajusté pour inclure le titre
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Ajout du titre */}
          <Typography variant="h4" sx={{  marginBottom: 2 , fontSize: '1.8rem', fontWeight: 'bold' }}>
          &nbsp;Rythme Cardiaque
          </Typography>
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,
            height: 200
          }}>
            <img src={heartImageUrl} alt="Heart" style={{ width: '100%', height: '100%' }} />
            <h1 style={{
              position: 'absolute',
              color: 'white',
              margin: 0,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '24px',
              zIndex: 10
            }}>
              72 BPM
            </h1>
          </div>
          <Box sx={{ width: '80%', height: '40vh', mt: 4 }}>
            <Line data={data} />
          </Box>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
};

export default HearthRate;





