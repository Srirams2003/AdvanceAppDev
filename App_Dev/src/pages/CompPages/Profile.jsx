import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';

import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Profile = () => {
    const [userData, setUserData] = useState({
        name: 'Modiji',
        email: 'modi@gmail.com',
        profilePicture: 'profile-picture.jpg',
        contact: '8438564691',
        address: 'No.5,Anna Nagar,Delhi-01',        
    });

    const [bookingHistory, setBookingHistory] = useState([
        { id: 1, date: '2024-02-21', status: 'Confirmed' },
        { id: 2, date: '2024-03-15', status: 'Pending' },
    ]);

    useEffect(() => {
        // API CALL PANNANUM
    }, []);

    return (
        <div style={{ marginTop: '100px', marginLeft: '55px',marginRight:'55px' }}>
            <center>
                <Typography variant="h4" gutterBottom style={{ marginBottom: '85px' }}>User Profile</Typography>
            </center>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'whitesmoke', paddingTop: '25px', paddingBottom: '25px' }}>
                <div className="profile-picture" style={{ marginRight: '125px' }}>
                    <center>
                        <Avatar
                            alt="Modi ji"
                            src="https://th.bing.com/th/id/OIP.EWOspfJGuA_VRUDKgfHIiAHaIJ?w=149&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            style={{ width: '200px', height: '200px' }}
                        />
                    </center>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="h5" gutterBottom style={{ fontSize: '35px' }}>User Information</Typography>
                    <Typography variant="body1" gutterBottom>Name: {userData.name}</Typography>
                    <Typography variant="body1" gutterBottom>Email: {userData.email}</Typography>
                    <Typography variant="body1" gutterBottom>Contact: {userData.contact}</Typography>
                    <Typography variant="body1" gutterBottom>Address: {userData.address}</Typography>
                </div>
            </div>
            <div style={{ backgroundColor: 'whitesmoke' }}>
            <br/>
            <br/>
            <br/>
            <br/>
                <Typography variant="h5" gutterBottom>Booking History</Typography>
                <TableContainer component={Paper} style={{ backgroundColor: 'whitesmoke' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: 'bold' }}>Booking ID</TableCell>
                                <TableCell style={{ fontWeight: 'bold' }}>Date</TableCell>
                                <TableCell style={{ fontWeight: 'bold' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookingHistory.map(booking => (
                                <TableRow key={booking.id}>
                                    <TableCell>{booking.id}</TableCell>
                                    <TableCell>{booking.date}</TableCell>
                                    <TableCell>{booking.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Profile;
