
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Trophy } from 'lucide-react';

const HeroSection = () => {
  const scrollToRegister = () => {
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-manthan-lavender/20 via-white to-manthan-violet/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-manthan-violet/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-manthan-lavender/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-manthan-deep-violet/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="font-mono font-bold text-5xl lg:text-7xl text-manthan-deep-violet mb-4 animate-fade-in">
                Manthan
              </h1>
              <p className="font-sans text-xl lg:text-2xl text-manthan-dark-text mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                "AI Manthan: Where Thought Sparks Revolution"
              </p>
              <p className="font-sans text-lg text-manthan-dark-text/80 mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
                Join the ultimate 48-hour AI hackathon where brilliant minds collaborate to build the future with artificial intelligence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-white/50 rounded-lg border border-manthan-lavender/30 animate-fade-in hover:shadow-lg hover:scale-105 transition-all duration-300" style={{animationDelay: '0.6s'}}>
                <Clock className="w-6 h-6 text-manthan-violet mx-auto mb-2" />
                <p className="font-mono font-semibold text-manthan-deep-violet">48 Hours</p>
                <p className="font-sans text-sm text-manthan-dark-text">Duration</p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg border border-manthan-lavender/30 animate-fade-in hover:shadow-lg hover:scale-105 transition-all duration-300" style={{animationDelay: '0.8s'}}>
                <Users className="w-6 h-6 text-manthan-violet mx-auto mb-2" />
                <p className="font-mono font-semibold text-manthan-deep-violet">2-4 Members</p>
                <p className="font-sans text-sm text-manthan-dark-text">Per Team</p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg border border-manthan-lavender/30 animate-fade-in hover:shadow-lg hover:scale-105 transition-all duration-300" style={{animationDelay: '1s'}}>
                <Trophy className="w-6 h-6 text-manthan-violet mx-auto mb-2" />
                <p className="font-mono font-semibold text-manthan-deep-violet">$50K+</p>
                <p className="font-sans text-sm text-manthan-dark-text">Prizes</p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg border border-manthan-lavender/30 animate-fade-in hover:shadow-lg hover:scale-105 transition-all duration-300" style={{animationDelay: '1.2s'}}>
                <Calendar className="w-6 h-6 text-manthan-violet mx-auto mb-2" />
                <p className="font-mono font-semibold text-manthan-deep-violet">Dec 15-17</p>
                <p className="font-sans text-sm text-manthan-dark-text">2024</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in" style={{animationDelay: '1.4s'}}>
              <Button 
                onClick={scrollToRegister}
                className="bg-manthan-violet hover:bg-manthan-dark-lavender text-white font-mono font-semibold px-8 py-6 text-lg rounded-xl animate-pulse-glow hover:scale-105 transition-all duration-300"
              >
                Register Your Team
              </Button>
            </div>
          </div>

          {/* Mascot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img 
                src="/lovable-uploads/d760ab7f-a4ad-46bc-9dce-26c6d263cca7.png" 
                alt="Manthan AI Mascot" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-manthan-violet/20 to-manthan-lavender/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
