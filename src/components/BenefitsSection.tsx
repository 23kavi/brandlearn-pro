import { Award, Share2, Handshake, Star, Trophy, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Official UGS Certification",
    description: "Every participant receives a recognized certificate of completion — a credential that strengthens college applications and student portfolios.",
  },
  {
    icon: Share2,
    title: "Public Recognition & Spotlight",
    description: "Top-performing students are featured on our official website and social media — giving your school visible proof of student excellence.",
  },
  {
    icon: Handshake,
    title: "Exclusive Sponsorship Access",
    description: "Exceptionally talented students unlock sponsorship pathways — connecting your institution to opportunities most schools can't offer.",
  },
  {
    icon: Trophy,
    title: "Prestigious Showcase Event",
    description: "A grand exhibition where students present their work to parents, faculty, and community leaders — elevating your school's brand.",
  },
  {
    icon: Star,
    title: "Real-World Portfolio",
    description: "Students graduate with a tangible portfolio of projects and achievements — setting them apart for higher education and beyond.",
  },
  {
    icon: Award,
    title: "Leadership Credentials",
    description: "Outstanding students earn leadership badges and recommendation letters — powerful differentiators for academic and career advancement.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const BenefitsSection = () => {
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
            Exclusive <span className="text-gradient-primary">Student Benefits</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Beyond learning — students earn credentials, recognition, and real-world advantages that set your school apart.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={item}
              className="bg-card p-6 rounded-2xl shadow-card border border-border hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
