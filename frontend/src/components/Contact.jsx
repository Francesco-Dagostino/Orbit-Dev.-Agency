import { useState } from "react";
import { SectionLabel, useInView } from "../utils";
import { useContact } from "../hooks/useContent";

const inputClass =
  "w-full rounded-2xl border border-cyan-400/12 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder-slate-400 outline-none transition-colors focus:border-cyan-300/35";

export default function Contact() {
  const [ref, visible] = useInView();
  const { contact } = useContact();
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contacto" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-[32px] border border-cyan-400/12 bg-white/5 p-8 md:p-10 backdrop-blur-xl shadow-[0_22px_70px_rgba(2,6,23,0.24)]">
            <div>
              <SectionLabel>Trabajemos juntos</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Contanos tu proyecto</h2>
              <p className="text-slate-300 leading-relaxed mb-8 max-w-xl">
                Respondemos en menos de 24 horas. Sin compromisos: la primera consulta es siempre gratis.
              </p>
              <div className="space-y-4 text-sm text-slate-300">
                {contact?.email   && <p>✉ {contact.email}</p>}
                {contact?.address && <p>📍 {contact.address}</p>}
                {contact?.hours   && <p>🕐 {contact.hours}</p>}
                {contact?.phone   && <p>📞 {contact.phone}</p>}
              </div>
              <div className="flex gap-4 mt-6">
                {contact?.linkedin  && <a href={contact.linkedin}  target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-200 text-sm transition-colors">LinkedIn</a>}
                {contact?.github    && <a href={contact.github}    target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-200 text-sm transition-colors">GitHub</a>}
                {contact?.instagram && <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-200 text-sm transition-colors">Instagram</a>}
              </div>
            </div>

            <div>
              {sent ? (
                <div className="h-full flex flex-col justify-center items-start rounded-[28px] border border-cyan-400/10 bg-[#08112b]/60 p-8">
                  <p className="text-4xl mb-4">✓</p>
                  <p className="font-semibold text-white text-lg">¡Mensaje enviado!</p>
                  <p className="text-slate-300 text-sm mt-2">Te respondemos pronto. Gracias por escribirnos.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input name="name" required placeholder="Tu nombre" value={form.name} onChange={handle} className={inputClass} />
                    <input name="email" required type="email" placeholder="Email" value={form.email} onChange={handle} className={inputClass} />
                  </div>
                  <input name="project" placeholder="¿Qué tipo de proyecto tenés?" value={form.project} onChange={handle} className={inputClass} />
                  <textarea name="message" required rows={5} placeholder="Contanos de qué se trata…" value={form.message} onChange={handle} className={inputClass + " resize-none"} />
                  <button type="submit" className="w-full rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.35)] transition-transform duration-200 hover:scale-[1.01]">
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
