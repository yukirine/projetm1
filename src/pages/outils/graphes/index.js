// ** Next Import
import Link from 'next/link'

// ** React
import toast from 'react-hot-toast'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** PageHeader
import PageHeader from 'src/@core/components/page-header'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** ApexChart Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Views Imports
import ApexBarChart from 'src/views/outils/graphes/ApexBarChart'
import ApexAreaChart from 'src/views/outils/graphes/ApexAreaChart'
import ApexLineChart from 'src/views/outils/graphes/ApexLineChart'
import ApexRadarChart from 'src/views/outils/graphes/ApexRadarChart'
import ApexDonutChart from 'src/views/outils/graphes/ApexDonutChart'
import ApexColumnChart from 'src/views/outils/graphes/ApexColumnChart'
import ApexScatterChart from 'src/views/outils/graphes/ApexScatterChart'
import ApexRadialBarChart from 'src/views/outils/graphes/ApexRadialBarChart'
import ApexCandlestickChart from 'src/views/outils/graphes/ApexCandlestickChart'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const notify = () => {
  toast.success('Cette page sera enrichie prochainement', {
    duration: 3000
  })
}

const Graphes = () => {
  return (
    <ApexChartWrapper>
      {notify()}
      <DatePickerWrapper>
        <Grid container spacing={6} className='match-height'>
          <PageHeader
            title={
              <Typography variant='h4'>
                <LinkStyled href='https://github.com/apexcharts/react-apexcharts' target='_blank'>
                  React ApexCharts <Icon icon='bi:github' />
                </LinkStyled>
              </Typography>
            }
            subtitle={
              <Typography sx={{ color: 'text.secondary' }}>
                Pour Adel et Julie pour la partie IoT. Les exemples viennent du Git ci-dessus.
              </Typography>
            }
          />
          <Grid item xs={12}>
            <ApexAreaChart />
          </Grid>
          <Grid item xs={12}>
            <ApexColumnChart />
          </Grid>
          <Grid item xs={12}>
            <ApexScatterChart />
          </Grid>
          <Grid item xs={12}>
            <ApexLineChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <ApexBarChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <ApexCandlestickChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <ApexRadialBarChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <ApexRadarChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <ApexDonutChart />
          </Grid>
        </Grid>
      </DatePickerWrapper>
    </ApexChartWrapper>
  )
}

export default Graphes
