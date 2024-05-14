// ** MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const ButtonsText = () => {
  return (
    <Card>
      <CardHeader title='Text' />
      <CardContent>
        <Typography>
          Il faut utiliser <code>variant='text'</code> dans <code>&lt;Button&gt;</code> pour avoir un button avec
          seulement du texte.
        </Typography>
        <div className='demo-space-x'>
          <Button variant='text'>Couleur Principale</Button>
          <Button variant='text' color='secondary'>
            Couleur Secondaire
          </Button>
          <Button variant='text' disabled>
            Désactiver
          </Button>
          <Button variant='text' href='#'>
            Lien
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ButtonsText
