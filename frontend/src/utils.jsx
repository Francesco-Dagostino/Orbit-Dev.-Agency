import { useRef, useState, useEffect } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function Tag({ text }) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.08)] backdrop-blur-sm">
      {text}
    </span>
  );
}

export function SectionLabel({ children }) {
  return (
    <p className="mb-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-sm">
      {children}
    </p>
  );
}
