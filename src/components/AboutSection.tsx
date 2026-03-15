import { Globe, Rocket, User } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
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

        {/* Founders */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Meet Our <span className="text-gradient-primary">Founders</span>
          </h3>
          <p className="text-muted-foreground">The minds behind the mission</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-5">
              <User className="w-10 h-10 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-1">Kavita Bharti</h4>
            <p className="text-primary text-sm font-medium mb-4">Founder</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A visionary educator and changemaker, Kavita believes every student carries a spark waiting to be ignited. With a passion for redefining how schools nurture talent, she founded UGS to bridge the gap between academics and real-world skills — empowering young minds to lead, create, and innovate fearlessly.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-5">
              <User className="w-10 h-10 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-1">Nidhi Gupta</h4>
            <p className="text-primary text-sm font-medium mb-4">Co-Founder</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nidhi brings a unique blend of strategic thinking and deep empathy for student development. Driven by the belief that leadership is learned through experience, she co-founded UGS to build structured ecosystems where students discover their strengths and grow into confident global scholars.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
