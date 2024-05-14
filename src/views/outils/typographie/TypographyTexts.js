// ** MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

const TypographyTexts = () => {
  return (
    <Card>
      <CardHeader title='Texts' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>subtitle1</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='subtitle1' sx={{ mb: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>subtitle2</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='subtitle2' sx={{ mb: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>body1</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography sx={{ mb: 2 }}>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>body2</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='body2' sx={{ mb: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>button</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='button'>Button Text</Typography>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>caption</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='caption'>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>overline</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='overline'>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TypographyTexts
