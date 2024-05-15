import React from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';

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
  components: {
    
    MuiBox: {
      styleOverrides: {
        root: {
          '&:before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            backgroundColor: '#1976d2', // Couleur de la barre, ajustez selon le thème
          }
        }
      }
    }
  }
});


const Dashboard = () => {
  const healthTip = 'Boire au moins 1,5 litre d’eau par jour.';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
          padding: 2,
          margin: 2,
          backgroundColor: 'white',
          borderRadius: 1,
          boxShadow: 1,
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: '100%', // Makes the Box responsive
        }}>
        
        <svg xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" version="1.1" id="Layer_1" viewBox="0 0 512 512" >
<path fill='#DEDEE0' d="M256,0c-38.499,0-69.818,31.32-69.818,69.818c0,1.562,0.07,3.108,0.172,4.645  c0.631,9.579,3.204,18.632,7.329,26.778c3.772,7.449,8.831,14.136,14.898,19.76c12.462,11.554,29.125,18.635,47.419,18.635  s34.957-7.083,47.419-18.635c6.066-5.624,11.126-12.311,14.899-19.76c4.124-8.145,6.695-17.197,7.329-26.778  c0.101-1.538,0.171-3.083,0.171-4.645C325.818,31.32,294.498,0,256,0z"/>
<g>
	<path fill='#00E7F0' d="M419.883,384.99c-19.119-30.141-46.113-54.419-78.063-70.209c-0.008-0.003-0.016-0.006-0.023-0.009   c-26.837-13.259-55.704-19.984-85.797-19.984c-30.095,0-58.961,6.723-85.797,19.982c-0.006,0.003-0.014,0.006-0.022,0.009   c-31.952,15.79-58.945,40.068-78.064,70.209c-19.662,31.001-30.056,66.873-30.056,103.739c0,12.853,10.42,23.273,23.273,23.273H256   h170.667c12.853,0,23.273-10.42,23.273-23.273C449.939,451.862,439.546,415.991,419.883,384.99z"/>
	<path fill='#00E7F0' d="M419.883,384.99c-19.119-30.141-46.113-54.419-78.063-70.209c-0.008-0.003-0.016-0.006-0.023-0.009   c-26.837-13.259-55.704-19.984-85.797-19.984c-30.095,0-58.961,6.723-85.797,19.982c-0.006,0.003-0.014,0.006-0.022,0.009   c-31.952,15.79-58.945,40.068-78.063,70.209c-19.664,31.001-30.058,66.873-30.058,103.739c0,12.853,10.42,23.273,23.273,23.273H256   h170.667c12.853,0,23.273-10.42,23.273-23.273C449.939,451.862,439.546,415.991,419.883,384.99z"/>
</g>
<path fill='#AAFFF5' d="M354.273,330.802c-1.482-6.963-6.07-12.867-12.452-16.021c-0.008-0.003-0.014-0.006-0.023-0.011  c-26.837-13.258-55.704-19.982-85.797-19.982c-30.095,0-58.961,6.723-85.797,19.982c-0.006,0.003-0.014,0.006-0.022,0.011  c-6.383,3.154-10.971,9.056-12.452,16.021c-1.213,5.699-0.202,11.579,2.686,16.538c0.641,1.1,1.34,2.169,2.166,3.165l12.454,15.012  l57.693,69.548l5.36,6.462c4.422,5.331,10.986,8.414,17.912,8.414c6.924,0,13.49-3.084,17.912-8.414l5.36-6.462l57.693-69.548  l12.454-15.012c0.825-0.995,1.527-2.065,2.166-3.164C354.476,342.382,355.485,336.502,354.273,330.802z"/>
<path fill='#EFC27B' d="M325.647,74.463c-0.633,9.579-3.204,18.632-7.329,26.778c-3.773,7.449-8.831,14.136-14.899,19.76  c-12.462,11.553-29.125,18.635-47.419,18.635s-34.957-7.081-47.419-18.634c-6.066-5.624-11.127-12.311-14.898-19.76  c-4.124-8.145-6.696-17.199-7.329-26.778c-19.757,18.887-31.203,45.202-31.203,72.931c0,55.608,45.241,100.848,100.848,100.848  c55.609,0,100.852-45.241,100.852-100.848C356.852,119.665,345.404,93.35,325.647,74.463z"/>
<path fill='#00D7DF' d="M92.118,384.988c-19.664,31.001-30.058,66.873-30.058,103.739c0,12.853,10.42,23.273,23.273,23.273  H256v-62.059c-6.926,0-13.49-3.084-17.912-8.414l-5.36-6.462l-57.693-69.548l-12.454-15.012c-0.825-0.996-1.525-2.065-2.166-3.165  c-2.886-4.957-3.899-10.837-2.684-16.538c1.482-6.963,6.07-12.867,12.452-16.021c0.008-0.003,0.016-0.006,0.022-0.011  c-0.006,0.003-0.014,0.006-0.022,0.009C138.231,330.57,111.236,354.847,92.118,384.988z"/>
<path fill='#ECB45C' d="M208.581,121.003c-6.066-5.624-11.127-12.311-14.898-19.76c-4.124-8.145-6.696-17.199-7.329-26.778  c-19.757,18.887-31.203,45.202-31.203,72.931c0,55.608,45.241,100.848,100.848,100.848V139.636  C237.706,139.636,221.043,132.555,208.581,121.003z"/>
<path fill='#00EED1' d="M170.203,314.77c-0.006,0.003-0.014,0.006-0.022,0.011c-6.383,3.154-10.971,9.056-12.452,16.021  c-1.213,5.699-0.202,11.579,2.686,16.538c0.641,1.1,1.341,2.169,2.166,3.165l12.454,15.012l57.693,69.548l5.36,6.462  c4.422,5.331,10.986,8.414,17.912,8.414V294.788C225.905,294.788,197.039,301.512,170.203,314.77z"/>
<path fill='#D6D5D8' d="M186.182,69.818c0,1.562,0.07,3.108,0.172,4.645c0.631,9.579,3.204,18.632,7.329,26.778  c3.772,7.449,8.831,14.136,14.898,19.76c12.462,11.554,29.125,18.635,47.419,18.635V0C217.501,0,186.182,31.32,186.182,69.818z"/>
</svg>
        <Typography variant="h6" component="h3" sx={{margin: 2 , fontSize: '1.8rem', fontWeight: 'bold' }}>
          Conseil du jour
        </Typography>
        <Typography>{healthTip}</Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;




