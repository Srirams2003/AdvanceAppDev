import { useState, useEffect } from 'react';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Typography,
    TextField,
} from '@mui/material';
import AdminSideBar from './AdminSideBar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const UserDetails = () => {
    const [userData, setUserData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8080/users/get');
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const filteredUserData = userData.filter(user =>
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{backgroundImage: `url('https://thumbs.dreamstime.com/b/simple-white-brick-wall-light-gray-shades-seamless-pattern-surface-texture-background-banner-wide-panorama-format-simple-137027626.jpg')`,minHeight:'100vh'}}>
        <AdminSideBar/>    
        <Typography variant="h4" align="center" style={{ marginBottom: '20px', fontWeight: 'bold',marginTop:'35px' }}>
                Registered Users
            </Typography>
            <TextField
    label="Search by Email ID"
    variant="outlined"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    style={{ 
        marginBottom: '20px', 
        marginLeft: '30px', 
        width: '300px',
        backgroundColor: '#fff', 
        borderRadius: '14px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)', 
        
    }}
    InputProps={{
        endAdornment: (
            <IconButton>
                <SearchIcon />
            </IconButton>
        ),
        style: {
            color: '#333', 
        },
    }}
    InputLabelProps={{
        style: {
            color: '#555', 
        },
    }}
/>

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
                            {filteredUserData.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.dob}</TableCell>
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