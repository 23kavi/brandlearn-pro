import { motion } from "framer-motion";

const phases = [
  { weeks: "Week 1–2", title: "Interest Discovery & Club Formation", description: "Students complete surveys and clubs are organized based on interests." },
  { weeks: "Week 3–10", title: "Weekly Club Sessions", description: "Trainer-led interactive sessions with skill-building activities and projects." },
  { weeks: "Week 11", title: "Project Development", description: "Students work on their final projects with mentor guidance." },
  { weeks: "Week 12", title: "Student Showcase Event", description: "Students present their projects in a grand showcase celebration." },
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
            Structured <span className="text-gradient-primary">Semester Program</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A clear 12-week roadmap designed for maximum student growth.
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
              className="flex items-start gap-6 bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-card-hover transition-all duration-300"
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
