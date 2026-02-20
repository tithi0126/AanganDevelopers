import { motion } from 'framer-motion';
import { MapPin, Globe, Compass } from 'lucide-react';
import MovingText from '../Common/MovingText';

const locations = [
    {
        city: 'Surat',
        country: 'India',
        description: 'Our creative hub where vision meets engineering. The heart of our design and development operations.',
        icon: <MapPin className="text-accent-orange" size={24} />,
        color: 'border-[#F0B420]',
        image: 'https://images.unsplash.com/photo-1582650800045-3645e54dcb44?auto=format&fit=crop&q=80&w=800'
    },
    {
        city: 'United Kingdom',
        country: 'Global Reach',
        description: 'Bridging ideas across the Atlantic. Delivering high-impact digital solutions to our European partners.',
        icon: <Globe className="text-[#B0A5F4]" size={24} />,
        color: 'border-[#B0A5F4]',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800'
    },
    {
        city: 'Canada',
        country: 'Global Reach',
        description: 'Expanding horizons in the North. Crafting modern web experiences for forward-thinking Canadian brands.',
        icon: <Compass className="text-[#F36C5A]" size={24} />,
        color: 'border-[#F36C5A]',
        image: 'https://images.unsplash.com/photo-1517935703635-2717079c21fe?auto=format&fit=crop&q=80&w=800'
    }
];

export default function GlobalPresence() {
    return (
        <section id="global" className="relative z-10 bg-site-bg py-32 px-6 overflow-hidden">
            <div className="mx-auto max-w-6xl">
                <div className="mb-20 max-w-3xl space-y-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                        Global Reach
                    </p>
                    <MovingText
                        text="Across borders, into the hearts of users."
                        className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.1]"
                        range={1.5}
                        duration={3}
                        delayOffset={0.2}
                    />
                    <p className="text-lg font-medium leading-relaxed text-foreground/70 max-w-2xl">
                        From our headquarters in Surat to our clients in the UK and Canada, we deliver digital craftsmanship that resonates globally.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {locations.map((loc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className={`group relative overflow-hidden rounded-[40px] border-[9px] ${loc.color} bg-white p-8 transition-all hover:-translate-y-2`}
                        >
                            <div className="relative z-10 space-y-8">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 transition-transform group-hover:scale-110">
                                    {loc.icon}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-serif text-3xl tracking-tight">
                                        {loc.city}
                                    </h3>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                                        {loc.country}
                                    </p>
                                    <p className="text-sm font-medium leading-relaxed text-foreground/60">
                                        {loc.description}
                                    </p>
                                </div>
                            </div>

                            {/* Background Glow Effect */}
                            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-foreground/5 blur-3xl transition-transform group-hover:scale-150" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Assets - Floating circles like in other sections */}
            <motion.div
                className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full border border-foreground/5 pointer-events-none"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>
    );
}
