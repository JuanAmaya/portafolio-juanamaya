import { useState } from "react";
import Projects from "./Projects";
import { motion } from "framer-motion";

const ProjectsMenu = () => {
    const projectsMenuVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        },
        exit: {
            opacity: 0,
        }
    };

    const itemsMenuVariants = {
        hidden: {
            opacity: 0,
            x: 50
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
        }
    };

    const [projectMode, setProjectMode] = useState(false);

    return <>
        <motion.div className="fixed z-50 text-white top-36 left-16 text-md flex flex-col gap-2"
            variants={projectsMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.button
                className={`italic ${!projectMode ? "underline decoration-underline-green decoration-2 underline-offset-4" : ""}`}
                onClick={() => setProjectMode(false)}
                variants={itemsMenuVariants}
            >
                Dynamic
            </motion.button>
            <motion.button
                className={`italic ${projectMode ? "underline decoration-underline-green decoration-2 underline-offset-4" : ""}`}
                onClick={() => setProjectMode(true)}
                variants={itemsMenuVariants}
            >
                Landing
            </motion.button>
        </motion.div>
        <Projects projectMode={projectMode} />
    </>;
};

export default ProjectsMenu;;