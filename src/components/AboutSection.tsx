import { Target, Users, Award, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Industry-Led Curriculum",
    description:
      "Curriculum designed by MNC experts to ensure you learn job-ready skills that employers actually need.",
  },
  {
    icon: Users,
    title: "MNC Expert Trainers",
    description:
      "Learn from 25+ professionals with years of real-world experience from top multinational companies.",
  },
  {
    icon: Award,
    title: "100% Placement Support",
    description:
      "Get career guidance, interview preparation, and placement assistance to land your dream job.",
  },
  {
    icon: Lightbulb,
    title: "Hands-on Training",
    description:
      "Live online sessions, capstone projects, and paid project opportunities to build your portfolio.",
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

        {/* Vision & Mission */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-primary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-primary-foreground/90 text-lg">
              To make quality, career-focused education accessible to all.
            </p>
          </div>
          <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground text-lg">
              To train students with real-world skills and make them job-ready through expert-led bootcamps in just 4 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
