import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How much time does the program require each week?",
    answer: "Each club session runs for just 1–2 hours per week, carefully designed to integrate seamlessly into your existing school or college schedule without disrupting academics.",
  },
  {
    question: "Does our faculty need to manage anything?",
    answer: "Not at all. Every aspect — from planning and materials to session delivery and student evaluation — is fully managed by UGS's certified mentors. Your staff simply coordinates scheduling.",
  },
  {
    question: "What infrastructure or setup is required?",
    answer: "A standard classroom or activity room is all you need. For technology clubs, computer access is beneficial but not mandatory. UGS provides all training materials, curricula, and resources.",
  },
  {
    question: "Can the program scale across our entire institution?",
    answer: "Absolutely. UGS programs are architected to scale — from intimate pilot groups of 30 students to institution-wide rollouts with hundreds of participants across multiple clubs, suitable for both schools and colleges.",
  },
  {
    question: "Is there a way to try before we commit?",
    answer: "Yes. We offer a complimentary 7-day trial session and a 3-month pilot program — giving your institution full visibility into the impact before any long-term commitment.",
  },
];

const FAQSection = () => {
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
            Questions <span className="text-gradient-primary">Answered</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything school and college leaders need to know before partnering with UGS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-card hover:shadow-card-hover hover-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
