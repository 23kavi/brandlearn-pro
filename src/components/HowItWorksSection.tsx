import { Handshake, ClipboardList, Users, CalendarCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Handshake, title: "Strategic Partnership", description: "We align with your institution's vision and co-design the program scope." },
  { icon: ClipboardList, title: "Student Profiling", description: "Our proprietary survey maps every student's interests, strengths, and aspirations." },
  { icon: Users, title: "Club Curation", description: "Students are placed into expertly matched clubs with dedicated UGS mentors." },
  { icon: CalendarCheck, title: "Managed Delivery", description: "Weekly sessions run seamlessly — fully managed by our certified trainers." },
  { icon: Award, title: "Showcase & Recognition", description: "Students present achievements at a prestigious showcase event for parents and faculty." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Effortless <span className="text-gradient-primary">Implementation</span> for Your Institution
          </h2>
          <p className="text-lg text-muted-foreground">
            From partnership to showcase — we handle everything so you can focus on what matters.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-button"
                  whileHover={{ scale: 1.15, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <div className="absolute top-8 left-[60%] right-0 h-0.5 bg-border hidden md:block last:hidden" 
                  style={{ display: index === steps.length - 1 ? 'none' : undefined }} />
                <h3 className="text-sm font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
