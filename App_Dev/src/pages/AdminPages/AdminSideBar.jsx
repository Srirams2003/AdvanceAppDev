import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, CssBaseline, Divider } from '@mui/material';
import { Menu as MenuIcon, Dashboard as DashboardIcon, Person as PersonIcon } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AdminSideBar({ children }) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ marginLeft: '38%', fontWeight: 'bolder', fontSize: '25px' }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {[
            { text: 'Home', icon: <HomeIcon />, link: '/adminhome' },
            { text: 'Dashboard', icon: <DashboardIcon />, link: '/admindashboard' },
            { text: 'Users', icon: <PersonIcon />, link: '/users' },
            { text: 'Add Boats', icon: <AddCircleIcon />, link: '/addboats' },
          ].map((item) => (
            <ListItem button key={item.text} component={Link} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div style={{ marginLeft: open ? 240 : 0 }}>
        <Toolbar />
        {children}
      </div>
    </div>
  );
}

export default AdminSideBar;
