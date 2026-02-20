import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Meraki Coffee House",
        category: "Coffee Shop & Cafe",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1600",
        color: "bg-accent-yellow",
        link: "https://meraki.aangandevelopers.com/"
    },
    {
        title: "Priyam Nutrition Care",
        category: "Nutrition & Healthcare",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1600",
        color: "bg-accent-purple",
        link: "https://pncpriyamnutritioncare.com/"
    },
    {
        title: "Design Formula Studio",
        category: "Design Studio & Architecture",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1600",
        color: "bg-accent-orange",
        link: "https://designformulastudio.com/"
    },
    {
        title: "The Cheelaya",
        category: "Artisan Eggless Cheesecakes",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=1600",
        color: "bg-accent-orange",
        link: "https://the-cheelaya.onrender.com/"
    }
];

export default function HorizontalScroll() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const pinDistance = containerRef.current.offsetWidth - window.innerWidth;

            gsap.to(containerRef.current, {
                x: -pinDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => `+=${pinDistance}`,
                    invalidateOnRefresh: true,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen overflow-hidden bg-site-bg flex flex-col">
            <div className="flex px-[5vw] pt-24 pb-12 justify-between items-end shrink-0">
                <div className="max-w-xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-4">Selected Works</p>
                    <h2 className="font-serif text-5xl md:text-6xl uppercase">Crafting <span className="italic">digital</span> excellence.</h2>
                </div>
                <button
                    onClick={() => {
                        const el = document.getElementById('all-projects');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-site-fg/40 hover:text-site-fg transition-colors pb-2"
                >
                    View All Projects
                </button>
            </div>

            <div className="flex-1 flex items-center">
                <div ref={containerRef} className="flex gap-[5vw] px-[5vw] w-fit items-center">
                    {projects.map((project, i) => (
                        <a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative whitespace-nowrap block"
                        >
                            <div className="relative h-[45vh] w-[80vw] overflow-hidden rounded-2xl md:w-[40vw]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                            </div>

                            <div className="mt-6 flex items-end justify-between">
                                <div>
                                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-foreground/40">{project.category}</p>
                                    <h3 className="font-serif text-3xl uppercase">{project.title}</h3>
                                </div>
                                <div className={`h-2 w-2 rounded-full ${project.color}`} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
