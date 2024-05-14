// ** MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsWithIconAndLabel = () => {
  return (
    <Card>
      <CardHeader title='Buttons avec icone et texte' />
      <CardContent>
        <Typography>
          Il faut utiliser <code>startIcon | endIcon</code> dans <code>&lt;Button&gt;</code> pour avoir un button avec
          du texte et une icone.
        </Typography>
        <div className='demo-space-x'>
          <Button variant='contained' endIcon={<Icon icon='tabler:send' />}>
            Envoyer
          </Button>
          <Button variant='contained' color='secondary' startIcon={<Icon icon='tabler:trash' />}>
            Supprimer
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ButtonsWithIconAndLabel
