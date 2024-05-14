// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Configs
import app, { footer } from 'src/configs/app'

const StyledCompanyName = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.text.secondary} !important`,
  '&:hover': {
    color: `${theme.palette.primary.main} !important`
  }
}))

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2, display: 'flex', color: 'text.secondary' }}>
        {`© ${new Date().getFullYear()} ${app.name}`}
        <Box component='span' sx={{ mx: 1, color: 'error.main' }}>
          🐣
        </Box>
        {`test Yarn JML`}
        {/* <Typography sx={{ ml: 1 }} target='_blank' href='https://pixinvent.com' component={StyledCompanyName}>
          Pixinvent
        </Typography> */}
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Typography target='_blank' component={LinkStyled} href={`${footer.cgu}`}>
            C.G.U.
          </Typography>
          <Typography target='_blank' component={LinkStyled} href={`${footer.cgv}`}>
            C.G.V.
          </Typography>
          <Typography target='_blank' component={LinkStyled} href={`${footer.about}`}>
            A propos
          </Typography>
          <Typography target='_blank' component={LinkStyled} href={`${footer.contact}`}>
            Nous contacter
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
