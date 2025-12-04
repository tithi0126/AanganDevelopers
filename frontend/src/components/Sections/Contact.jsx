// import { motion } from 'framer-motion';
// import { useState } from 'react';

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     company: '',
//     summary: ''
//   });
//   const [status, setStatus] = useState({ state: 'idle', message: '' });

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ state: 'loading', message: '' });
//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/contact`,
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(form)
//         }
//       );
//       if (!res.ok) {
//         throw new Error('Failed to send');
//       }
//       setStatus({
//         state: 'success',
//         message: 'Thank you — we will reach out shortly.'
//       });
//       setForm({ name: '', email: '', company: '', summary: '' });
//     } catch (err) {
//       setStatus({
//         state: 'error',
//         message: 'Something went wrong. Please try again or email us directly.'
//       });
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative border-t border-white/5 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 py-20"
//     >
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.28),transparent_60%)]" />
//       <div className="relative mx-auto max-w-4xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto max-w-2xl text-center"
//         >
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amberSoft">
//             Contact
//           </p>
//           <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
//             Let&apos;s build your idea together.
//           </h2>
//           <p className="mt-3 text-sm text-slate-300 md:text-base">
//             Tell us a bit about the product you&apos;re imagining. We&apos;ll reply
//             with a calm, clear next step — usually within one business day.
//           </p>
//         </motion.div>

//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           className="glass mx-auto mt-10 max-w-2xl space-y-4 rounded-3xl border border-white/10 bg-slate-950/80 p-6"
//         >
//           <div className="grid gap-4 md:grid-cols-2">
//             <Field
//               label="Name"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//             <Field
//               label="Email"
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <Field
//             label="Company / Team"
//             name="company"
//             value={form.company}
//             onChange={handleChange}
//           />
//           <Field
//             label="Project summary"
//             name="summary"
//             as="textarea"
//             rows={4}
//             placeholder="Tell us about the product, timeline, and what a successful launch looks like."
//             value={form.summary}
//             onChange={handleChange}
//             required
//           />

//           <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
//             <button
//               type="submit"
//               disabled={status.state === 'loading'}
//               className="inline-flex items-center justify-center rounded-full bg-amberSoft px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 transition hover:-translate-y-0.5 hover:shadow-amber-500/70 disabled:cursor-not-allowed disabled:opacity-70"
//             >
//               {status.state === 'loading'
//                 ? 'Sending...'
//                 : "Let's build your idea together"}
//             </button>
//             <p className="text-[11px] text-slate-400">
//               Or email us at{' '}
//               <span className="font-medium text-slate-200">
//                 hello@aangandevelopers.com
//               </span>
//             </p>
//           </div>

//           {status.message && (
//             <p
//               className={`text-xs ${
//                 status.state === 'success'
//                   ? 'text-emerald-400'
//                   : 'text-rose-400'
//               }`}
//             >
//               {status.message}
//             </p>
//           )}
//         </motion.form>
//       </div>
//     </section>
//   );
// }

// function Field({
//   label,
//   name,
//   as = 'input',
//   type = 'text',
//   rows,
//   value,
//   onChange,
//   ...rest
// }) {
//   const InputTag = as;
//   return (
//     <label className="block text-xs text-slate-200">
//       <span className="mb-1 inline-block text-[11px] font-medium uppercase tracking-[0.14em]">
//         {label}
//       </span>
//       <InputTag
//         name={name}
//         type={type}
//         rows={rows}
//         value={value}
//         onChange={onChange}
//         className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-xs text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-amberSoft/70 focus:bg-slate-900 focus:ring-1 focus:ring-amberSoft/60"
//         {...rest}
//       />
//     </label>
//   );
// }


import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    summary: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        }
      );
      if (!res.ok) {
        throw new Error('Failed to send');
      }
      setStatus({
        state: 'success',
        message: 'Thank you! We will reach out within 24 hours.'
      });
      setForm({ name: '', email: '', company: '', summary: '' });
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Something went wrong. Please try again or email us directly.'
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-amber-400/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-indigo-400/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
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
              Start Your Project
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-slate-50 md:text-5xl"
          >
            Let's build your idea
            <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
              together.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-300"
          >
            Share your vision with us. We'll respond within one business day with a clear next step.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Form Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-8 backdrop-blur-xl">
              {/* Form Glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-amber-400/10 via-transparent to-indigo-400/10 opacity-0 blur transition-opacity duration-500 hover:opacity-100" />
              
              <motion.form
                onSubmit={handleSubmit}
                className="relative space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <Field
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    active={activeField === 'name'}
                    required
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    active={activeField === 'email'}
                    required
                  />
                </div>
                
                <Field
                  label="Company / Team"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  onFocus={() => setActiveField('company')}
                  onBlur={() => setActiveField(null)}
                  active={activeField === 'company'}
                />
                
                <Field
                  label="Tell us about your project"
                  name="summary"
                  as="textarea"
                  rows={5}
                  placeholder="What problem are you solving? Who are your users? What does success look like for this project?"
                  value={form.summary}
                  onChange={handleChange}
                  onFocus={() => setActiveField('summary')}
                  onBlur={() => setActiveField(null)}
                  active={activeField === 'summary'}
                  required
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-orange-400 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  whileHover={{ scale: status.state !== 'loading' ? 1.02 : 1 }}
                  whileTap={{ scale: status.state !== 'loading' ? 0.98 : 1 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status.state === 'loading' ? (
                      <>
                        <motion.svg
                          className="h-4 w-4"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </motion.svg>
                        Sending your message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                  {status.state !== 'loading' && (
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
                </motion.button>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-xl border p-4 ${
                      status.state === 'success'
                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                        : 'border-rose-500/30 bg-rose-500/10 text-rose-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {status.state === 'success' ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      <span className="text-sm font-medium">{status.message}</span>
                    </div>
                  </motion.div>
                )}
              </motion.form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Contact Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-8 backdrop-blur-xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">Other Ways to Connect</h3>
                  <p className="mt-1 text-slate-400">Prefer to talk first? Here's how to reach us.</p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <ContactMethod
                    icon={
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                    title="Email Us"
                    info="aangandeveloper@gmail.com"
                    action="mailto:aangandeveloper@gmail.com"
                    color="from-amber-400/20 to-orange-400/20"
                  />
                  
                  <ContactMethod
                    icon={
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    }
                    title="Call Us"
                    info="+91 98256 00097"
                    action="tel:+919825600097"
                    color="from-indigo-400/20 to-purple-400/20"
                  />
                  
                  <ContactMethod
                    icon={
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    }
                    title="Response Time"
                    info="Within 24 hours"
                    action="#"
                    color="from-emerald-400/20 to-teal-400/20"
                    noLink
                  />
                </div>

                {/* Working Hours */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="text-sm font-semibold text-slate-100">Working Hours</h4>
                  <div className="mt-2 space-y-1 text-sm text-slate-400">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-slate-300">9:00 AM - 7:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekends</span>
                      <span className="text-slate-300">By appointment</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                {/* <div>
                  <h4 className="text-sm font-semibold text-slate-100 mb-3">Follow Our Work</h4>
                  <div className="flex gap-3">
                    {[
                      { icon: '🐦', label: 'Twitter', href: '#' },
                      { icon: '💼', label: 'LinkedIn', href: '#' },
                      { icon: '📷', label: 'Instagram', href: '#' },
                      { icon: '🐙', label: 'GitHub', href: '#' }
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-amber-400/30 hover:text-amber-300 hover:bg-white/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-lg">{social.icon}</span>
                      </motion.a>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-xl">
              <h4 className="text-sm font-semibold text-slate-100 mb-4">Common Questions</h4>
              <div className="space-y-3">
                <FAQItem 
                  question="What happens after I submit this form?"
                  answer="We'll review your project details and schedule a free 30-minute discovery call to discuss your vision and next steps."
                />
                <FAQItem 
                  question="What's your typical project timeline?"
                  answer="MVP projects: 4-8 weeks. Full platforms: 8-16 weeks. We provide detailed timelines after discovery."
                />
                <FAQItem 
                  question="Do you work with international clients?"
                  answer="Yes! We work with clients worldwide. Our primary communication is in English, and we're available across time zones."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  as = 'input',
  type = 'text',
  rows,
  value,
  onChange,
  onFocus,
  onBlur,
  active,
  required,
  ...rest
}) {
  const InputTag = as;
  
  return (
    <motion.label 
      className="block"
      animate={active ? { scale: 1.01 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="mb-2 inline-block text-sm font-medium text-slate-300">
        {label}
        {required && <span className="ml-1 text-amber-400">*</span>}
      </span>
      <div className="relative">
        <InputTag
          name={name}
          type={type}
          rows={rows}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`w-full rounded-xl border ${
            active 
              ? 'border-amber-400/50 bg-slate-900/80 ring-2 ring-amber-400/20' 
              : 'border-white/10 bg-slate-900/60'
          } px-4 py-3 text-slate-50 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-amber-400/50 focus:bg-slate-900/80 focus:ring-2 focus:ring-amber-400/20`}
          required={required}
          {...rest}
        />
        {active && (
          <motion.div
            className="absolute -bottom-2 left-4 h-0.5 w-8 bg-gradient-to-r from-amber-400 to-orange-400"
            layoutId="fieldIndicator"
          />
        )}
      </div>
    </motion.label>
  );
}

function ContactMethod({ icon, title, info, action, color, noLink = false }) {
  const content = (
    <div className={`group flex items-center gap-4 rounded-xl border border-white/10 bg-gradient-to-br ${color} p-4 backdrop-blur-sm transition-all hover:border-white/20`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-amber-300">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
        <p className="text-sm text-slate-300">{info}</p>
      </div>
      {!noLink && (
        <svg className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      )}
    </div>
  );

  return noLink ? content : (
    <a href={action} className="block">
      {content}
    </a>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="rounded-xl border border-white/10 bg-white/5 p-3"
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-medium text-slate-200">{question}</span>
        <motion.svg
          className="h-4 w-4 text-slate-400"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mt-2 text-sm text-slate-400">{answer}</p>
      </motion.div>
    </motion.div>
  );
}