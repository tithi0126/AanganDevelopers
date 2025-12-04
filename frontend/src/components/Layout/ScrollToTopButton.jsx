import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setVisible(y > 280);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/90 text-amberSoft shadow-lg shadow-slate-900/70 ring-1 ring-white/10 backdrop-blur hover:-translate-y-0.5 hover:bg-slate-900 hover:ring-amberSoft/60"
          aria-label="Scroll back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-8 w-8"
            aria-hidden="true"
          >
            <path
              d="M12 5l-6 6h4v8h4v-8h4z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}


