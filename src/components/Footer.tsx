import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Timings", href: "#timings" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L60 52.5C120 45 240 30 360 22.5C480 15 600 15 720 20C840 25 960 35 1080 37.5C1200 40 1320 35 1380 32.5L1440 30V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full gradient-sunny flex items-center justify-center shadow-lg">
                <span className="text-2xl">🌟</span>
              </div>
              <div>
                <h3 className="font-fredoka text-xl font-bold">
                  Little Junior DPS
                </h3>
                <p className="text-sm text-background/70">Where Learning is Fun!</p>
              </div>
            </div>
            <p className="font-nunito text-background/80 leading-relaxed">
              Nurturing young minds with love, care, and creativity since 2014. 
              Every child deserves the best start in life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-fredoka text-lg font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block font-nunito text-background/80 hover:text-sunny transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-fredoka text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+919742994570"
                className="flex items-center gap-3 font-nunito text-background/80 hover:text-sunny transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 9742994570
              </a>
              <a
                href="mailto:littlejuniordps@gmail.com"
                className="flex items-center gap-3 font-nunito text-background/80 hover:text-sunny transition-colors"
              >
                <Mail className="w-5 h-5" />
                littlejuniordps@gmail.com
              </a>
              <div className="flex items-start gap-3 font-nunito text-background/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Your School Address Here<br />City, State - PIN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="font-nunito text-background/60 flex items-center justify-center gap-1">
            © {currentYear} Little Junior DPS. Made with{" "}
            <Heart className="w-4 h-4 text-coral fill-coral animate-pulse" />{" "}
            for little ones
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
