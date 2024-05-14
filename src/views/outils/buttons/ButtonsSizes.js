// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsSizes = () => {
  return (
    <Card>
      <CardHeader title='Tailles des buttons' />
      <CardContent>
        <Typography>
          Pour des buttons de différentes tailles <code>size={`{'small' | 'medium' | 'large'}`}</code> dans{' '}
          <code>&lt;Button&gt;</code>. Pour utiliser les buttons avec icônes, il faut{' '}
          <code>size={`{small | large}`}</code> dans <code>&lt;IconButton&gt;</code> ou bien utiliser{' '}
          <code>fontSize</code> avec les icônes.
        </Typography>
        <Fragment>
          <div className='demo-space-x'>
            <Button variant='text' size='small'>
              Small
            </Button>
            <Button variant='text' size='medium'>
              Medium
            </Button>
            <Button variant='text' size='large'>
              Large
            </Button>
          </div>
          <div className='demo-space-x'>
            <Button variant='outlined' size='small'>
              Small
            </Button>
            <Button variant='outlined' size='medium'>
              Medium
            </Button>
            <Button variant='outlined' size='large'>
              Large
            </Button>
          </div>
          <div className='demo-space-x'>
            <Button variant='contained' size='small'>
              Small
            </Button>
            <Button variant='contained' size='medium'>
              Medium
            </Button>
            <Button variant='contained' size='large'>
              Large
            </Button>
          </div>
          <div className='demo-space-x'>
            <Button variant='tonal' size='small'>
              Small
            </Button>
            <Button variant='tonal' size='medium'>
              Medium
            </Button>
            <Button variant='tonal' size='large'>
              Large
            </Button>
          </div>
          <div className='demo-space-x'>
            <IconButton aria-label='capture screenshot' color='secondary' size='small'>
              <Icon icon='tabler:aperture' fontSize='inherit' />
            </IconButton>
            <IconButton aria-label='capture screenshot' color='secondary'>
              <Icon icon='tabler:aperture' fontSize={20} />
            </IconButton>
            <IconButton aria-label='capture screenshot' color='secondary'>
              <Icon icon='tabler:aperture' />
            </IconButton>
            <IconButton aria-label='capture screenshot' color='secondary' size='large'>
              <Icon icon='tabler:aperture' fontSize={35} />
            </IconButton>
          </div>
        </Fragment>
      </CardContent>
    </Card>
  )
}

export default ButtonsSizes
