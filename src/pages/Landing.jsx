import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Paper,
  CssBaseline,
} from '@mui/material';

const Landing = () => {
  const navigate = useNavigate();

  const handleStartNowClick = () => {
    navigate('/Login');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        minHeight: '100vh',
        backgroundColor: '#9cd548',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <CssBaseline />
      <Container
        maxWidth="md"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Paper
          elevation={3}
          style={{
            padding: '32px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '8px',
            textAlign: 'left', // Align text to the left
            marginTop: '20%',
          }}
        >
          <Typography variant="h2" component="div" sx={{ color: '#9cd548' }}>
            Hai! Welcome to Risekel
          </Typography>
          <br />
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
            Platform inovatif yang memudahkan Kamu untuk berkontribusi pada pelestarian lingkungan.
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
            Temukan pusat daur ulang terdekat, Buang sampahnya, dan dapatkan Cuannya!!.
          </Typography>
          <br />
          <Button
            onClick={handleStartNowClick}
            variant="contained"
            sx={{
              backgroundColor: '#4CAF50',
              color: 'white',
              '&:hover': {
                backgroundColor: '#45a049',
              },
              mt: 4, // margin-top
            }}
          >
            Mulai Sekarang
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default Landing;
