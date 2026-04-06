import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const trialFeatures = [
  "Complete access to any one premium club",
  "Fully managed sessions by certified UGS mentors",
  "Hands-on skill-building activities & projects",
  "Zero commitment — no strings attached",
  "Experience measurable student impact firsthand",
];

const FreeTrialSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl"
        >
          <div className="bg-gradient-cta p-10 md:p-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.12),transparent)] pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
                    <Clock size={16} />
                    <span className="text-sm font-semibold">Complimentary 7-Day Trial</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                    See the Impact <span className="opacity-90">Before You Commit</span>
                  </h2>

                  <p className="text-primary-foreground/80 text-lg mb-8">
                    We're confident in our program — that's why we invite every school to experience it free for 7 days. No obligations, no fine print. Just results.
                  </p>

                  <Button
                    size="xl"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold shadow-lg"
                    asChild
                  >
                    <a href="#contact">
                      Request Your Free Trial
                      <ArrowRight size={20} />
                    </a>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <div className="flex items-center gap-2 mb-5">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <h3 className="text-primary-foreground font-bold text-lg">What's Included</h3>
                  </div>
                  <ul className="space-y-4">
                    {trialFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-primary-foreground/90 font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
