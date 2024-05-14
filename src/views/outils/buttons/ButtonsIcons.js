// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsIcons = () => {
  return (
    <Card>
      <CardHeader title='Buttons avec icone' />
      <CardContent>
        <Typography>
          <code>&lt;IconButton&gt;</code> Pour changer la couleur <code>color</code> dans{' '}
          <code>&lt;IconButton&gt;</code>.
        </Typography>
        <div className='demo-space-x'>
          <IconButton aria-label='capture screenshot'>
            <Icon icon='tabler:aperture' />
          </IconButton>
          <IconButton aria-label='capture screenshot' color='primary'>
            <Icon icon='tabler:aperture' />
          </IconButton>
          <IconButton aria-label='capture screenshot' color='secondary'>
            <Icon icon='tabler:aperture' />
          </IconButton>
          <IconButton aria-label='capture screenshot' disabled>
            <Icon icon='tabler:aperture' />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  )
}

export default ButtonsIcons
