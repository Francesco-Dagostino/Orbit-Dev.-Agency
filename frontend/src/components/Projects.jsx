import { useProjects } from "../hooks/useProjects";
import { SectionLabel, Tag, useInView } from "../utils";

export default function Projects() {
  const [ref, visible] = useInView();
  const { projects, loading, error } = useProjects(false);

  return (
    <section id="proyectos" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Proyectos
          </h2>
          <p className="text-slate-300 max-w-2xl mb-14 leading-relaxed">
            Experiencias web y productos a medida con foco en claridad, performance y una estética más premium.
          </p>

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-[30px] overflow-hidden animate-pulse border border-cyan-400/10 bg-white/5">
                  <div className="h-52 bg-white/5" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-white/10 rounded w-3/4" />
                    <div className="h-3 bg-white/10 rounded w-1/2" />
                    <div className="h-3 bg-white/10 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <p className="text-red-300 text-sm">Error al cargar proyectos: {error}</p>
          )}

          {!loading && !error && projects.length === 0 && (
            <p className="text-slate-400 text-sm">Todavía no hay proyectos publicados.</p>
          )}

          {!loading && !error && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="group overflow-hidden rounded-[30px] border border-cyan-400/12 bg-white/5 shadow-[0_20px_60px_rgba(2,6,23,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/28"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-900/40">
                    {p.image_url ? (
                      <img
                        src={p.image_url}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-cyan-200/40 text-4xl">◻</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08112b] via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full border border-cyan-300/15 bg-[#08112b]/70 px-3 py-1 text-xs font-medium text-cyan-100 backdrop-blur-md">
                      {p.industry}
                    </span>
                    {p.live_url && (
                      <a
                        href={p.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-[0_12px_30px_rgba(37,99,235,0.35)] transition-all duration-200 group-hover:opacity-100"
                      >
                        Ver sitio →
                      </a>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-1 gap-3">
                      <h3 className="font-bold text-white text-lg">{p.title}</h3>
                      <span className="text-xs text-slate-400 font-medium">{p.year}</span>
                    </div>
                    <p className="text-xs text-cyan-200/70 mb-3">{p.client}</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {(p.tags ?? []).map((t) => <Tag key={t} text={t} />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
