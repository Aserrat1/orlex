import React from "react";
import Navbar from "./components/Navbaruno"; // Capital N, y Navbar.js
import Hero from "./components/Hero";
import QuienesSomos from "./components/QuienesSomos";
import Servicios from "./components/Servicios";
import Clientes from "./components/Clientes";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <QuienesSomos />
      <Servicios />
      <Clientes />
      <Contacto />
      <Footer />
    </div>
  );
}
