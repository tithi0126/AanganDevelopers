import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { useLenisScroll } from './hooks/useLenisScroll';
import NavBar from './components/Layout/NavBar';
import CursorAura from './components/Layout/CursorAura';
import Hero from './components/Sections/Hero';
import Solutions from './components/Sections/Solutions';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import HorizontalScroll from './components/Sections/HorizontalScroll';
import Values from './components/Sections/Values';
import ProjectGrid from './components/Sections/ProjectGrid';
import FounderSection from './components/Sections/FounderSection';
import ReviewSection from './components/Sections/ReviewSection';
import NotFound from './pages/NotFound';

export default function App() {
  useLenisScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative">
      <div className="noise" />
      <CursorAura />
      <NavBar />

      <AnimatePresence mode="wait">
        {isLoading && <IntroLoader key="loader" />}
      </AnimatePresence>

      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="py-20 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-site-fg/30">
            © {new Date().getFullYear()} Aangan Developers — Crafted in the courtyard of ideas.
          </p>
        </footer>
      </main>
    </div>
  );
}

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <HorizontalScroll />
      <section id="values" className="relative z-10">
        <Values />
      </section>
      <section id="solutions" className="relative z-20">
        <Solutions />
      </section>
      <div className="relative z-30">
        <ProjectGrid />
      </div>
      <section id="about" className="relative z-40 bg-site-bg">
        <About />
      </section>
      <ReviewSection />
      <div className="relative z-50 bg-site-bg">
        <FounderSection />
      </div>
      <section id="contact" className="relative z-[60] bg-site-bg">
        <Contact />
      </section>
    </>
  );
}

function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-site-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <img
            src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/6720fb304fc9e5207aa650cd_01_work-call-1600px-transparent.gif"
            loading="eager"
            alt="happy person"
            className="intro-img w-32 h-32 md:w-48 md:h-48 object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2 className="font-serif text-4xl md:text-6xl tracking-tighter uppercase">
            Aangan<span className="italic text-accent-orange font-serif">.</span>
          </h2>
          <div className="h-px w-12 bg-site-fg/10 mx-auto" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-site-fg/40">
            Digital Craftsmanship
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}



