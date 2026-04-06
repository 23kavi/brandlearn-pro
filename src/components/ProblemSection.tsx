import { BookOpen, Clock, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: BookOpen,
    title: "Academic Overload",
    description: "Curriculum demands leave little room for holistic development — students miss out on the skills that truly shape their future.",
  },
  {
    icon: Clock,
    title: "Faculty Bandwidth",
    description: "Your teachers are already stretched thin. Running quality extracurricular programs shouldn't fall on their shoulders.",
  },
  {
    icon: Lightbulb,
    title: "Untapped Potential",
    description: "Every school has future leaders, innovators, and creators — but without the right framework, their talents go undiscovered.",
  },
  {
    icon: Users,
    title: "Engagement Gap",
    description: "Parents and accreditation bodies expect more than academics. Schools need a structured way to deliver meaningful student engagement.",
  },
];

const ProblemSection = () => {
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
            The Challenges{" "}
            <span className="text-gradient-primary">Schools Face Today</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern institutions need more than textbooks — they need a partner who delivers holistic student outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover-glow cursor-default"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-destructive/20 group-hover:scale-110 transition-all duration-300">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
