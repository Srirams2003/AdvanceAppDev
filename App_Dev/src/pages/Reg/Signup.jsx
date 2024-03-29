import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  LinearProgress,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

// SVG background
const svgBackground = (
  <div id="bg-wrap" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
      <defs>
        <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
          <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
          <stop offset="0%" stopColor="rgba(255, 204, 203, 1)"></stop>
          <stop offset="100%" stopColor="rgba(255, 204, 203, 0)"></stop>
        </radialGradient>
        <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
          <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
          <stop offset="0%" stopColor="rgba(204, 255, 204, 1)"></stop> 
          <stop offset="100%" stopColor="rgba(204, 255, 204, 0)"></stop>
        </radialGradient>
        <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
          <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
          <stop offset="0%" stopColor="rgba(204, 204, 255, 1)"></stop>
          <stop offset="100%" stopColor="rgba(204, 204, 255, 0)"></stop>
        </radialGradient>
        <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
          <animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate>
          <stop offset="0%" stopColor="rgba(255, 255, 204, 1)"></stop> 
          <stop offset="100%" stopColor="rgba(255, 255, 204, 0)"></stop>
        </radialGradient>
        <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
          <animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
          <stop offset="0%" stopColor="rgba(204, 255, 255, 1)"></stop>
          <stop offset="100%" stopColor="rgba(204, 255, 255, 0)"></stop>
        </radialGradient>
      </defs>
      <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)">
        <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
        <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform>
      </rect>
      <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)">
        <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
        <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
      </rect>
      <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
        <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
        <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
        <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
      </rect>
      <rect x="35%" y="70%" width="100%" height="100%" fill="url(#Gradient4)" transform="rotate(180 50 50)">
        <animate attributeName="x" dur="20s" values="0%;-30%;0%" repeatCount="indefinite"></animate>
        <animate attributeName="y" dur="15s" values="0%;30%;0%" repeatCount="indefinite"></animate>
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="8s" repeatCount="indefinite"></animateTransform>
      </rect>
      <rect x="70%" y="20%" width="100%" height="100%" fill="url(#Gradient5)" transform="rotate(45 50 50)">
        <animate attributeName="x" dur="22s" values="0%;30%;0%" repeatCount="indefinite"></animate>
        <animate attributeName="y" dur="18s" values="0%;-30%;0%" repeatCount="indefinite"></animate>
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="10s" repeatCount="indefinite"></animateTransform>
      </rect>
    </svg>
  </div>
);


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [roles,setRoles] = useState('');




  const handleSignUp = async () => {
    const data = {
      name : name,
      email : email,
      password : password,
      roles:'ROLE_USER',
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/users/post', { name, email, password });
      const resp = await axios.post("http://localhost:8080/products/new",data);
      console.log(resp);
      if (response.status === 200) {
        setError(response.data.message);
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  

  

  return (
    <ThemeProvider theme={theme}>
      {svgBackground}
      <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
  }}
>
  <Box
    sx={{
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', 
      padding: '20px',
    }}
  >
    
    <Paper
      sx={{
        width: '350px',
        height: '500px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        position: 'relative',
        zIndex: 2,
        padding: '25px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', 
        borderRadius:'15px',
      }}
    >
     
      <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
        Sign Up
      </Typography>
      <form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <TextField
            label="User Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            required
          />
          <TextField
            label="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            required
          />
          <TextField
            label="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            type="password"
            required
          />
          <TextField
                  label="Confirm Password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  variant="outlined"
                  type="password"
                  required
                />
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleSignUp}
            disabled={loading || !email || !password}
            sx={{ marginTop: '16px' }}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </Button>
          <p>New User? </p>
                <Link to="/login">
                <p>Login</p>
              </Link>
        </Box>
      </form>
      {loading && <LinearProgress sx={{ marginTop: '16px' }} />}
    </Paper>
  </Box>

</Box>

    </ThemeProvider>
  );
};

export default SignupPage;
