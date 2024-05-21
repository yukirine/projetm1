import { Fragment } from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Bar } from 'react-chartjs-2';  // Importation du composant Bar
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
            padding: 2, // Ajoute un padding autour du contenu
            margin: 2, // Ajoute une marge extérieure pour séparer le composant des autres éléments
            backgroundColor: 'white', // Définit un fond gris clair pour le composant
            borderRadius: 1, // Arrondit les coins de la Box
            boxShadow: 1, // Applique une ombre légère pour un effet 3D subtil
            height: '40vh', // Hauteur ajustée pour inclure le graphique
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '100%', // Makes the Box responsive
          }}
        >
          <Typography  variant="h4" component="h2" sx={{ marginBottom: 2 , fontSize: '1.8rem', fontWeight: 'bold'}}>
          &nbsp;Aperçu journalier des pas
          </Typography>
          {/* Utilisation du Grid pour organiser les éléments horizontalement */}
          <Grid container spacing={2} alignItems='center' sx={{ width: '70%', height: '100%' }}>
            {/* Grid item pour les données */}
            <Grid item xs={4}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '& > *': {
                    paddingY: '2rem'
                  },
                  '& > *:not(:last-child)': {
                    borderBottom: '1px solid #ccc' // Ajoute une barre verticale entre les éléments
                  }
                }}
              >
                <Box>
                  
                  <Box sx={{ color: '#baffc9', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <svg width="30px" height="20px" viewBox="-33 0 255 255" xmlns="http://www.w3.org/2000/svg">
                      <g id="fire">
                        <path d="M187.899,164.809 C185.803,214.868 144.574,254.812 94.000,254.812 C42.085,254.812 -0.000,211.312 -0.000,160.812 C-0.000,154.062 -0.121,140.572 10.000,117.812 C16.057,104.191 19.856,95.634 22.000,87.812 C23.178,83.513 25.469,76.683 32.000,87.812 C35.851,94.374 36.000,103.812 36.000,103.812 C36.000,103.812 50.328,92.817 60.000,71.812 C74.179,41.019 62.866,22.612 59.000,9.812 C57.662,5.384 56.822,-2.574 66.000,0.812 C75.352,4.263 100.076,21.570 113.000,39.812 C131.445,65.847 138.000,90.812 138.000,90.812 C138.000,90.812 143.906,83.482 146.000,75.812 C148.365,67.151 148.400,58.573 155.999,67.813 C163.226,76.600 173.959,93.113 180.000,108.812 C190.969,137.321 187.899,164.809 187.899,164.809 Z" id="path-1" class="cls-3" fill-rule="evenodd" fill='#fc9502'/>
                        <path d="M94.000,254.812 C58.101,254.812 29.000,225.711 29.000,189.812 C29.000,168.151 37.729,155.000 55.896,137.166 C67.528,125.747 78.415,111.722 83.042,102.172 C83.953,100.292 86.026,90.495 94.019,101.966 C98.212,107.982 104.785,118.681 109.000,127.812 C116.266,143.555 118.000,158.812 118.000,158.812 C118.000,158.812 125.121,154.616 130.000,143.812 C131.573,140.330 134.753,127.148 143.643,140.328 C150.166,150.000 159.127,167.390 159.000,189.812 C159.000,225.711 129.898,254.812 94.000,254.812 Z" id="path-2" class="cls-4" fill-rule="evenodd" fill='orange'/>
                        <path d="M95.000,183.812 C104.250,183.812 104.250,200.941 116.000,223.812 C123.824,239.041 112.121,254.812 95.000,254.812 C77.879,254.812 69.000,240.933 69.000,223.812 C69.000,206.692 85.750,183.812 95.000,183.812 Z" id="path-3" class="cls-5" fill-rule="evenodd" fill='red'/>
                        </g>
                      </svg>
            
                      Energie
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>500</Box>&nbsp;cal
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ color: '#ffb3ba', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="20px" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
  <defs>
    <linearGradient id="linear-gradient-1" gradientUnits="userSpaceOnUse" x1="128" y1="172" x2="128" y2="32">
      <stop offset="0" stop-color="#fc9502"/>
      <stop offset="1" stop-color="#fcbe02"/>
    </linearGradient>
  </defs>
  <g id="cup">
    <path fill = '#fcc402' d="M63.000,224.000 C89.509,224.000 111.000,202.510 111.000,176.000 C111.000,176.000 111.000,154.000 111.000,154.000 C111.000,154.000 145.000,154.000 145.000,154.000 C145.000,154.000 145.000,176.000 145.000,176.000 C145.000,202.510 167.000,224.000 193.000,224.000 C219.000,224.000 29.420,224.000 63.000,224.000 Z" id="path-1"  fill-rule="evenodd"/>
    <path fill = '#fce202'd="M193.000,256.000 C193.000,256.000 63.000,256.000 63.000,256.000 C54.163,256.000 47.000,248.836 47.000,240.000 C47.000,231.163 54.163,224.000 63.000,224.000 C72.287,224.000 183.976,224.000 193.000,224.000 C201.836,224.000 209.000,231.163 209.000,240.000 C209.000,248.836 201.836,256.000 193.000,256.000 Z" id="path-2"  fill-rule="evenodd"/>
    <path fill = '#fce202' d="M248.000,62.000 C248.000,62.000 236.000,62.000 236.000,62.000 C217.222,62.000 201.000,77.222 201.000,96.000 C201.000,96.000 195.000,96.000 195.000,96.000 C195.000,96.000 195.000,62.000 195.000,62.000 C197.780,48.307 209.486,38.000 224.000,38.000 C224.000,38.000 248.000,38.000 248.000,38.000 C252.418,38.000 256.000,41.582 256.000,46.000 C256.000,46.000 256.000,54.000 256.000,54.000 C256.000,58.418 252.418,62.000 248.000,62.000 ZM20.000,62.000 C20.000,62.000 8.000,62.000 8.000,62.000 C3.582,62.000 -0.000,58.418 -0.000,54.000 C-0.000,54.000 -0.000,46.000 -0.000,46.000 C-0.000,41.582 3.582,38.000 8.000,38.000 C8.000,38.000 32.000,38.000 32.000,38.000 C46.513,38.000 58.220,48.307 61.000,62.000 C61.000,62.000 61.000,96.000 61.000,96.000 C61.000,96.000 55.000,96.000 55.000,96.000 C55.000,77.222 38.778,62.000 20.000,62.000 Z" id="path-3" class="cls-4" fill-rule="evenodd"/>
    <path fill = 'url(#linear-gradient-1)' d="M54.000,32.000 C54.000,32.000 202.000,32.000 202.000,32.000 C202.000,32.000 202.000,98.000 202.000,98.000 C202.000,138.869 168.869,172.000 128.000,172.000 C87.131,172.000 54.000,138.869 54.000,98.000 C54.000,98.000 54.000,32.000 54.000,32.000 Z" id="path-4"  fill-rule="evenodd"/>
    <path fill = '#fcc402'd="M52.000,-0.000 C52.000,-0.000 204.000,-0.000 204.000,-0.000 C208.418,-0.000 212.000,3.582 212.000,8.000 C212.000,8.000 212.000,16.000 212.000,16.000 C212.000,20.418 208.418,24.000 204.000,24.000 C204.000,24.000 52.000,24.000 52.000,24.000 C47.582,24.000 44.000,20.418 44.000,16.000 C44.000,16.000 44.000,8.000 44.000,8.000 C44.000,3.582 47.582,-0.000 52.000,-0.000 Z" id="path-5"  fill-rule="evenodd"/>
    <path fill ='#ffffff' d="M162.856,90.349 C157.186,96.253 149.864,104.224 149.864,104.224 C149.864,104.224 151.121,114.155 152.104,122.143 C153.122,130.408 148.536,129.653 143.551,127.407 C136.369,124.171 128.000,120.112 128.000,120.112 C128.000,120.112 119.631,124.171 112.449,127.407 C107.464,129.653 102.877,130.408 103.895,122.143 C104.879,114.155 106.136,104.224 106.136,104.224 C106.136,104.224 98.814,96.253 93.144,90.349 C90.272,87.359 89.502,83.284 95.639,82.135 C103.704,80.624 114.487,78.513 114.487,78.513 C114.487,78.513 119.123,67.961 123.261,60.785 C125.386,57.099 130.614,57.099 132.739,60.785 C136.877,67.961 141.513,78.513 141.513,78.513 C141.513,78.513 152.296,80.624 160.361,82.135 C166.497,83.284 165.728,87.359 162.856,90.349 Z" id="path-6"  fill-rule="evenodd"/>
  </g>
</svg>
Distance 
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3.2</Box>&nbsp;km
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ color: '#bae1ff', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="20px" viewBox="-1 0 255 255" preserveAspectRatio="xMidYMid">
    <g id="sneakers">
      <path d="M36.939,41.904 C36.939,41.904 66.654,18.074 81.829,9.260 C96.655,0.650 105.854,-3.002 113.110,2.818 C120.365,8.637 115.064,30.091 127.792,42.819 C140.520,55.547 148.324,53.058 158.282,52.141 C169.451,51.112 183.418,50.946 191.035,58.563 C201.856,69.384 188.436,128.716 205.584,170.612 C216.349,196.916 249.398,232.292 249.398,232.292 C249.398,232.292 233.151,248.587 233.151,248.587 C233.151,248.587 151.126,200.503 151.126,200.503 C151.126,200.503 92.437,97.973 92.437,97.973 C92.437,97.973 36.939,41.904 36.939,41.904 Z" fill ='#a4c1e9' fillRule="evenodd"/>
      <path d="M32.893,37.000 C32.893,37.000 65.123,7.423 74.375,9.492 C83.628,11.560 88.951,30.615 92.437,41.404 C96.122,52.814 100.860,74.902 99.063,86.631 C98.033,93.351 93.144,97.266 93.144,97.266 C93.144,97.266 32.893,37.000 32.893,37.000 Z" fill='#1c8cea' fillRule="evenodd"/>
      <path d="M236.686,252.122 C227.048,261.761 166.451,245.527 139.813,218.888 C139.813,218.888 7.584,86.659 7.584,86.659 C-4.913,74.162 -0.879,43.514 11.826,38.576 C26.955,32.696 31.282,29.748 37.282,35.748 C37.282,35.748 69.526,67.992 93.851,92.316 C118.175,116.641 135.109,173.172 156.783,194.847 C176.227,214.290 215.214,235.056 228.201,239.394 C234.505,241.500 239.749,236.332 243.050,233.030 C244.745,231.335 247.985,228.066 251.123,231.204 C253.889,233.970 251.952,236.857 249.414,239.394 C244.919,243.890 238.511,250.298 236.686,252.122 Z" fill='4762e1' fillRule="evenodd"/>
      <path d="M92.437,102.216 C89.312,105.340 84.247,105.340 81.123,102.216 C81.123,102.216 14.881,36.974 14.881,36.974 C26.776,32.221 30.527,28.326 37.282,35.748 C37.282,35.748 69.526,67.992 93.851,92.316 C95.225,93.691 96.573,95.181 97.903,96.749 C97.903,96.749 92.437,102.216 92.437,102.216 Z" fill='ff436f' fillRule="evenodd"/>
    </g>
  </svg>
  Exercice
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>7000</Box>&nbsp;pas 
                    
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ height: '20vh', width: '100%' }}>
                <Bar data={stepsData} options={options} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
};

export default Pedometer;
