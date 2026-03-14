import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src={logo} alt="UGS - United Global Scholars" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 max-w-md">
              United Global Scholars — building a global network of student clubs and leadership programs to nurture innovation, creativity, and entrepreneurial thinking.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#clubs", label: "Clubs" },
                { href: "#how-it-works", label: "How It Works" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="mailto:join@ugs-carrer.com" className="hover:text-primary-foreground transition-colors">
                  join@ugs-carrer.com
                </a>
              </li>
              <li>
                <a href="tel:+918800129363" className="hover:text-primary-foreground transition-colors">
                  +91 88001 29363
                </a>
              </li>
              <li>
                <a href="https://forms.gle/u6NW9tWMGFczmoR38" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  Partnership Form →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} United Global Scholars. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
