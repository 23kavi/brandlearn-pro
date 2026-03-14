import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much time do clubs require each week?",
    answer: "Each club session typically runs for 1–2 hours per week, designed to fit within the school schedule without disrupting academics.",
  },
  {
    question: "Who manages the club activities?",
    answer: "All club activities are managed and conducted by UGS's trained facilitators and mentors. Schools only need to provide the space and coordinate scheduling.",
  },
  {
    question: "What infrastructure is needed?",
    answer: "Basic classroom or activity room setup is sufficient. For tech clubs, access to computers is helpful but not mandatory. UGS provides all training materials and resources.",
  },
  {
    question: "How many students can participate?",
    answer: "There's no fixed limit. UGS programs are designed to scale — from small pilot groups of 30 students to school-wide programs with hundreds of participants.",
  },
  {
    question: "Is there a trial or pilot option?",
    answer: "Yes! Schools can start with a 3-month pilot program to experience the impact before committing to a full semester partnership.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-card"
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
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
