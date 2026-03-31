import { SectionLabel, useInView } from "../utils";
import { useContent } from "../hooks/useContent";

export default function Team() {
  const [ref, visible] = useInView();
  const { items: team, loading } = useContent("team");

  return (
    <section id="equipo" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>Quiénes somos</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">El equipo</h2>
          <p className="text-slate-300 max-w-2xl mb-14 leading-relaxed">
            Somos un grupo de amigos apasionados por la tecnología. Nos juntamos para construir una agencia chica, honesta y enfocada en resultados.
          </p>

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[1,2,3].map((i) => <div key={i} className="rounded-[28px] h-56 animate-pulse border border-cyan-400/10 bg-white/5" />)}
            </div>
          )}

          {!loading && team.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {team.map((m) => (
                <div key={m.id} className="rounded-[28px] border border-cyan-400/12 bg-white/5 p-6 text-center backdrop-blur-xl shadow-[0_18px_50px_rgba(2,6,23,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25">
                  {m.image_url ? (
                    <img src={m.image_url} alt={m.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-2 ring-cyan-400/15"
                      onError={(e) => { e.target.style.display="none"; }} />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-400/20 border border-cyan-300/10 flex items-center justify-center text-cyan-100 font-semibold text-lg mx-auto mb-4">
                      {m.name.split(" ").map((n) => n[0]).join("").slice(0,2)}
                    </div>
                  )}
                  <p className="font-semibold text-white">{m.name}</p>
                  <p className="text-cyan-200/75 text-sm mt-1">{m.role}</p>
                  {m.bio && <p className="text-slate-300 text-xs mt-3 leading-relaxed">{m.bio}</p>}
                  <div className="flex justify-center gap-3 mt-4">
                    {m.linkedin  && <a href={m.linkedin}  target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-200 text-xs transition-colors">LinkedIn</a>}
                    {m.github    && <a href={m.github}    target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-200 text-xs transition-colors">GitHub</a>}
                    {m.instagram && <a href={m.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-200 text-xs transition-colors">Instagram</a>}
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
