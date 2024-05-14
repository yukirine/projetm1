// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Views Components Imports
import ButtonsFab from 'src/views/outils/buttons/ButtonsFab'
import ButtonsText from 'src/views/outils/buttons/ButtonsText'
import ButtonsIcons from 'src/views/outils/buttons/ButtonsIcons'
import ButtonsSizes from 'src/views/outils/buttons/ButtonsSizes'
import ButtonsTonal from 'src/views/outils/buttons/ButtonsTonal'
import ButtonsColors from 'src/views/outils/buttons/ButtonsColors'
import ButtonsOutlined from 'src/views/outils/buttons/ButtonsOutlined'
import ButtonsFabSizes from 'src/views/outils/buttons/ButtonsFabSizes'
import ButtonsContained from 'src/views/outils/buttons/ButtonsContained'
import ButtonsCustomized from 'src/views/outils/buttons/ButtonsCustomized'
import ButtonsWithIconAndLabel from 'src/views/outils/buttons/ButtonsWithIconAndLabel'

const Buttons = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <ButtonsContained />
      </Grid>
      <Grid item xs={12}>
        <ButtonsText />
      </Grid>
      <Grid item xs={12}>
        <ButtonsOutlined />
      </Grid>
      <Grid item xs={12}>
        <ButtonsTonal />
      </Grid>
      <Grid item xs={12} md={6}>
        <ButtonsWithIconAndLabel />
      </Grid>
      <Grid item xs={12} md={6}>
        <ButtonsIcons />
      </Grid>
      <Grid item xs={12}>
        <ButtonsSizes />
      </Grid>
      <Grid item xs={12}>
        <ButtonsColors />
      </Grid>
      <Grid item xs={12}>
        <ButtonsCustomized />
      </Grid>
      <Grid item xs={12}>
        <ButtonsFab />
      </Grid>
      <Grid item xs={12}>
        <ButtonsFabSizes />
      </Grid>
    </Grid>
  )
}

export default Buttons
