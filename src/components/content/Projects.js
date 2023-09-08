import { useEffect, useState } from "react";
import Modal from "../Modal";
import { motion } from "framer-motion";

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

    const DYNAMIC_PROJECTS = [
        {
            id: 5,
            name: "WORD|",
            image: "./showcase/word/wordPage.jpg",
            imgCover: "./showcase/word/wordCover.jpg",
            desc: "Proyecto el cual es un juego en que muestran 4 letras y el usuario tiene que acomodarlas para formar la palabra correcta, tiene 3 intentos, pierde uno si se equivoca o se tarda 10 segundos en contestar, las palabras las cuales saque bien se guardan en su diccionario en la cual se muestra el significado, sinónimos, antónimos de estas palabras, se hace uso de dos APIs, Random Word API se usa para generar las palabras aleatorias las cuales tiene que adivinar el usuario y Free Dictionary API para obtener las definiciones de las palabras.",
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
                    image: "./icons/tailwind.png",
                    name: "Tailwind CSS"
                },
                {
                    id: 3,
                    image: "./icons/framerMotion.png",
                    name: "Framer Motion"
                },
            ],
            watchOptions: [
                {
                    id: 12,
                    image: "./icons/github.png",
                    link: "https://github.com/JuanAmaya/words",
                    title: "Código",
                    nameAlt: "Github"
                },
                {
                    id: 13,
                    image: "./icons/eye.png",
                    link: "https://words-nu.vercel.app/",
                    title: "Página",
                    nameAlt: "ojo"
                },
            ]
        },
        {
            id: 4,
            name: "HIT AND BLOW",
            image: "./showcase/hitAndBlow/hitAndBlowPage.jpg",
            imgCover: "./showcase/hitAndBlow/hitAndBlowCover.jpg",
            desc: "Proyecto basado en el juego de mesa Mastermind, en donde la persona tiene que adivinar los cuatro colores en su orden correcto para ganar, con 8 oportunidades para resolverlo, tiene dos modos, el fácil en donde los colores a adivinar no se repiten y el difícil en el que la respuesta puede que este un color múltiples veces, se le indica después de cada turno al usuario si tuvo hits o blow con el color amarillo o verde, dependiendo de lo que obtuvo, contiene instrucciones para que el usuario entienda el juego.",
            technologies: [
                {
                    id: 0,
                    image: "./icons/react.png",
                    name: "React"
                },
                {
                    id: 1,
                    image: "./icons/tailwind.png",
                    name: "Tailwind CSS"
                },
                {
                    id: 2,
                    image: "./icons/framerMotion.png",
                    name: "Framer Motion"
                },
            ],
            watchOptions: [
                {
                    id: 12,
                    image: "./icons/github.png",
                    link: "https://github.com/JuanAmaya/hit-and-blow",
                    title: "Código",
                    nameAlt: "Github"
                },
                {
                    id: 13,
                    image: "./icons/eye.png",
                    link: "https://juanamaya.github.io/hit-and-blow/",
                    title: "Página",
                    nameAlt: "ojo"
                },
            ]
        },
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
                {
                    id: 4,
                    image: "./icons/framerMotion.png",
                    name: "Framer Motion"
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
                {
                    id: 4,
                    image: "./icons/framerMotion.png",
                    name: "Framer Motion"
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

    const LANDING_PROJECTS = [
        {
            id: 1,
            name: "Across The Spiderverse",
            image: "./showcaseLanding/acrossSpiderverse/spiderPage.jpg",
            imgCover: "./showcaseLanding/acrossSpiderverse/spiderCover.jpg",
            desc: "Un proyecto de una landing page sobre la película Spiderman: Across the spiderverse, en donde se muestran diferentes imágenes y videos sobre este, se mencionan compañías y personas las cuales trabajaron en su desarrollo, como son los directores, los actores de voz, entre otros.",
            technologies: [
                {
                    id: 0,
                    image: "./icons/react.png",
                    name: "React"
                },
                {
                    id: 1,
                    image: "./icons/tailwind.png",
                    name: "Tailwind CSS"
                },
                {
                    id: 2,
                    image: "./icons/framerMotion.png",
                    name: "Framer Motion"
                },
            ],
            watchOptions: [
                {
                    id: 10,
                    image: "./icons/github.png",
                    link: "https://github.com/JuanAmaya/spiderverse-lp",
                    title: "Código",
                    nameAlt: "Github"
                },
                {
                    id: 11,
                    image: "./icons/eye.png",
                    link: "https://juanamaya.github.io/spiderverse-lp/",
                    title: "Página",
                    nameAlt: "ojo"
                },
            ]
        },
        {
            id: 2,
            name: "Blade Runner 2049",
            image: "./showcaseLanding/br2049/brPage.jpg",
            imgCover: "./showcaseLanding/br2049/brCover.jpg",
            desc: "Un proyecto de una landing page sobre la película Blade Runner 2049, en el cual se muestra una descripción, imágenes y videos sobre esta, personajes y personas envueltas en su desarrollo, enlaces para la compra del filme, con distintas animaciones.",
            technologies: [
                {
                    id: 0,
                    image: "./icons/react.png",
                    name: "React"
                },
                {
                    id: 1,
                    image: "./icons/tailwind.png",
                    name: "Tailwind CSS"
                },
                {
                    id: 2,
                    image: "./icons/framerMotion.png",
                    name: "Framer Motion"
                },
            ],
            watchOptions: [
                {
                    id: 10,
                    image: "./icons/github.png",
                    link: "https://github.com/JuanAmaya/blade-runner",
                    title: "Código",
                    nameAlt: "Github"
                },
                {
                    id: 11,
                    image: "./icons/eye.png",
                    link: "https://juanamaya.github.io/blade-runner/",
                    title: "Página",
                    nameAlt: "ojo"
                },
            ]
        },
    ];

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
        <motion.div className={`flex flex-col bottom-0 right-12 w-fit absolute gap-2 overflow-y-scroll h-screen justify-center pb-24 custom-scrollbar pt-32rem`} variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            {showMode.map((project) => <div className='text-white z-30 select-none p-2 rounded-xl bg-transparent transition-colors duration-300 hover:bg-white/20' key={project.id}>
                <motion.div variants={pageVariants} onClick={() => openProjectModal(project)}>
                    <span className="text-lg font-bold lg:text-2xl break-words w-40 md:w-80 flex">// {project.name}</span>
                    <img src={project.image} alt={`Demostracion de la pagina de ${project.name}`} className=" w-40 h-24 object-cover md:w-80 md:h-40" />
                </motion.div>

            </div>)}
            {isOpen && projectModal}
        </motion.div>
    );
}