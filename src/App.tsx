"use client";

import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contatti from "./pages/Contatti";
import LoaderBoaVista from "./components/layout/LoaderBoavista";
import NavbarBoaVista from "./components/layout/Navbar";
import NotFoundPage from "./pages/NotFound";
import CookieConsentModal from "./components/ui/CookieConsentModal";
import CookiePolicyPage from "./pages/CookiePolicy";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <LoaderBoaVista durationMs={1800} onFinish={() => setLoading(false)} />
      )}

      <BrowserRouter>
        <NavbarBoaVista />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <CookieConsentModal />
      </BrowserRouter>
    </>
  );
}

export default App;
