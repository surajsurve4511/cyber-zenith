import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
          <div className="absolute inset-0 bg-gradient-cyber opacity-10" />
          <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
          <div className="cyber-grid cyber-grid-mask absolute inset-0 opacity-40" />

          <div className="relative">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl md:text-5xl">
              Join the <span className="text-gradient-cyber">defender alliance</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Whether you're a student, professional, researcher, or partner — there's a seat for
              you at the table shaping the safer digital future.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="cyber" size="lg">
                Become a Member <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="cyberOutline" size="lg">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
