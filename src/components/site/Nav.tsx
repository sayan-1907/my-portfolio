import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" }, // Added here
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/75 backdrop-blur-xl shadow-[0_4px_20px_-12px_rgba(15,23,41,0.18)]" : "bg-transparent"
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono-brand text-base font-semibold tracking-tight text-ink-900">
          <span className="text-sky-600">&lt;</span>Sayan Dey<span className="text-sky-600">/&gt;</span>
        </a>

        <button aria-label="Toggle menu" className="md:hidden rounded-lg p-2 text-ink-700 hover:bg-sky-100" onClick={() => setOpen((v) => !v)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a href={`#${l.id}`} className={`group relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  isActive ? "bg-sky-500 text-white shadow-lift" : "text-ink-700 hover:bg-sky-100 hover:text-sky-700"
                }`}>{l.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-sky-100 bg-white/95 backdrop-blur-xl">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                  active === l.id ? "bg-sky-500 text-white" : "text-ink-700"
                }`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}