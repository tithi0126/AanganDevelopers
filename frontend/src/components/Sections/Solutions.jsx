// import { motion } from 'framer-motion';

// const solutions = [
//   {
//     title: 'Custom Web Development',
//     blurb: 'Modern, performant web apps with a calm, considered UX.',
//     tags: ['MERN', 'Next.js', 'SPA'],
//     accent: 'from-amberSoft to-rose-300'
//   },
//   {
//     title: 'Mobile App Development',
//     blurb: 'Cross-platform experiences that feel at home on every device.',
//     tags: ['React Native', 'Expo'],
//     accent: 'from-indigoSoft to-sky-400'
//   },
//   {
//     title: 'AI Integration',
//     blurb: 'Transform workflows with intelligent assistants and automations.',
//     tags: ['OpenAI', 'LangChain', 'RAG'],
//     accent: 'from-emerald-400 to-teal-300'
//   },
//   {
//     title: 'SaaS Development',
//     blurb: 'From billing to onboarding, we shape subscription-ready products.',
//     tags: ['Multi-tenant', 'Stripe', 'RBAC'],
//     accent: 'from-violet-400 to-indigoSoft'
//   },
//   {
//     title: 'UI/UX Design',
//     blurb: 'Interfaces that invite people in and keep them exploring.',
//     tags: ['Design systems', 'Prototyping'],
//     accent: 'from-rose-300 to-amberSoft'
//   },
//   {
//     title: 'MVP Launch Systems',
//     blurb: 'Validate fast with a focused, lovable first version.',
//     tags: ['Scoped roadmap', 'Lean launches'],
//     accent: 'from-sky-400 to-emerald-300'
//   }
// ];

// export default function Solutions() {
//   return (
//     <section
//       id="solutions"
//       className="relative border-t border-white/5 bg-slate-950/95 py-20"
//     >
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.16),transparent_55%)]" />
//       <div className="relative mx-auto max-w-6xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.7 }}
//           className="max-w-2xl space-y-3"
//         >
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amberSoft">
//             Solutions
//           </p>
//           <h2 className="text-2xl font-semibold text-slate-50 md:text-4xl">
//             A courtyard of capabilities — from idea to scale.
//           </h2>
//           <p className="text-sm text-slate-300 md:text-base">
//             We assemble the right mix of strategy, design, and engineering to
//             shape digital homes your users return to — again and again.
//           </p>
//         </motion.div>

//         <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {solutions.map((solution, index) => (
//             <motion.article
//               key={solution.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: index * 0.06 }}
//               whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
//               className="glass relative flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/70 p-5"
//             >
//               <div>
//                 <div
//                   className={`mb-4 inline-flex rounded-full bg-gradient-to-r ${solution.accent} px-[0.6rem] py-[0.16rem] text-[11px] font-medium text-slate-950`}
//                 >
//                   {solution.title}
//                 </div>
//                 <p className="text-sm text-slate-200">{solution.blurb}</p>
//               </div>

//               <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300">
//                 <div className="flex flex-wrap gap-1.5">
//                   {solution.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <span className="text-slate-500">
//                   From discovery to ongoing iteration.
//                 </span>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from 'framer-motion';
import { useState } from 'react';

const solutions = [
  {
    title: 'Custom Web Development',
    blurb: 'Modern, performant web apps with a calm, considered UX.',
    description: 'We build responsive, scalable web applications using the latest technologies with focus on performance, accessibility, and user experience.',
    tags: ['MERN', 'Next.js', 'SPA', 'TypeScript', 'Tailwind'],
    accent: 'from-amber-400 to-orange-400',
    // icon: '🌐',
    features: ['Full-stack development', 'Real-time features', 'Progressive Web Apps', 'Performance optimization']
  },
  {
    title: 'Mobile App Development',
    blurb: 'Cross-platform experiences that feel at home on every device.',
    description: 'Native-quality mobile applications that work seamlessly across iOS and Android with a single codebase.',
    tags: ['React Native', 'Expo', 'iOS', 'Android'],
    accent: 'from-indigo-400 to-purple-400',
    // icon: '📱',
    features: ['Cross-platform', 'Native performance', 'App Store deployment', 'Push notifications']
  },
  // {
  //   title: 'AI Integration',
  //   blurb: 'Transform workflows with intelligent assistants and automations.',
  //   description: 'Integrate cutting-edge AI capabilities into your products to automate tasks and provide intelligent insights.',
  //   tags: ['OpenAI', 'LangChain', 'RAG', 'Custom Models'],
  //   accent: 'from-emerald-400 to-teal-400',
  //   icon: '🤖',
  //   features: ['Chat assistants', 'Document analysis', 'Predictive analytics', 'Automation workflows']
  // },
  {
    title: 'SaaS Development',
    blurb: 'From billing to onboarding, we shape subscription-ready products.',
    description: 'End-to-end SaaS platforms with multi-tenancy, subscription management, and enterprise-ready features.',
    tags: ['Multi-tenant', 'Stripe', 'RBAC', 'Analytics'],
    accent: 'from-violet-400 to-fuchsia-400',
    // icon: '🚀',
    features: ['Subscription billing', 'User management', 'Data isolation', 'Scalable infrastructure']
  },
  {
    title: 'UI/UX Design',
    blurb: 'Interfaces that invite people in and keep them exploring.',
    description: 'User-centered design that combines aesthetics with functionality to create delightful experiences.',
    tags: ['Design systems', 'Prototyping', 'User testing', 'Accessibility'],
    accent: 'from-rose-400 to-pink-400',
    // icon: '🎨',
    features: ['User research', 'Wireframing', 'Interactive prototypes', 'Design systems']
  },
  // {
  //   title: 'MVP Launch Systems',
  //   blurb: 'Validate fast with a focused, lovable first version.',
  //   description: 'Rapidly build and launch minimum viable products to test market fit and gather user feedback.',
  //   tags: ['Scoped roadmap', 'Lean launches', 'User feedback', 'Iterative'],
  //   accent: 'from-sky-400 to-cyan-400',
  //   // icon: '⚡',
  //   features: ['Market validation', 'Core features only', 'Fast deployment', 'Feedback integration']
  // }
];

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="solutions"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-slate-950 to-slate-900 py-24"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-amber-400/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-indigo-400/5 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Our Expertise
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-slate-50 md:text-5x2"
          >
            A courtyard of capabilities
            <span className="block bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 bg-clip-text text-transparent">
              from idea to scale.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-slate-300"
          >
            We assemble the right mix of strategy, design, and engineering to
            shape digital homes your users return to — again and again.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveSolution(activeSolution === index ? null : index)}
              className="group relative cursor-pointer"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${solution.accent} opacity-0 blur transition-all duration-500 group-hover:opacity-20`} />
              
              {/* Main Card */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-white/20">
                {/* Icon and Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {/* <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/10 text-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {solution.icon}
                    </motion.div> */}
                    <div>
                      <div className={`inline-flex rounded-full bg-gradient-to-r ${solution.accent} px-3 py-1 text-xs font-semibold text-slate-950`}>
                        {solution.title}
                      </div>
                      <motion.p 
                        className="mt-2 text-sm text-slate-200"
                        initial={false}
                        animate={{ 
                          height: activeSolution === index ? 'auto' : '3.6em',
                          overflow: 'hidden'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {activeSolution === index ? solution.description : solution.blurb}
                      </motion.p>
                    </div>
                  </div>
                  
                  {/* Expand Button */}
                  <motion.button
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ rotate: activeSolution === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                </div>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderColor: 'rgba(255,255,255,0.2)'
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: activeSolution === index ? 'auto' : 0,
                    opacity: activeSolution === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/5 pt-4">
                    <h4 className="mb-3 text-sm font-semibold text-slate-200">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ 
                            opacity: activeSolution === index ? 1 : 0,
                            x: activeSolution === index ? 0 : -10
                          }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-2 text-sm text-slate-300"
                        >
                          <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${solution.accent}`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeSolution === index ? 1 : 0 }}
                      className="mt-4 pt-4 border-t border-white/5"
                    >
                      <button className="w-full rounded-lg bg-gradient-to-r from-white/5 to-white/10 py-2.5 text-sm font-medium text-slate-200 transition-all hover:from-white/10 hover:to-white/20">
                        Learn more about {solution.title.toLowerCase()}
                      </button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Progress Bar (Visual Effect) */}
                <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${solution.accent}`}
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.3,
                      duration: 1.5,
                      ease: "easeOut"
                    }}
                  />
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-slate-400 opacity-0 transition-opacity group-hover:opacity-100">
                  {/* <span>Click to expand</span> */}
                  {/* <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-xl">
            <h3 className="mb-3 text-xl font-semibold text-slate-50">
              Ready to build something amazing?
            </h3>
            <p className="mb-6 text-slate-300">
              Let's discuss how we can help bring your vision to life with the right mix of expertise.
            </p>
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-orange-400 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Project</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}