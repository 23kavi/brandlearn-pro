import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about our courses? We're here to help you on your
            learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-xl shadow-card text-center hover:shadow-card-hover transition-all duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Email Us
            </h3>
            <a
              href="mailto:info@ugs.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              info@unbreakablegrowthskills.com
            </a>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-card text-center hover:shadow-card-hover transition-all duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Call Us
            </h3>
            <a
              href="tel:+919876543210"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 98765 43210
            </a>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-card text-center hover:shadow-card-hover transition-all duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Visit Us
            </h3>
            <p className="text-muted-foreground">
              Mumbai, Maharashtra, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
