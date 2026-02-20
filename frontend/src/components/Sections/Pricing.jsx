import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    subtitle: 'Small websites & quick launches',
    price: '₹15k – ₹25k',
    description: 'Perfect for landing pages, portfolios, or early-stage validation where speed and quality are key.',
    features: [
      '1–3 page clean website',
      'Custom UI (no templates)',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO foundation',
      'Deployed to Vercel / Netlify'
    ],
    accent: 'bg-accent-yellow/10 text-accent-yellow'
  },
  {
    name: 'Growth',
    subtitle: 'Business websites & dashboards',
    price: '₹50k – ₹75k',
    description: 'For growing teams requiring robust systems, authentication, and custom data management.',
    featured: true,
    features: [
      'Business website or dashboard',
      'Authentication & login system',
      'Admin panel & custom modules',
      'API & Payment integrations',
      'Scalable Backend (Node.js)',
      '2 months post-launch support'
    ],
    accent: 'bg-accent-purple/10 text-accent-purple'
  },
  {
    name: 'Scale',
    subtitle: 'Full SaaS or custom platforms',
    price: '₹1L – ₹2.5L',
    description: 'Complete high-performance platforms with complex architectures and long-term scaling in mind.',
    features: [
      'Full multi-user SaaS system',
      'Complex data architectures',
      'Subscription & billing systems',
      'Cloud DevOps & Security',
      'Product partnership model',
      'Priority dedicated support'
    ],
    accent: 'bg-accent-orange/10 text-accent-orange'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl space-y-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
            Investment
          </p>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.1]">
            Clear, calm, and <span className="italic">transparent.</span>
          </h2>
          <p className="max-w-xl text-lg font-medium leading-relaxed text-foreground/70">
            Every project begins with a discovery session to align on vision. We then tailor scope and investment to your specific needs.
          </p>
        </div>

        <div className="grid gap-1 px-1 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative flex flex-col justify-between border border-foreground/5 p-10 transition-colors hover:bg-foreground/[0.02] ${tier.featured ? 'bg-foreground/[0.01]' : ''
                }`}
            >
              <div className="space-y-10">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                    {tier.name}
                  </p>
                  <h3 className="font-serif text-4xl tracking-tight text-foreground">
                    {tier.price}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-foreground/50">
                    {tier.description}
                  </p>
                </div>

                <div className="h-px w-full bg-foreground/5" />

                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-foreground/60">
                      <Check size={14} className="text-accent-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <a
                  href="#contact"
                  className={`flex w-full items-center justify-center gap-3 rounded-full py-4 text-[10px] font-bold uppercase tracking-widest transition-all ${tier.featured
                      ? 'bg-foreground text-background hover:bg-foreground/90'
                      : 'border border-foreground/10 text-foreground hover:bg-foreground/5'
                    }`}
                >
                  Discuss {tier.name}
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}