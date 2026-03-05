"use client";

import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contatti from "./pages/Contatti";
import NavbarBoaVista from "./components/ui/Navbar";
import LoaderBoaVista from "./components/ui/LoaderBoavista";

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
      </BrowserRouter>
    </>
  );
}

export default App;