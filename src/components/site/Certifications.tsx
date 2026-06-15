import { Reveal } from "../../lib/motion";
import { Award } from "lucide-react";
import certOx from "../../assets/cert-ox.png";
import certIbm from "../../assets/cert-ibm.png";

function Cloud({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 200 80" className={className} style={{ opacity }} aria-hidden>
      <path d="M30 60 Q10 60 12 42 Q14 26 32 28 Q38 12 60 16 Q74 4 92 16 Q108 8 118 24 Q138 22 142 40 Q160 40 162 56 Q166 70 148 70 L40 70 Q24 70 30 60Z" fill="white" />
    </svg>
  );
}

const certs = [
  {
    title: "Getting Started with AI",
    issuer: "IBM SkillsBuild",
    image: certIbm,
    date: "March 2026",
    description: "Foundational certification covering artificial intelligence concepts, ethics, and applications."
  },
  {
    title: "ImpactX Participation",
    issuer: "0x.Day® / IEEE Computer Society",
    image: certOx,
    date: "Oct 2025",
    description: "Recognized for active participation in the ImpactX technical event at RNS Institute of Technology."
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="relative isolate overflow-hidden sky-gradient py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Cloud className="absolute top-[20%] right-[10%] w-[250px]" opacity={0.4} />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="mx-auto block w-fit rounded-full border border-sky-600/30 bg-white/50 px-3 py-1 text-xs font-semibold text-sky-600">
            Credentials
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 text-center font-display text-4xl font-bold text-ink-900 md:text-5xl">
            My <span className="text-sky-600">Certifications</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-3xl border border-sky-100 bg-white/60 backdrop-blur-sm shadow-lift transition-all hover:-translate-y-2 hover:bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-sky-100">
                  <img 
                    src={c.image} 
                    alt={c.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600">
                      <Award size={14} /> {c.issuer}
                    </span>
                    <span className="text-xs text-ink-500">{c.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-ink-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}