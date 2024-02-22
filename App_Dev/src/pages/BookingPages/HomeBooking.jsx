import  { useState } from 'react';
import {  Typography, Grid, Card, CardContent, CardMedia, IconButton, Dialog, DialogContent, Button } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const BookingHome = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const navigate=useNavigate();

    const services = [
        { name: 'Cruising houseboats', image: 'https://cruiseland.in/wp-content/uploads/2019/03/backwatercruise6.jpg', description: 'Welcome aboard the Cruising Boathouse! Set sail on an unforgettable adventure with our luxurious floating accommodations. Enjoy stunning views, gourmet dining, and personalized service as you cruise along serene waterways. Start from Rs.7500/-' },
        { name: 'Non-cruising houseboats', image: 'https://getmyboat-user-images1.imgix.net/images/5f524110e004c/boat-rentals-closter-new-jersey-chris-craft-roamer-processed.jpg', description: 'Non-cruising boathouses are stationary structures built over the water, offering a unique blend of waterfront living and cozy comforts. Typically located in picturesque settings like lakeshores or riversides, these boathouses provide a tranquil escape from the hustle and bustle of everyday life. They often feature amenities such as spacious decks for lounging or entertaining, fully equipped kitchens, comfortable bedrooms, and sometimes even water-based activities like fishing or kayaking. Prices for non-cruising boathouses can vary depending on factors like location, size, and included amenities, but they offer a serene retreat for those seeking a peaceful waterside experience. Start from Rs.6000/-' },
        { name: 'Canal-style houseboats', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bugsworth_058069.jpg/1200px-Bugsworth_058069.jpg', description: 'Discover the charm of canal-style houseboats—quaint floating homes inspired by the romance of Amsterdam waterways. Compact yet cozy, these unique dwellings offer efficient living spaces, scenic rooftop terraces, and a serene waterfront lifestyle. Prices vary based on location and amenities, but the experience is priceless. Dive into a world where every day feels like a dreamy canal adventure. Start from Rs.6500/-' },
        { name: 'Catamaran-style houseboats', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgraiFM4VUbfIVtTzsta-3pf4GVcN_teTmxA&usqp=CAU', description: 'Sail smoothly through the waters in our spacious catamaran-style houseboats. Experience the ultimate in luxury and stability with catamaran-style houseboats! These sleek floating retreats offer spacious layouts, panoramic views, and unmatched stability on the water. Whether you are lounging on deck or entertaining in style, these catamarans redefine waterfront living. Prices vary, but the experience of sailing the seas from your own private oasis? Simply priceless. Start from Rs.11000/-' },
        { name: 'Pontoon houseboats', image: 'https://www.perebo.com/wp-content/uploads/2021/06/pontoon-houseboat.jpg', description: 'Relax and unwind on our spacious pontoon houseboats. Dive into leisure with pontoon houseboats! These floating havens offer the perfect blend of relaxation and adventure. With spacious decks for sun-soaked lounging and cozy interiors for unwinding, every moment is a celebration of waterfront living. Affordable and versatile, pontoon houseboats make every day a holiday on the water! Start from Rs.15000/-' }
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
        <div className="booking-home">
              
            <Grid container spacing={3} style={{paddingLeft:'15px',paddingRight:'15px',justifyContent: 'center',marginTop:'80px'}}>
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
