import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MobileLegend from "./pages/mobile_legend";
import CurrencyConverter from "./pages/currency_convert";
import SalaryCalculating from "./pages/salary_calculating";
import CountDuration from "./pages/count_duration";
import TicTacToe from "./pages/tic_tac_toe";
import WordScramb from "./pages/word_scramb";
import MatchingCard from "./pages/matching_card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobileLegend" element={<MobileLegend />} />
        <Route path="/currencyconvert" element={<CurrencyConverter />} />
        <Route path="/salarycalculating" element={<SalaryCalculating />} />
        <Route path="/countduration" element={<CountDuration />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/wordscramb" element={<WordScramb />} />
        <Route path="/matchingcard" element={<MatchingCard />} />
      </Routes>
    </Router>
  );
}

export default App;
