import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'Mission', href: '#mission' },
  { label: 'Team', href: '#team' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effects (sticky header style + active section tracking)
  useEffect(() => {
    const handleScroll = () => {
      // 1. Header style
      setIsScrolled(window.scrollY > 20);

      // 2. Active section tracking
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // With custom JS scrolling, we check if the top of the section is near the offset area
          const offset = 150; // Threshold
          if (rect.top <= offset && rect.bottom >= offset) {
            current = section;
            break;
          }
        }
      }
      
      // Fallback for contact section at bottom
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
         current = 'contact'; // Assuming contact is at bottom
      }

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Smooth Scroll Logic
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Adjust this value to match your header height + desired padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen 
          ? 'bg-dstl-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg py-2' 
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  isActive ? 'text-dstl-accent' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-dstl-accent rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                )}
              </a>
            );
          })}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-2.5 text-sm font-bold text-dstl-dark bg-dstl-accent hover:bg-cyan-300 rounded-full transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-dstl-navy border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl h-screen">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className={`text-lg font-medium ${
                activeSection === item.href.substring(1) ? 'text-dstl-accent' : 'text-slate-300'
              }`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-4 px-6 py-4 text-center text-dstl-dark bg-dstl-accent font-bold rounded-lg shadow-lg"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};