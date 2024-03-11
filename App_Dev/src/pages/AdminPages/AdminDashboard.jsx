import { useState, useEffect } from 'react';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,VictoryPie,VictoryPolarAxis } from 'victory';
import AdminSideBar from './AdminSideBar';


const AdminDashboard = () => {
    const [bookingsData, setBookingsData] = useState([]);
    const [boatsData, setBoatsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/bookings/get')
            .then(response => {
                setBookingsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching booking data:', error);
            });

        axios.get('http://localhost:8080/boats/get')
            .then(response => {
                setBoatsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching boat data:', error);
            });
    }, []);

    const bookingCountByDate = {};
    bookingsData.forEach(booking => {
        const date = booking.date;
        bookingCountByDate[date] = (bookingCountByDate[date] || 0) + 1;
    });

    const bookingCountData = Object.keys(bookingCountByDate).map(date => ({
        date: new Date(date),
        bookings: bookingCountByDate[date]
    }));

    bookingCountData.sort((a, b) => a.date - b.date);

    const histogramData = bookingCountData.map(data => ({
        x: data.date.toISOString(), 
        y: data.bookings
    }));

    return (
        <div style={{backgroundImage: `url('https://thumbs.dreamstime.com/b/simple-white-brick-wall-light-gray-shades-seamless-pattern-surface-texture-background-banner-wide-panorama-format-simple-137027626.jpg')`,minHeight:'100vh'}}>
            <AdminSideBar/>
            <div style={{ marginLeft: '65px', marginRight: '80px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginTop: '100px' }}>
                <div style={{ width: '40%' }}>
                        <h2>Histogram showing Booking Counts by Date</h2>
                        <VictoryChart
                            theme={VictoryTheme.material}
                            width={600}
                            height={400}
                            domainPadding={20}
                        >
                            <VictoryAxis
                                tickFormat={(x) => new Date(x).toLocaleDateString()} // Format x-axis ticks as dates
                                style={{ tickLabels: { fontSize: 8, angle: -45 } }}
                            />
                            <VictoryAxis dependentAxis />
                            <VictoryBar
                                data={histogramData}
                                x="x"
                                y="y"
                            />
                        </VictoryChart>
                    </div>
                    <div style={{ width: '40%', paddingRight: '20px' }}>
                        <h2>Bar Graph for Number of Boats Available</h2>
                        <VictoryChart theme={VictoryTheme.material}>
                            <VictoryBar
                                data={boatsData}
                                x="boatType"
                                y="availableRooms"
                            />
                            <VictoryAxis
                                tickFormat={(boatType) => boatType}
                                style={{ tickLabels: { angle: -45, padding: 10 } }}
                            />
                            <VictoryAxis dependentAxis />
                        </VictoryChart>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' ,marginTop:'200px'}}>
                    <div style={{ width: '40%', padding: '10px' }}>
                        <h2>Pie Chart for Total Bookings by Houseboat Type</h2>
                        <VictoryPie
                            data={bookingsData}
                            x="boatType"
                            y="noRooms"
                            labels={({ datum }) => `${datum.boatType}: ${datum.noRooms}`}
                            colorScale="qualitative"
                            labelRadius={({ innerRadius }) => innerRadius + 50} // Increase label radius
                            padAngle={3} // Increase padding between slices
                        />
                    </div>

                    <div style={{ width: '40%', padding: '10px' }}>
                        <h2>Polar Chart for Houseboat</h2>
                        <VictoryChart polar theme={VictoryTheme.material}>
                            <VictoryPolarAxis dependentAxis />
                            <VictoryPolarAxis />
                            <VictoryBar
                                data={boatsData}
                                x="boatType"
                                y="availableRooms"
                            />
                        </VictoryChart>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
