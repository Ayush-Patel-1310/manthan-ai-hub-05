
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Trophy, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToRegister = () => {
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-manthan-lavender/20 via-white to-manthan-violet/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-manthan-violet/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-manthan-lavender/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-manthan-deep-violet/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-manthan-violet rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-manthan-deep-violet rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              {/* Main Title with Enhanced Typography */}
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Sparkles className="w-8 h-8 text-manthan-violet mr-3 animate-pulse" />
                <h1 className="font-mono font-bold text-5xl lg:text-7xl text-manthan-deep-violet animate-fade-in">
                  Manthan
                </h1>
                <Zap className="w-8 h-8 text-manthan-violet ml-3 animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
              
              {/* Enhanced Tagline */}
              <div className="relative">
                <p className="font-sans text-xl lg:text-2xl text-manthan-dark-text mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  "AI Manthan: Where Thought Sparks Revolution"
                </p>
                <div className="absolute -inset-2 bg-gradient-to-r from-manthan-violet/5 to-manthan-lavender/5 rounded-lg -z-10"></div>
              </div>
              
              {/* Enhanced Description */}
              <p className="font-sans text-lg text-manthan-dark-text/80 mb-6 animate-fade-in leading-relaxed" style={{animationDelay: '0.4s'}}>
                Join India's premier 48-hour AI hackathon where brilliant minds collaborate to build the future with artificial intelligence. 
                <span className="text-manthan-violet font-semibold"> Transform ideas into reality, push AI boundaries, and compete for exciting prizes!</span>
              </p>

              {/* Call to Action Banner */}
              <div className="bg-gradient-to-r from-manthan-violet/10 to-manthan-lavender/10 rounded-xl p-4 mb-8 animate-fade-in border border-manthan-lavender/30" style={{animationDelay: '0.6s'}}>
                <p className="font-mono text-manthan-deep-violet font-semibold text-center">
                  🚀 Registration Open Now • Limited Spots • Early Bird Benefits
                </p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-white/50 rounded-lg border border-manthan-lavender/30 animate-fade-in hover:shadow-lg hover:scale-105 transition-all duration-300 group" style={{animationDelay: '0.8s'}}>
                <Clock className="w-6 h-6 text-manthan-violet mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <p className="font-mono font-semibold text-manthan-deep-violet">48 Hours</p>
                <p className="font-sans text-sm text-manthan-dark-text">Non-stop Innovation</p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg border border-manthan-lavender/30 animate-fade-in hover:shadow-lg hover:scale-105 transition-all duration-300 group" style={{animationDelay: '1s'}}>
                <Users className="w-6 h-6 text-manthan-violet mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-mono font-semibold text-manthan-deep-violet">2-4 Members</p>
                <p className="font-sans text-sm text-manthan-dark-text">Per Dream Team</p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg border border-manthan-lavender/30 animate-fade-in hover:shadow-lg hover:scale-105 transition-all duration-300 group" style={{animationDelay: '1.2s'}}>
                <Trophy className="w-6 h-6 text-manthan-violet mx-auto mb-2 group-hover:bounce transition-transform duration-300" />
                <p className="font-mono font-semibold text-manthan-deep-violet">₹5L+</p>
                <p className="font-sans text-sm text-manthan-dark-text">Total Prizes</p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg border border-manthan-lavender/30 animate-fade-in hover:shadow-lg hover:scale-105 transition-all duration-300 group" style={{animationDelay: '1.4s'}}>
                <Calendar className="w-6 h-6 text-manthan-violet mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <p className="font-mono font-semibold text-manthan-deep-violet">Dec 15-17</p>
                <p className="font-sans text-sm text-manthan-dark-text">2024</p>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="animate-fade-in" style={{animationDelay: '1.6s'}}>
              <Button 
                onClick={scrollToRegister}
                className="bg-manthan-violet hover:bg-manthan-dark-lavender text-white font-mono font-semibold px-8 py-6 text-lg rounded-xl animate-pulse-glow hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Register Your Team Now
                <Zap className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-manthan-dark-text/70 mt-2 font-sans">
                Join 500+ developers already registered
              </p>
            </div>
          </div>

          {/* Enhanced Mascot with Animations */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-manthan-violet/20 to-manthan-lavender/20 rounded-full blur-2xl animate-pulse group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Floating Sparkles around Mascot */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-manthan-violet/30 rounded-full animate-ping"></div>
              <div className="absolute top-20 right-8 w-2 h-2 bg-manthan-lavender/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-16 left-6 w-3 h-3 bg-manthan-deep-violet/40 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
              
              {/* Main Mascot */}
              <img 
                src="/lovable-uploads/d760ab7f-a4ad-46bc-9dce-26c6d263cca7.png" 
                alt="Manthan AI Mascot - Your AI Coding Companion" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain animate-float hover:scale-110 transition-all duration-500 relative z-10 filter drop-shadow-2xl"
              />
              
              {/* Rotating Ring Effect */}
              <div className="absolute inset-0 border-4 border-manthan-violet/20 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
              <div className="absolute inset-4 border-2 border-manthan-lavender/30 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Banner */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '2s'}}>
          <div className="bg-gradient-to-r from-manthan-violet to-manthan-deep-violet rounded-2xl p-6 text-white shadow-2xl">
            <p className="font-mono text-lg font-semibold mb-2">
              🏆 Compete • 🤝 Collaborate • 🚀 Create • 💡 Innovate
            </p>
            <p className="font-sans opacity-90">
              The future of AI starts here. Are you ready to be part of the revolution?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
