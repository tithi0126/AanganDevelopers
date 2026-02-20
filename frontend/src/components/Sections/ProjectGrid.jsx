import { motion } from 'framer-motion';

const projects = [
    {
        title: "Meraki Coffee House",
        category: "Coffee Shop & Cafe",
        link: "https://meraki.aangandevelopers.com/",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1600",
        illustration: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/673cc0d68a1a1b4719476306_illustration-forcandidates.svg"
    },
    {
        title: "Priyam Nutrition Care",
        category: "Nutrition & Healthcare",
        link: "https://pncpriyamnutritioncare.com/",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1600",
        illustration: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/673cc0d695d81fca4e6b0b9e_illustration-forcompanies.svg"
    },
    {
        title: "Kalanjay",
        category: "Personalized Gifts & Hampers",
        link: "https://kalanjay.aangandevelopers.com/",
        image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=1600",
        illustration: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/673cc0d68a1a1b4719476306_illustration-forcandidates.svg"
    },
    {
        title: "Design Formula Studio",
        category: "Design Studio & Architecture",
        link: "https://designformulastudio.com/",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1600",
        illustration: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/673cc0d695d81fca4e6b0b9e_illustration-forcompanies.svg"
    },
    {
        title: "Bazaar Branding",
        category: "Branding & Marketing Agency",
        link: "https://bazaar-branding.onrender.com/",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600",
        illustration: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/673cc0d68a1a1b4719476306_illustration-forcandidates.svg"
    },
    {
        title: "Achyutam Fruitam",
        category: "Fruit Export & Frozen Products",
        link: "https://achyutamfruitam.aangandevelopers.com/",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1600",
        illustration: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/673cc0d695d81fca4e6b0b9e_illustration-forcompanies.svg"
    },
    {
        title: "The Cheelaya",
        category: "Artisan Eggless Cheesecakes",
        link: "https://the-cheelaya.onrender.com/",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=1600",
        illustration: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/673cc0d68a1a1b4719476306_illustration-forcandidates.svg"
    },
    {
        title: "FinologyX",
        category: "Finance & Investment App",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1600",
        illustration: "https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/673cc0d695d81fca4e6b0b9e_illustration-forcompanies.svg",
        links: [
            { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.app.finologyx" },
            { label: "App Store", url: "https://apps.apple.com/in/app/finologyx/id6747080164" }
        ]
    }
];

export default function ProjectGrid() {
    return (
        <section id="all-projects" className="bg-site-bg py-32">
            <div className="mx-auto max-w-6xl px-6">
                <header className="mb-20 space-y-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-site-fg/40">Portfolio</p>
                    <h2 className="font-serif text-6xl md:text-8xl uppercase leading-none">
                        Selected <span className="italic">projects</span>.
                    </h2>
                </header>

                <div className="grid gap-24">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group grid gap-12 md:grid-cols-2 items-center"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-site-fg/5">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="space-y-8">
                                {/* <img src={project.illustration} alt="" className="w-32 h-32 object-contain" /> */}
                                <div className="space-y-2">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-site-fg/40">{project.category}</p>
                                    <h3 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter transition-colors group-hover:text-accent-orange">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {project.links ? (
                                        project.links.map((lnk, j) => (
                                            <a key={j} href={lnk.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                                {lnk.label}
                                            </a>
                                        ))
                                    ) : (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                            Visit Site
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
