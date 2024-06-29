import AnimatedLine from '@components/animated/AnimatedLine';
import { Icon } from '@iconify/react/dist/iconify.js';
import { FeatureSectionProps } from '@typing/FeatureProps';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';


const FeatureElement: React.FC<FeatureSectionProps> = ({ title, items }) => {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (

        <div ref={ref}>
            <div>
                <h3 className="text-center text-primary">
                    {title}
                    <AnimatedLine />
                </h3>
            </div>
            <ul className="mt-4 space-y-4">
                <AnimatePresence>
                    {items.map((item, index) => (
                        <motion.li
                            initial={{ x: -50, opacity: 0 }}
                            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                            transition={{ duration: 1, delay: 0.8 * index }}
                            key={index} className="flex items-start">
                            <Icon icon={item.icon} fontSize={30} className='min-w-10 self-center text-secondary' />
                            <div className="ml-4">
                                <h4 className="leading-6 font-medium">
                                    {item.heading}
                                </h4>
                                <p className="text-base leading-6">
                                    {item.text}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </div>

    );
};
export default FeatureElement