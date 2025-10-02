import React from "react";
import { Briefcase, Users } from "lucide-react";

export default function QuienesSomos() {
  return (
    <section id="quienes" className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold">¿Quiénes somos?</h2>
          <p className="mt-4 text-gray-600">
            Somos una firma legal y contable que ofrece más que servicios:
            brindamos tranquilidad y confianza. Nuestro equipo de licenciados
            altamente capacitados trabaja con precisión y compromiso para
            garantizar soluciones efectivas y personalizadas.
          </p>
        </div>
        <div className="shadow-sm rounded-2xl border border-gray-100 bg-white">
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Misión
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Brindar soluciones legales y contables innovadoras con un
                enfoque profesional, estratégico y cercano; proteger los
                intereses de nuestros clientes y optimizar sus operaciones en un
                entorno dinámico.
              </p>
            </div>
            <div>
              <h3 className="font-medium flex items-center gap-2">
                <Users className="w-4 h-4" />
                Visión
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Ser la firma líder en derecho laboral y corporativo, reconocida
                por el profesionalismo, la innovación y la confianza,
                redefiniendo la manera en que se perciben los servicios legales
                y contables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
