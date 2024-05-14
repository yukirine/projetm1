import { Fragment } from 'react';
import Box from '@mui/system/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const theme = createTheme({
  // Paramètres du thème
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
        <ThemeProvider theme={theme}>
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,  // Largeur de l'image du cœur
            height: 200  // Hauteur de l'image du cœur
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
        </ThemeProvider>
        <Box sx={{ width: '80%',
          height: '40vh',
          mt: 4,
          display: 'flex',  // Assure que le contenu interne utilise flexbox
          justifyContent: 'center',  // Centre horizontalement dans la box
          alignItems: 'center'  // Centre verticalement dans la box
         }}> {/* Box pour le graphique */}
          <Line data={data} />
        </Box>
      </Box>
    </Fragment>
  );
};

export default HearthRate;




