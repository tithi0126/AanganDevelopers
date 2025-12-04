import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorAura() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-10 h-44 w-44 rounded-full bg-gradient-to-tr from-amberSoft/15 to-indigoSoft/10 blur-3xl"
      animate={{ x: pos.x - 96, y: pos.y - 96 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.4 }}
    />
  );
}


