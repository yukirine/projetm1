// ** MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const ButtonsTonal = () => {
  return (
    <Card>
      <CardHeader title='Tonal' />
      <CardContent>
        <Typography>
          Il faut utiliser <code>variant='tonal'</code> dans <code>&lt;Button&gt;</code> pour avoir un button légèrement
          plein.
        </Typography>
        <div className='demo-space-x'>
          <Button variant='tonal'>Couleur Principale</Button>
          <Button variant='tonal' color='secondary'>
            Couleur Secondaire
          </Button>
          <Button variant='tonal' disabled>
            Désactiver
          </Button>
          <Button variant='tonal' href='#'>
            Lien
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ButtonsTonal
