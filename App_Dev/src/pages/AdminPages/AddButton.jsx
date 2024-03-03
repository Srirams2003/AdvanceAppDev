import  { useState } from 'react';
import { Dialog, DialogContent, TextField, Button } from '@mui/material';
import axios from 'axios';

const AddBoatForm = ({ open, onClose, onAdd }) => {
    const [newBoatType, setNewBoatType] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newImage, setNewImage] = useState(null);

    const handleAddBoat = async () => {
        try {
            const formData = new FormData();
            formData.append('boatType', newBoatType);
            formData.append('description', newDescription);
            formData.append('image', newImage);
            await axios.post('http://localhost:8080/boats/post', formData);
            onAdd();
            setNewBoatType('');
            setNewDescription('');
            setNewImage(null);
        } catch (error) {
            console.error('Error adding boat:', error);
        }
    };

    const handleImageChange = (event) => {
        setNewImage(event.target.files[0]);
    };

    return (
        <Dialog open={open} onClose={onClose}>
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
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ marginTop: '10px' }}
                />
                <Button variant="contained" color="primary" onClick={handleAddBoat} style={{ marginTop: '10px' }}>Add Boat</Button>
            </DialogContent>
        </Dialog>
    );
}

export default AddBoatForm;
