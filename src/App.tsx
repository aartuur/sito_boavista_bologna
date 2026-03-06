"use client";

import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contatti from "./pages/Contatti";
import LoaderBoaVista from "./components/layout/LoaderBoavista";
import NavbarBoaVista from "./components/layout/Navbar";
import FooterBoaVista from "./components/layout/FooterBoaVista";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <LoaderBoaVista
          durationMs={1800}
          onFinish={() => setLoading(false)}
        />
      )}
      <BrowserRouter>
        <NavbarBoaVista />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
        <FooterBoaVista />
      </BrowserRouter>
    </>
  );
}

export default App;