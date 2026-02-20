import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'all-projects', label: 'Our Work' },
  { id: 'about', label: 'About' },
  { id: 'founder', label: 'Founder' },
  { id: 'contact', label: 'Contact' }
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('home');
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
      let current = 'home';

      sectionsElements.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? 'py-4 translate-y-2 px-4'
          : 'py-8 px-6'
          }`}
      >
        <div className={`mx-auto flex max-w-6xl items-center justify-between transition-all duration-500 ${scrolled
          ? 'bg-site-bg/80 backdrop-blur-xl border border-site-fg/5 rounded-full px-8 py-3 shadow-premium'
          : 'bg-transparent'
          }`}>
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo('home')}
            className="group flex items-center gap-2"
          >
            <span className="font-serif text-2xl tracking-tighter text-site-fg">
              Aangan<span className="italic text-accent-orange">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollTo(section.id)}
                className="group relative"
              >
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${activeSection === section.id
                  ? 'text-site-fg'
                  : 'text-site-fg/40 hover:text-site-fg/70'
                  }`}>
                  {section.label}
                </span>
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 h-px w-full bg-accent-orange"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-site-fg transition-all hover:gap-3 md:flex"
            >
              Start a project
              <ArrowRight size={14} className="text-accent-orange" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-site-fg/5 bg-site-fg/5 text-site-fg md:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-site-bg px-6 pt-32 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className="text-left"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-site-fg/40">
                    0{(sections.indexOf(section) + 1)}
                  </p>
                  <span className={`font-serif text-5xl tracking-tight ${activeSection === section.id ? 'text-site-fg' : 'text-site-fg/30'
                    }`}>
                    {section.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-20 border-t border-site-fg/5 pt-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-site-fg/40">
                Get in touch
              </p>
              <a href="mailto:hello@aangandevelopers.com" className="mt-4 block font-serif text-2xl italic text-site-fg underline decoration-accent-orange underline-offset-8">
                hello@aangandevelopers.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}