import { Target, Users, Award, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Industry-Focused",
    description:
      "Curriculum designed with industry experts to ensure you learn skills that employers actually need.",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description:
      "Learn from professionals with years of real-world experience in their respective fields.",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description:
      "Earn recognized certifications that add value to your resume and career prospects.",
  },
  {
    icon: Lightbulb,
    title: "Practical Learning",
    description:
      "Hands-on projects and real-world case studies to build your portfolio and confidence.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose{" "}
            <span className="text-gradient-primary">Unbreakable Growth Skills?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to empowering individuals with skills that stand the
            test of time. Our comprehensive approach ensures you're not just
            learning, but growing into the best version of yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Our Mission
          </h3>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            To bridge the gap between education and employment by providing
            accessible, high-quality skill development programs that empower
            individuals to achieve their career aspirations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
