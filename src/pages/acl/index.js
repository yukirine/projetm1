// ** React Imports
import { useContext } from 'react'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const ACLPage = () => {
  // ** Hooks
  const ability = useContext(AbilityContext)

  return (
    <Grid container spacing={6}>
      <Grid item md={6} xs={12}>
        <Card>
          <CardHeader title='Commun' />
          <CardContent>
            <Typography sx={{ mb: 4 }}>Pas de restrictions</Typography>
            <Typography sx={{ color: 'primary.main' }}>
              Cette card est visible par 'user', 'medecin' et 'admin'
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {ability?.can('read', 'articleMedecin') ? (
        <Grid item md={6} xs={12}>
          <Card>
            <CardHeader title='articleMedecin' />
            <CardContent>
              <Typography sx={{ mb: 4 }}>Rôle avec le droit de lire l'article 'articleMedecin'</Typography>
              <Typography sx={{ color: 'error.main' }}>
                Cette card est uniquement visibile par 'medecin' et 'admin'
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ) : null}
    </Grid>
  )
}
ACLPage.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default ACLPage
