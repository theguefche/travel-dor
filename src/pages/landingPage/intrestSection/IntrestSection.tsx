import { illustrationsList } from '@pages/landingPage/LandingPage';
import IllustrationProps from '@typing/IllustrationProps';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const IntrestSection: React.FC = () => {
    const [selectedIllu, setSelectedIllu] = useState(0);

    useEffect(() => {
        const timerID = setTimeout(() => setSelectedIllu(prev => (prev === 0 ? 1 : 0)), 4000)
        return () => {
            clearTimeout(timerID)
        }
    }, [selectedIllu])

    return (
        <div className="full-layout-element p-4">
            <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mx-auto p-8'>
                <div className='relative w-full md:w-1/2 h-auto md:h-[300px] rounded-lg prose lg:prose-lg p-4 m-auto flex flex-col justify-center'>
                    <h1>Perfect Stays for Every Occasion</h1>
                    <h5 className='w-full flex'>
                        <span>Whether you're on&nbsp;</span>
                        <TextRotator index={selectedIllu} />
                    </h5>
                    <h6>We have the perfect dormitory stays to suit your needs. Enjoy affordable and convenient accommodations without compromising on comfort.</h6>
                </div>
                <div className="w-full md:w-1/2 h-auto overflow-hidden flex justify-center items-center relative">
                    <ImageRotator index={selectedIllu} />
                </div>
            </div>
        </div>

    );
};


type ActiveIllustration = {
    index: number
}

const DURATION: number = 1

const TextRotator = ({ index }: ActiveIllustration) => {
    const ill: IllustrationProps = illustrationsList[index]

    return (
        <AnimatePresence mode='popLayout'>
            <motion.span
                className={`font-semibold min-w-52 self-center text-` + ill.color}
                key={index}
                initial={{ scaleY: 0, opacity: 0, y: 20 }}
                animate={{ scaleY: 1, opacity: 1, y: 0 }}
                exit={{ scaleY: 0, opacity: 0, y: -20 }}
                transition={{ duration: DURATION }}
            >
                {ill.text}
            </motion.span>
        </AnimatePresence>
    )
}


const ImageRotator = ({ index }: ActiveIllustration) => {

    return (
        <AnimatePresence mode='popLayout'>
            <motion.div
                className="w-[350px] h-[350px] relative flex items-center"
                key={index}
                initial={{ scaleY: 0, opacity: 0, y: 100 }}
                animate={{ scaleY: 1, opacity: 1, y: 0 }}
                exit={{ scaleY: 0, opacity: 0, y: -100 }}
                transition={{ duration: DURATION }}
            >
                {illustrationsList[index].image}
            </motion.div>
        </AnimatePresence>

    )
}


export default IntrestSection