import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

const BookingHistory = () => {
    const [bookingHistory, setBookingHistory] = useState([]);
    const email = Cookies.get("email");
    useEffect(() => {
        const fetchBookingHistory = async () => {
            try {
                console.log(email)
                const response = await fetch(`http://localhost:8080/bookings/get/${email}`); // Include email parameter in the URL
                if (response.ok) {
                    const data = await response.json();
                    setBookingHistory(data);
                } else {
                    console.error('Failed to fetch booking history');
                }
            } catch (error) {
                console.error('Error fetching booking history:', error);
            }
        };

        fetchBookingHistory();
    }, [email]); 

    return (
        <div style={{ marginTop: '105px', marginLeft: '50px', marginRight: '50px' }}>
            <Typography variant="h5" gutterBottom>Booking History</Typography>
            <TableContainer component={Paper} style={{ backgroundColor: 'whitesmoke' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Booking ID</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Date of Booking</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookingHistory.map(booking => (
                            <TableRow key={booking.id}>
                                <TableCell>{booking.id}</TableCell>
                                <TableCell>{booking.date}</TableCell> {/* Display dob instead of date */}
                                <TableCell>Confirmed</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default BookingHistory;
