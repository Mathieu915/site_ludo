import React, { FC, useEffect } from "react"
import bilan from "../assets/img/bilan.jpg"
import education from "../assets/img/education.jpg"
import balade from "../assets/img/balade.jpg"
import bbmalinois from "../assets/img/bb-malinois.jpg"
import { GeoJSON, MapContainer, Polygon, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const Services: FC = () => {
    const essonneCoords = [
        [48.37, 2.05],  // un peu plus bas et à l'ouest
        [48.40, 2.28],
        [48.48, 2.45],
        [48.58, 2.45],  // plus haut à l'est
        [48.62, 2.35],  // plus haut au centre-nord
        [48.60, 2.05],  // plus haut à l'ouest
        [48.52, 1.95],  // un peu plus bas et à l'ouest
        [48.45, 2.00],
        [48.37, 2.05],  // fermer le polygone
    ];


    function SetView({ coords, zoom }: { coords: [number, number]; zoom: number }) {
        const map = useMap();
        useEffect(() => {
            map.setView(coords, zoom);
        }, [map, coords, zoom]);
        return null;
    }

    return (
        <>
            <div id="services" className="container flex flex-col py-12 gap-6 md:gap-12">
                <h2 className="font-serif text-3xl lg:text-5xl leading-none ">
                    Mes services
                </h2>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8"  dir="rtl">
                        <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4" dir="ltr">
                            <h3 className="mb-2.5 font-serif font-light text-2xl lg:text-4xl leading-none ">
                                Bilan comportemental
                            </h3>
                            <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                                Cette première rencontre me permet de comprendre votre situation, d’identifier les causes des comportements gênants, et de vous proposer un protocole adapté à vos besoins.
                            </p>
                        </div>
                        <div>
                            <div className="mx-auto relative">
                                <img
                                    className="rounded-lg"
                                    src={bilan}
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
                                Ce suivi permet de progresser étape par étape, d’adapter les exercices en fonction des résultats obtenus et d’assurer une évolution cohérente et durable.
                            </p>
                        </div>
                        <div>
                            <div className="mx-auto relative">
                                <img
                                    className="rounded-lg"
                                    src={education}
                                    alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8"  dir="rtl">
                        <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4" dir="ltr">
                            <h3 className="mb-2.5 font-serif font-light text-2xl lg:text-4xl leading-none ">
                                Balade collective
                            </h3>
                            <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                                Une expérience enrichissante, riche en stimulations, qui favorise l’équilibre du chien et encourage sa socialisation avec ses congénères.
                            </p>
                        </div>
                        <div>
                            <div className="mx-auto relative">
                                <img
                                    className="rounded-lg"
                                    src={balade}
                                    alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8"  dir="ltr">
                        <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4" dir="ltr">
                            <h3 className="mb-2.5 font-serif font-light text-2xl lg:text-4xl leading-none ">
                                Balade individuelle
                            </h3>
                            <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                                Idéale pour les chiens qui ne peuvent pas rejoindre un groupe, cette balade offre un moment de dépense physique et mentale en toute tranquillité, avec une attention 100 % dédiée.
                            </p>
                        </div>
                        <div>
                            <div className="mx-auto relative">
                                <img
                                    className="rounded-lg"
                                    src={education}
                                    alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8"  dir="rtl">
                        <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4" dir="ltr">
                            <h3 className="mb-2.5 font-serif font-light text-2xl lg:text-4xl leading-none ">
                                Accompagnement chiot
                            </h3>
                            <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                                Je vous aide à créer un cadre rassurant dès son arrivée, puis à lui apporter progressivement l’éducation nécessaire pour en faire un adulte bien dans ses pattes.
                                <br/>
                                Séances pensées pour accueillir votre chiot dans les meilleures conditions et démarrer sur de bonnes bases : propreté, gestion des mordillements, solitude, premiers apprentissages…
                            </p>
                        </div>
                        <div>
                            <div className="mx-auto relative">
                                <img
                                    className="rounded-lg"
                                    src={bbmalinois}
                                    alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="services" className="container flex flex-col py-12 gap-6 md:gap-12">
                <h2 className="font-serif text-3xl lg:text-5xl leading-none ">
                    Où me trouver ?
                </h2>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8"  dir="ltr">
                    <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4" dir="ltr">
                        <h3 className="mb-2.5 font-serif font-light text-2xl lg:text-4xl leading-none ">
                            En Essonne !
                        </h3>
                        <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                            J'interviens principalement en Essonne.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto relative">
                            <div style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <MapContainer
                                    style={{ height: '400px', width: '100%' }}
                                >
                                    <SetView coords={[48.6, 2.25]} zoom={9} />
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <Polygon positions={essonneCoords} pathOptions={{ color: 'blue', fillOpacity: 0.2 }}>
                                        <Popup>Zone d’intervention : Essonne (91)</Popup>
                                    </Polygon>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services