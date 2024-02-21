import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton } from '@mui/material';
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import { Link } from 'react-router-dom';
import './Home.css'; 

const HomePage = () => {
    
  return (
    <div className="home-page">
      <AppBar position="fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff', fontFamily:'fantasy', fontSize:'25px',leftMargin:''}}>
            The Sea Shell
          </Typography>
          <Button color="inherit">Our Houseboats</Button>
          <Button color="inherit">Special Features</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Stories</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Profile</Button>
        </Toolbar>
      </AppBar>
      <div className="content">
        <Container maxWidth="lg" sx={{ textAlign: 'center', color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.3)', paddingBottom: '64px' }}>
          <Typography variant="h4" gutterBottom style={{ fontWeight: 'bolder', fontSize: '45px', color: 'snow' }}>
            Welcome to a Tropical Symphony
          </Typography>
          <Typography variant="body1" style={{ fontSize: '25px' }}>
            Luxury houseboat cruise in the backwaters of Alappuzha
          </Typography>
          <Link to="/bookinghome">
  <Button variant="contained" color="primary" style={{ marginTop: '20px' }} >
    Book Now
  </Button>
</Link>
        </Container>
      </div>
      <div className="arrow-container">
      <IconButton component={Link} to="/second" color="inherit" style={{ fontSize: '40px' }}>
        <ExpandCircleDownSharpIcon fontSize='0.5px'/>
      </IconButton>

    
      </div>
    </div>
  );
};

export default HomePage;
