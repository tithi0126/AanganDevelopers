import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About' },
  // { id: 'team', label: 'Our Team' },
  { id: 'contact', label: 'Contact' }
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sectionsElements = document.querySelectorAll('section[id]');
      let current = 'hero';
      
      sectionsElements.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.id;
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.85)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
          borderBottom: scrolled ? '1px solid rgba(148, 163, 184, 0.1)' : '1px solid rgba(148, 163, 184, 0.05)'
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-40 transition-all duration-300"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3"
          >
            <img src="/bcard.png" alt="AanganDevelopers Logo" className="w-48" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 text-base font-medium text-slate-200 md:flex">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                type="button"
                onClick={() => scrollTo(section.id)}
                className="relative px-6 py-2.5 rounded-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`transition-colors duration-300 ${
                  activeSection === section.id 
                    ? 'text-amber-400 font-semibold text-lg' 
                    : 'text-slate-300 hover:text-slate-100 text-base'
                }`}>
                  {section.label}
                </span>
                
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-600/5 rounded-lg border border-amber-500/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2.5 text-slate-300 hover:bg-slate-800/50 md:hidden"
              aria-label="Toggle menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop CTA Button */}
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="hidden rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 px-8 py-3 text-base font-semibold text-black shadow-lg shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-amber-500/50 hover:shadow-xl md:inline-flex items-center gap-3 group"
            >
              <span>Start your project</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : '100%',
          pointerEvents: mobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-30 md:hidden"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/95 backdrop-blur-lg"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-slate-900/95 backdrop-blur-xl border-l border-slate-800">
          <div className="flex h-full flex-col p-8">
            {/* Close Button */}
            <div className="flex justify-end mb-12">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                aria-label="Close menu"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className="py-5 text-left"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-1.5 w-12 rounded-full transition-all duration-300 ${
                      activeSection === section.id 
                        ? 'bg-gradient-to-r from-amber-400 to-amber-300' 
                        : 'bg-slate-700'
                    }`} />
                    <span className={`text-2xl font-medium transition-colors duration-300 ${
                      activeSection === section.id 
                        ? 'text-amber-400' 
                        : 'text-slate-300'
                    }`}>
                      {section.label}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="mt-auto pt-8">
              <button
                type="button"
                onClick={() => {
                  scrollTo('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 px-10 py-5 text-xl font-semibold text-black shadow-lg shadow-amber-500/30 transition-all duration-300 active:scale-95"
              >
                Start your project
              </button>
              
              {/* Contact Info */}
              <div className="mt-8 border-t border-slate-800 pt-8">
                <p className="text-lg text-slate-400 mb-3">Get in touch</p>
                <a 
                  href="mailto:support@aangandevelopers.com" 
                  className="text-xl text-amber-400 hover:text-amber-300 transition-colors"
                >
                  support@aangandevelopers.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}