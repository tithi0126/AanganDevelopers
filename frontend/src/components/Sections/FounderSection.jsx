import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function FounderSection() {
    return (
        <section id="founder" className="bg-[#1E1E1E] text-[#F5F5F5] selection:bg-accent-orange/30">
            <div className="mx-auto max-w-7xl px-6 py-32 md:py-48">
                <div className="grid gap-20 lg:grid-cols-2">
                    {/* Left Column */}
                    <div className="flex flex-col justify-between space-y-12">
                        <div className="space-y-8">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5F5F5]/40"
                            >
                                Aangan Developers. since 2024
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-serif text-6xl md:text-8xl tracking-tight leading-[0.95] uppercase"
                            >
                                Founded by Tithi Shah — <span className="italic">Product & Design Expert</span>
                            </motion.h2>

                            <motion.img
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/6708f758328ad893ef5c4bb0_%D0%A1%D0%BB%D0%BE%D0%B9%204%201%20(Traced).svg"
                                alt=""
                                className="w-48 md:w-64 opacity-80"
                            />
                        </div>

                        <motion.a
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            href="https://www.linkedin.com/in/tithishah01/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group w-fit"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F5F5] text-[#1E1E1E] transition-transform group-hover:scale-110">
                                <Linkedin size={20} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F5F5]/60 group-hover:text-[#F5F5F5] transition-colors">
                                Connect with Tithi
                            </span>
                        </motion.a>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-square overflow-hidden rounded-[40px] bg-[#2A2A2A]"
                        >
                            <img
                                src="/tithi.jpg"
                                alt="Tithi Shah"
                                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>

                        <div className="max-w-xl space-y-6 text-lg font-medium leading-relaxed text-[#F5F5F5]/70">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                Vision-driven product leader who blends creativity with clarity. Tithi ensures every feature feels intuitive, warm, and meaningful. She leads with empathy and a holistic view of human-centric strategy.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                With a deep background in design systems and product engineering, she bridges the gap between complex technical requirements and beautiful, functional user experiences.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
