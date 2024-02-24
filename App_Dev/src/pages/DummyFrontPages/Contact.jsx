import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Email from '../Images/email.png';
import  Phone from '../Images/phone.jpg';
import Whats from '../Images/whats.jpg';
import x from '../Images/x.jpg';
import insta from '../Images/insta.jpg';
import loc from '../Images/loc.jpg'

const Contact = () => {
  const contactInfo = [
    {
      platform: 'Email',
      image: Email,
      description: 'Send us an email for inquiries and support. For furthur queries:theseashell@gmail.com',
    },
    {
      platform: 'Phone',
      image: Phone, 
      description: 'Call us for immediate assistance.Call us at:+919874651230',
    },
    {
        platform: 'Instagram',
        image:insta , 
        description: 'Follow us on Instagram for updates and promotions.Follow us on Instagram:@TheSeaShell',
      },
      {
        platform: 'WhatsApp',
        image: Whats, 
        description: 'Chat with us on WhatsApp for quick responses.For furthur enquires,Ping us on +917539514561',
      },
      {
        platform: 'Twitter',
        image: x, 
        description: 'Tweet us on Twitter for news and announcements. Follow @ThesheShells',
      },
      {
        platform: 'Address',
        image: loc,
        description: 'Visit us at our physical location. 01,ABC Nagar,Azhapuzha,Kerala-03',
      },
  ];

  return (
    <div style={{ marginTop: '100px', padding: '0 20px' }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Grid container spacing={3} style={{ paddingLeft: '15px', paddingRight: '15px', justifyContent: 'center', marginTop: '80px' }}>
        {contactInfo.map((contact, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="contact-card">
              <CardContent>
                <CardMedia
                  component="img"
                  image={contact.image}
                  alt={contact.platform}
                  style={{ height: 100, width: 'auto', margin: 'auto' }}
                />
                <Typography variant="h5" style={{ marginTop: '10px' }}>{contact.platform}</Typography>
                <Typography variant="body2">{contact.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Contact;
