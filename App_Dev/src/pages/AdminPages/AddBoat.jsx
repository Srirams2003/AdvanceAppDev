import  { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, IconButton, Dialog, DialogContent, Button, TextField } from '@mui/material';
import { InfoOutlined, Add, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080' 
});

const AddBoat = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [boats, setBoats] = useState([]);
    const [newBoatType, setNewBoatType] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newImage, setNewImage] = useState(null);
    const [totalRooms, setTotalRooms] = useState('');
    const [pricePerRoom, setPricePerRoom] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBoats = async () => {
            try {
                const response = await api.get('/boats/get');
                setBoats(response.data);
            } catch (error) {
                console.error('Error fetching boats:', error);
            }
        };

        fetchBoats();
    }, []);

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleBookNow = (boat) => {
        Cookies.set('selectedBoat', boat.boatType);
        navigate('/user/bookingform');
    };

    const handleAddBoat = async () => {
        try {
            const formData = new FormData();
            formData.append('boatType', newBoatType);
            formData.append('description', newDescription);
            formData.append('image', newImage);
            formData.append('totalRooms', totalRooms);
            formData.append('pricePerRoom', pricePerRoom);
            const response = await api.post('/boats/post', formData);
            setOpenDialog(false);
            setNewBoatType('');
            setNewDescription('');
            setNewImage(null);
            setTotalRooms('');
            setPricePerRoom('');
            setBoats(prevBoats => [...prevBoats, response.data]);
        } catch (error) {
            console.error('Error adding boat:', error);
        }
    };

    const handleImageChange = (event) => {
        setNewImage(event.target.files[0]);
    };

    const handleDeleteBoat = (boat) => {
        setDeleteTarget(boat);
        setDeleteConfirmationOpen(true);
    };

    const handleDeleteConfirmation = async () => {
        try {
            await api.delete(`/boats/${deleteTarget.id}`);
            // Remove the deleted boat from the boats state
            setBoats(prevBoats => prevBoats.filter(boat => boat.id !== deleteTarget.id));
        } catch (error) {
            console.error('Error deleting boat:', error);
        } finally {
            setDeleteConfirmationOpen(false); 
        }
    };

    const handleCloseDeleteConfirmation = () => {
        setDeleteConfirmationOpen(false);
    };

    return (
        <div className="booking-home">
            <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleDialogOpen}>
                Add a Boat
            </Button>
            <Grid container spacing={3} style={{ paddingLeft: '15px', paddingRight: '15px', justifyContent: 'center', marginTop: '20px' }}>
                {boats.map((boat, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="service-card">
                            <CardMedia
                                component="img"
                                image={`data:image/jpeg;base64,${boat.boatImage}`}
                                alt={boat.boatType}
                                style={{ height: 200, objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h5">{boat.boatType}</Typography>
                                <IconButton onClick={() => handleDialogOpen(boat)}>
                                    <InfoOutlined />
                                </IconButton>
                                <IconButton onClick={() => handleDeleteBoat(boat)}>
                                    <Delete />
                                </IconButton>
                                <Button variant="contained" color="primary" onClick={() => handleBookNow(boat)}>Book Now</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogContent>
                    <TextField
                        label="Boat Type"
                        fullWidth
                        value={newBoatType}
                        onChange={(e) => setNewBoatType(e.target.value)}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        style={{ marginTop: '10px' }}
                    />
                    <TextField
                        label="Total number of rooms"
                        fullWidth
                        value={totalRooms}
                        onChange={(e) => setTotalRooms(e.target.value)}
                        type="number"
                        style={{ marginTop: '10px' }}
                    />
                    <TextField
                        label="Price per room"
                        fullWidth
                        value={pricePerRoom}
                        onChange={(e) => setPricePerRoom(e.target.value)}
                        type="number"
                        style={{ marginTop: '10px' }}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ marginTop: '10px' }}
                    />
                    <Button variant="contained" color="primary" onClick={handleAddBoat} style={{ marginTop: '10px' }}>Add Boat</Button>
                </DialogContent>
            </Dialog>
            <Dialog open={deleteConfirmationOpen} onClose={handleCloseDeleteConfirmation}>
                <DialogContent>
                    <Typography variant="body1">Are you sure you want to delete {deleteTarget && deleteTarget.boatType}?</Typography>
                    <Button onClick={handleDeleteConfirmation} color="error">Yes</Button>
                    <Button onClick={handleCloseDeleteConfirmation}>No</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddBoat;
