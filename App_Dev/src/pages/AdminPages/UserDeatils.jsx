import React, { useState } from 'react';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
} from '@mui/material';
import AdminLayout from './AdminLayout';

const UserDetails = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [newUser, setNewUser] = useState({
        name: '',
        DOB: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddUser = () => {
        // Add new user to the userData array
        // You can perform validation here before adding the user
        // For simplicity, let's assume all fields are required
        if (Object.values(newUser).every(value => value.trim() !== '')) {
            setUserData(prevState => [...prevState, newUser]);
            setNewUser({
                name: '',
                DOB: '',
                gender: '',
                email: '',
                phone: '',
                address: '',
            });
            setOpenDialog(false);
        } else {
            alert('Please fill in all fields');
        }
    };

    const [userData, setUserData] = useState([
        {
            name: "Sriram",
            DOB: "November 5, 2003",
            gender: "Male",
            email: "sriram@gmail.com",
            phone: "+918438564691",
            address: "123 BK Pudhur, London, USA",
            profilePicture: "ProfileImage"
        },
        // Other user data...
    ]);

    return (
        <div style={{backgroundImage: `url('https://thumbs.dreamstime.com/b/simple-white-brick-wall-light-gray-shades-seamless-pattern-surface-texture-background-banner-wide-panorama-format-simple-137027626.jpg')`,minHeight:'100vh'}}>
            <AdminLayout/>
            <Typography variant="h4" align="center" style={{ marginBottom: '20px', fontWeight: 'bold',marginTop:'35px' }}>
                Registered Users
            </Typography>
            <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)} style={{ marginLeft: '30px', marginBottom: '20px' }}>
                Add User
            </Button>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Add New User</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        name="name"
                        value={newUser.name}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        
                        type="date"
                        name="DOB"
                        value={newUser.DOB}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Gender</InputLabel>
                        <Select
                            label="Gender"
                            name="gender"
                            value={newUser.gender}
                            onChange={handleInputChange}
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Email"
                        name="email"
                        value={newUser.email}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Phone"
                        name="phone"
                        value={newUser.phone}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Address"
                        name="address"
                        value={newUser.address}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={handleAddUser}>
                        Add User
                    </Button>
                </DialogContent>
            </Dialog>
            <div style={{marginLeft:'30px',marginRight:'50px'}}>
                <TableContainer component={Paper} style={{paddingLeft:'30px',marginRight:'150px'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Date of Birth</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userData.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.DOB}</TableCell>
                                    <TableCell>{user.gender}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.address}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default UserDetails;
