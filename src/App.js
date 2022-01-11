import React from "react";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//import Nav
import Nav from "./components/Nav";
//Style
import styles from "./styles/App.scss";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  //......................... Use Location...............................

  const location = useLocation();

  //..............................App......................................

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />}></Route>

          <Route path="/work" element={<OurWork />}></Route>

          <Route path="/work/:id" element={<MovieDetail />}></Route>

          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
