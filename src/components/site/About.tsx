import { Reveal } from "../../lib/motion";
import { Sparkles } from "lucide-react";
import sayanGoogle from "../../assets/sayan-google.jpg";

function Cloud({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 200 80" className={className} style={{ opacity }} aria-hidden>
      <path d="M30 60 Q10 60 12 42 Q14 26 32 28 Q38 12 60 16 Q74 4 92 16 Q108 8 118 24 Q138 22 142 40 Q160 40 162 56 Q166 70 148 70 L40 70 Q24 70 30 60Z" fill="white" />
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden sky-gradient py-28">
      {/* Decorative Clouds */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Cloud className="absolute top-[10%] left-[5%] w-[200px]" opacity={0.4} />
        <Cloud className="absolute bottom-[10%] right-[5%] w-[250px]" opacity={0.4} />
      </div>

      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-600/30 bg-white/50 px-3 py-1 text-xs font-semibold text-sky-700">
              <Sparkles size={12} /> About Me
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink-900 md:text-5xl">
              Engineering Beyond<br />
              <span className="text-sky-600">The Browser</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-base leading-relaxed text-ink-500">
              I'm Sayan Dey, an upcoming software developer obsessed with how software actually meets the real world. Over the last couple of months I've learned programming languages like C, C++, python and some basics of java.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              My curiosity doesn't stop at the browser tab. I tinker with electronics, dabble in low-level web-dev work, and treat every project as a chance to ship something I'd want to use myself.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-white/30 shadow-lift ring-1 ring-white/50">
            <img 
              src={sayanGoogle} 
              alt="Sayan at Google Cloud Event" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink-900 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Always Learning
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}