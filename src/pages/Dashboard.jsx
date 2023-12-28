import React from "react";
import Resikel from "../img/Resikel.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import B3 from "../img/B3.svg";
import Organik from "../img/Organik.svg";
import Anorganik from "../img/Anorganik.svg";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigateToSampah = () => {
    navigate('/Product');
  };
  const isLogin = localStorage.getItem("isLogin");

return (
    <Container component="div" maxWidth="md">
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" fontWeight="bold" color="limegreen" mb={2}>
          Dari Hal Kecil
        </Typography>
        <Typography variant="h2" fontWeight="bold" color="green" mb={10}>
          Untuk Lindungi Bumi Kita
        </Typography>

        <Typography variant="h4" fontWeight="bold" color="black" mb={10}>
          Pilih Jenis Sampah
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: "#fc8383",
                borderRadius: "12px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={handleNavigateToSampah}
            >
              <CardMedia
                component="img"
                height="140"
                width="100%" 
                image={B3}
                alt="Sampah B3"
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color="#860000">
                  Sampah B3
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: "#9cd548",
                borderRadius: "12px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={handleNavigateToSampah}
            >
              <CardMedia
                component="img"
                height="140"
                width="100%" 
                image={Organik}
                alt="Organik"
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color="#255703">
                  Organik
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: "#e7e043",
                borderRadius: "12px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={handleNavigateToSampah}
            >
              <CardMedia
                component="img"
                height="140"
                width="100%" // Add this to adjust the width
                image={Anorganik}
                alt="Anorganik"
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color="#7d6900">
                  Anorganik
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Dashboard;
