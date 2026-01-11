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
              href="mailto:join@ugs-carrer.com"
              className="text-muted-foreground hover:text-primary transition-colors break-all"
            >
              join@ugs-carrer.com
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
              href="tel:+918800129363"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 88001 29363
            </a>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-card text-center hover:shadow-card-hover transition-all duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Inquiry Form
            </h3>
            <a
              href="https://forms.gle/u6NW9tWMGFczmoR38"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Fill Inquiry Form →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
