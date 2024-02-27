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
} from '@mui/material';
import AdminLayout from './AdminLayout';

const UserDetails = () => {
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
    ]);

    return (
        <div style={{backgroundImage: `url('https://thumbs.dreamstime.com/b/simple-white-brick-wall-light-gray-shades-seamless-pattern-surface-texture-background-banner-wide-panorama-format-simple-137027626.jpg')`,minHeight:'100vh'}}>
            <AdminLayout/>
            <Typography variant="h4" align="center" style={{ marginBottom: '20px', fontWeight: 'bold',marginTop:'35px' }}>
                Registered Users
            </Typography>
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
