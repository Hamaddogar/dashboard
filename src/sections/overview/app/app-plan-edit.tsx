// @mui
import { Paper } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';
import AppPlan from './app-plan';
import AppEdit from './app-edit';
// theme

// ----------------------------------------------------------------------
export default function AppPlanandEdit() {
  return (
    <Paper elevation={7} sx={{ backgroundColor: '#1BFCB6' }}>
      <Grid container spacing='10px'>
        <Grid xs={12} md={6}>
          <AppPlan elevation={0} />
        </Grid>
        <Grid xs={12} md={6}>
          <AppEdit elevation={0} />
        </Grid>
      </Grid>
    </Paper>
  );
}
