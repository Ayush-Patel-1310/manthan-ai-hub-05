import {
  Mail,
  MapPin,
  Calendar,
  Zap,
  Users,
  Github,
  Linkedin,
  Twitter,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-mono font-bold text-2xl">
                  M
                </span>
              </div>
              <div>
                <h3 className="font-mono font-bold text-3xl bg-gradient-to-r from-white to-manthan-lavender bg-clip-text text-transparent">
                  AI Manthan
                </h3>
                <p className="font-sans text-lg opacity-90">
                  Where Thought Sparks Revolution
                </p>
              </div>
            </div>

            <p className="font-sans text-lg mb-6 opacity-90 leading-relaxed">
              To ignite innovation and unleash creativity by uniting the city’s
              most passionate developers under one roof for 24 hours of non-stop
              hacking, learning, and collaboration! This high-energy event is
              all about solving real-world challenges with cutting-edge AI,
              learning from brilliant minds, building lasting connections, and
              pushing the boundaries of what’s possible — all in just one epic
              day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-bold text-xl mb-8 text-manthan-lavender">
              Quick Links
            </h4>
            <div className="space-y-4">
              <a
                href="#ai-challenges"
                className="flex items-center text-white hover:text-manthan-lavender transition-colors group"
              >
                <Zap className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-sans">Problem Statements</span>
              </a>
              <a
                href="#timeline"
                className="flex items-center text-white hover:text-manthan-lavender transition-colors group"
              >
                <Calendar className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-sans">Timeline</span>
              </a>
              <a
                href="#register"
                className="flex items-center text-white hover:text-manthan-lavender transition-colors group"
              >
                <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-sans">Register</span>
              </a>
            </div>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="font-mono font-bold text-xl mb-8 text-manthan-lavender">
              Event Info
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 mt-1 text-manthan-lavender flex-shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-white">
                    August 30-31, 2025
                  </p>
                  <p className="font-sans text-sm opacity-75">
                    24 hours of innovation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-manthan-lavender flex-shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-white">
                    301, 306, 307, Ocean Complex, opp. Vadodara Central, near
                    Genda Circle
                  </p>
                  <p className="font-sans text-sm opacity-75">
                    Vadodara, Gujarat 390023
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-manthan-lavender flex-shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-white">
                    @aimanthan.com
                  </p>
                  <p className="font-sans text-sm opacity-75">
                    General inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-manthan-lavender flex-shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-white">Vraj</p>
                  <p className="font-sans text-sm opacity-75">
                    +91 99094 60531
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-sans text-white/80 mb-4 md:mb-0">
              © 2024 AI Manthan. All rights reserved. Powered by AI, built with
              ❤️ by AtliQ.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-manthan-lavender hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-manthan-lavender hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-manthan-lavender hover:text-white transition-colors"
              >
                AI Ethics Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
