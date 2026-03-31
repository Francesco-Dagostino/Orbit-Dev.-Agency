import { SectionLabel, useInView } from "../utils";
import { useContent } from "../hooks/useContent";

export default function Services() {
  const [ref, visible] = useInView();
  const { items: services, loading } = useContent("services");

  return (
    <section id="servicios" className="py-28">
      {" "}
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <SectionLabel>Qué hacemos</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Servicios
          </h2>
          <p className="text-slate-300 max-w-2xl mb-14 leading-relaxed">
            Diseño, desarrollo y soporte técnico con una estética consistente,
            escalable y enfocada en resultados.
          </p>

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-44 rounded-[28px] animate-pulse border border-cyan-400/10 bg-white/5"
                />
              ))}
            </div>
          )}

          {!loading && services.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <div
                  key={s.id}
                  className="rounded-[28px] border border-cyan-400/12 bg-white/5 p-6 shadow-[0_18px_50px_rgba(2,6,23,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/8"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-400/20 text-2xl text-cyan-200 border border-cyan-300/10">
                    {s.icon}
                  </span>
                  <h3 className="mt-5 font-semibold text-white text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
