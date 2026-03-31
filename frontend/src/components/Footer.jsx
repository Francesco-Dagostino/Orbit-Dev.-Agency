export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 bg-[#050b1d]/60 py-10 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <span>
          Fiwo<span className="text-cyan-300/70">.Agency</span> ©{" "}
          {new Date().getFullYear()}
        </span>
        <span>Hecho en Rosario 🇦🇷</span>
        <div className="flex gap-5">
          {["LinkedIn", "GitHub", "Instagram"].map((s) => (
            <a key={s} href="#" className="hover:text-cyan-200 transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
