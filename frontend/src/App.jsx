import React, { useState, useEffect } from "react";
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
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ run on load
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* HOME */}
        <Route
          path="/"
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
         <Route
          path="/product"
          element={
            isLoggedIn ? (
              <>
                <Navbar />
                <Product />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;