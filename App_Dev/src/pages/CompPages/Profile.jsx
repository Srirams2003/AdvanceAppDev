import { useState, useEffect } from "react";
import { Avatar, Box, Container, Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ProfileImage from '../Images/Prof1.jpg';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Profile = () => {
  const cookie = Cookies.get('email');
  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false);
  const [user, setUser] = useState(null); // Initially, user details are null

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log(cookie);
        const response = await fetch(`http://localhost:8080/users/get/${cookie}`); // Adjust the URL
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error fetching user details:', error.message);
      }
    };

    if (cookie) {
      fetchUserDetails();
    }
  }, [cookie]);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`http://localhost:8080/users/put/${user.email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        
        const updatedUser = await response.json();
        setUser(updatedUser);
        setOpenDialog(false);
      } else {
        console.error('Failed to update user details');
      }
    } catch (error) {
      console.error('Error updating user details:', error.message);
    }
  };

  const bookingHistory = () => {
    navigate('/user/bookinghistory');
  };

  if (!user) {
    return null; 
  }

  return (
    <Box
      sx={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZfQ_ktG2SHIqnuDeFtox5guOlar0d8LLvErxsofSf0ELFyyXVGfHAnI9iR9_g99Fnz8&usqp=CAU')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: "center", marginBottom: 6 }}>
          <Avatar sx={{ width: 150, height: 150, margin: "auto" }} src={ProfileImage} alt={user.name} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ marginTop: 3 }}>{user.name}</Typography>
            <IconButton onClick={handleOpenDialog} sx={{ marginTop: 2 }}>
              <EditIcon />
            </IconButton>
          </Box>
          <Typography variant="subtitle1" sx={{ color: "text.secondary", marginBottom: 2 }}>DOB: {user.DOB}</Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box sx={{ bgcolor: "background.paper", p: 4, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ marginBottom: 3, color: "primary.main" }}>Profile Information</Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}><strong>Gender:</strong> {user.gender}</Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}><strong>Email:</strong> {user.email}</Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}><strong>Phone:</strong> {user.phone}</Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}><strong>Address:</strong> {user.address}</Typography>
              <Button onClick={bookingHistory}>History Booking</Button>
            </Box>
          </Grid>
        </Grid>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              margin="dense"
              id="dob"
              type="date"
              fullWidth
              value={user.DOB}
              max={(new Date()).toISOString().split('T')[0]} 
              onChange={(e) => setUser({ ...user, DOB: e.target.value })}
            />


            <TextField
              margin="dense"
              id="gender"
              label="Gender"
              type="text"
              fullWidth
              value={user.gender}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            />
            <TextField
              disabled
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              value={user.email}
            />
            <TextField
              margin="dense"
              id="phone"
              label="Phone"
              type="text"
              fullWidth
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="text"
              fullWidth
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSaveChanges} variant="contained">Save</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Profile;
