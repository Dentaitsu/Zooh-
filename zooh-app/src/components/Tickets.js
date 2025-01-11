import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Snackbar,
  Alert,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton as MuiIconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const TicketsPage = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAddToCart = (ticket) => {
    setCart([...cart, ticket]);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const ticketOptions = [
    {
      type: "Einzelticket",
      description: "Zugang für eine Person.",
      price: "20€",
    },
    {
      type: "Familienticket",
      description: "Gültig für zwei Erwachsene und bis zu drei Kinder.",
      price: "50€",
    },
    {
      type: "Kinder unter 15 Jahren",
      description: "Ermäßigter Eintritt für Kinder zwischen 13 und 15 Jahren.",
      price: "10€",
    },
    {
      type: "Kinder unter 12 Jahren",
      description: "Kostenloser Eintritt für Kinder unter 12 Jahren.",
      price: "Kostenlos",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#e0f7fa", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      {/* AppBar with Home Button and Hamburger Menu */}
      <AppBar position="static" sx={{ backgroundColor: "#004d40" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate("/")}>
            <HomeIcon fontSize="large" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            Warenkorb ({cart.length})
          </IconButton>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => navigate("/map")}>Karte</MenuItem>
        <MenuItem onClick={() => navigate("/borrow")}>Ausleihe</MenuItem>
        <MenuItem onClick={() => navigate("/weather")}>Wetter</MenuItem>
        <MenuItem onClick={() => navigate("/tickets")}>Tickets</MenuItem>
      </Menu>

      {/* Ticket Options */}
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4" sx={{ textAlign: "center", color: "#004d40", mb: 4 }}>
          Tickets
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {ticketOptions.map((ticket, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: "10px", backgroundColor: "#ffffff" }}>
                <CardContent>
                  <Typography variant="h5" sx={{ color: "#004d40", mb: 2 }}>
                    {ticket.type}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {ticket.description}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#004d40", fontWeight: "bold" }}>
                    {ticket.price}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: 2, backgroundColor: "#004d40" }}
                    fullWidth
                    onClick={() => handleAddToCart(ticket)}
                  >
                    Ticket auswählen
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Drawer (Cart) */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 300, padding: "20px" }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Warenkorb
          </Typography>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index} secondaryAction={
                <MuiIconButton edge="end" aria-label="delete" onClick={() => handleRemoveFromCart(index)}>
                  <DeleteIcon />
                </MuiIconButton>
              }>
                <ListItemText primary={item.type} secondary={item.price} />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#004d40" }}
            fullWidth
            onClick={handleDrawerToggle}
          >
            Kaufen
          </Button>
        </Box>
      </Drawer>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
          Ticket wurde zum Warenkorb hinzugefügt!
        </Alert>
      </Snackbar>

      {/* Footer Section */}
      <Box sx={{ py: 3, backgroundColor: "#004d40", color: "#e0f7fa", textAlign: "center" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Kontakt</Typography>
            <Typography variant="body1">Zoostrasse 43, Zürich</Typography>
            <Typography variant="body1">Telefonnummer: 098198264</Typography>
            <Typography variant="body1">(Google Maps Link)</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Öffnungszeiten</Typography>
            <Typography variant="body1">Montag - Sonntag: 09:00 - 18:00</Typography>
            <Typography variant="body1">Feiertage: Geschlossen</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2, backgroundColor: "#e0f7fa" }} />
        <Typography variant="body2">© 2025 Zoo Zürich. Alle Rechte vorbehalten.</Typography>
      </Box>
    </Box>
  );
};

export default TicketsPage;
