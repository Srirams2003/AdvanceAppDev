import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import AdminLayout from './AdminLayout';
import Formbg from '../Images/formbg.jpg'

function AdminHome() {
  const data = [
    { date: '2024-02-01', bookings: 19, type: 'Cruising House Boats' },
    { date: '2024-02-02', bookings: 12, type: 'Non-Cruising House Boats' },
    { date: '2024-02-03', bookings: 3, type: 'Catamaram-HouseBoats' },
    { date: '2024-02-04', bookings: 5, type: 'Canal Style House Boats' },
    { date: '2024-02-05', bookings: 2, type: 'Pontoon House Boats' },
  ];

  const highestBooking = data.reduce((max, current) => (current.bookings > max.bookings ? current : max), data[0]);

  const formattedDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div style={{backgroundImage: `url(${Formbg})`,minHeight:'100vh'}}>
    <AdminLayout/>
    <div style={{marginTop:'50px'}}>
   
    <Container component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, }}>
      <div >
      
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={4}>
          <Card style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ marginBottom: '10px' }}>
                Available Rooms for Booking
              </Typography>
              <Typography color="textSecondary">
                Cruising House Boats: 15 <br />
                Non-Cruising House Boats: 10 <br />
                Catamaram-HouseBoats: 5 <br />
                Canal Style House Boats: 8 <br />
                Pontoon House Boats: 3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ marginBottom: '10px' }}>
                Number of Bookings Today
              </Typography>
              <Typography color="textSecondary">
                Cruising House Boats: 7 <br />
                Non-Cruising House Boats: 3 <br />
                Catamaram-HouseBoats: 1 <br />
                Canal Style House Boats: 2 <br />
                Pontoon House Boats: 0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ marginBottom: '10px' }}>
                Employees Present and Absent
              </Typography>
              <Typography color="textSecondary">
                Total Employees: 20 <br />
                Present: 16 <br />
                Absent: 3 <br />
                On Leave: 1<br/>
                Outsourcing Needed? : No
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} style={{ marginTop: '20px', paddingRight: '40px' }}>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
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
                    {highestBooking.bookings} Bookings
                  </Typography>
                </div>
                <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                  Type: {highestBooking.type} 
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
