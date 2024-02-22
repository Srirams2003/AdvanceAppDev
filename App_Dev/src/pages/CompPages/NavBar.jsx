import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const NavBar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div>
            <AppBar position="fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff', fontFamily: 'fantasy', fontSize: '25px', leftMargin: '' }}>
                        The Sea Shell
                    </Typography>
                    <Button color="inherit" onClick={() => handleNavigation('/user/home')}>Home</Button>
                    <Button color="inherit" onClick={() => handleNavigation('/user/special')}>Special Features</Button>
                    <Button color="inherit" onClick={() => handleNavigation('/user/about')}>About Us</Button>
                    <Button color="inherit" onClick={() => handleNavigation('/user/stories')}>Stories</Button>
                    <Button color="inherit" onClick={() => handleNavigation('/user/contact')}>Contact</Button>
                    <Button color="inherit" onClick={() => handleNavigation('/user/profile')}>Profile</Button>
                </Toolbar>
            </AppBar>
            <Footer/>
        </div>
    );
};

export default NavBar;
