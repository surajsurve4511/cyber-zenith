import { Shield, Github, Twitter, Linkedin } from "lucide-react";

export function SiteFooter() {
  const cols = [
    {
      title: "Platform",
      links: ["Academy", "Research", "Threat Intel", "Innovation Lab", "Events"],
    },
    {
      title: "Community",
      links: ["Members", "Mentorship", "Forums", "Regional Chapters", "Careers"],
    },
    {
      title: "Organization",
      links: ["About", "Mission", "Partners", "Press", "Contact"],
    },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-bold">
                Cyber<span className="text-gradient-cyber">Guardian</span> Alliance
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A global community building the future of cybersecurity, AI security, and digital
              defense — headquartered in India, serving the world.
            </p>
            <div className="mt-6 flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-semibold tracking-wider text-foreground uppercase">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Cyber Guardian Alliance. Securing the digital future.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
