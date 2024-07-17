import { motion } from "framer-motion";

export default function Description() {
    const pageVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        }
    };

    return (
        <motion.div className='text-white fixed bottom-12 right-12 z-40 select-none' variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            <span className='block'>
                Ingeniero en
            </span>
            <span className='block'>
                tecnologías de
            </span>
            <span className='block'>
                software.
            </span>
            <span className='block'>
                Motivado a crear
            </span>
            <span className='block'>
                para dejar un
            </span>
            <span className='block'>
                impacto en las
            </span>
            <span className='block'>
                personas a través
            </span>
            <span className='block'>
                de su uso.
            </span>
        </motion.div>
    );
}