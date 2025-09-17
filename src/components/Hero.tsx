import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin, Phone } from "lucide-react";
import profileImage from "@/assets/pranav-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-glow">
                <img 
                  src={profileImage} 
                  alt="Pranav Kawale" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-20"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Pranav <span className="text-gradient">Kawale</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white/90 font-medium mb-6">
            Aspiring Software Engineer
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about building innovative, efficient, and user-focused solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm text-lg px-8 py-6 hover-lift"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50 backdrop-blur-sm text-lg px-8 py-6 hover-lift"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="mailto:Pranavlkawale1@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover-lift"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pranav-kawale-aa4a622b8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover-lift"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Pranavkawale05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover-lift"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="tel:7022018900"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover-lift"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;