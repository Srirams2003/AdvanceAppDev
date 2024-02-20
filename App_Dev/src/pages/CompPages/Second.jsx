import { Grid, Paper } from '@mui/material';

const Second = () => {
  return (
    <Grid container spacing={0} style={{ height: '100%' }}>
      <Grid item xs={4}>
        <Paper style={{ height: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Left Side (40%)
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper style={{ height: '100%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Right Side (60%)
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Second;
