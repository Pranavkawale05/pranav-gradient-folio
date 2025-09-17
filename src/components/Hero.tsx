import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { socialLinks } from "@/data/contact";

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
          {/* Name and Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            {personalInfo.name.split(' ')[0]} <span className="text-gradient">{personalInfo.name.split(' ')[1]}</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl text-white/90 font-medium mb-8">
            {personalInfo.title}
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-16 leading-relaxed">
            {personalInfo.tagline}
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
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            {socialLinks.map((social) => (
              <a 
                key={social.id}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover-lift group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            ))}
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