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

            <motion.div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 bg-black/70 max-w-2xl w-11/12 h-5/6 overflow-y-scroll p-8 pt-0 rounded-lg text-white different-scrollbar" variants={modalVariants} initial="hidden" animate="visible" exit="exit">
                <div className="sticky top-0 backdrop-blur-md rounded-t-lg">
                    <div onClick={() => setIsOpen(false)} className="sticky p-1 rounded-lg w-fit ml-auto hover:bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <h2 className="text-3xl text-center select-none">{proyectObject.name}</h2>
                    <div className="h-px w-full bg-white mb-2 mt-1"></div>
                </div>
                <img src={proyectObject.imgCover} alt={`Menu de la pagina Fortnite ${proyectObject.name}`} />
                <div className="my-4">
                    <p className="text-md select-none">{proyectObject.desc}</p>
                </div>
                <div className="select-none">
                    <h3 className="text-xl italic mb-2">Tecnologías utilizadas</h3>
                    <div className="grid grid-cols-2 gap-4 justify-items-center	md:grid-cols-4">
                        {proyectObject.technologies.map((tech) => <div className="flex flex-col justify-center items-center w-20 gap-1" key={tech.id}>
                            <img src={tech.image} alt={`Icono de ${tech.name}`} className="w-16" />
                            <span className="text-center text-lg bg-white/20 rounded-md px-2">{tech.name}</span>
                        </div>)}
                    </div>
                </div>

                <div className="h-px w-full bg-white my-4"></div>

                <div className="flex justify-center gap-8">
                    {proyectObject.watchOptions.map((option) => <div className="bg-white/20 rounded-lg w-fit p-2 hover:bg-emerald-200/40 transition-colors" key={option.id}>
                        <a href={option.link} target="_blank">
                            <img src={option.image} alt={`Icono de ${option.nameAlt}`} className="w-14 mx-auto" key={option.id} />
                            <span className="text-lg">{option.title}</span>
                        </a>
                    </div>)}
                </div>
            </motion.div>
        </>
    );
}