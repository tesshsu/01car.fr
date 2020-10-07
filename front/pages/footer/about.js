import React from "react";
import Link from "next/link";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function About() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/Ht9Jqbt/bg-vendre2.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
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
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/logo.png")}
                        className="shadow-xl rounded-full h-auto p-3 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-210-px bg-white bg-white rounded text-sm shadow outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
						  className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
						  type="button"
						>
						  <Link href="/auth/login">
						  <a
							href="#"
							className={
							  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-orange-500"
							}
						  >
							Connexion
						  </a>
						</Link>
					   </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">                       
						<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                          <i className="far fa-smile text-lg mr-1"></i>
                        </span>
                        <span className="text-sm text-gray-500">Note de confiance</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                          <i className="fas fa-unlock-alt text-lg mr-1"></i>
                        </span>
                        <span className="text-sm text-gray-500">Sécuriser au maximum</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                          <i className="fas fa-certificate text-lg mr-1"></i>
                        </span>
                        <span className="text-sm text-gray-500">ACHETER FACILEMENT</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Mais o1car, c'est quoi ?
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-left">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        o1car est une start-up qui sécurise la vente de véhicules. 
						On vous accompagne dans l'achat de votre véhicule.
						On vous garantit le maximum de sécurité.
						En effet, un questionnaire de 20 questions permet d'évaluer la confiance du vendeur.
                      </p>
					   <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Finie d'acheter les mauvaises surprises et les arnaques à tout-va!
						En quelques étapes, simples et rapides, votre véhicule vous apporte satisfaction.
						Le vendeur est transparent et l'acheteur est rassuré.
						Avec o1car, acquérir un véhicule est un jeu d'enfant !
						vous avez des questions, contactez-nous gratuitement, nous allons vous aider.
                      </p>
					   <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Cet outil permet aux professionnels, particuliers de visualiser et analyser toutes les données du véhicule afin de 
						sécuriser la vente et l'achat du véhicule. 
						Grâce à une gestion technico-économique plus fine , 
						nous leur permettons de prendre la bonne décision.
                      </p>
					  <Link href="/vendre">
                      <a
                        href="#"
                        className="font-normal text-blue-500"
                      >
                        Vendez votre voiture
                      </a>
					  </Link>
                    </div>
                  </div>
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
