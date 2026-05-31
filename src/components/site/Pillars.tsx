import {
  Shield,
  Brain,
  GraduationCap,
  Radar,
  FlaskConical,
  Users,
  Globe,
  Lock,
} from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Cybersecurity Academy",
    desc: "20+ tracks from Ethical Hacking and Red Teaming to AI Security and Post-Quantum Cryptography.",
  },
  {
    icon: FlaskConical,
    title: "Research & Innovation",
    desc: "Open research in AI safety, zero-trust architecture, autonomous defense, and quantum security.",
  },
  {
    icon: Radar,
    title: "Threat Intelligence Center",
    desc: "Real-time advisories, vulnerability alerts, and AI-generated threat analysis from a global SOC network.",
  },
  {
    icon: Brain,
    title: "AI Security Lab",
    desc: "AI red teaming, secure AI development, model integrity testing, and adversarial ML defenses.",
  },
  {
    icon: Users,
    title: "Community Hub",
    desc: "Expert forums, mentorship, regional chapters, and collaboration channels for every skill level.",
  },
  {
    icon: Shield,
    title: "Innovation Lab",
    desc: "Open-source security tools, community projects, and a startup incubator for next-gen defenders.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    desc: "Cyber awareness campaigns, national defense partnerships, and digital safety for underserved regions.",
  },
  {
    icon: Lock,
    title: "Membership & Careers",
    desc: "Student to Advisory tiers, certifications, achievement badges, and curated cybersecurity opportunities.",
  },
];

export function Pillars() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Eight Pillars
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            One alliance. <span className="text-gradient-cyber">Unified defense.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Education, research, intelligence, and community — engineered together to defend the
            digital future.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="glass group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-cyber opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]" />
              <div className="grid h-11 w-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
