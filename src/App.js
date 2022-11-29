import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
// import FruitCatalogue from "./Components/FruitCatalogue/FruitCatalogue";
import HowItWorksFullPage from "./Components/HowItWorks/HowItWorksFullPage";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import Product from "./Components/Products/Product";
import CartPage from "./Components/Cart/CartPage";
import Checkout from "./Components/Cart/Checkout";

function App(props) {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorksFullPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
