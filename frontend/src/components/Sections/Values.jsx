import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MovingText from '../Common/MovingText';

const values = [
    {
        title: "DRIVEN BY IMPACT",
        description: "Making a meaningful difference",
        icon: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/670d5b75050c071d7a856006_lamp_48.webp",
        borderColor: "border-[#F0B420]",
        rotation: -2
    },
    {
        title: "BREAKING NEW GROUND",
        description: "Doing something new and ambitious",
        icon: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/670d5b75adb1f5d439ba6ca1_lightning_48.webp",
        borderColor: "border-[#B0A5F4]",
        rotation: 1.5
    },
    {
        title: "SETTING HIGH STANDARDS",
        description: "Quality is not an act, it is a habit",
        icon: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/670d5b752f5ca868398c2b21_flag_48.webp",
        borderColor: "border-[#F36C5A]",
        rotation: -1.2
    },
    {
        title: "SELF-AWARE",
        description: "Ever-evolving and growing",
        icon: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/670d5b75050c071d7a856003_heart_48.webp",
        borderColor: "border-[#F0B420]",
        rotation: 2.5
    },
    {
        title: "GOOD PEOPLE",
        description: "Kindness and respect always",
        icon: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/670d5b7538a4d8e23e21626b_coffee_120.webp",
        borderColor: "border-[#B0A5F4]",
        rotation: -0.5
    }
];

// Each card gets 100vh of scroll space; total = (n+1)*100vh so last card can clear
const CARD_SCROLL_VH = 100;
const TOP_OFFSET = 100; // px from top where first card sticks

export default function Values() {
    return (
        <section className="relative z-10 bg-site-bg">
            {/* Header — normal flow above the sticky cards */}
            <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 relative">
                <motion.img
                    src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/671f8d4eb9fdc08517312d0c_Static-6-purple.gif"
                    loading="eager"
                    alt=""
                    className="absolute left-[-5%] top-20 w-32 h-32 pointer-events-none opacity-40"
                    animate={{ rotate: -120, y: [0, -20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="mb-4 max-w-3xl space-y-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-site-fg/40">Our Foundation</p>
                    <MovingText
                        text="What we believe in."
                        className="font-serif text-5xl md:text-7xl uppercase"
                        range={1.5}
                        duration={3}
                        delayOffset={0.2}
                    />
                </div>
            </div>

            {/* Sticky card stack — one scroll region per card */}
            <div
                className="relative"
                style={{ height: `${(values.length + 1) * CARD_SCROLL_VH}vh` }}
            >
                {values.map((value, i) => (
                    <StickyCard
                        key={i}
                        value={value}
                        index={i}
                        total={values.length}
                    />
                ))}
            </div>

            {/* Bottom breathing room */}
            <div className="h-24" />
        </section>
    );
}

function StickyCard({ value, index, total }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    // Scale down slightly as next cards stack on top
    const scale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.9, 1, 1 - (total - index) * 0.015]
    );

    // Each card sticks lower than the previous by 20px
    const stickyTop = TOP_OFFSET + index * 20;

    return (
        <div
            ref={ref}
            className="sticky flex items-center justify-center"
            style={{
                top: `${stickyTop}px`,
                height: `${CARD_SCROLL_VH}vh`,
                zIndex: index + 1,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-5%' }}
                style={{
                    rotate: value.rotation,
                    scale,
                    boxShadow: 'rgba(123, 94, 92, 0.1) 8px 4px 20px 0px'
                }}
                className={`relative w-full max-w-xl rounded-[40px] border-[9px] ${value.borderColor} bg-white p-12 text-center transition-transform hover:scale-[1.02]`}
            >
                <div className="flex flex-col items-center gap-8">
                    <img src={value.icon} alt="" className="h-16 w-16 object-contain" />
                    <div className="space-y-4">
                        <h3 className="font-serif text-4xl md:text-6xl uppercase leading-tight tracking-tight">
                            {value.title}
                        </h3>
                        <p className="text-sm font-bold uppercase tracking-widest text-site-fg/40">
                            {value.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
