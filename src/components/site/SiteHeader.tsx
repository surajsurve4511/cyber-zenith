import { Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About", to: "/" },
  { label: "Academy", to: "/" },
  { label: "Research", to: "/" },
  { label: "Community", to: "/" },
  { label: "Threat Intel", to: "/" },
  { label: "Events", to: "/" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="glass border-b border-border/50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <Shield className="h-7 w-7 text-primary" />
              <div className="absolute inset-0 animate-pulse-glow bg-primary/30 blur-md" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              Cyber<span className="text-gradient-cyber">Guardian</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghostCyber" size="sm" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button variant="cyber" size="sm">
              Join Alliance
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
