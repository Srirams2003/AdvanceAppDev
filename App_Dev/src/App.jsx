import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy-loaded components
const LoginPage = React.lazy(() => import('./pages/Reg/Login'));
const SignupPage = React.lazy(() => import('./pages/Reg/Signup'));
const FirstPage = React.lazy(() => import('./pages/Reg/FirstPage')); // Lazy load FirstPage component
const AdminLogin = React.lazy(() => import('./pages/AdminPages/AdminLogin'));
const HomePage = React.lazy(() => import('./pages/CompPages/HomePage'));
const Second = React.lazy(() => import('./pages/CompPages/Second'));
const BookingHome = React.lazy(() => import('./pages/BookingPages/HomeBooking'));

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
