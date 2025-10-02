import React from "react";
import {
  Scale,
  FileText,
  Users,
  Building2,
  CheckCircle,
  Briefcase,
} from "lucide-react";

const servicios = [
  {
    icon: Scale,
    title: "Derecho laboral y corporativo",
    desc: "Asesoramiento integral para empresas y organizaciones.",
  },
  {
    icon: FileText,
    title: "Contratos y reglamentos",
    desc: "Creación y revisión de contratos laborales y reglamento interno.",
  },
  {
    icon: Users,
    title: "Relaciones laborales",
    desc: "Estrategias para despidos, manejo de conflictos y conciliaciones.",
  },
  {
    icon: Building2,
    title: "Planeación contable y fiscal",
    desc: "Diseño de estrategias contables y fiscales personalizadas.",
  },
  {
    icon: CheckCircle,
    title: "Nóminas y cumplimiento",
    desc: "Administración de nóminas con cumplimiento legal vigente.",
  },
  {
    icon: Briefcase,
    title: "Auditorías y consultoría",
    desc: "Auditorías internas/externas y apoyo a la toma de decisiones.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Servicios</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-sm border border-gray-100 bg-white p-4"
            >
              <div className="pb-2">
                <h3 className="text-base flex items-center gap-2 font-medium">
                  <s.icon className="w-4 h-4" /> {s.title}
                </h3>
              </div>
              <div className="text-sm text-gray-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
