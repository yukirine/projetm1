// ** MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const ButtonsOutlined = () => {
  return (
    <Card>
      <CardHeader title='Outlined' />
      <CardContent>
        <Typography>
          Il faut utiliser <code>variant='outlined'</code> dans <code>&lt;Button&gt;</code> pour avoir un button avec
          des contours.
        </Typography>
        <div className='demo-space-x'>
          <Button variant='outlined'>Couleur Principale</Button>
          <Button variant='outlined' color='secondary'>
            Couleur Secondaire
          </Button>
          <Button variant='outlined' disabled>
            Désactiver
          </Button>
          <Button variant='outlined' href='#'>
            Lien
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ButtonsOutlined
