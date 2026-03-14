import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "UGS programs helped our students become more confident and collaborative. We've seen a remarkable transformation in student engagement.",
    author: "School Principal",
    role: "Partner School",
  },
  {
    quote: "The structured club activities gave our students a platform to explore their interests. The trainers are exceptional and truly care about student growth.",
    author: "Senior Teacher",
    role: "Partner School",
  },
  {
    quote: "I discovered my passion for entrepreneurship through the UGS club. It changed how I think about problems and solutions.",
    author: "Student",
    role: "Entrepreneurship Club Member",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Schools <span className="text-gradient-primary">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-foreground">— {testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
