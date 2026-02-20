import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MovingText from '../Common/MovingText';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-8 md:px-16 pt-32 pb-20"
    >
      {/* Decorative Assets */}
      <motion.img
        src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/671f8d4e3a8669f69f00d343_Static-5-yellow.gif"
        loading="eager"
        alt=""
        className="bus-dec1 pointer-events-none absolute left-[5%] top-[20%] z-0 w-24 md:w-40"
        animate={{
          y: [0, -15, 0],
          rotate: [-94, -92, -94]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/671f8d4e8ccdbf0c35c33483_Static-1-purple.gif"
        loading="eager"
        alt=""
        className="bus-dec2 pointer-events-none absolute right-[5%] top-[15%] z-0 w-28 md:w-48"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/671f8d4f416c08af9ec75729_Static-3-red.gif"
        loading="eager"
        alt=""
        className="bus-dec3 pointer-events-none absolute left-[10%] bottom-[15%] z-0 w-24 md:w-32"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Two-column layout */}
      <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT — Text Content */}
        <div className="flex flex-col items-start text-left space-y-8 md:w-1/2">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-foreground/60">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
              Aangan Developers — Studio
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <MovingText
                  text="Where your idea"
                  className="font-serif text-[11vw] leading-[0.9] tracking-tight md:text-[7vw] lg:text-[6vw] uppercase"
                  range={2}
                  duration={2.5}
                  delayOffset={0.3}
                />
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <MovingText
                  text="finds its home."
                  className="font-serif text-[11vw] leading-[0.9] tracking-tight md:text-[7vw] lg:text-[6vw] uppercase italic text-accent-orange"
                  baseRotation={0}
                  range={2}
                  duration={2.8}
                  delayOffset={0.3}
                />
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="max-w-md text-base md:text-lg font-medium leading-relaxed text-foreground/70"
          >
            We build high-fidelity digital products for startups and founders who demand excellence in design and technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary">
              Start a project
            </motion.a>
            <motion.a href="#solutions" whileHover={{ y: -2 }} className="btn-secondary">
              View our work
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT — GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center md:w-1/2"
        >
          <img
            src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/6720fb304fc9e5207aa650cd_01_work-call-1600px-transparent.gif"
            loading="eager"
            alt="happy person"
            className="intro-img w-64 h-64 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30"
      >
        Scroll to discover
      </motion.div>
    </section>
  );
}