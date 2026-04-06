import { Globe, Rocket, User } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-gradient-primary">United Global Scholars</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            United Global Scholars is India's emerging leader in school-integrated extracurricular development. We build and operate a premium ecosystem of student clubs and leadership programs — so your institution can deliver world-class holistic education without adding a single burden to your team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-primary rounded-2xl p-8 text-center"
          >
            <Rocket className="w-8 h-8 text-primary-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Our Mission</h3>
            <p className="text-primary-foreground/90 text-lg">
              To develop future-ready global scholars who lead with confidence, innovate with purpose, and create lasting impact — starting from school.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-primary/20 rounded-2xl p-8 text-center"
          >
            <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground text-lg">
              To become the gold standard in school-partnered student development — accessible to every institution, transformative for every student.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Meet Our <span className="text-gradient-primary">Founders</span>
          </h3>
          <p className="text-muted-foreground">The visionaries driving the mission</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-5">
              <User className="w-10 h-10 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-1">Kavita Bharti</h4>
            <p className="text-primary text-sm font-medium mb-4">Founder</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A visionary educator and strategic leader, Kavita founded UGS with a singular conviction: every school deserves a world-class extracurricular framework. Her expertise in education design and student engagement has shaped UGS into a trusted partner for forward-thinking institutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-5">
              <User className="w-10 h-10 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-1">Nidhi Gupta</h4>
            <p className="text-primary text-sm font-medium mb-4">Co-Founder</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nidhi brings strategic depth and operational excellence to UGS. With a passion for scalable impact, she architects the systems that ensure every partner school receives a seamless, high-quality experience — from onboarding to student showcase.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
