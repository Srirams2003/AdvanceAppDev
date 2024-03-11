import { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, IconButton, Dialog, DialogContent, Button, CircularProgress } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const BookingHome = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading indicator
    const navigate = useNavigate();

    useEffect(() => {
        fetchBoats();
    }, []);

    const fetchBoats = async () => {
        try {
            const response = await axios.get('http://localhost:8080/boats/get');
            setServices(response.data);
            setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
            console.error(error);
            setLoading(false); // Also set loading to false in case of error
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
        const selectedBoat = service.boatType;
        Cookies.set('selectedBoat', selectedBoat);
        console.log(selectedBoat)
        navigate('/user/bookingform');
    };

    return (
        <div className="booking-home">
            {loading ? ( // Show loading indicator while fetching data
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </div>
            ) : (
                <Grid container spacing={3} style={{ paddingLeft: '15px', paddingRight: '15px', justifyContent: 'center', marginTop: '80px' }}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card className="service-card">
                                <CardMedia
                                    component="img"
                                    image={service.imageUrl} // Update to use imageUrl property
                                    alt={service.boatType}
                                    style={{ height: 200 }}
                                />
                                <CardContent>
                                    <Typography variant="h5">{service.boatType}</Typography>
                                    <IconButton onClick={() => handleDialogOpen(service)}>
                                        <InfoOutlined />
                                    </IconButton>
                                    <Button variant="contained" color="primary" onClick={() => handleBookNow(service)}>Book Now</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogContent>
                    {selectedService && (
                        <>
                            <Typography variant="h5">{selectedService.boatType}</Typography>
                            <Typography>{selectedService.description}</Typography>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default BookingHome;
