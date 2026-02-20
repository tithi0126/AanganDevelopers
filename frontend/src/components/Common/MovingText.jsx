import React from 'react';
import { motion } from 'framer-motion';

const MovingText = ({ text, className, baseRotation = 0, range = 4, duration = 2, delayOffset = 0.2 }) => {
    // Split text by words to apply animation to each word
    const words = text.split(' ');

    return (
        <div className={`flex flex-wrap ${className}`}>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ rotate: baseRotation }}
                    animate={{ rotate: [baseRotation - range, baseRotation + range, baseRotation - range] }}
                    transition={{
                        duration: duration + (index * 0.1),
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: index * delayOffset
                    }}
                    className="inline-block mr-[0.2em] last:mr-0"
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};

export default MovingText;
