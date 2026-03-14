import { Globe, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-gradient-primary">United Global Scholars</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            United Global Scholars is building a global network of student clubs and leadership programs designed to help schools nurture innovation, creativity, leadership, and entrepreneurial thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-primary rounded-2xl p-8 text-center">
            <Rocket className="w-8 h-8 text-primary-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-primary-foreground/90 text-lg">
              To develop future-ready global scholars who can lead, innovate, and create impact in the world.
            </p>
          </div>
          <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center">
            <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground text-lg">
              To make quality, globally-aware student development accessible to every school and every student.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
