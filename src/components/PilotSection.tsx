import { ClipboardList, Settings, CalendarCheck, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const pilotFeatures = [
  { icon: ClipboardList, text: "Comprehensive student profiling" },
  { icon: Settings, text: "Full club setup & management" },
  { icon: CalendarCheck, text: "12 weeks of expert-led sessions" },
  { icon: Award, text: "Grand showcase & certification" },
];

const PilotSection = () => {
  return (
    <section id="pilot" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-cta rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Launch a Risk-Free 3-Month Pilot
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              Experience the full UGS framework before making a long-term decision. No risk, no pressure — just measurable results that speak for themselves.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {pilotFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground/90 text-sm font-medium">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold shadow-lg"
              asChild
            >
              <a href="#contact">
                Apply for Your Pilot Program
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotSection;
