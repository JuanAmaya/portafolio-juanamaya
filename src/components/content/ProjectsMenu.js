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
        },
        exit: {
            opacity: 0,
        }
    };

    const [projectMode, setProjectMode] = useState(false);

    return <motion.div
        variants={projectsMenuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        <div className="fixed z-50 text-white top-36 left-16 text-md flex flex-col gap-2">
            <button
                className={`italic ${!projectMode ? "underline decoration-underline-green decoration-2 underline-offset-4" : ""}`}
                onClick={() => setProjectMode(false)}
            >
                Dynamic
            </button>
            <button
                className={`italic ${projectMode ? "underline decoration-underline-green decoration-2 underline-offset-4" : ""}`}
                onClick={() => setProjectMode(true)}
            >
                Landing
            </button>
        </div>
        <Projects projectMode={projectMode} />
    </motion.div>;
};

export default ProjectsMenu;;