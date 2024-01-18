import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MobileLegend from "./pages/mobile_legend";
import CurrencyConverter from "./pages/currency_convert";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobileLegend" element={<MobileLegend />} />
        <Route path="/currencyconvert" element={<CurrencyConverter />} />
      </Routes>
    </Router>
  );
}

export default App;
