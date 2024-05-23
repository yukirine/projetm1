import { Fragment } from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';  // Importation du composant Typography
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '1.8rem', // Responsive font size

}));

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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            
          }}
        >
          {/* Ajout du titre */}
          <ResponsiveTypography variant="h6" component="h3">
            &nbsp;Rythme Cardiaque
          </ResponsiveTypography>
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width:  '25vh',
            height: '25vh',
          }}>
            {/*changer l'image coeur avec svg coeur*/}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 34 34" version="1.1">
    <title>heart</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Vivid.JS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Vivid-Icons" transform="translate(-824.000000, -411.000000)" fill="#FF6E6E">
            <g id="Icons" transform="translate(37.000000, 169.000000)">
                <g id="heart" transform="translate(780.000000, 234.000000)">
                    <g transform="translate(7.000000, 8.000000)" id="Shape">
                        <path d="M17,32 C17,32 0,27.578 0,10.482 C0,5.245 4.349,8.8817842e-16 9.714,8.8817842e-16 C12.5330763,0.114312803 15.1754592,1.40395232 17,3.556 C18.8245408,1.40395232 21.4669237,0.114312803 24.286,0 C29.651,8.8817842e-16 34,5.245 34,10.482 C34,27.523 17,32 17,32 Z">

</path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
            <h1 style={{
              position: 'absolute',
              color: 'white',
              margin: 0,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '2vh',
              textAlign: 'center',
              zIndex: 10
            }}>
              72 BPM
            </h1>
          </div>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            height: '40vh',
          }}>
            <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
          </Box>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
};

export default HearthRate;





