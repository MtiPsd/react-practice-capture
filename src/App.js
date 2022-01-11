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
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<AboutUs />}></Route>

        <Route path="/work" element={<OurWork />}></Route>

        <Route path="/work/:id" element={<MovieDetail />}></Route>

        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
