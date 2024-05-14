// ** MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const ButtonsContained = () => {
  return (
    <Card>
      <CardHeader title='Contained' />
      <CardContent>
        <Typography>
          Il faut utiliser <code>variant='contained'</code> dans <code>&lt;Button&gt;</code> pour avoir un button plein.
        </Typography>
        <div className='demo-space-x'>
          <Button variant='contained'>Couleur Principale</Button>
          <Button variant='contained' color='secondary'>
            Couleur Secondaire
          </Button>
          <Button variant='contained' disabled>
            Désactiver
          </Button>
          <Button variant='contained' href='#'>
            Lien
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ButtonsContained
