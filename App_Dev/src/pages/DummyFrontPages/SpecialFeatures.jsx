import { useState } from 'react';
import { Typography, Dialog, DialogContent } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Special.css'; // Import custom CSS file for styling

const SpecialFeatures = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        { name: 'Fine-Dining', image: 'https://www.kumarakomlakeresort.in/assets/images/luxury-accommodation/houseboats/gallery/houseboats-10.jpg' },
        { name: 'Night-Party', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwvU8Ej_I7lK56QTNRR9rSwqUQYXj78CMsQ&usqp=CAU' },
        { name: 'Masseur', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3O7y9hU2sprmipnrOmEpjJf6fI0xERBvoCQ&usqp=CAU' },
        { name: 'Event Management', image: 'https://www.cancunsailing.com/hs-fs/hubfs/Stock%20images/Servicios%20privados/Bodas/Boda%20petalos.jpeg?width=5306&height=3769&name=Boda%20petalos.jpeg' },
        { name: 'Fun-O-Time', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kwoDpyfwf3cp38lwvjCDgh2cyKVp_WyBfA&usqp=CAU' }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    return (
        <div className="booking-home" style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuUmoPOhtWWe-qY44syKF6MPv99g-oO7OZg&usqp=CAU')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <Typography variant="h4" align="center" className="section-title" style={{paddingTop:'150px', fontFamily: 'cursive', fontWeight: 'bold', fontSize: '36px', color: '#333',color:'snow', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2),' }}>What's in Store for you?!</Typography>
            <div className="slider-container">
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div key={index} className="slide" onClick={() => { setOpenDialog(true); setSelectedService(service); }}>
                            <div className="slide-content">
                                <img src={service.image} alt={service.name} className="slide-image" />
                                <Typography variant="h5" align="center" className="slide-title">{service.name}</Typography>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogContent>
                    {selectedService && (
                        <>
                            <Typography variant="h5">{selectedService.name}</Typography>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default SpecialFeatures;
