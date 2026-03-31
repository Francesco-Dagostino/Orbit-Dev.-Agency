import { useState, useEffect } from "react";
import { SectionLabel } from "../utils";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative w-full">
        <div
          className="transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <SectionLabel>Software Development</SectionLabel>

          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.38em] text-slate-300/80 mb-6">
              Lo que tu negocio necesita
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-tight text-white max-w-4xl">
              Web &{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                software
              </span>
              <br />
              que hacen crecer tu negocio
            </h1>
            <p className="mt-7 text-slate-300 text-lg max-w-2xl leading-relaxed">
              Soluciones digitales rápidas y escalables para empresas que
              quieren crecer, con foco en producto, velocidad y una ejecución
              prolija.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("contacto")}
              className="rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(37,99,235,0.35)] transition-transform duration-200 hover:scale-[1.02]"
            >
              Cotizá tu proyecto
            </button>
            <button
              onClick={() => scrollTo("proyectos")}
              className="rounded-full border border-cyan-400/20 bg-white/5 px-8 py-4 text-sm font-medium text-slate-100 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Ver proyectos
            </button>
          </div>
        </div>

        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 delay-200"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
          }}
        >
          {[
            ["Equipo", "Profesional"],
            ["100%", "A medida"],
            ["24h", "Respuesta"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="rounded-[28px] border border-cyan-400/12 bg-white/5 px-6 py-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(2,6,23,0.24)]"
            >
              <p className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
                {n}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-300/80">
                {l}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-slate-200 text-lg">
          🚀 Respondemos en menos de{" "}
          <span className="font-semibold text-white">24h</span>
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cyan-200/70">
        <span className="text-xs tracking-[0.32em] uppercase">Scroll</span>
        <span className="text-base animate-bounce">↓</span>
      </div>
    </section>
  );
}
