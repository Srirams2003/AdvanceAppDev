import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useState } from 'react';

const BookingHistory = () => {
    const [bookingHistory, setBookingHistory] = useState([
        { id: 1, date: '2024-02-21', status: 'Confirmed' },
        { id: 2, date: '2024-03-15', status: 'Pending' },
        { id: 3, date: '2024-02-21', status: 'Confirmed' },
        { id: 4, date: '2024-03-15', status: 'Pending' },
        { id: 5, date: '2024-02-21', status: 'Confirmed' },
        { id: 6, date: '2024-03-15', status: 'Pending' },
    ]);

  return (
    <div style={{marginTop:'105px',marginLeft:'50px',marginRight:'50px'}}>
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
  )
}

export default BookingHistory