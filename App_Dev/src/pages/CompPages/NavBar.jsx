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
            <AppBar position="fixed" style={{ backgroundColor: '#4c3c3c', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff', fontFamily: 'fantasy', fontSize: '25px' }}>
                        The Sea Shell
                    </Typography>
                    <Button color="inherit" onClick={() => handleNavigation('/user/home')} sx={{ margin: '0 10px' }}>Home</Button>
                    <Button color="inherit" onClick={() => handleNavigation('/user/second')} sx={{ margin: '0 10px' }}>About Us</Button>
                    <Button color="inherit" onClick={() => handleNavigation('/user/contact')} sx={{ margin: '0 10px' }}>Contact</Button>  
                    <Button color="inherit" onClick={() => handleNavigation('/user/profile')} sx={{ margin: '0 10px' }}>Profile</Button>
                </Toolbar>
            </AppBar>
            <Footer/>
        </div>
    );
};

export default NavBar;
