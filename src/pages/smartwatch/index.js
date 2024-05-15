// ** React Imports
import { useEffect, useState } from 'react';

// ** MUI Imports
import Grid from '@mui/material/Grid';

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux';

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings';

// ** FullCalendar & App Components Imports
import HearthRate from 'src/views/smartwatch/HearthRate.js';
import Pedometre from 'src/views/smartwatch/Pedometre.js';
import SleepData from 'src/views/smartwatch/SleepData.js';
import Conseil from 'src/views/smartwatch/Conseil.js';
import SportData from 'src/views/smartwatch/SportData';
import ConseilSport from 'src/views/smartwatch/ConseilSport';
const Smartwatch = () => {
  // ** Hooks
  const { settings } = useSettings();
  const dispatch = useDispatch();
  const store = useSelector(state => state.calendar);

  return (
    <Grid container spacing={2}> {/* Espacement entre les colonnes */}
    <Grid item xs={12}> {/* Prend 6 colonnes sur 12, donc la moitié de l'espace disponible */}
      <Pedometre />
      
    </Grid>
    <Grid item xs={5}> {/* Prend 6 colonnes sur 12, donc la moitié de l'espace disponible */}
      <Conseil />
      
    </Grid>
    <Grid item xs={7}>
      <HearthRate />
       
    </Grid>
    <Grid item xs={12}>
      <SleepData />
      
    </Grid>
    <Grid item xs={8}>
      <SportData />
      
    </Grid>
    <Grid item xs={4}>
    <ConseilSport />
      
    </Grid>
  </Grid>
  );
};

export default Smartwatch;
