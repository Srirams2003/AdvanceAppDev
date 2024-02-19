import React from 'react';
import { Button, Container, Typography, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const FirstPage = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <Grid container style={{ height: '100vh' }}>
      <Grid item xs={6} style={{ backgroundColor: '#FFDAB9' }}>
        <Container style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Typography variant="h4">First Half</Typography>
        </Container>
      </Grid>
      <Grid item xs={6} style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEqC544WNEK2ruQdFPOvpwDbo0aSDEWv1Kg&usqp=CAU')`, backgroundSize: 'cover', }}>
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Box bgcolor="#E6F8F6" padding={2} borderRadius={2}>
          <Box
          style={{ 
            backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMIqaKjr_p2JiHpSkRN3SDdsTTjEp0hJzTw&usqp=CAU)',
            backgroundSize: 'cover',
            height: 450,
            width: 400,
            padding: '20px',
            borderRadius: 20,
          }}
        >
              <center>
                <Typography variant="h5" padding={'15px'} gutterBottom>Pick a Gateway to Enter</Typography>
              </center>
              
                <Box display="block" justifyContent="center">
                <center>
                
                <div>
                <Button onClick={handleLoginClick} variant="contained" color="primary" size="large" sx={{ width: '150px', height: '60px', marginBottom: '30px',marginTop: '50px',borderRadius:'15px' }}>Login</Button>
                </div>
                <div>
                <Button onClick={handleSignupClick} variant="contained" color="primary" size="large" sx={{ width: '150px', height: '60px', marginTop: '30px',borderRadius:'15px' }}>Signup</Button>
                </div>
                </center>
                </Box>
              </Box>
            </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default FirstPage;
