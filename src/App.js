import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import FruitCatalogue from "./Components/FruitCatalogue/FruitCatalogue";
import HowItWorksFullPage from "./Components/HowItWorks/HowItWorksFullPage";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorksFullPage />} />
          <Route path="/fruitcatalogue" element={<FruitCatalogue />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
