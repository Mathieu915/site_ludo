import React, {FC, useState} from "react"
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import emailjs from '@emailjs/browser';

const Contact: FC = () => {


    const [formData, setFormData] = useState({
        firstname: "",
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value:any) => {
        setFormData({ ...formData, phone: value });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const serviceID = 'service_71j1z3x';
        const templateID = 'template_joeg72n';
        const publicKey = '29iSV3WS995yT1fv4';

        const templateParams = {
            firstname: formData.firstname,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                
                // Optionnel : reset du formulaire
                setFormData({
                    firstname: "",
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            }, (err) => {

            });
    };

    return (
        <div id="contact" className="container bg-white py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-2xl font-semibold mb-4">Nous contacter</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Prénom</label>
                        <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 !bg-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Nom</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Téléphone</label>
                        <PhoneInput
                            international
                            defaultCountry="FR"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="Entrez votre numéro"
                            className="PhoneInput mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Message</label>
                        <textarea
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#ECD5C6] py-2 px-4 rounded hover:bg-[#FAD5C6]"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-10">Nos réseaux</h2>
                <div className="flex flex-col gap-6">
                    <span className="font-serif font-semibold text-xl">
                        Instagram : <a className="font-normal" href="https://www.instagram.com/ludo_educateur_canin?igsh=MW55YzU5bGFsaW9sbw==">Ludovic Clavié</a>
                    </span>
                    <span className="font-serif font-semibold text-xl">
                        Facebook : <a className="font-normal" href="https://www.facebook.com/share/1CUDV9tbBx/">Ludovic Clavié</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Contact