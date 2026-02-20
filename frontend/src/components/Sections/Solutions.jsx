import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Smartphone, Cpu, Box, Layout, Zap, ArrowRight } from 'lucide-react';
import MovingText from '../Common/MovingText';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: 'Custom Web Products',
    icon: <Layers size={24} />,
    blurb: 'High-performance web applications built with React and the MERN stack.',
    color: 'bg-accent-yellow/10 text-accent-yellow',
  },
  {
    title: 'Mobile Experiences',
    icon: <Smartphone size={24} />,
    blurb: 'Native iOS and Android apps that provide seamless user experiences.',
    color: 'bg-accent-purple/10 text-accent-purple',
  },
  {
    title: 'AI Native Systems',
    icon: <Cpu size={24} />,
    blurb: 'Integrating intelligent agents and automation into your existing workflows.',
    color: 'bg-accent-orange/10 text-accent-orange',
  },
  {
    title: 'SaaS Architecture',
    icon: <Box size={24} />,
    blurb: 'Scaling your business with multi-tenant, cloud-native platforms.',
    color: 'bg-accent-yellow/10 text-accent-yellow',
  },
  {
    title: 'Design Systems',
    icon: <Layout size={24} />,
    blurb: 'Crafting beautiful, consistent, and user-centric interfaces.',
    color: 'bg-accent-purple/10 text-accent-purple',
  },
  {
    title: 'MVP Engineering',
    icon: <Zap size={24} />,
    blurb: 'Launching focused, lovable products fast to validate your market.',
    color: 'bg-accent-orange/10 text-accent-orange',
  }
];

export default function Solutions() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            delay: i % 3 * 0.1
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" className="relative z-20 py-32 px-6 bg-site-bg" ref={containerRef}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40"
          >
            Capabilities
          </motion.p>
          <MovingText
            text="A studio specialized in digital craftsmanship."
            className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.1]"
            range={1.5}
            duration={3}
            delayOffset={0.15}
          />
        </div>

        <div className="grid gap-1 px-1 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="group relative flex flex-col justify-between border border-foreground/5 p-10 transition-colors hover:bg-foreground/[0.02]"
            >
              <div className="space-y-8">
                <div className={`inline-flex p-3 rounded-2xl ${item.color}`}>
                  {item.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-foreground/50">
                    {item.blurb}
                  </p>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/30 opacity-0 transition-opacity group-hover:opacity-100">
                Explore service <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}