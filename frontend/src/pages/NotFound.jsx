import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-site-bg flex items-center justify-center py-20 px-6">
            {/* "Oops!" SVG Background */}
            <motion.img
                src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/670fe7d8d2c7225c1aca3b81_oops!.svg"
                alt="oops!"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                className="absolute w-[90%] md:w-[60%] opacity-100 pointer-events-none select-none z-0"
            />

            {/* Main Error Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateZ: 0 }}
                animate={{ opacity: 1, scale: 1, rotateZ: -5.8 }}
                transition={{
                    duration: 1,
                    ease: [0.23, 1, 0.32, 1],
                    rotateZ: { duration: 1.2, delay: 0.2 }
                }}
                className="relative z-10 w-full max-w-[880px] bg-site-bg rounded-[32px] p-[40px] md:p-[85px_60px_60px_60px] flex flex-col items-center shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-black/5"
                style={{ transformOrigin: 'center center' }}
            >
                <div className="relative flex flex-wrap justify-center text-center font-serif text-[60px] md:text-[118px] leading-[1] text-site-fg mb-12">
                    {/* Decorative Static GIFs */}
                    <img
                        src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/671f8d4e6862fc4943cefbc8_Static-6-yellow.gif"
                        alt=""
                        className="absolute -top-10 -left-10 w-24 h-24 md:w-32 md:h-32 object-contain pointer-events-none mix-blend-multiply opacity-80"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/671f8d4e3a8669f69f00d343_Static-5-yellow.gif"
                        alt=""
                        className="absolute -bottom-10 -right-10 w-24 h-24 md:w-32 md:h-32 object-contain pointer-events-none mix-blend-multiply opacity-80"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/67079a31e71560a787d9fcc4/671f8d4e9c4a1d9fd90c25c9_Static-1-yellow.gif"
                        alt=""
                        className="absolute top-1/2 -translate-y-1/2 -right-20 w-16 h-16 md:w-20 md:h-20 object-contain pointer-events-none mix-blend-multiply opacity-60"
                    />

                    <motion.div
                        initial={{ rotate: 5 }}
                        animate={{ rotate: -2 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="mr-4"
                    >
                        Page
                    </motion.div>
                    <motion.div
                        initial={{ rotate: -3 }}
                        animate={{ rotate: 1 }}
                        transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2 }}
                        className="mr-4"
                    >
                        Not
                    </motion.div>
                    <motion.div
                        initial={{ rotate: 2 }}
                        animate={{ rotate: -4 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.4 }}
                    >
                        Found
                    </motion.div>

                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[14px] md:text-[20px] font-bold uppercase tracking-[0.2em] opacity-40 whitespace-nowrap">
                        Error 404
                    </div>
                </div>

                {/* Back to Home Button */}
                <Link to="/" className="group relative overflow-hidden rounded-full px-10 py-4 bg-site-fg text-white transition-colors duration-500">
                    <div className="relative z-10 text-[14px] md:text-[16px] font-bold uppercase tracking-wider">
                        Back to Home
                    </div>
                    {/* Yellow Hover Slide */}
                    <div className="absolute inset-0 bg-[#F0B420] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.23,1,0.32,1]" />
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
