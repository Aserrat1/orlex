import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contacto() {
  return (
    <section id="contacto" className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold">Contáctanos</h2>
          <p className="mt-2 text-gray-600">Tu éxito es nuestra prioridad.</p>
          <div className="mt-6 space-y-3 text-gray-700">
            <a
              href="tel:+529931935949"
              className="flex items-center gap-3 hover:underline"
            >
              <Phone className="w-4 h-4" /> 9931935949
            </a>
            <a
              href="mailto:contacto@orlexconsultores.com"
              className="flex items-center gap-3 hover:underline"
            >
              <Mail className="w-4 h-4" /> contacto@orlexconsultores.com
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4" /> Calle Plutarco Elías Calles No.
              326, Villahermosa, Tabasco
            </div>
          </div>
        </div>
        <div className="rounded-2xl shadow-sm border border-gray-100 bg-white">
          <div className="p-6">
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm">Nombre</label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-200 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full border border-gray-200 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label className="text-sm">Mensaje</label>
                <textarea
                  className="mt-1 w-full border border-gray-200 rounded-xl p-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="¿Cómo podemos ayudarte?"
                />
              </div>
              <button
                type="button"
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors justify-center"
              >
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
