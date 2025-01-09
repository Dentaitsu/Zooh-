import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Grid,
  Divider,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import mapImage from "../media/zooplan-a4-web-241212.png";
import { useNavigate } from "react-router-dom";

const MapPage = () => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=47.3769&longitude=8.5417&current_weather=true"
        );
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#e0f7fa",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
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

      {/* Map Image Section */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          mt: 4,
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "800px",
            border: "5px solid #004d40",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <img
            src={mapImage}
            alt="Zoo Map"
            style={{ width: "100%", height: "auto" }}
          />

          {/* Example Marker on the Map */}
          <Tooltip title="Tiergehege" placement="top">
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: "40%",
                color: "#d32f2f",
              }}
            >
              <LocationOnIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Tooltip>

          {/* VR Attraction Marker */}
          <Tooltip title="VR-Attraktion" placement="top">
            <IconButton
              sx={{
                position: "absolute",
                top: "60%",
                left: "30%",
                color: "#d32f2f",
              }}
            >
              <LocationOnIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Weather Icon Overlay */}
      {weather && (
        <Tooltip
          title={`Aktuelles Wetter: ${weather.temperature}°C, ${
            weather.weathercode === 0 ? "Klar" : "Bewölkt"
          }`}
          placement="top"
        >
          <IconButton
            sx={{
              position: "absolute",
              top: "15%",
              left: "10%",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "50%",
              padding: 1,
            }}
          >
            {weather.weathercode === 0 ? (
              <WbSunnyIcon sx={{ color: "#fdd835", fontSize: 40 }} />
            ) : (
              <CloudIcon sx={{ color: "#90a4ae", fontSize: 40 }} />
            )}
          </IconButton>
        </Tooltip>
      )}

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
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Kontakt</Typography>
            <Typography variant="body1">Zoostrasse 43, Zürich</Typography>
            <Typography variant="body1">Telefonnummer: 098198264</Typography>
            <Typography variant="body1">(Google Maps Link)</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Öffnungszeiten</Typography>
            <Typography variant="body1">
              Montag - Sonntag: 09:00 - 18:00
            </Typography>
            <Typography variant="body1">Feiertage: Geschlossen</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2, backgroundColor: "#e0f7fa" }} />
        <Typography variant="body2">
          © 2025 Zoo Zürich. Alle Rechte vorbehalten.
        </Typography>
      </Box>
    </Box>
  );
};

export default MapPage;
