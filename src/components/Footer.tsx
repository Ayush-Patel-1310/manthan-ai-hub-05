
import { Mail, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-manthan-violet to-manthan-deep-violet text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/d760ab7f-a4ad-46bc-9dce-26c6d263cca7.png" 
                alt="Manthan AI Hackathon" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-mono font-bold text-2xl">Manthan</h3>
                <p className="font-sans text-sm opacity-80">AI Hackathon 2024</p>
              </div>
            </div>
            <p className="font-sans text-lg mb-4 opacity-90">
              "AI Manthan: Where Thought Sparks Revolution"
            </p>
            <p className="font-sans opacity-75 leading-relaxed">
              Join us for 48 hours of intense coding, innovative thinking, and revolutionary AI solutions. 
              Connect with brilliant minds, learn from industry experts, and build the future with artificial intelligence.
            </p>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="font-mono font-bold text-lg mb-6">Event Details</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 mt-1 text-manthan-lavender" />
                <div>
                  <p className="font-sans font-medium">December 15-17, 2024</p>
                  <p className="font-sans text-sm opacity-75">48 hours of innovation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-manthan-lavender" />
                <div>
                  <p className="font-sans font-medium">Tech Innovation Center</p>
                  <p className="font-sans text-sm opacity-75">Silicon Valley Campus</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ExternalLink className="w-5 h-5 mt-1 text-manthan-lavender" />
                <div>
                  <p className="font-sans font-medium">Hybrid Event</p>
                  <p className="font-sans text-sm opacity-75">In-person & virtual participation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-mono font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-manthan-lavender" />
                <div>
                  <p className="font-sans font-medium">info@manthan-ai.com</p>
                  <p className="font-sans text-sm opacity-75">General inquiries</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-manthan-lavender" />
                <div>
                  <p className="font-sans font-medium">support@manthan-ai.com</p>
                  <p className="font-sans text-sm opacity-75">Technical support</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-mono font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-manthan-lavender hover:text-white transition-colors">
                  <span className="font-sans text-sm">Twitter</span>
                </a>
                <a href="#" className="text-manthan-lavender hover:text-white transition-colors">
                  <span className="font-sans text-sm">LinkedIn</span>
                </a>
                <a href="#" className="text-manthan-lavender hover:text-white transition-colors">
                  <span className="font-sans text-sm">Discord</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono font-bold text-lg mb-4">Important Reminders</h4>
              <ul className="font-sans space-y-2 opacity-90">
                <li>• Registration deadline: December 10, 2024</li>
                <li>• Teams must have 2-4 members</li>
                <li>• All skill levels welcome</li>
                <li>• Meals and accommodation provided</li>
                <li>• Bring your laptop and enthusiasm!</li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-bold text-lg mb-4">Prizes & Recognition</h4>
              <ul className="font-sans space-y-2 opacity-90">
                <li>• 1st Place: $25,000 + Mentorship Program</li>
                <li>• 2nd Place: $15,000 + Industry Internships</li>
                <li>• 3rd Place: $10,000 + Tech Swag Package</li>
                <li>• Special awards for innovation categories</li>
                <li>• All participants receive certificates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="font-sans opacity-75">
            © 2024 Manthan AI Hackathon. All rights reserved. 
            <span className="mx-2">|</span>
            Made with ❤️ for the AI community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
