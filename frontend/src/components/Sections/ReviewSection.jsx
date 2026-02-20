import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, User, MessageSquare, Check } from 'lucide-react';

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'https://aangandevelopers.com'}/api`;

export default function ReviewSection() {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

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
        <section id="reviews" className="relative z-20 py-32 px-6 bg-site-bg">
            <div className="mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left Side: Reviews List */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-[10px] font-bold uppercase tracking-[0.2em] text-site-fg/40"
                            >
                                Testimonials
                            </motion.p>
                            <h2 className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.1]">
                                What our <span className="italic text-accent-orange">Clients</span> say.
                            </h2>
                        </div>

                        <div className="space-y-8 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                            {reviews.length === 0 ? (
                                <p className="text-site-fg/30 italic">No reviews yet. Be the first to share your experience!</p>
                            ) : (
                                <AnimatePresence mode="popLayout">
                                    {reviews.map((review, i) => {
                                        const borderColors = ['border-[#F0B420]', 'border-[#B0A5F4]', 'border-[#F36C5A]'];
                                        const rotations = [-2, 1.5, -1.2, 2.5, -0.5];
                                        const borderColor = borderColors[i % borderColors.length];
                                        const rotation = rotations[i % rotations.length];

                                        return (
                                            <motion.div
                                                key={review._id || i}
                                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-10%" }}
                                                style={{
                                                    rotate: rotation,
                                                    boxShadow: 'rgba(123, 94, 92, 0.06) 5px 2px 9px 0px'
                                                }}
                                                className={`relative w-full rounded-[40px] border-[9px] ${borderColor} bg-white p-10 text-center transition-transform hover:scale-[1.02] space-y-6`}
                                            >
                                                <div className="flex flex-col items-center gap-6">
                                                    <div className="flex gap-1 justify-center">
                                                        {[...Array(5)].map((_, starIndex) => (
                                                            <Star
                                                                key={starIndex}
                                                                size={16}
                                                                className={starIndex < review.rating ? "fill-accent-orange text-accent-orange" : "text-site-fg/10"}
                                                            />
                                                        ))}
                                                    </div>

                                                    <div className="space-y-4">
                                                        <h3 className="font-serif text-3xl md:text-4xl uppercase leading-tight tracking-tight">
                                                            {review.name}
                                                        </h3>
                                                        <p className="text-lg font-medium leading-relaxed text-site-fg/80 max-w-md mx-auto">
                                                            "{review.comment}"
                                                        </p>
                                                        <p className="text-[10px] font-bold uppercase tracking-widest text-site-fg/20">
                                                            {new Date(review.createdAt).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            )}
                        </div>
                    </div>

                    {/* Right Side: Add Review Form */}
                    <div className="relative">
                        <div className="sticky top-32 p-10 border-2 border-site-fg/5 rounded-[40px] bg-white space-y-8 shadow-2xl shadow-site-fg/5">
                            <div className="space-y-2">
                                <h3 className="font-serif text-3xl uppercase">Share your experience</h3>
                                <p className="text-sm text-site-fg/40">Your feedback helps us grow and serve you better.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-site-fg/40">Your Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-site-fg/20" size={18} />
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-site-bg/50 border border-site-fg/5 rounded-2xl focus:border-accent-orange outline-none transition-colors text-sm font-medium"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-site-fg/40">Rating</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, rating: star })}
                                                className="transition-transform active:scale-90"
                                            >
                                                <Star
                                                    size={24}
                                                    className={star <= formData.rating ? "fill-accent-orange text-accent-orange" : "text-site-fg/10"}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-site-fg/40">Review</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 text-site-fg/20" size={18} />
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.comment}
                                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-site-bg/50 border border-site-fg/5 rounded-2xl focus:border-accent-orange outline-none transition-colors text-sm font-medium resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-site-fg text-site-bg rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-accent-orange transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending...' : (
                                        <>
                                            Submit Review <Send size={14} />
                                        </>
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-green-600 justify-center font-bold text-[10px] uppercase tracking-widest"
                                    >
                                        <Check size={14} /> Review submitted successfully!
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
