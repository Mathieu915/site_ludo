import React, { FC } from "react"
import bilan from "../assets/img/bilan.jpg"
import education from "../assets/img/education.jpg"
import balade from "../assets/img/balade.jpg"
import bbmalinois from "../assets/img/bb-malinois.jpg"
interface FAQCardProps {
    question: string;
    answer: string;
    imageUrl: string;
}
const Faq: FC = () => {
    const faqs = [
        {
            question: "Combien de temps dure une séance ?",
            answer: "Une séance dure en moyenne 1h30 ...",
            imageUrl: bilan,
        },
        {
            question: "Mon chien est agressif, puis-je faire appel à vous ?",
            answer: "Oui biensur ...",
            imageUrl: education,
        },
        {
            question: "Travaillez-vous avec tous les types de chiens ?",
            answer: "Oui biensur ...",
            imageUrl: balade,
        },
        {
            question: "Quelle est la différence entre éducation et dressage ?",
            answer: "La différence ...",
            imageUrl: bbmalinois,
        },
    ];

    const FAQCard: React.FC<FAQCardProps> = ({ question, answer, imageUrl }) => {

        return (
            <div className="card">
                <div className="card-inner">
                    <div className="card-front"
                         style={{
                                backfaceVisibility: "hidden",
                                backgroundImage: `url(${imageUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                    >
                        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                        <h3 className="relative z-10 text-lg md:text-xl font-semibold text-center">{question}</h3>
                    </div>
                    <div className="card-back">{answer}</div>
                </div>
            </div>
        );
    };

    return (
        <div className="container flex flex-col py-12 gap-6 md:gap-8">
            <h2 className="font-serif text-3xl lg:text-5xl text-center leading-none ">
                FAQ
            </h2>
            <div className="flex flex-col gap-4 md:gap-10">
                {faqs.map((faq, index) => (
                    <FAQCard key={index} question={faq.question} answer={faq.answer} imageUrl={faq.imageUrl} />
                ))}

            </div>
        </div>
    )
}

export default Faq