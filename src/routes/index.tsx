import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Pillars } from "@/components/site/Pillars";
import { ThreatIntel } from "@/components/site/ThreatIntel";
import { Academy } from "@/components/site/Academy";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cyber Guardian Alliance — Global Cybersecurity & AI Security Community" },
      {
        name: "description",
        content:
          "A global alliance of ethical hackers, AI researchers, and defenders building the future of cybersecurity, AI security, and digital defense.",
      },
      { property: "og:title", content: "Cyber Guardian Alliance" },
      {
        property: "og:description",
        content:
          "Headquartered in India, operating globally — education, research, threat intelligence, and community for digital defenders.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Pillars />
        <ThreatIntel />
        <Academy />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}
