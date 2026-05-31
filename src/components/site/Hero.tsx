import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cyber.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-16">
      {/* Hero background image */}
      <div className="absolute inset-0 opacity-40">
        <img
          src={heroImg}
          alt="Global cyber defense network"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Animated cyber grid */}
      <div className="cyber-grid cyber-grid-mask animate-grid absolute inset-0" />

      {/* Scan line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-scan absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Headquartered in India · Operating Globally</span>
        </div>

        <h1 className="max-w-5xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
          Building the Future of{" "}
          <span className="text-gradient-cyber">Cybersecurity</span>, AI Security &amp; Digital
          Defense
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
          A global alliance of ethical hackers, AI researchers, defenders, and innovators dedicated
          to cyber defense, AI safety, and protecting the digital future for generations to come.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button variant="cyber" size="lg">
            Join Community <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="cyberOutline" size="lg">
            Become a Research Member
          </Button>
          <Button variant="ghostCyber" size="lg">
            Explore Projects
          </Button>
        </div>

        {/* floating status pill */}
        <div className="glass animate-float mt-16 inline-flex items-center gap-3 rounded-full px-5 py-2 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-muted-foreground">
            Threat intel feed live · <span className="text-foreground">2,481 events / hr</span>
          </span>
        </div>
      </div>
    </section>
  );
}
