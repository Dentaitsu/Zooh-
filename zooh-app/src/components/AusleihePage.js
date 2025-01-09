import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const AusleihePage = () => {
  const navigate = useNavigate();

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
          <IconButton color="inherit">
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          mt: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", color: "#004d40", mb: 2 }}
        >
          Ausleihe
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="h6" sx={{ color: "#004d40", mb: 2 }}>
          Ausleihbare Gegenstände und Gebühren:
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "#4caf50" }} />
            </ListItemIcon>
            <ListItemText
              primary="Regenschirm – Schutz vor Regen."
              secondary="Gebühr: 5€. Rückerstattung: Bei Rückgabe vollständig zurückerstattet."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "#4caf50" }} />
            </ListItemIcon>
            <ListItemText
              primary="Regenjacke – Bleiben Sie trocken bei jedem Wetter."
              secondary="Gebühr: 7€. Rückerstattung: Vollständig bei Rückgabe."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "#4caf50" }} />
            </ListItemIcon>
            <ListItemText
              primary="Schal – Extra Wärme an kühlen Tagen."
              secondary="Gebühr: 3€. Rückerstattung: Bei Rückgabe zurückerstattet."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "#4caf50" }} />
            </ListItemIcon>
            <ListItemText
              primary="Handschuhe – Perfekt für kalte Tage."
              secondary="Gebühr: 4€. Rückerstattung: Vollständig bei Rückgabe."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "#4caf50" }} />
            </ListItemIcon>
            <ListItemText
              primary="Tagesrucksack – Ideal für Ihre Ausflüge im Zoo."
              secondary="Gebühr: 10€. Rückerstattung: Bei Rückgabe vollständig erstattet."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />
        <Typography variant="h6" sx={{ color: "#004d40", mb: 2 }}>
          Bei Verlust eines ausgeliehenen Gegenstands:
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Sollte ein geliehener Gegenstand verloren gehen, wird die hinterlegte
          Gebühr nicht zurückerstattet, und je nach Gegenstand kann eine
          zusätzliche Ersatzgebühr erhoben werden.
        </Typography>

        <Typography variant="h6" sx={{ color: "#004d40", mb: 2 }}>
          Meldung bei Verlust:
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Falls Sie etwas verloren haben, melden Sie sich bitte so bald wie
          möglich beim Besucherzentrum oder der Hauptinformation. Unser Team
          wird Ihnen weiterhelfen und den Verlust protokollieren.
        </Typography>

        <Typography variant="h6" sx={{ color: "#004d40", mb: 2 }}>
          Zusätzliche Kosten:
        </Typography>
        <Typography variant="body1">
          Für bestimmte Artikel, wie z. B. Regenjacken oder Tagesrucksäcke, kann
          eine Ersatzgebühr in Höhe von bis zu 20€ anfallen, abhängig vom Wert
          des verlorenen Gegenstands.
        </Typography>
      </Box>

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
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
        >
          <Box>
            <Typography variant="h6">Kontakt</Typography>
            <Typography variant="body1">Zoostrasse 43, Zürich</Typography>
            <Typography variant="body1">Telefonnummer: 098198264</Typography>
            <Typography variant="body1">(Google Maps Link)</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Öffnungszeiten</Typography>
            <Typography variant="body1">
              Montag - Sonntag: 09:00 - 18:00
            </Typography>
            <Typography variant="body1">Feiertage: Geschlossen</Typography>
          </Box>
        </Stack>
        <Divider sx={{ my: 2, backgroundColor: "#e0f7fa" }} />
        <Typography variant="body2">
          © 2025 Zoo Zürich. Alle Rechte vorbehalten.
        </Typography>
      </Box>
    </Box>
  );
};

export default AusleihePage;
