import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Home.css'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <AppBar position="fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
            Company Name
          </Typography>
          <Button color="inherit">Our Houseboats</Button>
          <Button color="inherit">Special Features</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Stories</Button>
          <Button color="inherit">Contact</Button>
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
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Book Now
          </Button>
        </Container>
      </div>
      <div className="arrow-container">
        <IconButton component={Link} to="/second" color="inherit">
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default HomePage;
