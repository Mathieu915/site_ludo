import React, { FC } from "react"

const Services: FC = () => {
    return (
        <>
            <div id="services" className="container flex flex-col py-12 gap-6 md:gap-12">
                <h2 className="font-serif font-semibold text-3xl lg:text-5xl leading-none ">
                    Nos services
                </h2>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8"  dir="rtl">
                        <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4" dir="ltr">
                            <h3 className="mb-2.5 font-serif font-light text-2xl lg:text-4xl leading-none ">
                                Bilan comportemental
                            </h3>
                            <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div>
                            <div className="mx-auto relative">
                                <img
                                    className="rounded-lg"
                                    src="/img/bilan.jpg"
                                    alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8"  dir="ltr">
                        <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4" dir="ltr">
                            <h3 className="mb-2.5 font-serif font-light text-2xl lg:text-4xl leading-none ">
                                Suivi éducatif
                            </h3>
                            <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div>
                            <div className="mx-auto relative">
                                <img
                                    className="rounded-lg"
                                    src="/img/education.jpg"
                                    alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8"  dir="rtl">
                        <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4" dir="ltr">
                            <h3 className="mb-2.5 font-serif font-light text-2xl lg:text-4xl leading-none ">
                                Balades
                            </h3>
                            <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div>
                            <div className="mx-auto relative">
                                <img
                                    className="rounded-lg"
                                    src="/img/balade.jpg"
                                    alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services