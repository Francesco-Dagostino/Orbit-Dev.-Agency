import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["servicios", "proyectos", "equipo", "faq", "contacto"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,14,35,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(103,232,249,0.12)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 10px 40px rgba(2,6,23,0.28)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <button
          onClick={() => scrollTo("inicio")}
          className="font-bold tracking-[0.14em] text-lg uppercase text-white"
        >
          Fiwo<span className="text-cyan-300"> Agency</span>
        </button>

        <nav className="hidden md:flex items-center gap-3 rounded-full border border-cyan-400/10 bg-white/5 px-3 py-2 shadow-[0_0_30px_rgba(34,211,238,0.06)] backdrop-blur-xl">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition-all duration-200 capitalize hover:bg-white/8 hover:text-cyan-200"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contacto")}
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(37,99,235,0.35)] transition-transform duration-200 hover:scale-[1.02]"
          >
            Cotizar proyecto
          </button>
        </nav>

        <button
          className="md:hidden text-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <div
            className="w-5 h-px bg-current mb-1.5 transition-all"
            style={{
              transform: menuOpen ? "rotate(45deg) translate(2px,2px)" : "",
            }}
          />
          <div
            className="w-5 h-px bg-current mb-1.5"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <div
            className="w-5 h-px bg-current transition-all"
            style={{
              transform: menuOpen ? "rotate(-45deg) translate(2px,-2px)" : "",
            }}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mx-4 mb-4 rounded-3xl border border-cyan-400/15 bg-[#08112b]/90 px-6 py-5 flex flex-col gap-3 backdrop-blur-xl shadow-[0_20px_60px_rgba(2,6,23,0.35)]">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="rounded-2xl px-3 py-2 text-sm text-slate-300 capitalize text-left transition-colors hover:bg-white/5 hover:text-cyan-200"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
