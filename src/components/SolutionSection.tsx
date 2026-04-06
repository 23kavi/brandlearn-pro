import { Search, Users, Presentation, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    step: "Step 1",
    title: "Proprietary Student Interest Mapping",
    description: "Our research-backed survey precisely identifies each student's strengths, passions, and growth areas.",
  },
  {
    icon: Users,
    step: "Step 2",
    title: "Curated Club Formation",
    description: "Students are strategically grouped into high-impact clubs aligned with their aspirations and your institution's goals.",
  },
  {
    icon: Presentation,
    step: "Step 3",
    title: "Expert-Led Weekly Sessions",
    description: "Certified UGS mentors deliver structured, curriculum-grade sessions — no additional workload for your staff.",
  },
  {
    icon: Trophy,
    step: "Step 4",
    title: "Showcase, Compete & Certify",
    description: "Students demonstrate mastery through competitions, exhibitions, and recognized certifications that elevate your school's brand.",
  },
];

const SolutionSection = () => {
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
            The UGS{" "}
            <span className="text-gradient-primary">Proven Framework</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A turnkey, end-to-end system designed to deliver measurable student transformation — effortlessly.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="bg-card p-6 rounded-xl shadow-card border border-border">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-2 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-button shrink-0">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
