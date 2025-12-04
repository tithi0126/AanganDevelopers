// import { motion } from 'framer-motion';

// const members = [
//   {
//     name: 'Dev Jariwala',
//     role: 'Co-founder · Engineering',
//     bio: 'Full-stack engineer focused on scalable architectures and calm, reliable delivery.',
//     tags: ['MERN', 'System design', 'DevOps']
//   },
//   {
//     name: 'Tithi',
//     role: 'Co-founder · Product & Design',
//     bio: 'Product thinker and UX designer shaping interfaces that feel warm, clear, and intuitive.',
//     tags: ['UI/UX', 'Strategy', 'Content']
//   }
// ];

// export default function Team() {
//   return (
//     <section
//       id="team"
//       className="relative border-t border-white/5 bg-slate-950 py-20"
//     >
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,119,0.18),transparent_55%)]" />
//       <div className="relative mx-auto max-w-6xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto max-w-2xl text-center"
//         >
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amberSoft">
//             Our team
//           </p>
//           <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
//             People behind the courtyard.
//           </h2>
//           <p className="mt-3 text-sm text-slate-300 md:text-base">
//             You work directly with the people designing and building your product —
//             no unnecessary layers, just clear collaboration.
//           </p>
//         </motion.div>

//         <div className="mt-10 grid gap-6 md:grid-cols-2">
//           {members.map((member, idx) => (
//             <motion.article
//               key={member.name}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: idx * 0.08 }}
//               whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
//               className="glass relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5"
//             >
//               <div className="flex items-center gap-4">
//                 <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-amberSoft via-rose-200 to-indigoSoft shadow-lg shadow-amber-500/40" />
//                 <div className="text-left">
//                   <h3 className="text-sm font-semibold text-slate-50">
//                     {member.name}
//                   </h3>
//                   <p className="text-[11px] text-slate-300">{member.role}</p>
//                 </div>
//               </div>
//               <p className="text-xs text-slate-300">{member.bio}</p>
//               <div className="mt-1 flex flex-wrap gap-1.5 text-[10px] text-slate-200">
//                 {member.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="rounded-full bg-slate-900/80 px-2 py-0.5 text-slate-200"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from 'framer-motion';

const members = [
  {
    name: 'Tithi',
    role: 'Co-founder · Product & Design',
    bio: 'Product thinker and UX designer shaping interfaces that feel warm, clear, and intuitive. Leads user research and ensures every product feels like home.',
    tags: ['UI/UX Design', 'Product Strategy', 'User Research', 'Content Design'],
    imageColor: 'from-rose-400 to-pink-500',
    accentColor: 'bg-gradient-to-r from-rose-400/20 to-pink-500/20',
    textColor: 'text-rose-300'
  },
  {
    name: 'Dev Jariwala',
    role: 'Co-founder · Engineering',
    bio: 'Full-stack engineer focused on scalable architectures and calm, reliable delivery. Ensures robust systems that stand the test of time.',
    tags: ['Full-Stack', 'System Architecture', 'DevOps', 'Performance'],
    imageColor: 'from-amber-400 to-orange-500',
    accentColor: 'bg-gradient-to-r from-amber-400/20 to-orange-500/20',
    textColor: 'text-amber-300'
  }
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-slate-950 to-slate-900 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-rose-400/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-amber-400/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]" />
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
              Meet The Founders
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-slate-50 md:text-5xl"
          >
            The hearts behind
            <span className="block bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 bg-clip-text text-transparent">
              the courtyard.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-300"
          >
            You work directly with the people designing and building your product —
            no unnecessary layers, just clear collaboration and shared ownership.
          </motion.p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${member.imageColor} opacity-0 blur transition-all duration-500 group-hover:opacity-20`} />
              
              {/* Main Card */}
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-white/20">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Avatar/Image */}
                  <div className="relative">
                    {/* Placeholder for team member image */}
                    <div className="relative h-32 w-32 overflow-hidden rounded-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.imageColor} opacity-20`} />
                      
                      {/* Placeholder initials with gradient */}
                      <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${member.imageColor} from-30% to-70% text-5xl font-bold text-white`}>
                        {member.name.charAt(0)}
                      </div>
                      
                      {/* Image placeholder text */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-center">
                        <span className="text-xs text-white/90">Photo coming soon</span>
                      </div>
                    </div>
                    
                    {/* Status indicator */}
                    <div className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full border-2 border-slate-900 bg-gradient-to-r from-emerald-400 to-teal-400" />
                  </div>

                  {/* Member Info */}
                  <div className="flex-1">
                    <div className="space-y-2">
                      <div>
                        <h3 className={`text-xl font-bold ${member.textColor}`}>
                          {member.name}
                        </h3>
                        <p className="text-sm text-slate-300">{member.role}</p>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.tags.map((tag, tagIdx) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + tagIdx * 0.05 }}
                          className={`rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-white/10 px-3 py-1 text-xs text-slate-200 backdrop-blur-sm ${member.accentColor}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="mt-6 flex items-center gap-3">
                      <motion.a
                        href="#"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-amber-400/30 hover:text-amber-300 hover:bg-white/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-amber-400/30 hover:text-amber-300 hover:bg-white/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 border-t border-white/10 pt-4"
                >
                  <p className="text-sm italic text-slate-400">
                    "{member.name === 'Tithi' 
                      ? 'Great products feel like home — familiar, welcoming, and always there when you need them.' 
                      : 'I believe in building systems that work silently but powerfully, just like the foundations of a home.'}"
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-slate-50">
              Direct Collaboration, No Middlemen
            </h3>
            <p className="mt-3 text-slate-300">
              When you work with Aangan, you work directly with Tithi and Dev. No account managers, 
              no project managers in between — just transparent communication and shared ownership.
            </p>
            
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-400/20">
                  <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">Weekly Syncs</h4>
                <p className="text-xs text-slate-400">Regular progress updates and planning</p>
              </div>
              
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400/20 to-pink-400/20">
                  <svg className="h-6 w-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">Quality First</h4>
                <p className="text-xs text-slate-400">Hands-on attention to every detail</p>
              </div>
              
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400/20 to-purple-400/20">
                  <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">Secure Access</h4>
                <p className="text-xs text-slate-400">Direct access to code and designs</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 px-8 py-3.5 font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Meet The Founders Directly</span>
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
        </motion.div>
      </div>
    </section>
  );
}