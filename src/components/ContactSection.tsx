import { Mail, Phone, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partner <span className="text-gradient-primary">With UGS</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform student development at your school? Get in touch with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-8 rounded-xl shadow-card border border-border text-center hover:shadow-card-hover transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
              <a href="mailto:join@ugs-carrer.com" className="text-muted-foreground hover:text-primary transition-colors break-all text-sm">
                join@ugs-carrer.com
              </a>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-card border border-border text-center hover:shadow-card-hover transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
              <a href="tel:+918800129363" className="text-muted-foreground hover:text-primary transition-colors">
                +91 88001 29363
              </a>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-card border border-border text-center hover:shadow-card-hover transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Partnership Inquiry</h3>
              <a
                href="https://forms.gle/u6NW9tWMGFczmoR38"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
              >
                Fill Partnership Form →
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="xl" asChild>
              <a href="https://forms.gle/u6NW9tWMGFczmoR38" target="_blank" rel="noopener noreferrer">
                Book a School Partnership Call
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
