import { Mail, Phone, ExternalLink, ArrowRight, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partner <span className="text-gradient-primary">With UGS</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform student development at your school? Get in touch with us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, title: "Email Us", content: "join@ugs-carrer.com", href: "mailto:join@ugs-carrer.com" },
              { icon: Phone, title: "Call Us", content: "+91 88001 29363", href: "tel:+918800129363" },
              { icon: ExternalLink, title: "Partnership Inquiry", content: "Fill Partnership Form →", href: "https://forms.gle/u6NW9tWMGFczmoR38", external: true },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl shadow-card border border-border text-center hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`${item.external ? "text-primary hover:text-primary/80 font-medium" : "text-muted-foreground hover:text-primary"} transition-colors text-sm break-all`}
                >
                  {item.content}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="https://forms.gle/u6NW9tWMGFczmoR38" target="_blank" rel="noopener noreferrer">
                Book a School Partnership Call
                <ArrowRight size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
