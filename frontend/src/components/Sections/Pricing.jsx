import { motion } from 'framer-motion';

// const tiers = [
//   {
//     name: 'Starter',
//     subtitle: 'MVP websites & product teasers',
//     price: '₹2 Lakhs+',
//     originalPrice: '₹2,50,000',
//     highlight: 'Best for early validation',
//     features: [
//       'Single-page or small multi-page experience',
//       'Brand-aligned UI & copy support',
//       'Deployed to Vercel / Netlify',
//       'Analytics & basic SEO setup',
//       '1-month post-launch support',
//       'Mobile responsive design'
//     ]
//   },
//   {
//     name: 'Growth',
//     subtitle: 'Business applications & portals',
//     price: '₹6 Lakhs+',
//     originalPrice: '₹6,00,000',
//     highlight: 'Best for growing teams',
//     featured: true,
//     features: [
//       'Authentication & role-based access',
//       'Dashboard & admin panel',
//       'API integrations & automation',
//       'Design system & component library',
//       'Ongoing iteration windows',
//       '3-month support & maintenance'
//     ]
//   },
//   {
//     name: 'Scale',
//     subtitle: 'Full SaaS platforms',
//     price: 'Custom Quote',
//     originalPrice: 'Starting from ₹15 Lakhs',
//     highlight: 'Best for venture-backed products',
//     features: [
//       'Multi-tenant architecture',
//       'Usage-based billing & subscriptions',
//       'Performance & reliability focus',
//       'Product partnership & roadmap',
//       'Dedicated development team',
//       'Priority support & SLAs'
//     ]
//   }
// ];

const tiers = [
  {
    name: 'Starter',
    subtitle: 'Small websites & quick launches',
    price: '₹15,000 -₹25,000',
    originalPrice: 'Market Price ₹35,000',
    highlight: 'Best for simple websites',
    features: [
      '1–3 page clean website',
      'Custom UI (no templates)',
      'Mobile responsive design',
      'Contact form',
      'Basic SEO setup',
      'Deployed to Vercel / Netlify'
    ]
  },
  {
    name: 'Growth',
    subtitle: 'Business websites & dashboards',
    price: '₹50,000 – ₹75,000',
    originalPrice: 'Market Price ₹1,00,000',
    highlight: 'Best for growing businesses',
    featured: true,
    features: [
      'Business website or dashboard',
      'Authentication & login system',
      'Admin panel & custom modules',
      'API integrations (payment, email, etc.)',
      'Backend setup (Node.js + Database)',
      '1–2 months post-launch support'
    ]
  },
  {
    name: 'Scale',
    subtitle: 'Full SaaS or custom platforms',
    price: '₹1,00,000 - ₹2,50,000',
    originalPrice: 'Market Price ₹3,00,000',
    highlight: 'Best for full product development',
    features: [
      'Full backend + multi-user system',
      'Subscription & payments integration',
      'High-performance architecture',
      'Cloud deployment & DevOps',
      'Long-term product partnership',
      'Priority support & maintenance'
    ]
  }
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-slate-950 to-slate-900 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-60 w-60 rounded-full bg-gradient-to-r from-amber-400/10 to-transparent blur-3xl" />
        <div className="absolute bottom-40 right-1/4 h-60 w-60 rounded-full bg-gradient-to-r from-indigo-400/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-gradient-to-r from-amber-400/10 to-orange-400/10 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Transparent Pricing
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-slate-50 md:text-5x2"
          >
            Clear, calm, and
            <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
              transparent investment.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-300"
          >
            Every project starts with a shared courtyard — a structured discovery
            session — then we tailor scope and investment together.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              {tier.featured && (
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-amber-400/40 via-orange-400/20 to-amber-400/10 opacity-0 blur transition-all duration-500 group-hover:opacity-30" />
              )}
              
              {/* Main Card */}
              <div className={`relative h-full rounded-3xl border ${
                tier.featured 
                  ? 'border-amber-400/30 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl shadow-amber-500/20' 
                  : 'border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80'
              } p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-amber-400/40 group-hover:shadow-xl`}>
                
                {/* Featured Badge */}
                {tier.featured && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 px-4 py-1.5 shadow-lg shadow-amber-500/40">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-bold text-slate-950">Most Popular</span>
                    </div>
                  </motion.div>
                )}

                {/* Tier Header */}
                <div className="text-center">
                  <h3 className={`text-2xl font-bold ${
                    tier.featured ? 'text-amber-300' : 'text-slate-100'
                  }`}>
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">{tier.subtitle}</p>
                </div>

                {/* Pricing */}
                <div className="my-6 text-center">
                  <div className={`text-4xl font-bold ${
                    tier.featured ? 'text-amber-400' : 'text-slate-100'
                  }`}>
                    {tier.price}
                  </div>
                  {tier.originalPrice && (
                    <p className="mt-1 text-sm text-slate-400">{tier.originalPrice}</p>
                  )}
                  <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1">
                    <svg className="h-3 w-3 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium text-amber-300">{tier.highlight}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full ${
                        tier.featured 
                          ? 'bg-gradient-to-r from-amber-400/20 to-orange-400/20' 
                          : 'bg-white/5'
                      }`}>
                        <svg className={`h-2.5 w-2.5 ${
                          tier.featured ? 'text-amber-400' : 'text-slate-400'
                        }`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className={`text-sm ${
                        tier.featured ? 'text-slate-200' : 'text-slate-300'
                      }`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <a
                    href="#contact"
                    className={`group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      tier.featured
                        ? 'bg-gradient-to-r from-amber-500 to-orange-400 text-slate-950 shadow-lg shadow-amber-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/50'
                        : 'border border-white/15 bg-gradient-to-b from-white/5 to-white/10 text-slate-100 backdrop-blur-sm hover:border-amber-400/50 hover:text-amber-300 hover:shadow-lg'
                    }`}
                  >
                    <span>Discuss {tier.name} Tier</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    {tier.featured && (
                      <motion.div
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ 
                          translateX: ['100%', '100%']
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "linear"
                        }}
                      />
                    )}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-xl"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-400/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">Fixed Price</h4>
              </div>
              <p className="text-sm text-slate-300">Clear scope, predictable investment with milestone-based payments</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-400/20 to-purple-400/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">Fast Delivery</h4>
              </div>
              <p className="text-sm text-slate-300">Agile sprints ensure you see progress every 2 weeks</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400/20 to-teal-400/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">Post-Launch Support</h4>
              </div>
              <p className="text-sm text-slate-300">Dedicated support period included with every project</p>
            </div>
          </div>
        </motion.div> */}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="mx-auto max-w-2xl space-y-4">
            <p className="text-lg text-slate-300">
              Not sure which tier fits your needs? Let's schedule a free discovery call.
            </p>
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-b from-white/5 to-white/10 px-8 py-3.5 font-semibold text-slate-100 backdrop-blur-xl transition-all hover:border-amber-400/50 hover:text-amber-300 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Book Free Consultation</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}