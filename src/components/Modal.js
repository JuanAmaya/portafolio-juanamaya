import { motion } from "framer-motion";

export default function Modal({ setIsOpen, proyectObject }) {
    const modalVariants = {
        hidden: {
            opacity: 0,
            top: "70%",
        },
        visible: {
            opacity: 1,
            top: "50%",
        },
        exit: {
            opacity: 0,
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
            </div>

            <motion.div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 bg-black max-w-2xl w-11/12 h-5/6 overflow-y-scroll pt-0 text-white different-scrollbar border-2 border-main-green" variants={modalVariants} initial="hidden" animate="visible" exit="exit">
                <div className="sticky top-0 backdrop-blur-md bg-main-green/90 w-full mb-4 p-6">
                    <div onClick={() => setIsOpen(false)} className="absolute p-1 w-fit ml-auto right-0 top-0 hover:bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <h2 className="text-3xl text-center select-none">{proyectObject.name}</h2>
                </div>
                <div className="p-8 pt-4">
                    <img src={proyectObject.imgCover} alt={`Menu de la pagina Fortnite ${proyectObject.name}`} />
                    <div className="mt-4">
                        <p className="text-md select-none">{proyectObject.desc}</p>
                    </div>
                    <div className="select-none mt-6">
                        <h3 className="text-2xl italic mb-2 text-sub-green">Tecnologías utilizadas</h3>
                        <div className="grid grid-cols-2 gap-4 justify-items-center	md:grid-cols-4">
                            {proyectObject.technologies.map((tech) => <div className="grid justify-items-center items-center w-20 gap-1 border-2 border-main-green" key={tech.id}>
                                <span className="text-center text-lg border-b-2 border-main-green w-full">{tech.name}</span>
                                <img src={tech.image} alt={`Icono de ${tech.name}`} className="w-16" />
                            </div>)}
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-2xl italic mb-2 text-sub-green">Enlaces</h3>
                        <div className="flex justify-center gap-8">
                            {proyectObject.watchOptions.map((option) => <div className="bg-black p-2 px-6 hover:bg-main-green/70 transition-colors border-2 border-main-green" key={option.id}>
                                <a href={option.link} target="_blank" className="w-full">
                                    <img src={option.image} alt={`Icono de ${option.nameAlt}`} className="w-14 mx-auto invert" key={option.id} />
                                    <span className="text-lg text-white border-t-2 border-main-green w-full">{option.title}</span>
                                </a>
                            </div>)}
                        </div>
                    </div>

                </div>
            </motion.div>
        </>
    );
}