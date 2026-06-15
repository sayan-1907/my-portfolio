import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const Github = ({ size = 24 }: { size?: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>;
const Linkedin = ({ size = 24 }: { size?: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;

const heroDev = "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=600&q=80";

function Cloud({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 200 80" className={className} style={{ opacity }} aria-hidden>
      <path d="M30 60 Q10 60 12 42 Q14 26 32 28 Q38 12 60 16 Q74 4 92 16 Q108 8 118 24 Q138 22 142 40 Q160 40 162 56 Q166 70 148 70 L40 70 Q24 70 30 60Z" fill="white" />
    </svg>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const yBack = useTransform(scrollY, [0, 800], [0, 80]);
  const yMid = useTransform(scrollY, [0, 800], [0, 140]);
  const yFront = useTransform(scrollY, [0, 800], [0, 220]);
  const yIllus = useTransform(scrollY, [0, 800], [0, -60]);
  const yText = useTransform(scrollY, [0, 600], [0, 40]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0.4]);

  const s = (mv: any) => (reduce ? undefined : mv);

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden sky-gradient pt-24">
      <motion.div style={{ y: s(yBack) }} className="pointer-events-none absolute inset-0">
        <Cloud className="absolute top-[12%] left-[5%] w-[280px]" opacity={0.6} />
        <Cloud className="absolute top-[22%] right-[8%] w-[340px]" opacity={0.55} />
        <Cloud className="absolute top-[55%] left-[15%] w-[220px]" opacity={0.5} />
      </motion.div>
      <motion.div style={{ y: s(yMid) }} className="pointer-events-none absolute inset-0">
        <Cloud className="absolute top-[35%] right-[20%] w-[200px]" opacity={0.85} />
        <Cloud className="absolute top-[68%] right-[5%] w-[280px]" opacity={0.8} />
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 md:grid-cols-2 md:pt-20">
        <motion.div
          style={{ y: s(yText), opacity: s(opacityText) }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono-brand text-sm font-medium text-sky-700">// hello world</p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] text-ink-900 md:text-6xl">Hi, I am Sayan</h1>
          <h2 className="mt-2 font-display text-5xl font-bold leading-[1.05] text-sky-600 md:text-6xl">
            Upcoming Software<br />Developer
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500">
            I build clean, performant full-stack web experiences and explore the edges of modern engineering — from React UIs to server runtimes.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a href="https://github.com/sayan-1907" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-xl bg-white p-2.5 text-ink-700 shadow-neo transition-transform hover:-translate-y-1 hover:text-sky-600"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/sayandey07" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-xl bg-white p-2.5 text-ink-700 shadow-neo transition-transform hover:-translate-y-1 hover:text-sky-600"><Linkedin size={20} /></a>
          </div>
        </motion.div>

        <motion.div
          style={{ y: s(yIllus) }}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-white/40 blur-3xl" />
          <motion.img
            src={heroDev}
            alt="Illustration of developer"
            width={1024} height={1024}
            className="relative mx-auto w-full max-w-[520px] rounded-3xl object-cover drop-shadow-[0_30px_40px_rgba(31,95,168,0.25)]"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <motion.div style={{ y: s(yFront) }} className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full">
          <path d="M0 80 C 180 30, 320 110, 520 70 S 880 20, 1080 70 1320 110, 1440 70 L1440 120 L0 120 Z" fill="#ffffff" opacity="0.95" />
          <path d="M0 100 C 240 70, 420 120, 660 90 S 1020 60, 1200 100 1380 110, 1440 95 L1440 120 L0 120 Z" fill="#ffffff" />
        </svg>
      </motion.div>
    </section>
  );
}