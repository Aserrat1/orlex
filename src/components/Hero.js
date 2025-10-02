import React from "react";
import { CheckCircle, Shield, Scale } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <div className="absolute -top-24 -right-20 w-[36rem] h-[36rem] rounded-full bg-gray-100" />
        <div className="absolute -bottom-32 -left-16 w-[28rem] h-[28rem] rounded-full bg-gray-50" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-600">
            <Shield className="w-4 h-4" />
            Protegemos tus intereses
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
            Tranquilidad legal y contable para hacer crecer tu negocio
          </h1>
          <p className="mt-5 text-gray-600 max-w-xl">
            Especialistas en derecho laboral y corporativo con un enfoque
            profesional, estratégico y cercano.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contacto">
              <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                Agenda una consulta
              </button>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            >
              Ver servicios
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Confianza
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4" />
              Precisión
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Resultados
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Card Legal */}
            <div className="shadow-sm rounded-2xl border border-gray-100 bg-white p-4">
              <div className="pb-2">
                <h3 className="text-base flex items-center gap-2 font-medium">
                  <Scale className="w-4 h-4" />
                  Legal
                </h3>
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 mt-1" />
                  Derecho laboral y corporativo
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 mt-1" />
                  Contratos y reglamento interno
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 mt-1" />
                  Despidos y relaciones laborales
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 mt-1" />
                  Conciliaciones y prevención de conflictos
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 mt-1" />
                  Capacitaciones
                </div>
              </div>
            </div>
            {/* Card Contable */}
            <div className="shadow-sm rounded-2xl border border-gray-100 bg-white p-4">
              <div className="pb-2">
                <h3 className="text-base flex items-center gap-2 font-medium">
                  <Scale className="w-4 h-4" />
                  Contable
                </h3>
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 mt-1" />
                  Planeación contable y fiscal
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 mt-1" />
                  Nóminas y cumplimiento
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 mt-1" />
                  Declaraciones y obligaciones tributarias
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 mt-1" />
                  Auditorías internas y externas
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 mt-1" />
                  Consultoría para decisiones
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
