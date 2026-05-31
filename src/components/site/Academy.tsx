import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tracks = [
  "Ethical Hacking", "Penetration Testing", "Digital Forensics", "Cloud Security",
  "DevSecOps", "Malware Analysis", "Threat Hunting", "SOC Operations",
  "Red Team", "Blue Team", "Purple Team", "Incident Response",
  "GRC", "Security Architecture", "AI Security", "AI Red Teaming",
  "Secure AI Dev", "Quantum Security", "Post-Quantum Crypto", "Zero Trust",
];

export function Academy() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="glass relative rounded-2xl p-6 sm:p-8">
            <div className="absolute -inset-px rounded-2xl bg-gradient-cyber opacity-10 blur-2xl" />
            <div className="relative flex flex-wrap gap-2">
              {tracks.map((t, i) => (
                <span
                  key={t}
                  className="rounded-md border border-border/70 bg-card/60 px-3 py-1.5 text-xs text-foreground/80 transition-all hover:border-primary hover:text-primary"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
              Cybersecurity Academy
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              From beginner to <span className="text-gradient-cyber">elite defender</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              20+ structured learning paths, hands-on cyber ranges, AI security labs, certifications,
              and skill assessments — designed by industry experts and ethical hackers.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              {[
                "Interactive labs and live cyber ranges",
                "Industry-recognized certifications",
                "Personalized AI learning recommendations",
                "Capture-the-flag arenas and competitions",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Button variant="cyber" size="lg">
                Explore Academy <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="cyberOutline" size="lg">
                View Certifications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
