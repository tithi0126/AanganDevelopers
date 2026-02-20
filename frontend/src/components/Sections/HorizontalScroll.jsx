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
    },
    {
        title: "FinologyX",
        category: "Finance & Investment App",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1600",
        color: "bg-accent-purple",
        links: [
            { label: "Android", url: "https://play.google.com/store/apps/details?id=com.app.finologyx" },
            { label: "iOS", url: "https://apps.apple.com/in/app/finologyx/id6747080164" }
        ]
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
                        project.links ? (
                            // Multi-link card (e.g., app store links)
                            <div
                                key={i}
                                className="group relative whitespace-nowrap block"
                            >
                                <div className="relative h-[45vh] w-[80vw] overflow-hidden rounded-2xl md:w-[40vw]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                                    {/* App store links overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.links.map((storeLink, j) => (
                                            <a
                                                key={j}
                                                href={storeLink.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-black text-[11px] font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-white transition-all duration-200 hover:scale-105 shadow-lg"
                                            >
                                                {storeLink.label === "Android" ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M17.523 15.341l1.09-1.89a.5.5 0 00-.183-.683.5.5 0 00-.683.183l-1.105 1.913A8.963 8.963 0 0112 14c-1.673 0-3.24.458-4.579 1.258L6.3 13.324a.5.5 0 00-.866.5l1.09 1.889A9.018 9.018 0 003 22h18a9.018 9.018 0 00-3.477-6.659zM8.5 20a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM12 4.5a.5.5 0 01.5-.5h.5V2.5a.5.5 0 011 0V4h.5a.5.5 0 010 1H12.5a.5.5 0 01-.5-.5zM6.5 5a.5.5 0 010-1H8V2.5a.5.5 0 011 0V4h.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H6.5z" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                                    </svg>
                                                )}
                                                {storeLink.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 flex items-end justify-between">
                                    <div>
                                        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-foreground/40">{project.category}</p>
                                        <h3 className="font-serif text-3xl uppercase">{project.title}</h3>
                                    </div>
                                    <div className={`h-2 w-2 rounded-full ${project.color}`} />
                                </div>
                            </div>
                        ) : (
                            // Single-link card
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
                        )
                    ))}
                </div>
            </div>
        </section>
    );
}
