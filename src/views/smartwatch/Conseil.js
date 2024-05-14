import React from 'react';
import { Box, Typography } from '@mui/material';

const Conseil = () => {
  return (
    <Box sx={{
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
    }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenue dans notre application
      </Typography>
      <Typography variant="body1">
        C'est ici que nous commençons notre aventure dans la création d'applications avec React et Material-UI. Explorez, apprenez et créez avec nous.
      </Typography>
    </Box>
  );
};

export default Conseil;
