import { motion } from "framer-motion";
import {
  LayoutGrid,
  BookOpenCheck,
  BarChart3,
  LineChart,
  Award,
  Trophy,
  ArrowRight,
} from "lucide-react";

const mappings = [
  {
    challenge: {
      icon: LayoutGrid,
      title: "No Structured Curriculum",
      pain: "Most extracurricular activities lack a defined syllabus or progression.",
    },
    solution: {
      icon: BookOpenCheck,
      title: "12-Week Structured Blueprint",
      description:
        "Every club runs on a research-backed, week-by-week curriculum with clear learning milestones, projects, and skill checkpoints — designed by industry mentors.",
      features: [
        "Week-by-week session plans",
        "Skill progression milestones",
        "Hands-on projects each module",
      ],
    },
  },
  {
    challenge: {
      icon: BarChart3,
      title: "No Measurable Outcomes",
      pain: "Schools and colleges can't demonstrate the real impact of co-curricular efforts.",
    },
    solution: {
      icon: LineChart,
      title: "Outcome Tracking & Reports",
      description:
        "Each student is profiled, scored, and tracked against defined KPIs. Institutions receive periodic progress reports and a final outcome dashboard.",
      features: [
        "Pre & post skill assessments",
        "Per-student progress reports",
        "Institution-level impact dashboard",
      ],
    },
  },
  {
    challenge: {
      icon: Award,
      title: "No Recognised Platforms",
      pain: "Students lack credible stages to validate their talent to parents, recruiters, and universities.",
    },
    solution: {
      icon: Trophy,
      title: "Showcases, Competitions & Certifications",
      description:
        "Students perform on recognised UGS stages — inter-institutional competitions, public showcases, and verifiable certifications that strengthen college and career applications.",
      features: [
        "End-of-semester showcase event",
        "Inter-school & inter-college competitions",
        "Verifiable UGS certifications",
      ],
    },
  },
];

const ChallengeSolutionMapSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Challenge → Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Every Gap Solved by a{" "}
            <span className="text-gradient-primary">Specific UGS Feature</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just identify problems — we map each one to a concrete part of the program that solves it.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {mappings.map((item, index) => (
            <motion.div
              key={item.challenge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-[1fr_auto_1.4fr] gap-4 md:gap-6 items-stretch"
            >
              {/* Challenge card */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-card relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-destructive/60" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                    <item.challenge.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-[11px] font-semibold text-destructive uppercase tracking-wider">
                    The Challenge
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.challenge.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.challenge.pain}</p>
              </div>

              {/* Arrow */}
              <div className="flex md:flex-col items-center justify-center">
                <div className="hidden md:block w-px h-6 bg-border" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-button"
                >
                  <ArrowRight className="w-5 h-5 text-primary-foreground rotate-90 md:rotate-0" />
                </motion.div>
                <div className="hidden md:block w-px h-6 bg-border" />
              </div>

              {/* Solution card */}
              <div className="bg-card border border-primary/30 rounded-xl p-6 shadow-card hover:shadow-card-hover hover-glow transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-primary" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.solution.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                    The UGS Solution
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.solution.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.solution.description}
                </p>
                <ul className="space-y-1.5">
                  {item.solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolutionMapSection;
