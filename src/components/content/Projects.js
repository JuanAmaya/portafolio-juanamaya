import { useEffect, useState } from "react";
import Modal from "../Modal";
import { motion, AnimatePresence } from "framer-motion";
import DYNAMIC_PROJECTS from "../../data/dynamic_projects.json";
import LANDING_PROJECTS from "../../data/landing_projects.json";

export default function Projects({ projectMode }) {
    const pageContainerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
        }
    };

    const pageItemVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const [projectModal, setProjectModal] = useState(null);
    const [displayMode, setDisplayMode] = useState("dynamic");
    const [showMode, setShowMode] = useState(DYNAMIC_PROJECTS);

    useEffect(() => {
        const nextMode = projectMode ? "landing" : "dynamic";
        setDisplayMode(nextMode);
        setShowMode(nextMode === "landing" ? LANDING_PROJECTS : DYNAMIC_PROJECTS);
    }, [projectMode]);


    const openProjectModal = (projectObject) => {
        setProjectModal(<Modal setIsOpen={setIsOpen} proyectObject={projectObject} />);
        setIsOpen(true);
    };

    return (
        <>
            <div className="absolute bottom-0 w-fit right-0 -translate-x-[48px] z-30">
                <AnimatePresence mode="wait">
                    {showMode && (
                        <motion.div
                            key={displayMode}
                            className="flex flex-col justify-start gap-2 overflow-y-scroll h-screen  pb-24 custom-scrollbar pt-20"
                            variants={pageContainerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {showMode.map((project) => <motion.div
                                className='text-white z-30 select-none p-2 rounded-xl bg-transparent transition-colors duration-300 hover:bg-white/20'
                                variants={pageItemVariants}
                                key={project.id}
                            >
                                <div
                                    onClick={() => openProjectModal(project)}
                                >
                                    <span className="text-lg font-bold lg:text-2xl break-words w-40 md:w-80 flex"> &#47;&#47; {project.name}</span>
                                    <img src={project.image} alt={`Demostracion de la pagina de ${project.name}`} className=" w-40 h-24 object-cover rounded-b-lg rounded-r-lg md:w-80 md:h-40" />
                                </div>

                            </motion.div>)}


                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {isOpen && projectModal}
            </AnimatePresence>
        </>
    );
}