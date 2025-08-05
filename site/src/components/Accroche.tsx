import React, { FC } from "react"
import educ from "../assets/img/Educateur-canin.jpg"

const Accroche: FC = () => {
    return (
        <>
            <div id="presentation" className="container flex flex-col md:flex-row py-12 lg:py-24">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 lg:gap-0 gap-x-8">
                    <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4" dir="ltr">
                        <h2 className="mb-2.5 font-serif font-light text-2xl lg:text-4xl leading-none ">
                            Titre
                        </h2>
                        <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto relative">
                            <img
                                 className="rounded-lg"
                                 src={educ}
                                 alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Accroche