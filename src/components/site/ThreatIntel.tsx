import { AlertTriangle, ShieldAlert, Bug, Activity } from "lucide-react";

const feed = [
  {
    sev: "Critical",
    icon: ShieldAlert,
    tag: "CVE-2026-4412",
    title: "Remote code execution in widely-used edge inference runtime",
    time: "12m ago",
    color: "text-destructive border-destructive/40 bg-destructive/10",
  },
  {
    sev: "High",
    icon: Bug,
    tag: "Malware",
    title: "New APT cluster targeting financial AI pipelines in South Asia",
    time: "1h ago",
    color: "text-accent border-accent/40 bg-accent/10",
  },
  {
    sev: "Advisory",
    icon: AlertTriangle,
    tag: "AI Safety",
    title: "Prompt-injection chain bypasses guardrails in open-weight LLMs",
    time: "3h ago",
    color: "text-primary border-primary/40 bg-primary/10",
  },
];

export function ThreatIntel() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 cyber-grid cyber-grid-mask opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Threat Intelligence Center
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Real-time intelligence from the{" "}
            <span className="text-gradient-cyber">global defender network</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Live vulnerability alerts, AI-generated threat analysis, and curated advisories from
            researchers and SOC partners across 120+ countries.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { v: "2,481", l: "Events / hr" },
              { v: "94", l: "Active campaigns" },
              { v: "37", l: "Zero-days tracked" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-lg p-4">
                <div className="font-display text-2xl font-bold text-primary">{s.v}</div>
                <div className="mt-1 text-[11px] tracking-wider text-muted-foreground uppercase">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass relative overflow-hidden rounded-2xl p-2 shadow-card">
          <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Activity className="h-4 w-4 text-accent" />
              live_feed.sock
            </div>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-destructive/70" />
              <span className="h-2 w-2 rounded-full bg-accent/70" />
              <span className="h-2 w-2 rounded-full bg-primary/70" />
            </div>
          </div>
          <div className="divide-y divide-border/50">
            {feed.map((f) => (
              <div key={f.title} className="flex gap-4 p-4 transition-colors hover:bg-primary/5">
                <div
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-md border ${f.color}`}
                >
                  <f.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase">
                    <span className={`rounded px-1.5 py-0.5 ${f.color}`}>{f.sev}</span>
                    <span className="text-muted-foreground">{f.tag}</span>
                    <span className="ml-auto text-muted-foreground">{f.time}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-foreground/90">{f.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
