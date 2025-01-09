import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import backgroundImage from "../media/Keyvisual Zoo Zürich Winter 2024.jpg";
import image1 from "../media/2244_23718_2.jpg";
import image2 from "../media/2244-0014343-1.avif";
import MapIcon from "@mui/icons-material/Map";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Homepage = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#e0f7fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* AppBar with Home Button and Hamburger Menu */}
      <AppBar position="static" sx={{ backgroundColor: "#004d40" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate("/")}
          >
            <HomeIcon fontSize="large" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={() => {
            navigate("/map");
            handleMenuClose();
          }}
        >
          Karte
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/borrow");
            handleMenuClose();
          }}
        >
          Ausleihe
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/weather");
            handleMenuClose();
          }}
        >
          Wetter
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/tickets");
            handleMenuClose();
          }}
        >
          Tickets
        </MenuItem>
      </Menu>

      {/* Hero Section */}
      <Box
        sx={{
          height: "70vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.9)",
            fontWeight: "bold",
          }}
        >
          Willkommen im Zoo Zürich
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            mt: 2,
          }}
        >
          Entdecken, Erleben, Staunen
        </Typography>
      </Box>

      {/* Button Navigation Section */}
      <Grid container spacing={4} sx={{ mt: 4, px: 4 }}>
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={() => navigate("/map")}
            sx={{
              padding: "20px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "1.1rem",
              backgroundColor: "#00acc1",
              color: "#fff",
              ":hover": { backgroundColor: "#00838f" },
            }}
          >
            <MapIcon sx={{ fontSize: 50, mb: 1 }} />
            Karte
          </Button>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={() => navigate("/borrow")}
            sx={{
              padding: "20px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "1.1rem",
              backgroundColor: "#00acc1",
              color: "#fff",
              ":hover": { backgroundColor: "#00838f" },
            }}
          >
            <SwapHorizIcon sx={{ fontSize: 50, mb: 1 }} />
            Ausleihe
          </Button>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={() => navigate("/weather")}
            sx={{
              padding: "20px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "1.1rem",
              backgroundColor: "#00acc1",
              color: "#fff",
              ":hover": { backgroundColor: "#00838f" },
            }}
          >
            <WbSunnyIcon sx={{ fontSize: 50, mb: 1 }} />
            Wetter
          </Button>
        </Grid>
      </Grid>

      {/* Information Cards Section */}
      <Grid container spacing={4} sx={{ mt: 4, px: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 3, backgroundColor: "#80deea" }}>
            <Box
              sx={{
                height: "200px",
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
              }}
            ></Box>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ color: "#004d40" }}>
                Entdecke die Tierwelt
              </Typography>
              <Typography variant="body1" sx={{ color: "#004d40" }}>
                Erlebe die vielfältige Tierwelt und erforsche die Wunder der
                Natur.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 3, backgroundColor: "#80deea" }}>
            <Box
              sx={{
                height: "200px",
                backgroundImage: `url(${image2})`,
                backgroundSize: "cover",
              }}
            ></Box>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ color: "#004d40" }}>
                Erlebe die Natur
              </Typography>
              <Typography variant="body1" sx={{ color: "#004d40" }}>
                Begleite uns bei der Erhaltung der Schönheit und Vielfalt
                unseres Planeten.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 3, backgroundColor: "#80deea" }}>
            <Box
              sx={{
                height: "200px",
                backgroundColor: "#00acc1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" sx={{ color: "#fff" }}>
                Dein Abenteuer erwartet dich!
              </Typography>
            </Box>
            <CardContent>
              <Typography variant="body1" sx={{ color: "#004d40" }}>
                Plane deinen Besuch und starte in ein unvergessliches Erlebnis.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Box
        sx={{
          mt: 4,
          py: 3,
          backgroundColor: "#004d40",
          color: "#e0f7fa",
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Kontakt</Typography>
        <Typography variant="body1">Zoostrasse 43, Zürich</Typography>
        <Typography variant="body1">Telefonnummer: 098198264</Typography>
        <Typography variant="body1">(Google Maps Link)</Typography>
      </Box>
    </Box>
  );
};

export default Homepage;