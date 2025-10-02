import React from "react";

export default function Navbaruno() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#inicio" className="font-semibold text-xl tracking-tight">
          ORLEX Consultores
        </a>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#quienes" className="hover:text-gray-700">
            Quiénes somos
          </a>
          <a href="#servicios" className="hover:text-gray-700">
            Servicios
          </a>
          <a href="#clientes" className="hover:text-gray-700">
            Clientes
          </a>
          <a href="#contacto" className="hover:text-gray-700">
            Contacto
          </a>
        </nav>
        <a href="#contacto" className="md:inline-flex hidden">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            Contáctanos
          </button>
        </a>
      </div>
    </header>
  );
}
