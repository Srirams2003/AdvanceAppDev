import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, CardMedia, IconButton, Dialog, DialogContent } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import BottomNavigationBar from '../BottomNavBar'; 


const BookingHome = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        { name: 'Cruising houseboats', image: 'https://cruiseland.in/wp-content/uploads/2019/03/backwatercruise6.jpg', description: '' },
        { name: 'Non-cruising houseboats', image: 'https://getmyboat-user-images1.imgix.net/images/5f524110e004c/boat-rentals-closter-new-jersey-chris-craft-roamer-processed.jpg', description: 'Enjoy a peaceful stay on the water in our non-cruising houseboats.' },
        { name: 'Canal-style houseboats', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bugsworth_058069.jpg/1200px-Bugsworth_058069.jpg', description: 'Experience the charm of canal living in our traditional houseboats.' },
        { name: 'Catamaran-style houseboats', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgraiFM4VUbfIVtTzsta-3pf4GVcN_teTmxA&usqp=CAU', description: 'Sail smoothly through the waters in our spacious catamaran-style houseboats.' },
        { name: 'Pontoon houseboats', image: 'https://www.perebo.com/wp-content/uploads/2021/06/pontoon-houseboat.jpg', description: 'Relax and unwind on our spacious pontoon houseboats.' }
    ];

    const handleDialogOpen = (service) => {
        setSelectedService(service);
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    return (
        <>
        <div className="booking-home">
            <AppBar position="static"style={{height:'85px',alignItems:'center'}}>
                <Toolbar>

                    <Typography variant="h6" style={{fontFamily:'cursive',fontWeight:'bolder'}}>Dine, dance, and watch the sunset at The Sea Shell - book your table now!</Typography>
                </Toolbar>
            </AppBar>
            <br/>
            <br/>   
            <Grid container spacing={3} style={{paddingLeft:'15px',paddingRight:'15px',justifyContent: 'center'}}>
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
        <BottomNavigationBar/>
        </>
    );
};

export default BookingHome;
