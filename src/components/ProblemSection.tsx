import { BookOpen, Clock, Lightbulb, Users } from "lucide-react";

const problems = [
  {
    icon: BookOpen,
    title: "Academic Pressure",
    description: "Academic pressure limits extracurricular exploration, leaving students without creative outlets.",
  },
  {
    icon: Clock,
    title: "Overloaded Teachers",
    description: "Teachers are already overloaded with curriculum, making it hard to run extracurricular programs.",
  },
  {
    icon: Lightbulb,
    title: "Untapped Talent",
    description: "Students have incredible talents but lack structured opportunities to discover and develop them.",
  },
  {
    icon: Users,
    title: "Low Engagement",
    description: "Schools want better student engagement but lack the resources and framework to deliver it.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Students Need Opportunities{" "}
            <span className="text-gradient-primary">Beyond Academics</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Many schools face critical challenges in providing holistic student development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
