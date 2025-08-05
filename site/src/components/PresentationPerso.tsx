import React, { FC } from "react"
import centre from "../assets/img/centre-du-bien-etre.png"

const PresentationPerso: FC = () => {
    return (
        <>
            <section id="presentationPerso">
                <div className="container">
                    <div className="content flex flex-col py-12 lg:py-24 gap-6 md:gap-12 md:w-2/3 justify-center">
                        <div className="flex flex-col gap-4 md:gap-8">
                            <h2 className="text-white font-serif font-light text-2xl lg:text-4xl leading-none">
                                À propos de moi
                            </h2>
                            <p className="text-white font-serif font-light text-lg lg:text-xl leading-normal">
                                Ludovic Clavié, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-8">
                            <h3 className="text-white font-serif font-light text-2xl lg:text-4xl leading-none">
                                Mes certifications et formations
                            </h3>
                            <div className="flex flex-col gap-3">
                            <span className="text-white font-serif font-light text-lg lg:text-xl leading-none">
                                2024 : Lorem ipsum dolor sit amet.
                            </span>
                                <span className="text-white font-serif font-light text-lg lg:text-xl leading-none">
                                2024 : Lorem ipsum dolor sit amet.
                            </span>
                                <span className="text-white font-serif font-light text-lg lg:text-xl leading-none">
                                2025 : Lorem ipsum dolor sit amet.
                            </span>
                            </div>
                        </div>


                        <a href="https://centredubienetreanimal.fr/" target="_blank">
                            <img
                                className="rounded-lg max-w-[250px]"
                                src={centre}
                                alt=""/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PresentationPerso