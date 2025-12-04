// import { motion } from 'framer-motion';

// const timeline = [
//   {
//     label: 'The courtyard',
//     detail:
//       'In many homes, the aangan is where people gather — to share stories, ideas, and everyday life. We borrowed that energy for digital products.'
//   },
//   {
//     label: 'Our mission',
//     detail:
//       'Create product homes that feel welcoming, intuitive, and enduring — built on solid engineering and honest collaboration.'
//   },
//   {
//     label: 'How we work',
//     detail:
//       'Small senior teams, direct access to founders, and calm, transparent communication from kickoff to launch and beyond.'
//   }
// ];

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative border-t border-white/5 bg-slate-950/95 py-20"
//     >
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.88),transparent_65%)]" />
//       <div className="relative mx-auto max-w-6xl px-6">
//         <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.7 }}
//             className="space-y-4"
//           >
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amberSoft">
//               About
//             </p>
//             <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
//               Aangan is where ideas are nurtured into products.
//             </h2>
//             <p className="text-sm text-slate-300 md:text-base">
//               We&apos;re a studio shaped by engineers and designers who care deeply
//               about how products feel, not just how they function. For us, shipping
//               is only step one — the real work is helping your product feel like a
//               natural home for your users.
//             </p>
//             <p className="text-sm text-slate-300 md:text-base">
//               From early-stage founders to established teams, we create a shared
//               space where strategy, UX, and technology sit around the same table.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.7 }}
//             className="glass relative rounded-3xl border border-white/10 bg-slate-900/70 p-5"
//           >
//             <h3 className="text-sm font-semibold text-slate-100">
//               The Aangan narrative
//             </h3>
//             <p className="mt-1 text-[11px] text-slate-400">
//               A slow reveal of what we value and how we show up in your product
//               journey.
//             </p>
//             <div className="mt-5 space-y-4">
//               {timeline.map((item, index) => (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.5 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="flex gap-3"
//                 >
//                   <div className="mt-1.5 h-7 w-7 shrink-0 rounded-full bg-slate-900/90 ring-1 ring-white/10">
//                     <div className="m-1 h-full rounded-full bg-gradient-to-tr from-amberSoft to-indigoSoft" />
//                   </div>
//                   <div className="space-y-1">
//                     <p className="text-xs font-semibold text-slate-100">
//                       {item.label}
//                     </p>
//                     <p className="text-[11px] text-slate-400">{item.detail}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from 'framer-motion';
import { useState } from 'react';

const values = [
  {
    label: '',
    detail: 'In traditional Indian homes, the aangan is the heart — where families gather, stories are shared, and life unfolds. We bring this collaborative, nurturing energy to every digital product we build.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    label: '',
    detail: 'We believe great products come from teams who care deeply — about users, about craft, about impact. Every line of code, every design decision is made with intention and empathy.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    label: '',
    detail: 'No black boxes. We work alongside you with clear communication, regular demos, and complete visibility. Your product journey is our shared responsibility from day one.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

// const stats = [
//   { value: '2+', label: 'Projects Delivered' },
//   // { value: '₹2Cr+', label: 'Client Investment' },
//   { value: '99%', label: 'Satisfaction Rate' },
//   { value: '24/7', label: 'Support Available' }
// ];

const stats = [
  { value: 'Quality', label: 'First Approach' },
  { value: 'Modern', label: 'Tech Stack' },
  { value: 'Scalable', label: 'Architecture' },
  { value: '24/7', label: 'Support Available' }
];

export default function About() {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-slate-950 to-slate-900 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-amber-400/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 right-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-400/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-gradient-to-r from-amber-400/10 to-orange-400/10 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Our Story & Values
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-slate-50 md:text-5xl"
          >
            Where ideas find their
            <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
              nurturing ground
            </span>
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                We're a studio shaped by engineers and designers who care deeply about how products <span className="font-semibold text-amber-300">feel</span>, not just how they function. For us, shipping is only step one — the real work is helping your product feel like a natural home for your users.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                From early-stage founders to established teams, we create a shared space where strategy, UX, and technology sit around the same table — just like conversations in a traditional Indian courtyard.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-4 backdrop-blur-sm transition-all hover:border-amber-400/30"
                >
                  <div className="text-2xl font-bold text-amber-300 transition-colors group-hover:text-amber-400">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-b from-white/5 to-white/10 px-6 py-3 font-medium text-slate-100 backdrop-blur-xl transition-all hover:border-amber-400/50 hover:text-amber-300 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Our Courtyard</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Values Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-4 sm:p-6 backdrop-blur-xl">
              {/* Card Glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-amber-400/10 via-transparent to-indigo-400/10 opacity-0 blur transition-opacity duration-500 hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-100">Our Guiding Values</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
                    The principles that shape how we build and collaborate
                  </p>
                </div>

                {/* Values Navigation */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {values.map((value, index) => (
                    <motion.button
                      key={value.label}
                      onClick={() => setActiveValue(index)}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                        activeValue === index
                          ? 'bg-gradient-to-r from-amber-400/20 to-orange-400/10 text-amber-300 border border-amber-400/30'
                          : 'text-slate-400 hover:text-slate-300 hover:bg-white/5 border border-transparent'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex-shrink-0">{value.icon}</span>
                      {/* <span className="hidden xs:inline">{value.label}</span> */}
                      {/* <span className="xs:hidden">{value.label.split(' ')[0]}</span> */}
                    </motion.button>
                  ))}
                </div>

                {/* Active Value Content */}
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[200px] space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-400/20 text-amber-300">
                      {values[activeValue].icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-100 mb-2">
                        {values[activeValue].label}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {values[activeValue].detail}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Progress Dots */}
                <div className="mt-8 flex justify-center gap-2">
                  {values.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveValue(index)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        activeValue === index
                          ? 'bg-gradient-to-r from-amber-400 to-orange-400 w-6'
                          : 'bg-slate-700 hover:bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Team Photo/Illustration Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-4 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-400/20 flex items-center justify-center">
                  <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-100">Based in India, Serving Worldwide</h4>
                  {/* <p className="text-sm text-slate-400">With team members across multiple Indian cities</p> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-amber-400/5 via-transparent to-indigo-400/5 p-8 backdrop-blur-xl">
              {/* Quote marks */}
              <div className="absolute left-6 top-6 text-4xl text-amber-400/20">"</div>
              <div className="absolute right-6 bottom-6 text-4xl text-indigo-400/20">"</div>
              
              <h3 className="text-xl font-semibold text-slate-50">
                Our Vision
              </h3>
              <p className="mt-4 text-lg text-slate-300 italic">
                To be the most trusted courtyard where innovative ideas from across India and beyond come to find their home — transformed into digital products that delight users and drive meaningful impact.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-amber-400 to-indigo-400" />
                <span className="text-sm text-slate-400">Aangan Developers</span>
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-indigo-400 to-amber-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}