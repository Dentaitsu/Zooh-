import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MapPage from "./components/MapPage";
import AusleihePage from "./components/AusleihePage";
import Weather from "./components/Weather";
import TicketsPage from "./components/Tickets";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/borrow" element={<AusleihePage />} />
        <Route path="/weather" element={<Weather/>} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
