import React, { FC, useEffect, useState } from "react";
import logo from "../assets/img/logo_noir.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Navbar: FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // scroll down
            } else {
                setIsVisible(true); // scroll up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
                {/* Logo à gauche */}
                <div className="flex-shrink-0">
                    <a href="#header"
                       className="link-underline cursor-pointer"
                       onClick={(e) => {
                           e.preventDefault();
                           scrollToSection("header");
                       }}
                    >
                        <img src={logo} alt="Logo" className="h-20 w-auto" />
                    </a>
                </div>

                {/* Menu centré */}
                <div className="flex-1 flex justify-center">
                    <div className="flex space-x-20">
                        <a
                            href="#presentation"
                            className="link-underline cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("presentation");
                            }}
                        >
                            Présentation
                        </a>
                        <a
                            href="#presentationPerso"
                            className="link-underline cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("presentationPerso");
                            }}
                        >
                            Me connaître
                        </a>
                        <a
                            href="#services"
                            className="link-underline cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("services");
                            }}
                        >
                            Mes services
                        </a>
                    </div>
                </div>

                {/* Bouton à droite */}
                <div className="flex items-center gap-8">
                    <a
                        href="#contact"
                        className="px-4 py-2 border border-black rounded-md text-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("contact");
                        }}
                    >
                        Contactez-moi
                    </a>
                    <div className="flex space-x-8">
                        <a
                            href="https://www.facebook.com/share/1CUDV9tbBx/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors duration-300"
                        >
                            {FaFacebookF({ size: 20 })}
                        </a>
                        <a
                            href="https://www.instagram.com/ludo_educateur_canin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            {FaInstagram({ size: 20 })}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
