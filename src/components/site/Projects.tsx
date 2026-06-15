import { Reveal } from "../../lib/motion";
import { ExternalLink, Star } from "lucide-react";
import libraryUi from "../../assets/library-ui.jpg";

const Github = ({ size = 24 }: { size?: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>;

function Cloud({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 200 80" className={className} style={{ opacity }} aria-hidden>
      <path d="M30 60 Q10 60 12 42 Q14 26 32 28 Q38 12 60 16 Q74 4 92 16 Q108 8 118 24 Q138 22 142 40 Q160 40 162 56 Q166 70 148 70 L40 70 Q24 70 30 60Z" fill="white" />
    </svg>
  );
}

const projects = [
  { 
    title: "Basic ML Training Project", 
    label: "Working On",
    desc: "Currently developing a foundational machine learning training project to explore core ML concepts and data modeling.",
    stack: ["Python", "Machine Learning"] 
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative isolate overflow-hidden sky-gradient py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Cloud className="absolute top-[15%] right-[10%] w-[180px]" opacity={0.5} />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="mx-auto block w-fit rounded-full border border-sky-600/30 bg-white/50 px-3 py-1 text-xs font-semibold text-sky-600">Projects</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 text-center font-display text-4xl font-bold text-ink-900 md:text-5xl">
            Things I've <span className="text-sky-600">Built</span>
          </h2>
        </Reveal>

        <div className="mt-12 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          <span className="inline-flex items-center gap-1.5"><Star size={12} className="fill-sky-600" /> Spotlight</span>
          <span className="text-ink-500/70">2 projects</span>
        </div>

        <Reveal delay={0.1}>
          <article className="mt-4 overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm shadow-lift ring-1 ring-white/50 md:grid md:grid-cols-[45%_1fr]">
            <div className="relative min-h-[300px] overflow-hidden bg-sky-100">
              <img 
                src={libraryUi} 
                alt="Library Seat UI" 
                className="h-full w-full object-cover" 
              />
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                <Star size={11} className="fill-white" /> Spotlight
              </span>
            </div>

            <div className="p-7 md:p-9 bg-white/40">
              <h3 className="font-display text-2xl font-bold text-ink-900">Library Seat Management</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                Built a comprehensive Library seat management system for my university library, that will ease the difficulty of locating empty seats in the library during rush hours, using a simple qr based seat booking system (ps- still a work in progress).
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Vite"].map((t) => (
                  <span key={t} className="rounded-md bg-white/80 px-2.5 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200">{t}</span>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-sky-500">
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href="https://github.com/sayan-1907" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white/50 px-5 py-2.5 text-sm font-semibold text-sky-700 transition-colors hover:bg-white">
                  <Github size={14} /> View Code
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl bg-white/60 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ring-1 ring-white/50 hover:bg-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-600">{p.label}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200/50">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <a href="https://github.com/sayan-1907" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200 bg-white/50 px-3 py-1.5 text-xs font-semibold text-sky-700 transition hover:bg-white">
                    <Github size={12} /> Code
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}