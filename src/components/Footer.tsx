import { Mail, Phone, Linkedin, Github, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Pranav Kawale</h3>
            <p className="text-white/80 leading-relaxed">
              Aspiring Software Engineer passionate about creating innovative solutions 
              and contributing to meaningful projects.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:Pranavlkawale1@gmail.com"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pranav-kawale-aa4a622b8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Pranavkawale05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="tel:7022018900"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/60" />
                <a 
                  href="mailto:Pranavlkawale1@gmail.com"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Pranavlkawale1@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/60" />
                <a 
                  href="tel:7022018900"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  +91 7022018900
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/80 text-sm">
              <span>© {currentYear} Pranav Kawale. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>and passion for technology.</span>
            </div>

            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;