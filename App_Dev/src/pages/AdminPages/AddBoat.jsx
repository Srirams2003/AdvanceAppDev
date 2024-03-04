import { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Dialog,
  DialogContent,
  Button,
  TextField,
  Paper,
  CircularProgress,
} from "@mui/material";
import { InfoOutlined, Add, Delete } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminLayout from "./AdminLayout";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

const AddBoat = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [boats, setBoats] = useState([]);
  const [newBoatType, setNewBoatType] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImageUrl, setNewImageUrl] = useState(""); // State for new image URL
  const [totalRooms, setTotalRooms] = useState(0);
  const [pricePerRoom, setPricePerRoom] = useState("");
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    fetchBoats();
  }, []);

  const fetchBoats = async () => {
    try {
      const response = await api.get("/boats/get");
      setBoats(response.data);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error("Error fetching boats:", error);
      setLoading(false); // Also set loading to false in case of error
    }
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleAddBoat = async () => {
    try {
      const formData = new FormData();
      formData.append("boatType", newBoatType);
      formData.append("description", newDescription);
      formData.append("imageUrl", newImageUrl); // Send image URL
      formData.append("totalRooms", totalRooms);
      formData.append("pricePerRoom", pricePerRoom);
      const response = await api.post("/boats/post", formData);
      setOpenDialog(false);
      setNewBoatType("");
      setNewDescription("");
      setNewImageUrl(""); // Clear imageUrl state
      setTotalRooms(0);
      setPricePerRoom("");
      setBoats((prevBoats) => [...prevBoats, response.data]);
    } catch (error) {
      console.error("Error adding boat:", error);
    }
  };
  

  const handleImageChange = (event) => {
    setNewImageUrl(event.target.value); // Set new image URL
  };

  const handleDeleteBoat = (boat) => {
    setDeleteTarget(boat);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = async () => {
    try {
      await api.delete(`/boats/${deleteTarget.id}`);
      // Remove the deleted boat from the boats state
      setBoats((prevBoats) =>
        prevBoats.filter((boat) => boat.id !== deleteTarget.id)
      );
    } catch (error) {
      console.error("Error deleting boat:", error);
    } finally {
      setDeleteConfirmationOpen(false);
    }
  };

  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };

  return (
    <div>
      <AdminLayout />
      <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={handleDialogOpen}
          style={{ marginBottom: "20px" }}
        >
          Add a Boat
        </Button>
        {loading ? ( // Show loading indicator while fetching data
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={3}>
            {boats.map((boat, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    image={boat.imageUrl} // Update to use imageUrl property
                    alt={boat.boatType}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h5">{boat.boatType}</Typography>
                    <IconButton onClick={() => handleDialogOpen(boat)}>
                      <InfoOutlined />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteBoat(boat)}>
                      <Delete />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogContent>
            <TextField
              label="Boat Type"
              fullWidth
              value={newBoatType}
              onChange={(e) => setNewBoatType(e.target.value)}
              style={{ marginBottom: "20px" }}
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              style={{ marginBottom: "20px" }}
            />
            <TextField
              label="Total number of rooms"
              fullWidth
              value={totalRooms}
              onChange={(e) => setTotalRooms(e.target.value)}
              type="number"
              style={{ marginBottom: "20px" }}
            />
            <TextField
              label="Price per room"
              fullWidth
              value={pricePerRoom}
              onChange={(e) => setPricePerRoom(e.target.value)}
              type="number"
              style={{ marginBottom: "20px" }}
            />
            <TextField
  label="Image URL"
  fullWidth
  value={newImageUrl}
  onChange={(e) => setNewImageUrl(e.target.value)}
  style={{ marginBottom: "20px" }}
/>

            <Button
              variant="contained"
              color="primary"
              onClick={handleAddBoat}
              style={{ marginBottom: "20px" }}
            >
              Add Boat
            </Button>
          </DialogContent>
        </Dialog>
        <Dialog
          open={deleteConfirmationOpen}
          onClose={handleCloseDeleteConfirmation}
        >
          <DialogContent>
            <Typography variant="body1">
              Are you sure you want to delete{" "}
              {deleteTarget && deleteTarget.boatType}?
            </Typography>
            <Button onClick={handleDeleteConfirmation} color="error">
              Yes
            </Button>
            <Button onClick={handleCloseDeleteConfirmation}>No</Button>
          </DialogContent>
        </Dialog>
      </Paper>
    </div>
  );
};

export default AddBoat;
