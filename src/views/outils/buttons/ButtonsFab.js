// ** MUI Imports
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsFab = () => {
  return (
    <Card>
      <CardHeader title='Buttons Fab' />
      <CardContent>
        <Typography>
          Utiliser <code>'color'</code> dans <code>&lt;Fab&gt;</code> pour un button de type Fab et{' '}
          <code>variant='extended'</code> pour un bouton d'action Fab étendu (non rond).
        </Typography>
        <>
          <Typography sx={{ fontWeight: 500 }}>Circulaire</Typography>
          <Box sx={{ mb: 6 }} className='demo-space-x'>
            <Fab aria-label='edit'>
              <Icon icon='tabler:pencil' />
            </Fab>
            <Fab color='primary' aria-label='edit'>
              <Icon icon='tabler:pencil' />
            </Fab>
            <Fab color='secondary' aria-label='edit'>
              <Icon icon='tabler:pencil' />
            </Fab>
            <Fab color='success' aria-label='edit'>
              <Icon icon='tabler:pencil' />
            </Fab>
            <Fab color='error' aria-label='edit'>
              <Icon icon='tabler:pencil' />
            </Fab>
            <Fab color='warning' aria-label='edit'>
              <Icon icon='tabler:pencil' />
            </Fab>
            <Fab color='info' aria-label='edit'>
              <Icon icon='tabler:pencil' />
            </Fab>
            <Fab disabled aria-label='edit'>
              <Icon icon='tabler:pencil' />
            </Fab>
          </Box>
          <Typography sx={{ fontWeight: 500 }}>Circulaire étendu</Typography>
          <div className='demo-space-x'>
            <Fab variant='extended' sx={{ '& svg': { mr: 1 } }}>
              <Icon icon='tabler:plus' />
              Add
            </Fab>
            <Fab color='primary' variant='extended' sx={{ '& svg': { mr: 1 } }}>
              <Icon icon='tabler:plus' />
              Add
            </Fab>
            <Fab color='secondary' variant='extended' sx={{ '& svg': { mr: 1 } }}>
              <Icon icon='tabler:plus' />
              Add
            </Fab>
            <Fab color='success' variant='extended' sx={{ '& svg': { mr: 1 } }}>
              <Icon icon='tabler:plus' />
              Add
            </Fab>
            <Fab color='error' variant='extended' sx={{ '& svg': { mr: 1 } }}>
              <Icon icon='tabler:plus' />
              Add
            </Fab>
            <Fab color='warning' variant='extended' sx={{ '& svg': { mr: 1 } }}>
              <Icon icon='tabler:plus' />
              Add
            </Fab>
            <Fab color='info' variant='extended' sx={{ '& svg': { mr: 1 } }}>
              <Icon icon='tabler:plus' />
              Add
            </Fab>
            <Fab disabled variant='extended' sx={{ '& svg': { mr: 1 } }}>
              <Icon icon='tabler:plus' />
              Add
            </Fab>
          </div>
        </>
      </CardContent>
    </Card>
  )
}

export default ButtonsFab
