// ** MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

const TypographyHeadings = () => {
  return (
    <Card>
      <CardHeader title='Headings' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>H1</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h1' sx={{ mb: 2 }}>
              Heading 1
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>H2</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h2' sx={{ mb: 2 }}>
              Heading 2
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>H3</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h3' sx={{ mb: 2 }}>
              Heading 3
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>H4</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h4' sx={{ mb: 2 }}>
              Heading 4
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>H5</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h5' sx={{ mb: 2 }}>
              Heading 5
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>H6</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              Heading 6
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TypographyHeadings
