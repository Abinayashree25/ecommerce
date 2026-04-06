import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import About from "./components/About";
import Makeup from "./components/Makeup";
import Skincare from "./components/Skincare";
import Haircare from "./components/Haircare";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";

import CartProvider from "./CartContext";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check login on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>

        <Routes>

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Login */}
          <Route 
            path="/login" 
            element={<Login setIsLoggedIn={setIsLoggedIn} />} 
          />

          {/* Home */}
          <Route 
            path="/home" 
            element={
              isLoggedIn ? (
                <>
                  <Navbar />
                  <Index />
                  <About />
                  <Makeup />
                  <Skincare />
                  <Haircare />
                  <Contact />
                  <Footer />
                </>
              ) : (
                <Navigate to="/login" />
              )
            } 
          />

          {/* Product */}
          <Route 
            path="/product" 
            element={
              isLoggedIn 
                ? <><Navbar /><Product /></> 
                : <Navigate to="/login" />
            } 
          />

          {/* Cart */}
          <Route 
            path="/cart" 
            element={
              isLoggedIn 
                ? <><Navbar /><Cart /></> 
                : <Navigate to="/login" />
            } 
          />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/login" />} />

        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;