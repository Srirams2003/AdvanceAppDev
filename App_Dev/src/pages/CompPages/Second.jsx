import { Grid, Paper, IconButton } from '@mui/material';
import boat from '../Images/boat.jpg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

const Second = () => {
  

  return (
    
    <Grid container spacing={0} style={{ height: '100%' }}>
      <Grid item xs={6}>
        <Paper 
          style={{
            height: '100vh',
            backgroundImage: `url(${boat})`,
            backgroundSize: 'contain', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
      </Grid>
      <Grid item xs={6}>
      <Link to="/home">
        <IconButton 
          style={{ position: 'absolute', top: '10px', right: '300px', zIndex: '9999' }} 
          color="primary" 
          aria-label="scroll-to-top"
        >
          <ArrowUpward />
        </IconButton>
        </Link>
        
        <Paper 
          style={{ 
            minHeight: '91.2vh', 
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57iiUg3b4Jd-nhV0xkaVDMkq8jp_atqUcvA&usqp=CAU')`,
            backgroundSize: 'contain', 
            // backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
            paddingTop: '70px',
            wordSpacing: '8px',
            fontSize: '20px',
            fontFamily: 'cursive',
            alignItems: 'center', 
            justifyContent: 'center', 
            paddingLeft: '30px', 
            paddingRight: '30px'
          }}
        >
          <center>
            <h3>Experience the Cruise from Expert</h3>
          </center>
          <br/>
          <br/>
          <div>
            "Step into our boathouse retreat, where every corner 
            whispers tales of serenity and adventure. 
            Nestled along tranquil waterways, our sanctuary invites you to escape 
            the hustle and bustle of daily life and immerse yourself in the embrace of nature's 
            splendor. From luxurious accommodations to breathtaking vistas, every detail has been 
            crafted to ensure your stay is nothing short of extraordinary."
          </div>
          <br/>

          <div>
            "Embark on a journey of discovery as you explore winding canals and hidden lagoons, 
            each bend revealing a new panorama of untouched beauty. Whether you seek the thrill of 
            water sports or the tranquility of a leisurely cruise, our boathouse promises an experience 
            tailored to your desires. Join us and let the rhythm of the waves awaken your senses, as you 
            create cherished memories against the backdrop of nature's timeless allure." 
          </div>
          <br/>
          <br/>
          <center>
            <Link to="/bookinghome">
              <Button variant="contained" color="primary" style={{ marginTop: '1px' }}>
                Book Now
              </Button>
            </Link>
          </center>
          <br/>
        </Paper>
      </Grid>
    </Grid>
   
  );
};

export default Second;
