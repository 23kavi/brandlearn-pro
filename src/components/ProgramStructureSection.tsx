import { motion } from "framer-motion";

const phases = [
  { weeks: "Week 1–2", title: "Discovery & Onboarding", description: "Student profiling, interest mapping, and strategic club formation — tailored to your school." },
  { weeks: "Week 3–10", title: "Expert-Led Development", description: "Structured weekly sessions with skill-building projects, mentorship, and progressive challenges." },
  { weeks: "Week 11", title: "Capstone Project Sprint", description: "Students refine their final projects under dedicated mentor guidance — preparing for the spotlight." },
  { weeks: "Week 12", title: "Grand Showcase & Certification", description: "A prestigious event where students present achievements to parents, faculty, and community leaders." },
];

const ProgramStructureSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The <span className="text-gradient-primary">12-Week Blueprint</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A meticulously designed semester roadmap — engineered for maximum student growth and institutional impact.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid gap-4">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.weeks}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-card-hover hover-glow transition-all duration-300 group cursor-default"
            >
              <div className="shrink-0 w-24 text-center">
                <span className="inline-block bg-gradient-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                  {phase.weeks}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramStructureSection;
