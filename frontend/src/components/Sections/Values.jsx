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

export default function Values() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative z-10 bg-site-bg">
            <div className="mx-auto max-w-6xl px-6 py-32 relative">
                {/* Decorative Assets */}
                <motion.img
                    src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/671f8d4eb9fdc08517312d0c_Static-6-purple.gif"
                    loading="eager"
                    alt=""
                    className="in2-dec1 absolute left-[-5%] top-20 w-32 h-32 pointer-events-none opacity-40"
                    animate={{ rotate: -120, y: [0, -20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="mb-20 max-w-3xl space-y-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-site-fg/40">Our Foundation</p>
                    <MovingText
                        text="What we believe in."
                        className="font-serif text-5xl md:text-7xl uppercase"
                        range={1.5}
                        duration={3}
                        delayOffset={0.2}
                    />
                </div>

                <div className="relative h-[250vh]">
                    {values.map((value, i) => (
                        <Card key={i} index={i} total={values.length} value={value} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Card({ value, index, total }) {
    return (
        <div
            className="sticky flex h-screen items-center justify-center"
            style={{
                top: `${80 + (index * 20)}px`,
                zIndex: index + 1
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                style={{
                    rotate: value.rotation,
                    boxShadow: 'rgba(123, 94, 92, 0.06) 5px 2px 9px 0px'
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
