import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);


    const navLinkClass = ({ isActive }) =>
        isActive
            ? `
                relative
                text-[0.95rem]
                font-medium
                px-[1.15rem]
                py-[0.8rem]
                rounded-[14px]
                text-blue-500
                bg-[rgba(59,130,246,0.12)]
                backdrop-blur-xl
                shadow-[0_0_20px_rgba(59,130,246,0.15),inset_0_1px_1px_rgba(255,255,255,0.08)]
            `
            : `
                relative
                text-[0.95rem]
                font-medium
                px-[1.15rem]
                py-[0.8rem]
                rounded-[14px]
                text-[#b4b4b4]
                transition-all
                duration-300
                hover:text-white
                hover:bg-white/10
                hover:backdrop-blur-xl
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.08)]
                hover:-translate-y-[2px]
            `;



    return (
        <nav className="w-full px-16 py-5 flex justify-between items-center relative z-100 max-md:px-6 max-md:py-4">
            <div>
                <h1 className="text-[1.9rem] font-extrabold tracking-tight">
                    <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        SimpleFastWeb
                    </span>
                </h1>
            </div>

            <button
                className="hidden max-md:block bg-transparent border-none text-white text-[2rem] cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            <div
                className={`
                    flex items-center gap-6

                    max-md:absolute
                    max-md:left-0
                    max-md:top-[calc(100%+10px)]
                    max-md:w-full
                    max-md:p-4
                    max-md:flex-col
                    max-md:gap-4
                    max-md:bg-[rgba(15,23,42,0.92)]
                    max-md:backdrop-blur-[25px]
                    max-md:shadow-[0_20px_40px_rgba(0,0,0,0.3)]

                    ${isOpen
                        ? "max-md:flex"
                        : "max-md:hidden"
                    }
                `}
            >
                <div className="flex items-center gap-[0.35rem] max-md:flex-col max-md:w-full">
                    <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
                        Home
                    </NavLink>

                    <NavLink
                        to="/o-mnie"
                        className={navLinkClass}
                        onClick={closeMenu}
                    >
                        O mnie
                    </NavLink>

                    <NavLink
                        to="/projekty"
                        className={navLinkClass}
                        onClick={closeMenu}
                    >
                        Projekty
                    </NavLink>

                    <NavLink
                        to="/umiejetnosci"
                        className={navLinkClass}
                        onClick={closeMenu}
                    >
                        Umiejętności
                    </NavLink>

                    <NavLink
                        to="/kontakt"
                        className={navLinkClass}
                        onClick={closeMenu}
                    >
                        Kontakt
                    </NavLink>
                </div>

                <a
                    href="#contact"
                    onClick={closeMenu}
                    className="
                        text-white
                        no-underline
                        px-6
                        py-[0.85rem]
                        rounded-[14px]
                        font-semibold
                        bg-linear-to-br
                        from-[#3b82f6]
                        to-[#2563eb]
                        shadow-[0_10px_25px_rgba(59,130,246,0.25)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.75
                        hover:shadow-[0_15px_35px_rgba(59,130,246,0.4)]
                        max-md:w-full
                        max-md:text-center
                    "
                >
                    Napisz do mnie
                </a>
            </div>
        </nav>
    );
}