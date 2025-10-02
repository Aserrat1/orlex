import React from "react";

const clientes = [
  "La sevillana",
  "Panificadora Teapa",
  "Veterinaria el Potrillo",
  "Mardó",
  "Proviqsa",
  "Pellicer Tires",
  "Auto tyre Merida",
  "Aslan Fumigaciones",
];

export default function Clientes() {
  return (
    <section id="clientes" className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Clientes</h2>
        <p className="mt-2 text-gray-600">
          Empresas que confiaron en nuestro trabajo.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {clientes.map((c, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl p-4 text-sm text-gray-700 bg-gray-50"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
