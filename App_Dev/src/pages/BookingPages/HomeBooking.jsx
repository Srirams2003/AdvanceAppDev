import { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, IconButton, Dialog, DialogContent, Button } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const BookingHome = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBoats(); // Fetch boat details when component mounts
    }, []);

    const fetchBoats = async () => {
        try {
            const response = await axios.get('http://localhost:8080/boats/get');
            setServices(response.data); // Set fetched boat details to state
        } catch (error) {
            console.error(error);
        }
    };

    const handleDialogOpen = (service) => {
        setSelectedService(service);
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleBookNow = (service) => {
        const selectedBoat = service.name;
        Cookies.set('selectedBoat', selectedBoat);
        navigate('/user/bookingform');
        console.log(selectedBoat);
    };

    return (
        <div className="booking-home">
            <Grid container spacing={3} style={{ paddingLeft: '15px', paddingRight: '15px', justifyContent: 'center', marginTop: '80px' }}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="service-card">
                            <CardMedia
                                component="img"
                                image={service.image}
                                alt={service.name}
                                style={{ height: 200 }}
                            />
                            <CardContent>
                                <Typography variant="h5">{service.name}</Typography>
                                <IconButton onClick={() => handleDialogOpen(service)}>
                                    <InfoOutlined />
                                </IconButton>
                                <Button variant="contained" color="primary" onClick={() => handleBookNow(service)}>Book Now</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogContent>
                    {selectedService && (
                        <>
                            <Typography variant="h5">{selectedService.name}</Typography>
                            <Typography>{selectedService.description}</Typography>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default BookingHome;
