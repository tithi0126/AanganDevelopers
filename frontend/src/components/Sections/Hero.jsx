import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(251, 191, 36, 0.15), transparent 50%),
                      radial-gradient(circle at ${100 - mousePosition.x * 100}% ${100 - mousePosition.y * 100}%, rgba(99, 102, 241, 0.1), transparent 50%)`
        }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]" />
      
      {/* Floating Particles */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-amber-400/20"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div> */}

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-24 md:flex-row md:items-center">
        <div className="flex-1 space-y-8">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block"
          >
            <span className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-slate-900/60 to-slate-900/30 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-lg">
              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-400"
                />
                Aangan — a courtyard for ideas, collaboration, and growth.
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-balance text-4xl font-bold leading-tight tracking-tight text-slate-50 md:text-7xl"
            >
              Where your idea
              <motion.span 
                className="block bg-gradient-to-r from-amber-400 via-rose-300 to-indigo-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                finds its home.
              </motion.span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative"
            >
              <motion.p
                className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                We transform your ideas into powerful digital experiences through innovative design, smart development, and technology that truly understands your vision.
              </motion.p>
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 w-24 bg-gradient-to-r from-amber-400/50 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: '6rem' }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-amber-500/70 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start your project</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
              {/* Shine effect */}
              <motion.span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ translateX: ['100%', '100%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                  times: [0, 0.5, 1]
                }}
              />
            </motion.a>

            <motion.a
              href="#solutions"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-8 py-3.5 text-sm font-medium text-slate-100 backdrop-blur-lg transition-all duration-300 hover:border-amber-400/40 hover:text-amber-300 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View our work</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Stats / Highlights */}
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[
              { label: 'Full-stack', value: 'Partners' },
              { label: 'For founders', value: '& product teams' },
              { label: 'Web & SaaS', value: 'Development' },
              { label: 'AI-native', value: 'Products' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-amber-400/20 hover:bg-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="text-xs font-medium text-slate-400">{item.label}</div>
                <div className="text-sm font-semibold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>

        {/* Right Side Card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 flex-1 md:mt-0"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-6 backdrop-blur-xl">
            {/* Card Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Glow Border */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-amber-400/20 via-transparent to-indigo-400/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
            
            <div className="relative">
              {/* Card Header */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">Product journey</h3>
                  <p className="text-sm text-slate-400">From concept to scale</p>
                </div>
                {/* <span className="rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur">
                  End-to-end
                </span> */}
              </div>

              {/* Journey Steps */}
              <div className="space-y-4">
                <JourneyStep
                  step={1}
                  label="Ideate"
                  description="We co-design your courtyard — clarifying vision, users, and outcomes."
                  // progress={33}
                  color="from-amber-400 to-amber-300"
                  delay={0.1}
                />
                <JourneyStep
                  step={2}
                  label="Build"
                  description="Rapid, reliable execution with modern stacks and product thinking."
                  // progress={66}
                  color="from-rose-400 to-rose-300"
                  delay={0.2}
                />
                <JourneyStep
                  step={3}
                  label="Scale"
                  description="Architecture, analytics, and iteration to grow your product home."
                  // progress={100}
                  color="from-indigo-400 to-indigo-300"
                  delay={0.3}
                />
              </div>

              {/* Card Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-sm"
              >
                <div>
                  <span className="text-slate-400">Designed for</span>
                  <span className="ml-2 font-medium text-slate-100">calm, confident launches.</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  {['MERN', 'React Native', 'AI'].map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-sm text-slate-400"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div> */}
    </section>
  );
}

function JourneyStep({ step, label, description, progress, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="group relative rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/40 to-slate-900/20 p-4 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-slate-900/60"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-slate-800 to-slate-900">
            <span className="text-sm font-semibold text-slate-300">{step}</span>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-100">{label}</h4>
            <p className="text-xs text-slate-400">{description}</p>
          </div>
        </div>
        {/* <span className="text-xs font-medium text-slate-300">{progress}%</span> */}
      </div>
      
      {/* <div className="relative h-2 overflow-hidden rounded-full bg-slate-800"> */}
        {/* <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: 'easeOut', delay: delay + 0.2 }}
          className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${color}`}
        /> */}
        {/* Progress glow */}
        {/* <motion.div
          className="absolute top-0 h-full bg-white/20 blur"
          initial={{ width: 0, left: 0 }}
          whileInView={{ 
            width: ['0%', '100%', '0%'],
            left: ['0%', '100%', '100%']
          }}
          viewport={{ once: true }}
          transition={{ 
            duration: 2, 
            delay: delay + 0.5,
            times: [0, 0.5, 1]
          }}
        /> */}
      {/* </div> */}
    </motion.div>
  );
}