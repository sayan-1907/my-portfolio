import { Mail } from "lucide-react";

const Github = ({ size = 24 }: { size?: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>;
const Linkedin = ({ size = 24 }: { size?: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;

export function Footer() {
  return (
    <footer className="border-t border-warm-card bg-warm-bg py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono-brand text-sm text-ink-500">
          <span className="text-sky-600">&lt;</span>Sayan Dey<span className="text-sky-600">/&gt;</span>
          <span className="ml-3 text-ink-500/70">© {new Date().getFullYear()}</span>
        </p>
        <div className="flex items-center gap-2">
          <a href="#" aria-label="Email" className="rounded-lg p-2 text-ink-500 hover:bg-white hover:text-accent-gold"><Mail size={18} /></a>
          <a href="#" aria-label="LinkedIn" className="rounded-lg p-2 text-ink-500 hover:bg-white hover:text-accent-gold"><Linkedin size={18} /></a>
          <a href="#" aria-label="GitHub" className="rounded-lg p-2 text-ink-500 hover:bg-white hover:text-accent-gold"><Github size={18} /></a>
        </div>
      </div>
    </footer>
  );
}