
import { useState } from 'react';
import { Menu, X, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Problems', href: '#problems' },
    { name: 'Register', href: '#register' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInstructionsClick = () => {
    // You can customize this action as needed
    alert('Instructions: Welcome to Manthan AI Hackathon! Follow the registration steps, choose your AI challenge, and prepare for 48 hours of innovation.');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-manthan-lavender/20 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-manthan-violet via-manthan-deep-violet to-purple-600 rounded-2xl flex items-center justify-center hover:rotate-12 transition-transform duration-300 shadow-lg">
              <span className="text-white font-mono font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="font-mono font-bold text-xl text-manthan-deep-violet">
                Manthan
              </h1>
              <p className="text-xs text-manthan-dark-text font-sans">
                AI Hackathon
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-sans text-manthan-dark-text hover:text-manthan-violet transition-all duration-300 hover:scale-110 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-manthan-violet after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Instructions Button & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <Button
              onClick={handleInstructionsClick}
              className="bg-manthan-violet hover:bg-manthan-deep-violet text-white font-mono font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Info className="h-4 w-4 mr-2" />
            Instructions
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-manthan-lavender/20 animate-fade-in">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-sans text-manthan-dark-text hover:text-manthan-violet transition-all duration-300 text-left hover:translate-x-2 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
