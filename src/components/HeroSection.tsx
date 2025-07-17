import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Trophy, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToRegister = () => {
    const element = document.querySelector("#register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-manthan-lavender/20 via-white to-manthan-violet/10"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-manthan-violet/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-manthan-lavender/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-16 h-16 bg-manthan-deep-violet/10 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-manthan-violet rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-manthan-deep-violet rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content with Added Padding */}
          <div className="text-center lg:text-left">
            <div className="mb-6 pt-8">
              {/* Main Title with Enhanced Typography and Added Padding */}
              <div className="flex items-center justify-center lg:justify-start mb-6 pt-6">
                <Sparkles className="w-8 h-8 text-manthan-violet mr-3 animate-pulse" />
                <h1 className="font-mono font-bold text-6xl lg:text-8xl text-manthan-deep-violet animate-fade-in bg-gradient-to-r from-manthan-violet to-manthan-deep-violet bg-clip-text text-transparent">
                  Manthan
                </h1>
                <Zap
                  className="w-8 h-8 text-manthan-violet ml-3 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              {/* Enhanced Tagline */}
              <div className="relative mb-8">
                <p
                  className="font-sans text-2xl lg:text-3xl text-manthan-dark-text mb-4 animate-fade-in font-semibold"
                  style={{ animationDelay: "0.2s" }}
                >
                  "AI Manthan: Where Thought Sparks Revolution"
                </p>
                <div className="absolute -inset-4 bg-gradient-to-r from-manthan-violet/10 to-manthan-lavender/10 rounded-2xl -z-10 blur-sm"></div>
              </div>

              {/* Enhanced Description */}
              <p
                className="font-sans text-xl text-manthan-dark-text/80 mb-8 animate-fade-in leading-relaxed"
                style={{ animationDelay: "0.4s" }}
              >
                Join us for the premier 24-hour AI hackathon where brilliant
                minds collaborate to build the future with artificial
                intelligence.
                <span className="text-manthan-violet font-semibold">
                  {" "}
                  Transform ideas into reality, push AI boundaries, and compete
                  for exciting prizes!
                </span>
              </p>

              {/* Call to Action Banner */}
              <div
                className="bg-gradient-to-r from-manthan-violet/15 to-manthan-lavender/15 rounded-2xl p-6 mb-10 animate-fade-in border-2 border-manthan-lavender/40 shadow-lg"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="font-mono text-manthan-deep-violet font-bold text-lg text-center">
                  🚀 Registration Open Now • Limited Spots • Early Bird Benefits
                </p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div
                className="text-center p-6 bg-white/70 rounded-2xl border-2 border-manthan-lavender/40 animate-fade-in hover:shadow-xl hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
                style={{ animationDelay: "0.8s" }}
              >
                <Clock className="w-8 h-8 text-manthan-violet mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <p className="font-mono font-bold text-xl text-manthan-deep-violet">
                  24 Hours
                </p>
                <p className="font-sans text-sm text-manthan-dark-text">
                  Non-stop Innovation
                </p>
              </div>
              <div
                className="text-center p-6 bg-white/70 rounded-2xl border-2 border-manthan-lavender/40 animate-fade-in hover:shadow-xl hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
                style={{ animationDelay: "1s" }}
              >
                <Users className="w-8 h-8 text-manthan-violet mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-mono font-bold text-xl text-manthan-deep-violet">
                  2-4 Members
                </p>
                <p className="font-sans text-sm text-manthan-dark-text">
                  Per Dream Team
                </p>
              </div>
              <div
                className="text-center p-6 bg-white/70 rounded-2xl border-2 border-manthan-lavender/40 animate-fade-in hover:shadow-xl hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
                style={{ animationDelay: "1.2s" }}
              >
                <Trophy className="w-8 h-8 text-manthan-violet mx-auto mb-3 group-hover:bounce transition-transform duration-300" />
                <p className="font-mono font-bold text-xl text-manthan-deep-violet">
                  ₹40000
                </p>
                <p className="font-sans text-sm text-manthan-dark-text">
                  Total Prizes
                </p>
              </div>
              <div
                className="text-center p-6 bg-white/70 rounded-2xl border-2 border-manthan-lavender/40 animate-fade-in hover:shadow-xl hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
                style={{ animationDelay: "1.4s" }}
              >
                <Calendar className="w-8 h-8 text-manthan-violet mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <p className="font-mono font-bold text-xl text-manthan-deep-violet">
                  Aug 30-31
                </p>
                <p className="font-sans text-sm text-manthan-dark-text">2025</p>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="animate-fade-in" style={{ animationDelay: "1.6s" }}>
              <Button
                onClick={scrollToRegister}
                className="bg-gradient-to-r from-manthan-violet to-manthan-deep-violet hover:from-manthan-deep-violet hover:to-manthan-violet text-white font-mono font-bold px-12 py-8 text-xl rounded-2xl animate-pulse-glow hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/20"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Register Your Team Now
                <Zap className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>

          {/* Enhanced Mascot with Animations */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated Glow Effect */}
              <div className="absolute -inset-12 bg-gradient-to-r from-manthan-violet/30 to-manthan-lavender/30 rounded-full blur-3xl animate-pulse group-hover:blur-3xl transition-all duration-500"></div>

              {/* Floating Sparkles around Mascot */}
              <div className="absolute top-10 left-10 w-6 h-6 bg-manthan-violet/40 rounded-full animate-ping"></div>
              <div
                className="absolute top-20 right-8 w-3 h-3 bg-manthan-lavender/60 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-16 left-6 w-4 h-4 bg-manthan-deep-violet/50 rounded-full animate-bounce"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Main Mascot */}
              <img
                src="/lovable-uploads/d760ab7f-a4ad-46bc-9dce-26c6d263cca7.png"
                alt="Manthan AI Mascot - Your AI Coding Companion"
                className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] object-contain animate-float hover:scale-110 transition-all duration-500 relative z-10 filter drop-shadow-2xl"
              />

              {/* Enhanced Rotating Ring Effects */}
              <div
                className="absolute inset-0 border-4 border-manthan-violet/30 rounded-full animate-spin"
                style={{ animationDuration: "10s" }}
              ></div>
              <div
                className="absolute inset-8 border-3 border-manthan-lavender/40 rounded-full animate-spin"
                style={{
                  animationDuration: "8s",
                  animationDirection: "reverse",
                }}
              ></div>
              <div
                className="absolute inset-16 border-2 border-manthan-deep-violet/20 rounded-full animate-spin"
                style={{ animationDuration: "12s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Banner */}
        <div
          className="text-center mt-20 animate-fade-in"
          style={{ animationDelay: "2s" }}
        >
          <div className="bg-gradient-to-r from-manthan-violet via-manthan-deep-violet to-manthan-violet rounded-3xl p-8 text-white shadow-2xl border-2 border-white/20">
            <p className="font-mono text-2xl font-bold mb-3">
              🏆 Compete • 🤝 Collaborate • 🚀 Create • 💡 Innovate
            </p>
            <p className="font-sans text-lg opacity-90">
              The future of AI starts here. Are you ready to be part of the
              revolution?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
