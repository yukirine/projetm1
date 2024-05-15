import React from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
const SportStat = () => {
  const dataPoints = [
    { label: 'Durée', value: '45 min', color: '#7ACF87', svgPath: 
      (<svg xmlns="http://www.w3.org/2000/svg"  width="35px" height="35px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" version="1.1" >

      <g id="Layer_27"/>
      
      <g id="Layer_2"/>
      
      <g id="Layer_3"/>
      
      <g id="Layer_4"/>
      
      <g id="Layer_5"/>
      
      <g id="Layer_6"/>
      
      <g id="Layer_7"/>
      
      <g id="Layer_8"/>
      
      <g id="Layer_9"/>
      
      <g id="Layer_10"/>
      
      <g id="Layer_11"/>
      
      <g id="Layer_12"/>
      
      <g id="Layer_13"/>
      
      <g id="Layer_14"/>
      
      <g id="Layer_15"/>
      
      <g id="Layer_16">
      
      <g id="Layer_17">
      
      <g>
      
      <path d="M15,4v3.29c0,0.32-0.15,0.61-0.4,0.8c-0.18,0.13-0.39,0.2-0.6,0.2c-0.1,0-0.19-0.01-0.29-0.04     c-1.09-0.33-2.33-0.33-3.42,0C9.99,8.34,9.66,8.28,9.4,8.09C9.15,7.9,9,7.61,9,7.29V4c0-1.1,0.9-2,2-2h2C14.1,2,15,2.9,15,4z" fill="#FFAE3E"/>
      
      </g>
      
      <g>
      
      <path d="M20,14c0,4.41-3.59,8-8,8s-8-3.59-8-8c0-3.57,2.3-6.65,5.71-7.67c1.46-0.4399,3.11-0.4399,4.58,0     C17.7,7.35,20,10.43,20,14z" fill="#D34A4B"/>
      
      </g>
      
      <path d="M15.707,10.293c-0.3906-0.3906-1.0234-0.3906-1.4141,0l-1.7816,1.7816C12.3471,12.0308,12.1778,12,12,12    c-1.1025,0-2,0.897-2,2s0.8975,2,2,2s2-0.897,2-2c0-0.1779-0.0308-0.3472-0.0745-0.5114l1.7816-1.7816    C16.0977,11.3164,16.0977,10.6836,15.707,10.293z" fill="#B0DA50"/>
      
      </g>
      
      </g>
      
      <g id="Layer_18"/>
      
      <g id="Layer_19"/>
      
      <g id="Layer_20"/>
      
      <g id="Layer_21"/>
      
      <g id="Layer_22"/>
      
      <g id="Layer_23"/>
      
      <g id="Layer_24"/>
      
      <g id="Layer_25"/>
      
      <g id="Layer_26"/>
      
      </svg>)
     }, // Clock icon for duration
    { label: 'Calories', value: '300 kcal', color: '#ED625A', svgPath: 
    (<svg xmlns="http://www.w3.org/2000/svg"  width="35px" height="35px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" version="1.1" >

    <g id="Layer_27"/>
    
    <g id="Layer_2"/>
    
    <g id="Layer_3"/>
    
    <g id="Layer_4"/>
    
    <g id="Layer_5"/>
    
    <g id="Layer_6"/>
    
    <g id="Layer_7"/>
    
    <g id="Layer_8"/>
    
    <g id="Layer_9"/>
    
    <g id="Layer_10"/>
    
    <g id="Layer_11"/>
    
    <g id="Layer_12">
    
    <g>
    
    <path d="M22.02,18c0,0.55-0.45,1-1,1c-0.01,0-0.01,0-0.02,0h-2v2c0,0.4-0.24,0.77-0.62,0.92    C18.26,21.98,18.13,22,18,22c-0.26,0-0.52-0.1-0.71-0.29L12,16.42l-5.29,5.29C6.52,21.9,6.26,22,6,22c-0.13,0-0.26-0.02-0.38-0.08    C5.24,21.77,5,21.4,5,21v-2H3c-0.55,0-1-0.45-1-1s0-0.58,5.03-5.5c0.4-0.39,1.03-0.38,1.41,0.01C9.39,13.47,10.65,14,12,14    s2.61-0.53,3.56-1.49c0.38-0.39,1.02-0.4,1.41-0.01c3.04,2.97,4.2401,4.16,4.72,4.76C21.89,17.44,22.02,17.7,22.02,18z" fill="#6059B1"/>
    
    </g>
    
    <g>
    
    <path d="M19,9c0,1.85-0.72,3.6-2.02,4.91C15.66,15.26,13.89,16,12,16s-3.66-0.74-4.98-2.09C5.72,12.6,5,10.85,5,9    c0-3.86,3.14-7,7-7S19,5.14,19,9z" fill="#FFBF42"/>
    
    </g>
    
    </g>
    
    <g id="Layer_13"/>
    
    <g id="Layer_14"/>
    
    <g id="Layer_15"/>
    
    <g id="Layer_16">
    
    <g id="Layer_17"/>
    
    </g>
    
    <g id="Layer_18"/>
    
    <g id="Layer_19"/>
    
    <g id="Layer_20"/>
    
    <g id="Layer_21"/>
    
    <g id="Layer_22"/>
    
    <g id="Layer_23"/>
    
    <g id="Layer_24"/>
    
    <g id="Layer_25"/>
    
    <g id="Layer_26"/>
    
    </svg>)}, // Flame icon for calories
    { label: 'Fréquence Cardiaque', value: '140 bpm', color: '#4CA7D9', svgPath: (
      <svg xmlns="http://www.w3.org/2000/svg" height="35px" width="35px" viewBox="0 0 512.001 512.001">
        <path fill='#DA4453' d="M215.5,3.85l0.031,0.031c0.047-0.219,0.125-0.406,0.219-0.594c2.921-5.843,25.078-3.687,49.498,4.812  c23.765,8.281,40.905,19.5,39.093,25.5l-25.875,178.246l-102.809-11.312L215.5,3.85z"/>
    <path fill='#CC374D' d="M190.032,73.317h-0.016c-0.031-0.25-0.062-0.469-0.125-0.719c-1.922-7.219-22.015-8.219-44.89-2.156  c-22.281,5.875-38.968,16.25-38.077,23.468l1.625,210.994l93.404,2.969L190.032,73.317z"/>
    <g>
      <path id="SVGCleanerId_0" fill='#ED5564' d="M329.231,40.286C330.341,39.661,328.028,40.755,329.231,40.286L329.231,40.286z   "/>
    </g>
    <path fill='#ED5564' d="M328.247,145.658l33.779-32.873c0,0,33.781-22.594,13.547-48  c-13.703-17.25-33.608-38.968-51.076-32.03C205.625,80.316,161.798,173.908,161.798,173.908s-63.17-62.654-71.279-37.999  C-26.65,491.869,318.763,540.617,411.87,500.025C470.884,474.275,457.571,210.345,328.247,145.658z"/>
    <g>
      <path id="SVGCleanerId_0_1_" fill="#ED5564" d="M329.231,40.286C330.341,39.661,328.028,40.755,329.231,40.286   L329.231,40.286z"/>
    </g>
    <g opacity='0.1'>
      <path fill='#FFFFFF' d="M106.424,131.94c-7.703-2.969-13.75-2.594-15.906,3.969   C-26.65,491.869,318.763,540.617,411.87,500.025c7.452-3.25,13.749-10.312,18.812-20.281   C335.653,517.743,6.927,469.057,106.424,131.94z"/>
    </g>
    <g>
      <path id="SVGCleanerId_0_2_" fill='#ED5564' d="M329.231,40.286C330.341,39.661,328.028,40.755,329.231,40.286   L329.231,40.286z"/>
    </g>
    <path fill='#DA4453' d="M328.247,145.658l2.531-2.469c-7.203,6.031-19.453,17.781-30.5,35.562  c-15.188,24.468-30.999,65.561-20,122.434c0.984,5.094,5.453,8.656,10.453,8.656c0.672,0,1.359-0.062,2.031-0.219  c5.797-1.094,9.578-6.688,8.453-12.469c-7.703-39.873-2.094-75.623,16.688-106.34c11.625-19,25.015-30.188,29.468-33.594  C341.293,152.877,334.935,149.002,328.247,145.658z"/>
      </svg>
    )}  // Complex SVG for BPM
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 2,
        backgroundColor: 'white',
      }}>
        {dataPoints.map((data, index) => (
          <Box key={index} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: data.color,
          }}>
            {typeof data.svgPath === 'string' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d={data.svgPath} />
              </svg>
            ) : (
              data.svgPath
            )}
            <Typography variant="h6" component="p" sx={{ color: 'white', mt: 1 }}>
              &nbsp;{data.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default SportStat;
