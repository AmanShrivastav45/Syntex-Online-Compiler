import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Analytics>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Analytics>
    </Router>
  );
}

export default App;
