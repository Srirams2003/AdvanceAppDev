import  { useState } from 'react';
import {  Typography, Grid, Card, CardContent, CardMedia, IconButton, Dialog, DialogContent, Button } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SpecialFeatures = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const navigate=useNavigate();

    const services = [
        { name: 'Fine-Dining', image: 'https://www.kumarakomlakeresort.in/assets/images/luxury-accommodation/houseboats/gallery/houseboats-10.jpg'},
        { name: 'Night-Party', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwvU8Ej_I7lK56QTNRR9rSwqUQYXj78CMsQ&usqp=CAU'},
        { name: 'Masseur', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3O7y9hU2sprmipnrOmEpjJf6fI0xERBvoCQ&usqp=CAU' },
        { name: 'Event Management', image: 'https://www.cancunsailing.com/hs-fs/hubfs/Stock%20images/Servicios%20privados/Bodas/Boda%20petalos.jpeg?width=5306&height=3769&name=Boda%20petalos.jpeg' },
        { name: 'Fun-O-Time', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kwoDpyfwf3cp38lwvjCDgh2cyKVp_WyBfA&usqp=CAU'}
    ];

    const handleDialogOpen = (service) => {
        setSelectedService(service);
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleBookNow = (service) => {
        navigate('/user/bookingform');
        console.log(`Book now clicked for ${service.name}`);
    };

    return (
        <div className="booking-home" >
        <center>
        <Typography style={{marginTop:'60px',fontFamily:'cursive',fontWeight:'bolder',fontSize:'30px'}}>What's in Store for you?!</Typography>
        </center>
            <Grid container spacing={3} style={{paddingLeft:'15px',paddingRight:'15px',justifyContent: 'center',marginTop:'5px'}}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="service-card">
                            <CardMedia
                                component="img"
                                image={service.image}
                                alt={service.name}
                                style={{ height: 205 }} 
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


export default SpecialFeatures;
