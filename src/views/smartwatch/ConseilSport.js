import React from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
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
  const healthTip = 'Etirer vous après le sport.';

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
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" version="1.1" id="Layer_1" viewBox="0 0 300.833 300.833" >
<g>
	<path fill='#D8D8D8' d="M257.445,227.621c-2.925-13.486-13.435-24.034-26.91-27.008l-49.316-10.885   c-1.153,15.917-30.822,40.606-30.822,40.606s-29.338-24.732-30.45-40.688l-49.688,10.967c-13.475,2.974-23.985,13.522-26.91,27.008   l-9.126,42.076c13.14,8.612,28.709,15.764,46.016,21.034c21.242,6.469,45.104,10.102,70.326,10.102   c25.092,0,48.839-3.595,69.999-10.001c17.31-5.241,32.886-12.364,46.047-20.945L257.445,227.621z"/>
	<g>
		<path fill='#2B2B2B' d="M129.762,187.479h41.269c0,0,0.938,20.772-19.681,20.772S129.731,191.687,129.762,187.479z"/>
	</g>
	<g>
		<polygon fill='#DDC29B' points="133.586,218 150.398,233.333 167.586,217.333 167.586,164.833 133.586,164.833   "/>
	</g>
	<g>
		<path fill='#E8D8BF' d="M235.748,109.553c0-7.098-4.379-13.164-10.578-15.671c0.222-2.471,0.341-4.918,0.341-7.327    c0-41.38-33.545-56.194-74.925-56.194S75.661,45.175,75.661,86.555c0,2.409,0.118,4.856,0.341,7.327    c-6.199,2.507-10.578,8.573-10.578,15.671c0,9.179,12.356,21.685,21.646,22.107c13.249,26.661,36.74,48.551,63.516,48.551    s50.267-21.89,63.516-48.551C223.392,131.238,235.748,118.733,235.748,109.553z"/>
	</g>
	<g>
		<path fill='#BDC3C7' d="M70.922,200.466c14.126,28.117,12.31,59.393,9.318,90.265c5.909,1.799,12.027,3.371,18.314,4.714    c-0.098-33.394-1.199-67.222-13.361-98.128L70.922,200.466z"/>
	</g>
	<g>
		<path fill='#BDC3C7' d="M118.642,189.933l-15.716,3.469c7.55,34.207,12.901,69.815,12.84,105.046    c4.406,0.609,8.88,1.104,13.412,1.485C130.413,262.909,125.575,226.408,118.642,189.933z"/>
	</g>
	<g>
		<path fill='#BDC3C7' d="M229.872,200.466c-14.126,28.117-12.31,59.393-9.318,90.265    c-5.909,1.799-12.027,3.371-18.314,4.714c0.098-33.394,1.199-67.222,13.361-98.128L229.872,200.466z"/>
	</g>
	<g>
		<path fill='#BDC3C7' d="M182.152,189.933l15.716,3.469c-7.55,34.207-12.901,69.815-12.84,105.046    c-4.406,0.609-8.88,1.104-13.412,1.485C170.381,262.909,175.22,226.408,182.152,189.933z"/>
	</g>
	<g>
		<g>
			<path fill='#BDC3C7' d="M159.23,222.281c-4.978,4.841-8.833,8.053-8.833,8.053s-3.863-3.26-8.833-8.166v78.493     c2.981,0.106,5.978,0.172,9.002,0.172c2.907,0,5.795-0.053,8.664-0.149L159.23,222.281L159.23,222.281z"/>
		</g>
	</g>
	<g>
		<path fill='#595155' d="M181.219,189.728l-10.188-2.249c0,11.481-20.481,40.854-20.481,40.854    s-20.788-29.373-20.789-40.854l-9.816,2.167c0.844,12.099,17.913,38.438,26.118,50.468v38.22h9v-38.626    C163.467,227.51,180.355,201.659,181.219,189.728z"/>
	</g>
	<g>
		<path fill='#DDCDB6' d="M225.148,93.882c0.222-2.471,0.341-4.918,0.341-7.327c0-41.38-33.545-56.194-74.925-56.194    S75.639,45.175,75.639,86.555c0,2.409,0.118,4.856,0.341,7.327c-6.199,2.507-10.578,8.573-10.578,15.671    c0,9.179,12.356,21.685,21.646,22.107c13.249,26.661,36.74,48.551,63.516,48.551s50.267-21.89,63.516-48.551    c9.29-0.422,21.646-12.928,21.646-22.107C235.726,102.455,231.348,96.389,225.148,93.882z M150.564,177.741    c-31.403,0-56.86-51.012-56.86-83.904s25.457-45.281,56.86-45.281s56.86,12.389,56.86,45.281S181.967,177.741,150.564,177.741z"/>
	</g>
	<g>
		<path fill='#2B2B2B' d="M222.896,101.225c0,0-2.98,17.88-15.868,29.734c0,0,9.056-22.071,3.096-33.991"/>
	</g>
	<g>
		<path fill='#2B2B2B' d="M78.276,101.225c0,0,2.98,17.88,15.868,29.734c0,0-9.056-22.071-3.096-33.991"/>
	</g>
	<g>
		<path fill='#A8AFB2' d="M232.898,80.333H68.231l4.737-45.905c2.079-13.857,13.215-24.584,27.139-26.144l50.124-5.617    l50.763,5.638c13.937,1.548,25.089,12.28,27.17,26.148L232.898,80.333z"/>
	</g>
	<g>
		<path fill='#BDC3C7' d="M216.907,80.061L84.541,80.605l3.619-45.921c1.614-13.863,10.521-24.628,21.708-26.234    l40.269-5.783l40.829,5.47c11.21,1.502,20.218,12.197,21.948,26.058L216.907,80.061z"/>
	</g>
	<g>
		<path fill='#6E7172' d="M150.564,92.07c25.624,0,51.074,15.297,63.252,23.808c3.949,2.76,8.874,0.331,10.394-5.107    l8.521-30.488c-33.833-30.003-82.167-29.574-82.167-29.574s-48.501-0.429-82.333,29.574l8.526,30.506    c1.518,5.432,6.436,7.864,10.384,5.114C99.352,107.397,124.914,92.07,150.564,92.07z"/>
	</g>
	<g>
		<ellipse fill='#6E7172' cx="150.564" cy="3.333" rx="8.167" ry="3.333"/>
	</g>
</g>
</svg>

          <Typography variant="h6" component="h3" sx={{ marginBottom: 2 , fontSize: '1.8rem', fontWeight: 'bold' }}>
          &nbsp;Conseil sport du jour
          </Typography>
          <Typography>&nbsp;{healthTip}</Typography>
        

        
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
