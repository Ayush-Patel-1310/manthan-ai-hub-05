
import { Mail, MapPin, Calendar, ExternalLink, TrendingUp, Users, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-manthan-violet via-manthan-deep-violet to-manthan-violet text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description - Enhanced */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <img 
                src="/lovable-uploads/d760ab7f-a4ad-46bc-9dce-26c6d263cca7.png" 
                alt="Manthan AI Hackathon" 
                className="w-16 h-16 hover:rotate-12 transition-transform duration-300"
              />
              <div>
                <h3 className="font-mono font-bold text-3xl bg-gradient-to-r from-white to-manthan-lavender bg-clip-text text-transparent">
                  AI Manthan
                </h3>
                <p className="font-sans text-lg opacity-90">Where Thought Sparks Revolution</p>
              </div>
            </div>
            
            <p className="font-sans text-lg mb-6 opacity-90 leading-relaxed">
              Join us in shaping the future of artificial intelligence. AI Manthan is more than just a hackathon – it's a movement towards creating AI solutions that make the world a better place for everyone.
            </p>

            {/* Technology Tags */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 text-manthan-lavender px-4 py-2 rounded-full text-sm font-mono border border-white/30">
                  Deep Learning
                </span>
                <span className="bg-white/20 text-manthan-lavender px-4 py-2 rounded-full text-sm font-mono border border-white/30">
                  Big Data
                </span>
                <span className="bg-white/20 text-manthan-lavender px-4 py-2 rounded-full text-sm font-mono border border-white/30">
                  Neural Networks
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30">
                <span className="font-sans text-sm font-semibold">G</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30">
                <span className="font-sans text-sm font-semibold">L</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30">
                <span className="font-sans text-sm font-semibold">T</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-bold text-xl mb-8 text-manthan-lavender">Quick Links</h4>
            <div className="space-y-4">
              <a href="#problems" className="flex items-center text-white hover:text-manthan-lavender transition-colors group">
                <Zap className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-sans">Problem Statements</span>
              </a>
              <a href="#timeline" className="flex items-center text-white hover:text-manthan-lavender transition-colors group">
                <Calendar className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-sans">Timeline</span>
              </a>
              <a href="#schedule" className="flex items-center text-white hover:text-manthan-lavender transition-colors group">
                <Calendar className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-sans">Schedule</span>
              </a>
              <a href="#register" className="flex items-center text-white hover:text-manthan-lavender transition-colors group">
                <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-sans">Register</span>
              </a>
            </div>
          </div>

          {/* Event Info - Enhanced */}
          <div>
            <h4 className="font-mono font-bold text-xl mb-8 text-manthan-lavender">Event Info</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 mt-1 text-manthan-lavender flex-shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-white">March 30-31, 2024</p>
                  <p className="font-sans text-sm opacity-75">48 hours of innovation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-manthan-lavender flex-shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-white">Tech Innovation Hub, Mumbai</p>
                  <p className="font-sans text-sm opacity-75">Hybrid event format</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-manthan-lavender flex-shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-white">hello@aimanthan.com</p>
                  <p className="font-sans text-sm opacity-75">General inquiries</p>
                </div>
              </div>
            </div>

            {/* AI Impact Stats */}
            <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
              <h5 className="font-mono font-bold text-manthan-lavender mb-3">AI Impact</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">ML Models Expected:</span>
                  <span className="font-bold text-manthan-lavender">200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Data Points:</span>
                  <span className="font-bold text-manthan-lavender">1M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">AI Solutions:</span>
                  <span className="font-bold text-manthan-lavender">50+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Important Information */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-mono font-bold text-xl mb-6 text-manthan-lavender">Prizes & Recognition</h4>
              <ul className="font-sans space-y-3 text-white/90">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  1st Place: ₹2,00,000 + Mentorship Program
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  2nd Place: ₹1,50,000 + Industry Internships
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  3rd Place: ₹1,00,000 + Tech Swag Package
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-manthan-lavender rounded-full mr-3"></span>
                  Special category awards for innovation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  All participants receive certificates
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono font-bold text-xl mb-6 text-manthan-lavender">Important Guidelines</h4>
              <ul className="font-sans space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-manthan-lavender rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Registration deadline: March 25, 2024
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-manthan-lavender rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Teams must have 2-4 members with diverse skills
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-manthan-lavender rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  All skill levels welcome - beginners to experts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-manthan-lavender rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Complete meals and accommodation provided
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-manthan-lavender rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Bring your laptop, charger, and innovative mindset!
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Copyright */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-sans text-white/80 mb-4 md:mb-0">
              © 2024 AI Manthan. All rights reserved. Powered by AI, built with ❤️ for innovation.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-manthan-lavender hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-manthan-lavender hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-manthan-lavender hover:text-white transition-colors">AI Ethics Code</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
