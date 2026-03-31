import { useState } from "react";
import { SectionLabel, useInView } from "../utils";
import { useContent } from "../hooks/useContent";

const fallbackFaqs = [
  {
    id: "f1",
    question: "¿Qué tipo de proyectos desarrollan?",
    answer:
      "Desarrollamos landing pages, sitios institucionales, paneles administrativos y productos web a medida para marcas, negocios y equipos que necesitan una solución clara y bien ejecutada.",
  },
  {
    id: "f2",
    question: "¿Cuánto tarda un proyecto?",
    answer:
      "Depende del alcance. Una landing simple puede estar lista en pocos días, mientras que un desarrollo más completo requiere etapas de diseño, contenido, integración y pruebas.",
  },
  {
    id: "f3",
    question: "¿También hacen diseño o solo desarrollo?",
    answer:
      "Trabajamos ambas partes. Podemos ayudarte con la estructura visual, la experiencia de usuario y después llevar todo a código para que el resultado final se vea bien y funcione mejor.",
  },
  {
    id: "f4",
    question: "¿Pueden actualizar un sitio que ya existe?",
    answer:
      "Sí. Podemos mejorar diseño, performance, contenido o rearmar secciones específicas sin necesidad de rehacer todo desde cero, según el estado actual del proyecto.",
  },
  {
    id: "f5",
    question: "¿Cómo arrancamos a trabajar juntos?",
    answer:
      "Primero conversamos sobre la idea, el objetivo y el alcance. Después definimos propuesta, tiempos y próximos pasos para empezar con una base clara y sin vueltas.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 text-left gap-4"
      >
        <span className="text-white font-medium text-sm md:text-base">{q}</span>
        <span
          className="text-cyan-300 text-lg flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "180px" : "0px" }}
      >
        <p className="px-5 pb-4 text-sm text-slate-300 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [ref, visible] = useInView();
  const { items: faqs, loading } = useContent("faq");

  const items = !loading && faqs.length > 0 ? faqs : fallbackFaqs;

  return (
    <section id="faq" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel>Preguntas frecuentes</SectionLabel>

          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              FAQ
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl leading-relaxed">
              Resolvemos las dudas más comunes antes de empezar, para que la
              propuesta sea clara desde el primer contacto.
            </p>
          </div>

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-16 rounded-2xl border border-white/10 bg-white/5 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((f) => (
                <FaqItem key={f.id} q={f.question} a={f.answer} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
