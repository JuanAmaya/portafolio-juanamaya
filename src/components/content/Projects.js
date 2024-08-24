import { useEffect, useState } from "react";
import Modal from "../Modal";
import { motion } from "framer-motion";
import DYNAMIC_PROJECTS from "../../data/dynamic_projects.json";
import LANDING_PROJECTS from "../../data/landing_projects.json";

export default function Projects({ projectMode }) {
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

    const [isOpen, setIsOpen] = useState(false);
    const [projectModal, setProjectModal] = useState(null);
    const [showMode, setShowMode] = useState(DYNAMIC_PROJECTS);

    useEffect(() => {
        if (!projectMode) {
            setShowMode(DYNAMIC_PROJECTS);
        } else {
            setShowMode(LANDING_PROJECTS);
        }
    }, [projectMode]);


    const openProjectModal = (projectObject) => {
        setProjectModal(<Modal setIsOpen={setIsOpen} proyectObject={projectObject} />);
        setIsOpen(true);
    };

    return (
        <motion.div className={`flex flex-col bottom-0 right-12 w-fit absolute gap-2 overflow-y-scroll h-screen justify-center pb-24 custom-scrollbar ${projectMode ? "pt-72" : "pt-50rem "}`} variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            {showMode.map((project) => <div className='text-white z-30 select-none p-2 rounded-xl bg-transparent transition-colors duration-300 hover:bg-white/20' key={project.id}>
                <motion.div variants={pageVariants} onClick={() => openProjectModal(project)}>
                    <span className="text-lg font-bold lg:text-2xl break-words w-40 md:w-80 flex"> &#47;&#47; {project.name}</span>
                    <img src={project.image} alt={`Demostracion de la pagina de ${project.name}`} className=" w-40 h-24 object-cover md:w-80 md:h-40" />
                </motion.div>

            </div>)}
            {isOpen && projectModal}
        </motion.div>
    );
}