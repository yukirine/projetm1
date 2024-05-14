// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsFabSizes = () => {
  return (
    <Card>
      <CardHeader title='Tailles des buttons Fab' />
      <CardContent>
        <Typography>
          Il faut utiliser <code>size={`{'small' | 'medium' | 'large'}`}</code> dans <code>&lt;Fab&gt;</code> pour
          modifier la taille.
        </Typography>
        <Fragment>
          <div className='demo-space-x'>
            <Fab color='primary' aria-label='add' size='small'>
              <Icon icon='tabler:plus' />
            </Fab>
            <Fab color='primary' aria-label='add' size='medium'>
              <Icon icon='tabler:plus' />
            </Fab>
            <Fab color='primary' aria-label='add' size='large'>
              <Icon icon='tabler:plus' />
            </Fab>
          </div>
          <div className='demo-space-x'>
            <Fab variant='extended' size='small' sx={{ '& svg': { mr: 1 } }}>
              <Icon icon='tabler:location' />
              Localisation
            </Fab>
            <Fab variant='extended' size='medium' sx={{ '& svg': { mr: 1 } }}>
              <Icon icon='tabler:location' />
              Localisation
            </Fab>
            <Fab variant='extended' size='large' sx={{ '& svg': { mr: 1 } }}>
              <Icon icon='tabler:location' />
              Localisation
            </Fab>
          </div>
        </Fragment>
      </CardContent>
    </Card>
  )
}

export default ButtonsFabSizes
