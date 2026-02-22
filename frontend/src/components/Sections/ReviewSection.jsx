import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Star, Send, User, MessageSquare, Check, Quote, ChevronDown, ChevronUp } from 'lucide-react';

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'https://aangandevelopers.com'}/api`;
const CHAR_LIMIT = 250;

export default function ReviewSection() {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundTextX = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const backgroundTextXReverse = useTransform(scrollYProgress, [0, 1], [-400, 0]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/reviews`);
            const data = await response.json();
            setReviews(data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(`${API_BASE_URL}/reviews`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', rating: 5, comment: '' });
                fetchReviews();
                setTimeout(() => setSubmitStatus(null), 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="reviews"
            ref={sectionRef}
            className="relative z-20 py-48 bg-site-bg overflow-hidden"
        >
            {/* Parallax Background Text */}
            <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
                <motion.h2
                    style={{ x: backgroundTextX }}
                    className="font-serif text-[25vw] leading-none whitespace-nowrap uppercase italic text-site-fg"
                >
                    Testimonials Perspective Vision
                </motion.h2>
            </div>
            <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
                <motion.h2
                    style={{ x: backgroundTextXReverse }}
                    className="font-serif text-[25vw] leading-none whitespace-nowrap uppercase text-site-fg"
                >
                    Excellence Quality Trust
                </motion.h2>
            </div>

            {/* Atmospheric Orbs */}
            <div className="absolute top-1/3 left-0 w-[800px] h-[800px] bg-accent-orange/10 rounded-full blur-[150px] -z-10 -translate-x-1/2" />
            <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[120px] -z-10 translate-x-1/2" />

            <div className="mx-auto max-w-7xl px-6 relative">
                {/* Header Section */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-6">
                            <span className="w-12 h-[1px] bg-site-fg/20" />
                            <p className="text-[10px] font-bold font-sans uppercase tracking-[0.4em] text-site-fg/40">
                                Global Perspective
                            </p>
                        </div>
                        <h2 className="font-serif text-6xl md:text-9xl tracking-tighter leading-[0.9] text-site-fg">
                            Client <span className="italic">Diaries</span>.
                        </h2>
                        <p className="max-w-xl text-lg text-site-fg/50 font-sans font-medium leading-relaxed">
                            A curated ledger of experiences from our global partners, reflecting a shared commitment to visionary architecture.
                        </p>
                    </motion.div>
                </div>

                {/* Masonry Review Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-48">
                    {reviews.length === 0 ? (
                        <div className="col-span-full py-20">
                            <p className="text-site-fg/30 italic text-xl font-serif">Awaiting new entries in the ledger...</p>
                        </div>
                    ) : (
                        reviews.map((review, i) => (
                            <EditorialReviewCard
                                key={review._id || i}
                                review={review}
                                index={i}
                            />
                        ))
                    )}
                </div>

                {/* Integrated Form Section */}
                <div className="mt-64 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-site-fg/10 to-transparent" />

                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-3xl border border-site-fg/5 rounded-[60px] p-12 md:p-24 overflow-hidden relative shadow-2xl shadow-site-fg/5"
                        >
                            {/* Decorative orb for form */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            {/* Form Header */}
                            <div className="text-center space-y-6 mb-20 relative z-10">
                                <h3 className="font-serif text-5xl md:text-7xl uppercase leading-none text-site-fg">
                                    Contribute <span className="italic text-accent-orange">Today</span>
                                </h3>
                                <p className="text-site-fg/40 font-bold font-sans uppercase tracking-widest text-xs">
                                    Join our narrative of excellence
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-12 max-w-3xl mx-auto relative z-10">
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold font-sans uppercase tracking-[0.3em] text-site-fg/40 pl-1">Identity</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-transparent border-b border-site-fg/10 py-4 outline-none focus:border-accent-orange transition-colors font-serif text-2xl placeholder:text-site-fg/10 text-site-fg"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold font-sans uppercase tracking-[0.3em] text-site-fg/40 pl-1">Merit</label>
                                        <div className="flex items-center gap-4 py-4 border-b border-site-fg/10">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, rating: star })}
                                                    className="transition-transform hover:scale-125 focus:outline-none"
                                                >
                                                    <Star
                                                        size={22}
                                                        className={star <= formData.rating ? "fill-accent-orange text-accent-orange" : "text-site-fg/10"}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold font-sans uppercase tracking-[0.3em] text-site-fg/40 pl-1">Perspective</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.comment}
                                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                        className="w-full bg-transparent border-b border-site-fg/10 py-4 outline-none focus:border-accent-orange transition-colors font-serif text-2xl placeholder:text-site-fg/10 resize-none text-site-fg"
                                        placeholder="Share your thoughts..."
                                    />
                                </div>

                                <div className="flex flex-col items-center gap-8 pt-8">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative px-12 py-6 bg-site-fg text-site-bg rounded-full overflow-hidden transition-all hover:bg-accent-orange hover:text-white hover:scale-105 active:scale-95 disabled:opacity-50"
                                    >
                                        <span className="relative z-10 font-bold font-sans uppercase tracking-[0.4em] text-[10px] flex items-center gap-4">
                                            {isSubmitting ? 'Architecting...' : 'Publish Entry'}
                                            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {submitStatus === 'success' && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="text-green-600 font-bold font-sans text-[10px] uppercase tracking-[0.2em]"
                                            >
                                                Perspective archived successfully.
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EditorialReviewCard({ review, index }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLong = review.comment.length > CHAR_LIMIT;
    const displayText = isExpanded ? review.comment : review.comment.slice(0, CHAR_LIMIT) + (isLong ? '...' : '');

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index % 3 * 0.1 }}
            className="break-inside-avoid mb-8 group"
        >
            <div className={`relative p-10 md:p-14 bg-white/5 border border-site-fg/5 backdrop-blur-xl rounded-[48px] overflow-hidden transition-all duration-700 group-hover:bg-white/10 group-hover:border-site-fg/10 ${isExpanded ? 'shadow-2xl' : 'group-hover:-translate-y-2'}`}>
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Quote Icon */}
                <div className="mb-10 text-site-fg/5 group-hover:text-accent-orange/20 transition-colors duration-700">
                    <Quote size={48} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={12}
                            className={i < review.rating ? "fill-accent-orange text-accent-orange" : "text-site-fg/5"}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="space-y-8">
                    <div className="relative">
                        <p className="font-serif text-2xl md:text-3xl leading-[1.3] text-site-fg tracking-tight italic transition-all duration-500">
                            "{displayText}"
                        </p>
                        {isLong && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-6 flex items-center gap-2 text-[10px] font-bold font-sans uppercase tracking-[0.2em] text-accent-orange/60 hover:text-accent-orange transition-colors"
                            >
                                {isExpanded ? (
                                    <>Collapse <ChevronUp size={12} /></>
                                ) : (
                                    <>Read Full Perspective <ChevronDown size={12} /></>
                                )}
                            </button>
                        )}
                    </div>

                    <footer className="pt-8 border-t border-site-fg/5 space-y-2">
                        <cite className="not-italic font-bold font-sans uppercase tracking-[0.2em] text-[10px] text-site-fg/60 block">
                            {review.name}
                        </cite>
                        <span className="text-[10px] font-medium font-sans uppercase tracking-[0.1em] text-site-fg/20 block">
                            {new Date(review.createdAt).toLocaleDateString(undefined, {
                                month: 'short',
                                year: 'numeric'
                            })}
                        </span>
                    </footer>
                </div>
            </div>
        </motion.div>
    );
}
