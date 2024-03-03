import { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import BgImage from "../Images/formbg.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL = "http://localhost:8080";
const BookingForm = () => {
  const services = [
    { name: "Cruising houseboats", price: 7500 },
    { name: "Non-cruising houseboats", price: 6000 },
    { name: "Canal-style houseboats", price: 6500 },
    { name: "Catamaran-style houseboats", price: 11000 },
    { name: "Pontoon houseboats", price: 15000 },
  ];
  const getNextDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const nextDate = currentDate.toISOString().split("T")[0];
    return nextDate;
  };

  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: Cookies.get("email"),
    aadhar: "", // Renamed from aadharNumber
    phone: "", // Renamed from phoneNumber
    boatType: Cookies.get("selectedBoat"), // Renamed from boathouseType
    date: getNextDate, // Renamed from dateOfBooking
    noRooms: 1, // Renamed from numberOfRooms
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedService = services.find(
      (service) => service.name === bookingDetails.boatType
    );
    const totalPrice = selectedService.price * bookingDetails.noRooms;
    setTotalPrice(totalPrice);
    setOpenDialog(true);

    try {
      console.log("TRY");
      console.log(bookingDetails.name);
      console.log(bookingDetails.email);
      console.log(bookingDetails.aadhar);
      console.log(bookingDetails.boatType);
      console.log(bookingDetails.date);
      console.log(bookingDetails.phone);
      console.log(bookingDetails.noRooms);

      const response = await axios.post(`${BASE_URL}/bookings/post`, {
        ...bookingDetails,
        totalPrice,
      });
      if (response.status === 201) {
        navigate("/user/payment");
      } else {
        console.error(
          "Failed to create booking. Unexpected status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error creating booking:", error.message);
      console.error("Request details:", error.request);
      console.error("Response details:", error.response);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        borderColor: "rgba(0,0,0,5)",
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Booking Form
          </Typography>
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
            disabled
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="aadhar"
            label="Aadhar Number"
            type="text"
            value={bookingDetails.aadhar}
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="phone"
            label="Phone Number"
            type="tel"
            value={bookingDetails.phone}
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="boatType"
            select
            label="Type of Boathouse"
            disabled
            value={bookingDetails.boatType}
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
            name="date"
            label="Date of Booking"
            type="date"
            value={bookingDetails.date || getNextDate()}
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
            required
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: getNextDate(),
            }}
          />
          <TextField
            name="noRooms"
            label="Number of Rooms"
            type="number"
            value={bookingDetails.noRooms}
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
            required
            inputProps={{
              min: 1,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem" }}
          >
            Book Now
          </Button>
        </form>
        <Dialog
          open={openDialog}
          onClose={handleDialogClose}
          style={{ letterSpacing: "1px" }}
        >
          <DialogTitle>Booking Details</DialogTitle>
          <DialogContent>
            <p>
              <strong>Name:</strong> {bookingDetails.name}
            </p>
            <p>
              <strong>Email:</strong> {bookingDetails.email}
            </p>
            <p>
              <strong>Aadhar Number:</strong> {bookingDetails.aadhar}
            </p>
            <p>
              <strong>Phone Number:</strong> {bookingDetails.phone}
            </p>
            <p>
              <strong>Type of Boathouse:</strong> {bookingDetails.boatType}
            </p>
            <p>
              <strong>Date of Booking:</strong> {bookingDetails.date}
            </p>
            <p>
              <strong>Number of Rooms:</strong> {bookingDetails.noRooms}
            </p>
            <p>
              <strong>Total Price:</strong> Rs.{totalPrice}
            </p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/user/payment")}
            >
              Proceed to Payment
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default BookingForm;