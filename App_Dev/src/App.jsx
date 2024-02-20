// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Reg/Login';
import SignupPage from './pages/Reg/Signup';
import FirstPage from './pages/Reg/FirstPage';
import AdminLogin from './pages/AdminPages/AdminLogin';
import HomePage from './pages/CompPages/HomePage';
import Second from './pages/CompPages/Second';
import BookingHome from './pages/BookingPages/HomeBooking';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/second" element={<Second />} />
          <Route path="/bookinghome" element={<BookingHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
