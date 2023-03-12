import { NavLink } from "react-router-dom";

export default function NavMenu() {
    const NAV_OPTIONS = [
        {
            id: 0,
            option: "Menu",
            direction: "/"
        },
        {
            id: 1,
            option: "Proyectos",
            direction: "/proyectos"
        }
    ];

    return (
        <nav className='fixed z-50 text-white top-20 left-12 text-md italic'>
            <ul className='flex flex-col gap-2'>
                {NAV_OPTIONS.map((nav_option) => <li key={nav_option.id}>
                    <NavLink className={(navData) => (navData.isActive ? "pageActive px-3 py-1" : "px-3 py-1 hover:bg-white/20 rounded-lg transition-colors")} to={nav_option.direction} key={nav_option.id}>
                        {nav_option.option}
                    </NavLink>
                </li>)}
            </ul>
        </nav>
    );
};;