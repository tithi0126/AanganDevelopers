import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Mail, Phone, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    summary: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });
    try {
      const res = await fetch(
        '/api/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        }
      );
      if (!res.ok) throw new Error('Failed to send');
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
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Left: Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                Contact
              </p>
              <h2 className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.1]">
                Let&apos;s build your <span className="italic">idea.</span>
              </h2>
              <p className="max-w-md text-lg font-medium leading-relaxed text-foreground/70">
                Share your vision with us. We respond to every inquiry within one business day with a clear next step.
              </p>
            </motion.div>

            <div className="space-y-8 pt-4">
              <ContactMethod
                icon={<Mail size={20} />}
                label="Email"
                value="aangandeveloper@gmail.com"
                href="mailto:aangandeveloper@gmail.com"
              />
              <ContactMethod
                icon={<Phone size={20} />}
                label="Phone"
                value="+91 98256 00097"
                href="tel:+919825600097"
              />
              <ContactMethod
                icon={<Clock size={20} />}
                label="Response Time"
                value="Within 24-48 hours"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="border border-foreground/5 bg-foreground/[0.01] p-10 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid gap-8 sm:grid-cols-2">
                <Input
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                label="Company"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
              <Input
                label="Project Summary"
                name="summary"
                type="textarea"
                value={form.summary}
                onChange={handleChange}
                required
              />

              <div className="space-y-6 pt-4">
                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="group flex items-center gap-3 rounded-full bg-foreground px-10 py-5 text-sm font-bold text-background transition-all hover:bg-foreground/90 disabled:opacity-50"
                >
                  {status.state === 'loading' ? 'Sending...' : 'Send message'}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>

                {status.message && (
                  <p className={`text-xs font-bold uppercase tracking-widest ${status.state === 'success' ? 'text-accent-orange' : 'text-red-500'}`}>
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({ icon, label, value, href }) {
  const Content = (
    <div className="flex items-start gap-4">
      <div className="mt-1 text-foreground/30">{icon}</div>
      <div className="space-y-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">{label}</p>
        <p className="font-bold tracking-tight text-foreground">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-70">
      {Content}
    </a>
  ) : Content;
}

function Input({ label, name, type = 'text', required, value, onChange }) {
  const isTextArea = type === 'textarea';
  const Component = isTextArea ? 'textarea' : 'input';

  return (
    <div className="space-y-4">
      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
        {label} {required && '*'}
      </label>
      <Component
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        rows={isTextArea ? 4 : undefined}
        className="w-full border-b border-foreground/10 bg-transparent py-4 text-sm font-medium text-foreground outline-none transition-colors focus:border-foreground"
      />
    </div>
  );
}