import { School, GraduationCap, TrendingUp, Users, Lightbulb, MessageSquare, Heart, Award } from "lucide-react";

const schoolBenefits = [
  { icon: TrendingUp, text: "Stronger student engagement" },
  { icon: School, text: "Structured extracurricular ecosystem" },
  { icon: Users, text: "Improved student participation" },
];

const studentBenefits = [
  { icon: Heart, text: "Confidence building" },
  { icon: Award, text: "Leadership development" },
  { icon: Lightbulb, text: "Creativity and innovation" },
  { icon: MessageSquare, text: "Teamwork and communication" },
];

const metrics = [
  { value: "500+", label: "Students Engaged" },
  { value: "20+", label: "Club Activities / Semester" },
  { value: "10+", label: "Skills Explored" },
];

const ImpactSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Impact of the <span className="text-gradient-primary">UGS Program</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* For Schools */}
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <School className="w-5 h-5 text-primary" /> For Schools
            </h3>
            <ul className="space-y-4">
              {schoolBenefits.map((b) => (
                <li key={b.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For Students */}
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" /> For Students
            </h3>
            <ul className="space-y-4">
              {studentBenefits.map((b) => (
                <li key={b.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Metrics */}
        <div className="bg-gradient-primary rounded-2xl p-10 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{m.value}</p>
                <p className="text-primary-foreground/80 text-sm mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
