import  { useState } from "react";
import { Avatar, Box, Container, Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ProfileImage from '../Images/Prof1.jpg';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const initialUser = {
    name: "Sriram",
    DOB: "November 5, 2003",
    gender: "Male",
    email: "sriram@gmail.com",
    phone: "+918438564691",
    address: "123 BK Pudhur, London, USA",
    profilePicture: ProfileImage,
  };

  const navigate=useNavigate();

  const [openDialog, setOpenDialog] = useState(false);
  const [user, setUser] = useState(initialUser);

  
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveChanges = () => {
    setOpenDialog(false);
  };
  const bookingHistory=()=>{
    navigate('/user/bookinghistory')
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
          <Avatar sx={{ width: 150, height: 150, margin: "auto" }} src={user.profilePicture} alt={user.name} />
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
              label="Date of Birth"
              type="text"
              fullWidth
              value={user.DOB}
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
