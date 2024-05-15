import React, { Fragment } from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Typography from '@mui/material/Typography';
import SleepQuality from './SleepQuality';

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

const sleepData = () => {
  const sleepStages = {
    labels: ["22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
    datasets: [
      {

        label: 'Stages of Sleep',
        data: [1, 2, 2, 3, 2, 3, 2, 1, 0],
        fill: false,
        borderColor: '#73A5C6',
        tension: 0.4, 
      }
    ]
  };

  const options = {
   plugins: {
    legend: {
      display: false // This will hide the legend
    }
  },
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            switch(value) {
              case 0: return "Éveil";
              case 1: return "Léger";
              case 2: return "Profond";
              case 3: return "REM";
              default: return "";
            }
          },
          color: '#FBFAF5' // Color of y-axis labels
        },
        grid: {
          display: false,
          color: '#FBFAF5',
          drawBorder: true,
        },
        // Change color of y-axis line
        color: '#FBFAF5'
      },
      x: {
        grid: {
          display: true,
        },
        // Change color of x-axis labels and line
        ticks: {
          color: '#FBFAF5' // Color of x-axis labels
        },
        color: 'white' // Color of x-axis line
      }
    },
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4 // Make sure lines are smooth
      }
    }
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        
        <Box
          sx={{
            padding: 4,
            margin: 2,
            background: 'linear-gradient(180deg, #003152 0%, #2E5984 100%)',
            borderRadius: 1,
            boxShadow: 1,
            height: '55vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '100%', // Makes the Box responsive
          }}
        >
         
         <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
              <Box
                sx={{
                  height: '10vh',
                  width: '100%',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg"  height="80px" width="80px" version="1.1" id="Layer_1" viewBox="0 0 512 512" >
<g>
	<path fill="#F6BB42" d="M501.327,191.876h-10.656v-21.094c0-5.906-4.781-10.672-10.672-10.672s-10.672,4.766-10.672,10.672   v21.094h-10.656c-5.891,0-10.672,4.781-10.672,10.688c0,5.875,4.781,10.656,10.672,10.656h10.656v21.344   c0,5.875,4.781,10.656,10.672,10.656s10.672-4.781,10.672-10.656V213.22h10.656c5.891,0,10.672-4.781,10.672-10.656   C511.999,196.657,507.218,191.876,501.327,191.876z"/>
	<path fill="#F6BB42" d="M351.999,277.109h-10.672V256c0-5.891-4.766-10.672-10.656-10.672s-10.672,4.781-10.672,10.672   v21.109h-10.672c-5.891,0-10.656,4.766-10.656,10.672c0,5.875,4.766,10.656,10.656,10.656h10.672v21.344   c0,5.875,4.781,10.656,10.672,10.656s10.656-4.781,10.656-10.656v-21.344h10.672c5.891,0,10.672-4.781,10.672-10.656   C362.671,281.875,357.89,277.109,351.999,277.109z"/>
</g>
<path fill='#FFCE54' d="M168.077,343.922c-64.734-64.734-79.156-160.734-43.281-239.391  c-22.578,10.281-43.734,24.719-62.312,43.281c-83.312,83.312-83.312,218.391,0,301.703s218.391,83.312,301.703,0  c18.578-18.578,33-39.734,43.281-62.297C328.796,423.078,232.811,408.656,168.077,343.922z"/>
<path fill="#DA4453" d="M502.202,76.031c-1.453-0.109-36.234-2.875-80.781,2.344c-26.281,3.094-50.5,8.344-72,15.594  c-27.297,9.234-50.297,21.766-68.359,37.281l13.891,16.188c36.422-31.25,90-43.25,128.547-47.812  c42.375-5.016,76.406-2.375,76.969-2.344c0.281,0.031,0.578,0.047,0.859,0.047c5.891,0,10.672-4.766,10.672-10.672  C511.999,81.063,507.687,76.484,502.202,76.031z"/>
<path fill="#ED5565" d="M214.405,266.875c0,5.906-4.781,10.688-10.672,10.688s-10.656-4.781-10.656-10.688  c0-5.875,4.766-10.656,10.656-10.656S214.405,261,214.405,266.875z"/>
<path fill="#FC6E51" d="M405.327,10.656c0,5.906-4.766,10.672-10.656,10.672s-10.672-4.766-10.672-10.672  C383.999,4.781,388.78,0,394.671,0S405.327,4.781,405.327,10.656z"/>
<path fill="#AC92EC" d="M511.999,309.438c0,5.891-4.781,10.672-10.672,10.672s-10.656-4.781-10.656-10.672  s4.766-10.656,10.656-10.656S511.999,303.547,511.999,309.438z"/>
<path fill="#ED5565" d="M319.999,139.344c0,17.656-14.328,32-32,32s-32-14.344-32-32c0-17.688,14.328-32,32-32  S319.999,121.656,319.999,139.344z"/>
<path fill="#F6BB42" d="M199.327,64.001h-10.656V42.875c0-5.875-4.781-10.656-10.672-10.656S167.327,37,167.327,42.875  v21.125h-10.656c-5.891,0-10.672,4.781-10.672,10.656c0,5.906,4.781,10.672,10.672,10.672h10.656v21.328  c0,5.906,4.781,10.672,10.672,10.672s10.672-4.766,10.672-10.672V85.329h10.656c5.891,0,10.672-4.766,10.672-10.672  C209.999,68.781,205.218,64.001,199.327,64.001z"/>
</svg>
              </Box>
            </Grid>
            <Grid item>
              {/* Ajout du titre */}
              <Typography variant="h4" sx={{ color: '#FBFAF5' ,marginBottom: 2 , fontSize: '1.8rem', fontWeight: 'bold' }}>
              &nbsp;Données sommeil
              </Typography>
            </Grid>
          </Grid>
        
          <Box
            sx={{
              height: '25vh',
              width: '100%',
              marginBottom: 4,
              marginTop:0,
            }}
          >
            <Line data={sleepStages} options={options} />
          </Box>
          
          <Box
            sx={{
              height: '10vh',
              width: '100%',
              backgroundColor: 'transparent',
              marginBottom: 0,
            }}
          >
            <SleepQuality />
          </Box>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
};

export default sleepData;




