// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Views Imports
import TypographyTexts from 'src/views/outils/typographie/TypographyTexts'
import TypographyHeadings from 'src/views/outils/typographie/TypographyHeadings'

const Typographie = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <TypographyHeadings />
      </Grid>
      <Grid item xs={12}>
        <TypographyTexts />
      </Grid>
    </Grid>
  )
}

export default Typographie
