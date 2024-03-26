import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy-loaded components
const LoginPage = React.lazy(() => import('./pages/Reg/Login'));
const SignupPage = React.lazy(() => import('./pages/Reg/Signup'));
const FirstPage = React.lazy(() => import('./pages/Reg/FirstPage')); 
const AdminLogin = React.lazy(() => import('./pages/AdminPages/AdminDashboard.jsx'));
const HomePage = React.lazy(() => import('./pages/CompPages/HomePage'));
const Second = React.lazy(() => import('./pages/CompPages/Second'));
const BookingHome = React.lazy(() => import('./pages/BookingPages/HomeBooking'));
const BookingForm = React.lazy(() => import('./pages/BookingPages/BookingForm'));
const Profile = React.lazy(() => import('./pages/CompPages/Profile'));
const Special = React.lazy(() => import('./pages/DummyFrontPages/SpecialFeatures'));
const Contact = React.lazy(() => import('./pages/DummyFrontPages/Contact'));
const Payment = React.lazy(() => import('./pages/BookingPages/Payments.jsx'));
const BookingHistory = React.lazy(() => import('./pages/BookingPages/BookingHistory.jsx'));
const AdminHome = React.lazy(() => import('./pages/AdminPages/AdminHome.jsx'));
const AdminDashboard = React.lazy(() => import('./pages/AdminPages/AdminDashboard.jsx'));
const UserDetails = React.lazy(() => import('./pages/AdminPages/UserDeatils.jsx'));
const AddBoat = React.lazy(() => import('./pages/AdminPages/AddBoat.jsx'));
const AddButton = React.lazy(() => import('./pages/AdminPages/AddButton.jsx'));
const AdminSideBar = React.lazy(() => import('./pages/AdminPages/AdminSideBar.jsx'));

import UserLayout from './pages/CompPages/UserLayout';

const UserRoutes = () => {
  return(

    <UserLayout>
    <Routes>
    <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>}/>
    <Route path="/second" element={<Suspense fallback={<div>Loading...</div>}><Second /></Suspense>}/>
    <Route path="/bookinghome" element={<Suspense fallback={<div>Loading...</div>}><BookingHome /></Suspense>}/>
    <Route path="/bookingform" element={<Suspense fallback={<div>Loading...</div>}><BookingForm /></Suspense>}/>
    <Route path="/profile" element={<Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>}/>
    <Route path="/special" element={<Suspense fallback={<div>Loading...</div>}><Special /></Suspense>}/>
    <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>}/>
    <Route path="/payment" element={<Suspense fallback={<div>Loading...</div>}><Payment /></Suspense>}/>
    <Route path="/bookinghistory" element={<Suspense fallback={<div>Loading...</div>}><BookingHistory /></Suspense>}/>
    <Route path="/adminhome" element={<Suspense fallback={<div>Loading...</div>}><AdminHome /></Suspense>}/>
    <Route path="/admindashboard" element={<Suspense fallback={<div>Loading...</div>}><AdminDashboard /></Suspense>}/>
    <Route path="/users" element={<Suspense fallback={<div>Loading...</div>}><UserDetails /></Suspense>}/>
    <Route path="/addboats" element={<Suspense fallback={<div>Loading...</div>}><AddBoat /></Suspense>}/>
    <Route path="/addbutton" element={<Suspense fallback={<div>Loading...</div>}><AddButton /></Suspense>}/>
    <Route path="/side" element={<Suspense fallback={<div>Loading...</div>}><AdminSideBar /></Suspense>}/>
    </Routes>
    </UserLayout>
    )
}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><FirstPage /></Suspense>} /> 
          <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><LoginPage /></Suspense>} />
          <Route path="/signup" element={<Suspense fallback={<div>Loading...</div>}><SignupPage /></Suspense>} />
          <Route path="/admin" element={<Suspense fallback={<div>Loading...</div>}><AdminLogin /></Suspense>} />
          <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>} />
          <Route path="/second" element={<Suspense fallback={<div>Loading...</div>}><Second /></Suspense>} />
          <Route path="/bookinghome" element={<Suspense fallback={<div>Loading...</div>}><BookingHome /></Suspense>} />
          <Route path="/bookingform" element={<Suspense fallback={<div>Loading...</div>}><BookingForm/></Suspense>} />
          <Route path="/profile" element={<Suspense fallback={<div>Loading...</div>}><Profile/></Suspense>} />
          <Route path="/special" element={<Suspense fallback={<div>Loading...</div>}><Special/></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact/></Suspense>} />
          <Route path="/payment" element={<Suspense fallback={<div>Loading...</div>}><Payment/></Suspense>} />
          <Route path="/bookinghistory" element={<Suspense fallback={<div>Loading...</div>}><BookingHistory/></Suspense>} />
          <Route path="/adminhome" element={<Suspense fallback={<div>Loading...</div>}><AdminHome/></Suspense>} />
          <Route path="/admindashboard" element={<Suspense fallback={<div>Loading...</div>}><AdminDashboard/></Suspense>} />
          <Route path="/users" element={<Suspense fallback={<div>Loading...</div>}><UserDetails/></Suspense>} />
          <Route path="/addboats" element={<Suspense fallback={<div>Loading...</div>}><AddBoat/></Suspense>} />
          <Route path="/addbutton" element={<Suspense fallback={<div>Loading...</div>}><AddButton/></Suspense>} />
          <Route path="/side" element={<Suspense fallback={<div>Loading...</div>}><AdminSideBar/></Suspense>} />
          <Route path="/user/*" element={<UserRoutes/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;