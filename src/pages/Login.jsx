import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { Link as RouterLink, Navigate, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Container,
  Typography,
  Link,
} from "@mui/material";
import GoGreen from "../img/GoGreen.svg";
import Resikel from "../img/Resikel.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("isLogin"));

  const navigate = useNavigate();

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = () => {
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
      console.log("Selamat Datang Admin!");
      navigate("/dashboard");
      localStorage.setItem("username", username);
      localStorage.setItem("isLogin", true);
    } else if (username === "user" && password === "user") {
      setLoggedIn(true);
      console.log("Login berhasil");
      navigate("/dashboard");
      localStorage.setItem("username", username);
      localStorage.setItem("isLogin", true);
    } else {
      alert("Yah loginnya gagal :(");
    }
  };

  const handleMedsos = (platform) => {
    console.log(`Logging in with ${platform}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
       <img
              src={GoGreen}
              alt="Login Image"
              style={{ width: "100%", height: "auto", marginTop: "20px" }}
            />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {isLoggedIn ? (
            <div>
              <Typography
                variant="subtitle1"
                color="success.main"
                align="center"
                mb={2}
              >
                {`Halo, ${username}! Anda telah berhasil login.`}
              </Typography>
            </div>
          ) : (
            <div>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#4CAF50" }}
              >
                Login
              </Button>

              <Grid container justifyContent="center">
                <Grid item>
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="body2"
                  >
                    {"Belum punya akun? Daftar disini"}
                  </Link>
                </Grid>
              </Grid>
            </div>
          )}
        </Box>
        {!isLoggedIn && (
          <div>
            
            <div style={{ marginTop: "20px" }}>
              <Button
                onClick={() => handleMedsos("Facebook")}
                variant="contained"
                sx={{ bgcolor: "#4CAF50", mr: 1 }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Button>
              <Button
                onClick={() => handleMedsos("Instagram")}
                variant="contained"
                sx={{ bgcolor: "#4CAF50", mr: 1 }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Button>
              <Button
                onClick={() => handleMedsos("Google")}
                variant="contained"
                sx={{ bgcolor: "#4CAF50" }}
              >
                <FontAwesomeIcon icon={faGoogle} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Login;
