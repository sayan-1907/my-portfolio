import { useState } from "react";
import { Reveal } from "../../lib/motion";
import { Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const Github = ({ size = 24 }: { size?: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>;
const Linkedin = ({ size = 24 }: { size?: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;

function Cloud({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 200 80" className={className} style={{ opacity }} aria-hidden>
      <path d="M30 60 Q10 60 12 42 Q14 26 32 28 Q38 12 60 16 Q74 4 92 16 Q108 8 118 24 Q138 22 142 40 Q160 40 162 56 Q166 70 148 70 L40 70 Q24 70 30 60Z" fill="white" />
    </svg>
  );
}

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(2, "Add a short subject").max(120),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path.join(".")] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent!", { description: "I'll reply within a day or two." });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  const inputCls = "w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20";

  return (
    <section id="contact" className="relative isolate overflow-hidden sky-gradient py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Cloud className="absolute top-[15%] left-[5%] w-[180px]" opacity={0.5} />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-bold text-ink-900 md:text-5xl">
            Let's <span className="text-sky-600">Connect</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-4 max-w-xl text-center text-ink-500">
            Have a project in mind, or just want to say hi? Drop a message and I'll get back to you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <Reveal>
              <div className="flex items-center gap-4 rounded-2xl border border-sky-100 bg-white/60 backdrop-blur-sm p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-100 text-sky-600">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-ink-900">Email</p>
                  <p className="truncate text-sm text-ink-500">sayandey2007.19@gmail.com</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex items-center gap-4 rounded-2xl border border-sky-100 bg-white/60 backdrop-blur-sm p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-100 text-sky-600">
                  <MapPin size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-ink-900">Location</p>
                  <p className="text-sm text-ink-500">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-sky-100 bg-white/60 backdrop-blur-sm p-5">
                <p className="font-semibold text-ink-900">Connect on Social</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-sky-100 px-3 py-2 text-xs font-semibold text-ink-700 transition hover:border-sky-500 hover:text-sky-600 bg-white"><Mail size={14} /> Email</a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-sky-100 px-3 py-2 text-xs font-semibold text-ink-700 transition hover:border-sky-500 hover:text-sky-600 bg-white"><Linkedin size={14} /> LinkedIn</a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-sky-100 px-3 py-2 text-xs font-semibold text-ink-700 transition hover:border-sky-500 hover:text-sky-600 bg-white"><Github size={14} /> GitHub</a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-2xl border border-sky-100 bg-white/60 backdrop-blur-sm p-7" noValidate>
              <h3 className="font-display text-xl font-bold text-ink-900">Send a Message</h3>
              <p className="mt-1 text-sm text-ink-500">Fill out the form and I'll get back as soon as possible.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-ink-700">Name *</label>
                  <input name="name" placeholder="Your name" className={`${inputCls} mt-1.5`} />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700">Email *</label>
                  <input name="email" type="email" placeholder="you@example.com" className={`${inputCls} mt-1.5`} />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700">Subject *</label>
                  <input name="subject" placeholder="What is this about?" className={`${inputCls} mt-1.5`} />
                  {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700">Message *</label>
                  <textarea name="message" rows={5} placeholder="Your message…" className={`${inputCls} mt-1.5 resize-none`} />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>
              </div>
<div className="mt-6 flex items-center gap-4">
                <button type="submit" disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-sky-500 disabled:opacity-60">
                  {submitting ? "Sending…" : "Send Message"} <Send size={14} />
                </button>
                <span className="text-xs font-medium text-sky-600/80 italic">(Working on this!)</span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}