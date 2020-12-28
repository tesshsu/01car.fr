import React, {useEffect, useState} from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import QuestionsClassic from "components/Tabs/QuestionsClassic.js";
import QuestionsPremier from "components/Tabs/QuestionsPremier.js";
import PubContent from "layouts/PubContent.js";
import PubContentThreeIcons from "layouts/PubContentThreeIcons.js";
import useLoggedUser from 'service/hooks/useLoggedUser';

export default function Vendre() {
    const {
        isAuthentificated
    } = useLoggedUser();

    return (
        <>
            <IndexNavbar fixed/>
            <main className="vendre-page">

                <section className="relative block h-350-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://i.ibb.co/NKM0X4Y/bg-vendre.jpg')",
                        }}
                    >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
            ></span>
                    </div>

                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                        style={{transform: "translateZ(0)"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>

                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <h1 className="font-bold text-4xl text-orange-700 mt-4 text-center">
                                Publier et vendre votre véhicule
                            </h1>
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-12/12 px-4 lg:order-1">
                                        <PubContentThreeIcons/>
                                    </div>
                                </div>
                               <QuestionsClassic/>
                            </div>
                        </div>
                    </div>
                </section>
                {!isAuthentificated ? (
                    <PubContent/>) : (null)
                }
            </main>
            <Footer/>
        </>
    );
}
