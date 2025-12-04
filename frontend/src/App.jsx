import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenisScroll } from './hooks/useLenisScroll';
import NavBar from './components/Layout/NavBar';
import CursorAura from './components/Layout/CursorAura';
import ScrollToTopButton from './components/Layout/ScrollToTopButton';
import Hero from './components/Sections/Hero';
import Solutions from './components/Sections/Solutions';
import Pricing from './components/Sections/Pricing';
import About from './components/Sections/About';
import Team from './components/Sections/Team';
import Contact from './components/Sections/Contact';

export default function App() {
  useLenisScroll();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <CursorAura />
      <NavBar />
      <ScrollToTopButton />
      <AnimatePresence>
        {!loaded && <IntroLoader />}
      </AnimatePresence>
      <main className="relative">
        <Hero />
        <Solutions />
        <Pricing />
        <About />
        <Team />
        <Contact />
        <footer className="border-t border-white/5 bg-slate-950/95 py-6 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} AanganDevelopers. Crafted with care in the
          courtyard of ideas.
        </footer>
      </main>
    </>
  );
}

function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/80 px-10 py-8 text-center"
      >
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-amberSoft via-rose-200 to-indigoSoft shadow-lg shadow-amber-500/40" />
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-amberSoft">
            AanganDevelopers
          </p>
          <p className="mt-1 text-sm text-slate-200">
            Where your idea finds its home.
          </p>
        </div>
        <motion.div
          className="mt-2 h-1.5 w-32 rounded-full bg-slate-800"
          initial={{ width: 0 }}
          animate={{ width: '8rem' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="h-full w-1/3 rounded-full bg-gradient-to-r from-amberSoft to-indigoSoft"
            animate={{ x: ['0%', '200%'] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}


