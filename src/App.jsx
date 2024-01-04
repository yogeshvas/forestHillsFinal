import { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import Room from "./pages/rooms/Room";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
