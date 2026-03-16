import { Cpu, Briefcase, Medal, Mic, Palette } from "lucide-react";
import { motion } from "framer-motion";

const trainers = [
  { icon: Briefcase, name: "Entrepreneurship Expert", specialty: "Entrepreneurship & Business", description: "Experienced in mentoring young entrepreneurs and building startup mindsets." },
  { icon: Cpu, name: "Tech & Innovation Mentor", specialty: "Innovation & Technology", description: "Passionate about coding, robotics, and AI for students." },
  { icon: Medal, name: "Sports Leadership Coach", specialty: "Sports & Leadership", description: "Developing sportsmanship, discipline, and team leadership skills." },
  { icon: Mic, name: "Communication Trainer", specialty: "Public Speaking & Debate", description: "Helping students find their voice through structured debate and oratory." },
  { icon: Palette, name: "Creative Arts Facilitator", specialty: "Creative Arts & Design", description: "Guiding students in visual arts, design thinking, and storytelling." },
];

const TrainersSection = () => {
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
            Expert <span className="text-gradient-primary">Mentors & Trainers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            UGS programs are guided by experienced trainers across diverse domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card border border-border text-center hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <trainer.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{trainer.name}</h3>
              <p className="text-primary text-sm font-medium mb-2">{trainer.specialty}</p>
              <p className="text-muted-foreground text-sm">{trainer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
