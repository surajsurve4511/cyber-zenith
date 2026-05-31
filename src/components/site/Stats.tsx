const stats = [
  { value: "120+", label: "Countries Represented" },
  { value: "48K", label: "Global Members" },
  { value: "320", label: "Active Research Projects" },
  { value: "1.2M", label: "Learners Trained" },
];

export function Stats() {
  return (
    <section className="relative border-y border-border/50 bg-card/40 py-16 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-bold text-gradient-cyber sm:text-4xl md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs font-medium tracking-widest text-muted-foreground uppercase sm:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
