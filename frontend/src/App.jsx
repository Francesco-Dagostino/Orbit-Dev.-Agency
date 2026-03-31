import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

const isAdmin = window.location.pathname === "/admin";

export default function App() {
  if (isAdmin) return <Admin />;

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      {/* 🌌 FONDO BASE */}
      <div className="fixed inset-0 -z-30 bg-[linear-gradient(180deg,#040b1a_0%,#07111f_40%,#081427_70%,#07111f_100%)]" />

      {/* ✨ LUCES PRINCIPALES (las que querías) */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background: `
          radial-gradient(circle at 20% 25%, rgba(0, 224, 255, 0.18), transparent 28%),
          radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.16), transparent 30%),
          radial-gradient(circle at 25% 75%, rgba(0, 224, 255, 0.12), transparent 30%),
          radial-gradient(circle at 85% 70%, rgba(59, 130, 246, 0.12), transparent 32%)
        `,
          filter: "blur(10px)",
        }}
      />

      {/* 🌊 CAPA ANIMADA SUAVE */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none animate-[pulse_10s_ease-in-out_infinite]"
        style={{
          background: `
          radial-gradient(circle at 40% 40%, rgba(56, 189, 248, 0.08), transparent 25%),
          radial-gradient(circle at 60% 60%, rgba(14, 165, 233, 0.07), transparent 28%)
        `,
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Team />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
