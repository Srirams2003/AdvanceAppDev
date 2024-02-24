import { Typography } from '@mui/material';
import { VictoryLine, VictoryBar, VictoryPie, VictoryPolarAxis, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import AdminLayout from './AdminLayout';
import Formbg from '../Images/formbg.jpg'


const AdminDashboard = () => {
    const realTimeChartData = [
        { date: '2024-02-01', bookings: 12 },
        { date: '2024-02-02', bookings: 19 },
        { date: '2024-02-03', bookings: 3 },
        { date: '2024-02-04', bookings: 5 },
        { date: '2024-02-05', bookings: 2 },
        { date: '2024-02-06', bookings: 3 },
    ];

    const barChartData = [
        { date: '2024-02-01', users: 10 },
        { date: '2024-02-02', users: 20 },
        { date: '2024-02-03', users: 15 },
        { date: '2024-02-04', users: 30 },
        { date: '2024-02-05', users: 25 },
        { date: '2024-02-06', users: 40 },
    ];

    const pieChartData = [
        { type: 'Cruising', bookings: 30 },
        { type: 'Non-Cruising', bookings: 20 },
        { type: 'Catamaran', bookings: 10 },
        { type: 'Canal Style', bookings: 15 },
        { type: 'Pontoon', bookings: 25 },
    ];

    const polarChartData = [
        { houseboat: 'Houseboat 1', roomsAvailable: 15 },
        { houseboat: 'Houseboat 2', roomsAvailable: 10 },
        { houseboat: 'Houseboat 3', roomsAvailable: 20 },
        { houseboat: 'Houseboat 4', roomsAvailable: 25 },
        { houseboat: 'Houseboat 5', roomsAvailable: 18 },
    ];

    return (
        <div style={{backgroundImage: `url('https://thumbs.dreamstime.com/b/simple-white-brick-wall-light-gray-shades-seamless-pattern-surface-texture-background-banner-wide-panorama-format-simple-137027626.jpg')`,minHeight:'100vh'}}>
        <AdminLayout/>
        <div style={{ marginLeft: '65px', marginRight: '80px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginTop: '100px' }}>
                <div style={{ width: '40%' }}>
                    <h2>Real-time Chart</h2>
                    <VictoryChart theme={VictoryTheme.material}>
                        <VictoryLine
                            data={realTimeChartData}
                            x="date"
                            y="bookings"
                        />
                        <VictoryAxis
                            tickFormat={(date) => date.toString().substring(0, 10)}
                            style={{ tickLabels: { angle: -45 } }}
                        />
                        <VictoryAxis dependentAxis />
                    </VictoryChart>
                </div>

                <div style={{ width: '40%', paddingRight: '20px' }}>
                    <h2>Bar Graph for Number of Users Registered</h2>
                    <VictoryChart theme={VictoryTheme.material}>
                        <VictoryBar
                            data={barChartData}
                            x="date"
                            y="users"
                        />
                        <VictoryAxis
                            tickFormat={(date) => date.toString().substring(0, 10)}
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
                        data={pieChartData}
                        x="type"
                        y="bookings"
                        colorScale="qualitative"
                    />
                </div>

                <div style={{ width: '40%', padding: '10px' }}>
                    <h2>Polar Chart for Number of Rooms Available in Each Houseboat</h2>
                    <VictoryChart polar theme={VictoryTheme.material}>
                        <VictoryPolarAxis dependentAxis />
                        <VictoryPolarAxis />
                        <VictoryBar
                            data={polarChartData}
                            x="houseboat"
                            y="roomsAvailable"
                        />
                    </VictoryChart>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AdminDashboard;
