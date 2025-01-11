import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  CircularProgress,
  Grid,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import { useNavigate } from "react-router-dom";

// Import Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Manually register the scales and other components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherPage = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherResponse = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=47.3769&longitude=8.5417&current_weather=true"
        );
        const weatherData = await weatherResponse.json();
        setWeather(weatherData.current_weather);

        const forecastResponse = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=47.3769&longitude=8.5417&daily=temperature_2m_max,temperature_2m_min&timezone=Europe/Zurich"
        );
        const forecastData = await forecastResponse.json();
        setForecast(forecastData.daily.temperature_2m_max);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e0f7fa",
        }}
      >
        <CircularProgress size={60} sx={{ color: "#004d40" }} />
      </Box>
    );
  }

  const forecastChartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: "Max Temperature (°C)",
        data: forecast,
        borderColor: "#004d40",
        backgroundColor: "#80deea",
        tension: 0.3,
      },
    ],
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#e0f7fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#004d40" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate("/")}>
            <HomeIcon fontSize="large" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => { navigate("/map"); handleMenuClose(); }}>Karte</MenuItem>
        <MenuItem onClick={() => { navigate("/borrow"); handleMenuClose(); }}>Ausleihe</MenuItem>
        <MenuItem onClick={() => { navigate("/weather"); handleMenuClose(); }}>Wetter</MenuItem>
        <MenuItem onClick={() => { navigate("/tickets"); handleMenuClose(); }}>Tickets</MenuItem>
      </Menu>

      <Grid container spacing={4} sx={{ mt: 4, px: 4 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <CardContent>
              <Typography variant="h4" sx={{ color: "#004d40", textAlign: "center", mb: 2 }}>
                Wetter in Zürich
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "center", color: "#004d40" }}>
                {weather.temperature}°C
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", color: "#004d40" }}>
                {weather.weathercode === 0 ? "Klar" : "Bewölkt"}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                {weather.weathercode === 0 ? (
                  <WbSunnyIcon sx={{ color: "#fdd835", fontSize: 60 }} />
                ) : (
                  <CloudIcon sx={{ color: "#90a4ae", fontSize: 60 }} />
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <CardContent>
              <Typography variant="h5" sx={{ textAlign: "center", color: "#004d40", mb: 2 }}>
                5-Tages Wetterprognose
              </Typography>
              <Line data={forecastChartData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ py: 3, backgroundColor: "#004d40", color: "#e0f7fa", textAlign: "center" }}>
        <Typography variant="h6">Kontakt</Typography>
        <Typography variant="body1">Zoostrasse 43, Zürich</Typography>
        <Typography variant="body1">Telefonnummer: 098198264</Typography>
        <Typography variant="body1">(Google Maps Link)</Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>© 2025 Zoo Zürich. Alle Rechte vorbehalten.</Typography>
      </Box>
    </Box>
  );
};

export default WeatherPage;
