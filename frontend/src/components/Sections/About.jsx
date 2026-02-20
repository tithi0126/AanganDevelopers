import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MovingText from '../Common/MovingText';

const values = [
  {
    title: 'Collaborative Spirit',
    description: 'In traditional Indian homes, the aangan is the heart where life unfolds. We bring this same nurturing energy to every project.'
  },
  {
    title: 'Intentional Craft',
    description: 'We believe great products come from teams who care deeply about detail. Every line of code is written with purpose.'
  },
  {
    title: 'Absolute Transparency',
    description: 'No black boxes. We work alongside you with clear communication and complete visibility into our process.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Left: Narrative */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                The Narrative
              </p>
              <MovingText
                text="A studio built on shared space."
                className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.1]"
                range={1.5}
                duration={3}
                delayOffset={0.2}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-lg font-medium leading-relaxed text-foreground/70"
            >
              <p>
                Aangan isn&apos;t just a name; it&apos;s a philosophy. Traditionally, the aangan is the central courtyard where conversations happen and ideas take shape.
              </p>
              <p>
                We&apos;re a small, senior team of engineers and designers who believe that the best digital products are born from this kind of open, honest collaboration.
              </p>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="group flex items-center gap-3 text-sm font-bold tracking-tight text-foreground"
                >
                  Work with us
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Values */}
          <div className="lg:pt-24">
            <div className="space-y-16">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="group border-l border-foreground/10 pl-8 space-y-4"
                >
                  <h3 className="text-xl font-bold tracking-tight">{v.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-foreground/50 max-w-sm">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}