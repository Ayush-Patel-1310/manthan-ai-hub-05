
import { Mail, MapPin, Calendar, Zap, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-mono font-bold text-2xl">M</span>
              </div>
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

            {/* Technology Tags
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
            </div> */}

            Social Links
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
              <a href="#register" className="flex items-center text-white hover:text-manthan-lavender transition-colors group">
                <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-sans">Register</span>
              </a>
              {/* <a href="#schedule" className="flex items-center text-white hover:text-manthan-lavender transition-colors group">
                <Calendar className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-sans">Schedule</span>
              </a> */}
            </div>
          </div>

          {/* Event Info */}
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
            {/* <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
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
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-sans text-white/80 mb-4 md:mb-0">
              © 2024 AI Manthan. All rights reserved. Powered by AI, built with ❤️ by AtliQ.
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
