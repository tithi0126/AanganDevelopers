import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CursorAura() {
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 100);
      mouseY.set(e.clientY - 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[100] h-48 w-48 rounded-full bg-gradient-to-tr from-accent-orange/10 to-accent-purple/10 blur-3xl"
    />
  );
}


