import { useState } from 'react';
import { TextField, Button, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import BgImage from '../Images/formbg.jpg';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {

    const services = [
        { name: 'Cruising houseboats', price: 7500 },
        { name: 'Non-cruising houseboats', price: 6000 },
        { name: 'Canal-style houseboats', price: 6500 },
        { name: 'Catamaran-style houseboats', price: 11000 },
        { name: 'Pontoon houseboats', price: 15000 }
    ];

    // Function to get the next date
    const getNextDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1); 
        const nextDate = currentDate.toISOString().split('T')[0]; 
        return nextDate;
    };

    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        email: '',
        aadharNumber: '',
        phoneNumber: '',
        boathouseType: '',
        dateOfBooking: '', 
        numberOfRooms: 1, 
    });

    const [totalPrice, setTotalPrice] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phoneNumber' && /^[6-9]\d{0,9}$/.test(value) && value.length <= 10) {
            setBookingDetails({ ...bookingDetails, [name]: value });
        } else if (name !== 'phoneNumber') {
            setBookingDetails({ ...bookingDetails, [name]: value });
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedService = services.find(service => service.name === bookingDetails.boathouseType);
        const totalPrice = selectedService.price * bookingDetails.numberOfRooms;
        setTotalPrice(totalPrice);
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };
    const navigate=useNavigate();
    const handlePayment=()=>{
        navigate('/user/payment');
    }

    return (
        <div style={{backgroundImage: `url(${BgImage})`,backgroundSize:'cover',minHeight:'100vh',borderColor:'rgba(0,0,0,5)'}}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{ maxWidth: '500px', margin: 'auto', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px'}}>
            <form onSubmit={handleSubmit} >
                <Typography variant="h5" style={{ fontFamily: 'cursive', fontWeight: 'bold', textAlign: 'center' }}>Booking Form</Typography>
                <TextField
                    name="name"
                    label="Name"
                    value={bookingDetails.name}
                    onChange={handleFieldChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    value={bookingDetails.email}
                    onChange={handleFieldChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    name="aadharNumber"
                    label="Aadhar Number"
                    type="password"
                    value={bookingDetails.aadharNumber}
                    onChange={handleFieldChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    type="tel"
                    value={bookingDetails.phoneNumber}
                    onChange={handleFieldChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    name="boathouseType"
                    select
                    label="Type of Boathouse"
                    value={bookingDetails.boathouseType}
                    onChange={handleFieldChange}
                    fullWidth
                    margin="normal"
                    required
                >
                    {services.map((service, index) => (
                        <MenuItem key={index} value={service.name}>
                            {service.name}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    name="dateOfBooking"
                    label="Date of Booking"
                    type="date"
                    value={bookingDetails.dateOfBooking || getNextDate()} 
                    onChange={handleFieldChange}
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        min: getNextDate() 
                    }}
                />
                <TextField
                    name="numberOfRooms"
                    label="Number of Rooms"
                    type="number"
                    value={bookingDetails.numberOfRooms}
                    onChange={handleFieldChange}
                    fullWidth
                    margin="normal"
                    required
                    inputProps={{
                        min: 1,
                    }}
                />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                    Book Now
                </Button>
            </form>
            <Dialog open={openDialog} onClose={handleDialogClose} style={{letterSpacing:'1px'}}>
                <DialogTitle>Booking Details</DialogTitle>
                <DialogContent>
                    <p><strong>Name:</strong> {bookingDetails.name}</p>
                    <p><strong>Email:</strong> {bookingDetails.email}</p>
                    <p><strong>Aadhar Number:</strong> {bookingDetails.aadharNumber}</p>
                    <p><strong>Phone Number:</strong> {bookingDetails.phoneNumber}</p>
                    <p><strong>Type of Boathouse:</strong> {bookingDetails.boathouseType}</p>
                    <p><strong>Date of Booking:</strong> {bookingDetails.dateOfBooking}</p>
                    <p><strong>Number of Rooms:</strong> {bookingDetails.numberOfRooms}</p>
                    <p><strong>Total Price:</strong> Rs.{totalPrice}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Close
                    </Button>
                    <Button variant="contained" color="primary" onClick={handlePayment}>
                    Proceed to Payment
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        </div>
    );
};

export default BookingForm;
