import { Reveal } from "../../lib/motion";
import { Code2, Smartphone } from "lucide-react";

function Cloud({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 200 80" className={className} style={{ opacity }} aria-hidden>
      <path d="M30 60 Q10 60 12 42 Q14 26 32 28 Q38 12 60 16 Q74 4 92 16 Q108 8 118 24 Q138 22 142 40 Q160 40 162 56 Q166 70 148 70 L40 70 Q24 70 30 60Z" fill="white" />
    </svg>
  );
}

const services = [
  { icon: Code2, title: "Web Application Development",
    body: "End-to-end web apps built with React, TypeScript and modern toolchains. Focus on accessible UI, type safety and runtime performance from the first commit." },
  { icon: Smartphone, title: "Mobile App Development",
    body: "Cross-platform mobile experiences with React Native — shared logic, native feel, and a focus on smooth gestures, offline support and snappy launch times." },
];

export function Services() {
  return (
    <section id="services" className="relative isolate overflow-hidden sky-gradient py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Cloud className="absolute top-[20%] left-[10%] w-[200px]" opacity={0.4} />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="mx-auto block w-fit rounded-full border border-sky-600/30 bg-white/50 px-3 py-1 text-xs font-semibold text-sky-600">What I Provide</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 text-center font-display text-4xl font-bold text-ink-900 md:text-5xl">Services</h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-4 max-w-xl text-center text-ink-500">
            A small, focused set of things I do well — built around shipping interfaces and systems that hold up in production.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article className="group h-full rounded-2xl border border-sky-100 bg-white/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-lift hover:bg-white">
                <div className="inline-flex items-center justify-center rounded-2xl bg-sky-100 p-3 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                  <s.icon size={26} strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}