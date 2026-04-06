import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "UGS brought a level of professionalism and structure to our extracurricular program that we couldn't achieve on our own. The transformation in student confidence has been remarkable.",
    author: "School Principal",
    role: "Partner Institution",
  },
  {
    quote: "As educators, we were relieved to see a program that truly handles everything — from planning to execution. Our students are more engaged than ever, and parents have noticed the difference.",
    author: "Senior Academic Coordinator",
    role: "Partner Institution",
  },
  {
    quote: "The Entrepreneurship Club didn't just teach me business — it taught me how to think differently. I now see opportunities everywhere. UGS changed my perspective completely.",
    author: "Class 10 Student",
    role: "Entrepreneurship Club Member",
  },
];

const TestimonialsSection = () => {
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
            Trusted by <span className="text-gradient-primary">Leading Schools</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the educators and students who've experienced the UGS difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card p-8 rounded-2xl shadow-card border border-border"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-foreground">— {testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
