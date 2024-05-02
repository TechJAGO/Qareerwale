import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Navbar from "./Components/Navbar";
import FooterSection from "./Components/FooterSection";
import Layout from "./Components/Layout";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
