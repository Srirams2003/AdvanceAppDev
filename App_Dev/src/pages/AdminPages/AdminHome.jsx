import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import AdminSideBar from './AdminSideBar';
import Formbg from '../Images/formbg.jpg';

function AdminHome() {
  const [boatsData, setBoatsData] = useState([]);
  const [bookingsData, setBookingsData] = useState([]);
  const [highestBooking, setHighestBooking] = useState({});
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/boats/get')
      .then(response => {
        setBoatsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching boats:', error);
      });

    axios.get('http://localhost:8080/bookings/get')
      .then(response => {
        setBookingsData(response.data);
        const highest = response.data.reduce((max, current) => (current.noRooms > max.noRooms ? current : max), response.data[0]);
        setHighestBooking(highest);
        const currentDate = new Date().toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
        setFormattedDate(currentDate);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div style={{backgroundImage: `url(${Formbg})`, minHeight: '100vh'}}>
      <AdminSideBar />
      <div style={{marginTop: '50px'}}>
        <Container component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <div>
            <Grid container spacing={3} style={{ marginTop: '20px', justifyContent: 'center' }}>
              <Grid item xs={12} sm={4}>
                <Card style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}>
                  <CardContent>
                    <Typography variant="h5" component="h2" style={{ marginBottom: '10px' }}>
                      Available Rooms for Booking
                    </Typography>
                    {boatsData.map((boat, index) => (
                      <Typography key={index} color="textSecondary">
                        {boat.boatType}: {boat.availableRooms} <br />
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}>
                  <CardContent>
                    <Typography variant="h5" component="h2" style={{ marginBottom: '10px' }}>
                      Number of Bookings Today
                    </Typography>
                    {bookingsData.map((booking, index) => (
                      <Typography key={index} color="textSecondary">
                        {booking.boatType}: {booking.noRooms} <br />
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} style={{ marginTop: '20px', paddingRight: '40px' }}>
                <LineChart
                  width={600}
                  height={300}
                  data={bookingsData}
                  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="noRooms" stroke="#ff7f0e" />
                </LineChart>
              </Grid>
              <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Card style={{ backgroundColor: '#f0f0f0', width: '80%', margin: '0 auto', textAlign: 'left', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}>
                    <CardContent>
                      <Typography variant="h5" component="h2" style={{ marginBottom: '10px' }}>
                        Current Trend
                      </Typography>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <TrendingUpIcon style={{ marginRight: '10px', color: 'green', fontSize: '1.5rem' }} />
                        <Typography color="textSecondary" variant="h6" style={{ fontWeight: 'bold', fontSize: '2.2rem' }}>
                          {highestBooking.noRooms} Bookings
                        </Typography>
                      </div>
                      <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                        Type: {highestBooking.boatType} 
                      </Typography>
                      <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                        As of {formattedDate} 
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AdminHome;
