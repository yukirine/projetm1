// ** React Imports
import { useEffect, useState } from 'react';

// ** MUI Imports
import Grid from '@mui/material/Grid';

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux';

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings';

import Box from '@mui/system/Box';
const Smartwatch = () => {
  // ** Hooks
  const { settings } = useSettings();
  const dispatch = useDispatch();
  const store = useSelector(state => state.calendar);

  return (
    <Box>hihi</Box>
  );
};

export default Smartwatch;
