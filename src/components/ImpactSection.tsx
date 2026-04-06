import { School, GraduationCap, TrendingUp, Users, Lightbulb, MessageSquare, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";

const schoolBenefits = [
  { icon: TrendingUp, text: "Elevated institutional reputation & parent satisfaction" },
  { icon: School, text: "Fully managed extracurricular infrastructure" },
  { icon: Users, text: "Measurably higher student participation & retention" },
];

const studentBenefits = [
  { icon: Heart, text: "Unshakeable confidence & self-belief" },
  { icon: Award, text: "Proven leadership & collaboration skills" },
  { icon: Lightbulb, text: "Creative thinking & innovation mindset" },
  { icon: MessageSquare, text: "Communication mastery & teamwork" },
];

const metrics = [
  { value: "500+", label: "Students Transformed" },
  { value: "20+", label: "Curated Activities / Semester" },
  { value: "10+", label: "Future-Ready Skills Developed" },
];

const ImpactSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Measurable <span className="text-gradient-primary">Outcomes</span> That Matter
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results for your institution and your students — backed by data, delivered with excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-2xl shadow-card border border-border hover:shadow-card-hover hover-glow transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <School className="w-5 h-5 text-primary" /> For Your Institution
            </h3>
            <ul className="space-y-4">
              {schoolBenefits.map((b) => (
                <li key={b.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{b.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-2xl shadow-card border border-border hover:shadow-card-hover hover-glow transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" /> For Your Students
            </h3>
            <ul className="space-y-4">
              {studentBenefits.map((b) => (
                <li key={b.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{b.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-primary rounded-2xl p-10 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-6 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{m.value}</p>
                <p className="text-primary-foreground/80 text-sm mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
