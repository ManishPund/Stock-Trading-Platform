import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Navbar from "../landing_page/Navbar";
import Footer from "../landing_page/Footer";
import "./LandingPageRoutes.css";
import Home from "../landing_page/home/HomePage";
import SignUp from "../landing_page/signup/SignUp";
import Login from "../landing_page/signup/Login";
import About from "../landing_page/about/AboutPage";
import Product from "../landing_page/products/ProductPage";
import Pricing from "../landing_page/pricing/PricingPage";
import Support from "../landing_page/support/SupportPage";

const LandingPageRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
    </>
  );
};

export default LandingPageRoutes;
