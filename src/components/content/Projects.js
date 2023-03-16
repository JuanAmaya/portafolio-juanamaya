import { useState } from "react";
import Modal from "../Modal";
import { motion } from "framer-motion";

export default function Projects() {
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

    const PROJECTS = [
        {
            id: 3,
            name: "POKEMON",
            image: "./showcase/pokemon/pokemonPage.jpg",
            imgCover: "./showcase/pokemon/pokemonCover.jpg",
            desc: "Proyecto en el que se agarran datos de la PokeApi con los que se forma un juego en el que el usuario tiene que adivinar que Pokemon es el que se muestra, tiene 3 opciones para adivinar, cada partida tiene 3 vidas y un minuto, entre mas adivine mas puntos gana y sube de nivel, además hay dos dificultades, y la opción de elegir entre el idioma español o el inglés.",
            technologies: [
                {
                    id: 0,
                    image: "./icons/react.png",
                    name: "React"
                },
                {
                    id: 1,
                    image: "./icons/nextjs.png",
                    name: "Next.js"
                },
                {
                    id: 2,
                    image: "./icons/chakraui.png",
                    name: "Chakra UI"
                },
                {
                    id: 3,
                    image: "./icons/pokeapi.png",
                    name: "PokeAPI"
                },
            ],
            watchOptions: [
                {
                    id: 12,
                    image: "./icons/github.png",
                    link: "https://github.com/JuanAmaya/pokemon-guess",
                    title: "Código",
                    nameAlt: "Github"
                },
                {
                    id: 13,
                    image: "./icons/eye.png",
                    link: "https://pokemon-guess-pied.vercel.app/",
                    title: "Página",
                    nameAlt: "ojo"
                },
            ]
        },
        {
            id: 2,
            name: "FORTNITE",
            image: "./showcase/fortnite/fortnitePage.jpg",
            imgCover: "./showcase/fortnite/fortniteCover.jpg",
            desc: "Proyecto en el que se agarran datos de Fortnite-API y se muestran todos los cosméticos del juego, con buscador y opción de agregarlos a favoritos.",
            technologies: [
                {
                    id: 0,
                    image: "./icons/react.png",
                    name: "React"
                },
                {
                    id: 1,
                    image: "./icons/nextjs.png",
                    name: "Next.js"
                },
                {
                    id: 2,
                    image: "./icons/chakraui.png",
                    name: "Chakra UI"
                },
                {
                    id: 3,
                    image: "./icons/fortniteapi.png",
                    name: "Fortnite API"
                },
            ],
            watchOptions: [
                {
                    id: 10,
                    image: "./icons/github.png",
                    link: "https://github.com/JuanAmaya/fortnite",
                    title: "Código",
                    nameAlt: "Github"
                },
                {
                    id: 11,
                    image: "./icons/eye.png",
                    link: "https://fortnite-kappa.vercel.app/",
                    title: "Página",
                    nameAlt: "ojo"
                },
            ]

        },
        {
            id: 1,
            name: "RANDOM STARS",
            image: "./showcase/brawlStars/brawlPage.jpg",
            imgCover: "./showcase/brawlStars/brawlCover.jpg",
            desc: "Proyecto basado en el juego de Brawl Stars, en el que se muestran los diferentes personajes y se elige uno al azar, el usuario puede elegir si no quiere salga uno o más personajes, además del mismo propósito, pero con los modos del juego. ",
            technologies: [
                {
                    id: 0,
                    image: "./icons/html.png",
                    name: "HTML"
                },
                {
                    id: 1,
                    image: "./icons/sass.png",
                    name: "SCSS"
                },
                {
                    id: 2,
                    image: "./icons/javascript.jpg",
                    name: "JavaScript"
                },
            ],
            watchOptions: [
                {
                    id: 12,
                    image: "./icons/github.png",
                    link: "https://github.com/JuanAmaya/RandomStars",
                    title: "Código",
                    nameAlt: "Github"
                },
                {
                    id: 13,
                    image: "./icons/eye.png",
                    link: "https://juanamaya.github.io/RandomStars/index.html",
                    title: "Página",
                    nameAlt: "ojo"
                },
            ]
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [projectModal, setProjectModal] = useState(null);

    const openProjectModal = (projectObject) => {
        setProjectModal(<Modal setIsOpen={setIsOpen} proyectObject={projectObject} />);
        setIsOpen(true);
    };

    return (
        <motion.div className="flex flex-col bottom-0 right-12 w-fit absolute gap-2 overflow-y-scroll h-screen justify-center pt-80 pb-24 custom-scrollbar" variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            {PROJECTS.map((project) => <div className='text-white z-30 select-none p-2 rounded-xl bg-transparent transition-colors duration-300 hover:bg-white/20' key={project.id}>
                <div onClick={() => openProjectModal(project)}>
                    <span className="text-lg font-bold lg:text-2xl">// {project.name}</span>
                    <img src={project.image} alt={`Demostracion de la pagina de ${project.name}`} className=" w-40 h-24 object-cover lg:w-80 lg:h-40" />
                </div>

            </div>)}
            {isOpen && projectModal}
        </motion.div>
    );
}