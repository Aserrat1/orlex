import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <div>© {new Date().getFullYear()} ORLEX Consultores</div>
        <div className="flex gap-4">
          <a href="#quienes" className="hover:underline">
            Sobre nosotros
          </a>
          <a href="#servicios" className="hover:underline">
            Servicios
          </a>
          <a href="#contacto" className="hover:underline">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
