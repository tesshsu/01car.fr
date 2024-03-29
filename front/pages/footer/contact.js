import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardAcceptCondition from "components/Cards/CardAcceptCondition.js";
import * as emailjs from 'emailjs-com';
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import PubContentThreeIcons from "../../layouts/PubContentThreeIcons";
import {isSafari} from 'react-device-detect';

export default function Contact() {
    const [showModal, setShowModal] = React.useState(false);
    const [isloading, setIsloading] = React.useState(false);
    function sendEmail(e) {
        e.preventDefault();
        setIsloading(true)
        emailjs.sendForm('service_zf331yg', 'template_he9yqcz', e.target, 'user_lGeJ5l257EdFgoGRMiuiz')
            .then((result) => {
                if(isSafari){
                    alert("Votre message a bien été envoyé, Nous vous répondrons au plus vite")
                }else{
                    setShowModal(true)
                }
                setIsloading(false)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <IndexNavbar fixed />
            <main className="contact-page">
                <section className="relative block py-24 lg:pt-0 bg-gray-900">
                    <div className="contactContent container mx-auto px-4 pt-32">
                        {showModal ? (
                            <>
                                <Modal closeOnEsc={false} open={open} onClose={() => setShowModal(false)}>
                                    <PubContentThreeIcons/>
                                    <h2 className="text-2xl font-semibold text-center">Votre message a bien été envoyé, </h2>
                                    <h2 className="text-2xl font-semibold text-center">Nous vous répondrons au plus vite. </h2>
                                </Modal>
                            </>
                        ) : null}
                        <div className="contactForm flex flex-wrap justify-center mt-32">
                            <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative">
                                        <img
                                            alt="..."
                                            src={require("assets/img/logo.png")}
                                            className="contactLogo shadow-xl rounded-full h-auto p-3 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-210-px bg-white bg-white rounded text-sm shadow outline-none"
                                        />
                                    </div>
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">

                                            <h4 className="text-2xl font-semibold px-3">
                                                Contactez 1car.fr par email en remplissant ce formulaire :
                                            </h4>
                                            <form className="contact-form py-4 px-4" onSubmit={sendEmail}>
                                                <input className="block uppercase text-gray-700 text-xs font-bold mb-2"type="hidden" name="contact_number" />
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">Votre nom</label>
                                                <input className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                       required = {true}
                                                       type="text"
                                                       name="from_name"
                                                />
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2 mt-4">Votre Email</label>
                                                <input className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                    type="email"
                                                       required = {true}
                                                       name="from_email"
                                                />
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2 mt-4">Votre Message</label>
                                                <textarea
                                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                    required = {true}
                                                    name="message"
                                                />
                                                <CardAcceptCondition />
                                                <input
                                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold mt-4 uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                    type="submit"
                                                    value="Envoyer"
                                                />
                                                {isloading ? (
                                                    <div className="loading text-center text-orange-500 text-xl"><i className="fas fa-spinner animate-spin"></i></div>
                                                ):(
                                                    null
                                                )}
                                            </form>
                                    </div>
                            </div>
                        </div>
                    </div>
            </section>
            </main>
            <Footer />
        </>
    );
}
