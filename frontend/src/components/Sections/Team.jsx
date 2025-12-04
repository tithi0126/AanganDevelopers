import { motion } from 'framer-motion';

const members = [
  {
    name: 'Tithi Shah',
    role: 'Co-founder · CEO & Head of Product',
    bio: `Vision-driven product leader who blends creativity with clarity. 
With a natural instinct for design and a deep understanding of user behaviour, 
Tithi ensures every feature feels intuitive, warm, and meaningful. 
She leads the team with strong decision-making, empathy, and a holistic view of product, people, and long-term strategy.`,
    tags: [
      'Product Strategy',
      'UI/UX Design',
      'User Psychology',
      'Software Engineer',
      'Experience Architecture'
    ],
    imageColor: 'from-rose-400 to-pink-500',
    accentColor: 'bg-gradient-to-r from-rose-400/20 to-pink-500/20',
    textColor: 'text-rose-300',
    image: '/tithi.jpg',
    github: 'https://github.com/tithi0126',
    portfolio: 'https://tithishah.cloud',
    linkedin: 'https://www.linkedin.com/in/tithishah01/'
  },
  {
    name: 'Dev Jariwala',
    role: 'Co-founder · CTO & Engineering Lead',
    bio: `Calm, focused, and deeply technical. 
Dev builds the backbone of the product—scalable systems, high-performance architecture, 
and seamless integrations. 
He is driven by clean engineering, long-term stability, and well-structured solutions. 
As CTO, he ensures every line of code supports a reliable, future-ready product.`,
    tags: [
      'System Architecture',
      'Engineering',
      'Backend & APIs',
      'Performance Optimization',
      'Software Engineer'
    ],
    imageColor: 'from-amber-400 to-orange-500',
    accentColor: 'bg-gradient-to-r from-amber-400/20 to-orange-500/20',
    textColor: 'text-amber-300',
    image: '/dev.png',    
    github: 'https://github.com/devjariwala14',
    portfolio: 'https://tithishah.cloud',
    linkedin: 'https://www.linkedin.com/in/devjariwala14/'
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
            className="mb-4 text-3xl font-bold text-slate-50 md:text-5x2"
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
                  {/* Avatar/Image - Made larger */}
                  <div className="relative">
                    <div className="relative h-40 w-40 overflow-hidden rounded-2xl md:h-44 md:w-44">
                      {member.image ? (
                        // Actual image without gradient overlay
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        // Fallback gradient (in case image doesn't load)
                        <div className={`h-full w-full bg-gradient-to-br ${member.imageColor} from-30% to-70%`} />
                      )}
                      
                      {/* Subtle border glow */}
                      <div className="absolute inset-0 rounded-2xl border border-white/10" />
                    </div>
                    
                    {/* Status indicator */}
                    {/* <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full border-2 border-slate-900 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg shadow-emerald-400/30" /> */}
                  </div>

                  {/* Member Info */}
                  <div className="flex-1">
                    <div className="space-y-3">
                      <div>
                        <h3 className={`text-2xl font-bold ${member.textColor}`}>
                          {member.name}
                        </h3>
                        <p className="text-sm text-slate-300 mt-1">{member.role}</p>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed text-base">
                        {member.bio}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {member.tags.map((tag, tagIdx) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + tagIdx * 0.05 }}
                          className={`rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-white/10 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-sm ${member.accentColor}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex items-center gap-3">
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-amber-400/30 hover:text-amber-300 hover:bg-white/10 hover:shadow-lg hover:shadow-amber-400/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-amber-400/30 hover:text-amber-300 hover:bg-white/10 hover:shadow-lg hover:shadow-amber-400/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-amber-400/30 hover:text-amber-300 hover:bg-white/10 hover:shadow-lg hover:shadow-amber-400/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
                  className="mt-8 border-t border-white/10 pt-6"
                >
                  <p className="text-sm italic text-slate-400 leading-relaxed">
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
            
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-400/20">
                  <svg className="h-7 w-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">Weekly Syncs</h4>
                <p className="text-sm text-slate-400">Regular progress updates and planning</p>
              </div>
              
              <div className="space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400/20 to-pink-400/20">
                  <svg className="h-7 w-7 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">Quality First</h4>
                <p className="text-sm text-slate-400">Hands-on attention to every detail</p>
              </div>
              
              <div className="space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400/20 to-purple-400/20">
                  <svg className="h-7 w-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">Secure Access</h4>
                <p className="text-sm text-slate-400">Direct access to code and designs</p>
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
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 px-10 py-4 font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Meet The Founders Directly</span>
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <p className="mt-4 text-sm text-slate-400">
            Schedule a 60-minute intro call with both founders
          </p>
        </motion.div>
      </div>
    </section>
  );
}