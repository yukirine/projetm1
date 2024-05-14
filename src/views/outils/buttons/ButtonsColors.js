// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const ButtonsColors = () => {
  return (
    <Card>
      <CardHeader title='Couleurs des buttons' />
      <CardContent>
        <Typography>
          Pour ajouter de la couleur <code>'color'</code> dans <code>&lt;Button&gt;</code>
        </Typography>
        <Fragment>
          <div className='demo-space-x'>
            <Button color='success'>Success</Button>
            <Button color='error'>Error</Button>
            <Button color='warning'>Warning</Button>
            <Button color='info'>Info</Button>
          </div>
          <div className='demo-space-x'>
            <Button variant='outlined' color='success'>
              Success
            </Button>
            <Button variant='outlined' color='error'>
              Error
            </Button>
            <Button variant='outlined' color='warning'>
              Warning
            </Button>
            <Button variant='outlined' color='info'>
              Info
            </Button>
          </div>
          <div className='demo-space-x'>
            <Button variant='contained' color='success'>
              Success
            </Button>
            <Button variant='contained' color='error'>
              Error
            </Button>
            <Button variant='contained' color='warning'>
              Warning
            </Button>
            <Button variant='contained' color='info'>
              Info
            </Button>
          </div>
          <div className='demo-space-x'>
            <Button variant='tonal' color='success'>
              Success
            </Button>
            <Button variant='tonal' color='error'>
              Error
            </Button>
            <Button variant='tonal' color='warning'>
              Warning
            </Button>
            <Button variant='tonal' color='info'>
              Info
            </Button>
          </div>
        </Fragment>
      </CardContent>
    </Card>
  )
}

export default ButtonsColors
