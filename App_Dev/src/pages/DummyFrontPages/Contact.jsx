import  { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const contactInfo = [
    {
      platform: 'Email',
      icon: <EmailIcon />,
      description: 'theseashell@gmail.com',
    },
    {
      platform: 'Phone',
      icon: <PhoneIcon />,
      description: '+919874651230',
    },
    {
      platform: 'Instagram',
      icon: <InstagramIcon />,
      description: '@TheSeaShell',
    },
    {
      platform: 'WhatsApp',
      icon: <WhatsAppIcon />,
      description: '+917539514561',
    },
    {
      platform: 'Twitter',
      icon: <TwitterIcon />,
      description: '@ThesheShells',
    },
    {
      platform: 'Address',
      icon: <LocationOnIcon />,
      description: '01, ABC Nagar, Azhapuzha, Kerala-03',
    },
  ];

  const [typedText, setTypedText] = useState('');
  const textToType = [
    'Get in Touch with us!',
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textIndex < textToType.length) {
        if (charIndex < textToType[textIndex].length) {
          setTypedText(prev => prev + textToType[textIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => {
            setTypedText('');
            setTextIndex(prev => (prev + 1) % textToType.length);
            setCharIndex(0);
          }, 1000);
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [typedText, charIndex, textIndex, textToType.length]);

  return (
    <div style={{
      backgroundImage: `url(https://wallpaper.dog/large/199245.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '40px 20px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={2} style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', backgroundImage: `url(https://wallpaper.dog/large/199245.jpg)` }}>

          <Grid item xs={8} style={{ minWidth: '500px' }}>
            <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', }}>
              <div style={{ display: 'block' }}>
                <div>
                  <h1 style={{ marginTop: '80px', fontSize: '40px', color: '#444' }}>{typedText}</h1>
                </div>
                <div>
                  <h3 style={{ marginTop: '30px', color: '#666' }}>'Want to get in touch? We Love to hear from you. Here is how you can reach us'</h3>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} style={{ minWidth: '400px', borderRadius: '10px' }}>
            <img src="/src/pages/Images/home.jpg" alt="Not avail" style={{ width: '100%', top: 0, borderTopLeftRadius: '100px', borderBottomLeftRadius: '200px' }} />
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '20px' }}>
        {contactInfo.map((contact, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', transition: 'transform 0.3s ease', textAlign: 'center', cursor: 'pointer', background: 'linear-gradient(135deg, #e0f3f3, #f0e0e0)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '30px', borderRadius: '50%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
                  {contact.icon}
                </div>
                <span style={{ fontWeight: 'bold', color: '#444' }}>{contact.platform}</span>
              </div>
              <Typography variant="body1" color="text.secondary" style={{ fontSize: '16px', color: '#666' }}>
                {contact.description}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Contact;
