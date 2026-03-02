import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Contatti from "./pages/Contatti"
import NavbarBoaVista from './components/ui/Navbar'

function App() {
  return (
    <BrowserRouter>
    <NavbarBoaVista />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App