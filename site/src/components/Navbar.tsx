import React, {FC, useEffect, useState} from "react"
import { Link } from 'react-router-dom';
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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
                {/* Logo à gauche */}
                <div className="flex-shrink-0">
                    <a href="/">
                        <img src="/img/logo_noir.png" alt="Logo" className="h-20 w-auto" />
                    </a>
                </div>

                {/* Menu centré */}
                <div className="flex-1 flex justify-center">
                    <div className="flex space-x-20">
                        <a href="#presentation" className="link-underline">Présentation</a>
                        <a href="#presentationPerso" className="link-underline">Nous connaître</a>
                        <a href="#services" className="link-underline">Nos services</a>
                    </div>
                </div>

                {/* Bouton à droite */}
                <div className="flex-shrink-0">
                    <a
                        href="#contact"
                        className="px-4 py-2 border border-black rounded-md text-black hover:bg-black hover:text-white transition-colors duration-300"
                    >
                        Contactez-nous
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar