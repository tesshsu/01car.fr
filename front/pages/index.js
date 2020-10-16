import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h1 className="font-bold text-4xl text-orange-700">
                Mais o1car, c'est quoi ?
              </h1>
              <h2 className="font-bold text-4xl text-orange-700">
                Sécuriser au maximum l'achat de son véhicule.

              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                ACHETER FACILEMENT VOTRE VÉHICULE AVEC UN MINIMUM DE RISQUES.
                1er SITE D’ACCOMPAGNEMENT AFIN DE SÉCURISER LA VENTE DE VÉHICULES.

              </p>
              <div className="mt-4">
                <button
                  className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link href="/vendre">
					  <a
						href="#pablo"
						className={
						  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
						}
					  >
						Vendre
					  </a>
				  </Link>
                </button>
				 <button
                  className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link href="/annonce">
					  <a
						href="#pablo"
						className={
						  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
						}
					  >
						Annonce
					  </a>
				  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
		<div className="absolute mdxhidden top-210-px b-auto right-100 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-w-580-px z-40" >
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Estimez votre voiture en 2 min !
                    </h4>
                    <div className="flex flex-wrap">
					    <div className="w-full lg:w-6/12 px-4">
						  <label
							className="block uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="full-name"
						  >
							Entrez votre immatriculation :
						  </label>
						  <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
							<i className="fas fa-lock"></i>
						  </span>
						  <input type="text" placeholder="AA-001-ZZ" className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
						</div>
						<div className="w-full lg:w-6/12 px-4">
						  <button
							className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="button"
						  >
							Envoyer
						  </button>
						</div>
                    </div>
                    <div className="flex flex-wrap">
					    <div className="w-full lg:w-6/12 px-4">						
						  <label
							className="block uppercase text-gray-700 text-xs font-bold mb-2 my-4"
							htmlFor="full-name"
						  >
							Ou repondre votre questionnaires &#8594;
						  </label>
						</div>
						<div className="w-full lg:w-6/12 px-4">
						  <button
							className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="button"
						  >
							10 questionnaires
						  </button>
						</div>
                    </div>
                  </div>
                </div>
              </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src={require("assets/img/pattern_nextjs.png")}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                <img
                  alt="..."
                  src={require("assets/img/bedcar.jpg")}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-gray-800 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    10 questions
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Note de confiance 10/20 max
					<button
							  className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
							  type="button"
							>
							  <i className="fas fa-arrow-alt-circle-right"></i> Vendre
					</button>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
					<img
					  alt="..."
					  src={require("assets/img/top.png")}
					  className="w-full align-center topImage"
					/>
					<img
					  alt="..."
					  src={require("assets/img/qualite_logo.png")}
					  className="w-full align-center togBadge animate-ping ease-in-out"
					/>
					<img
					  alt="..."
					  src={require("assets/img/goodcar.jpg")}
					  className="w-full align-middle rounded-t-lg"
					/>
					<blockquote className="relative p-8 mb-4">
					  <svg
						preserveAspectRatio="none"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 583 95"
						className="absolute left-0 w-full block h-95-px -top-94-px"
					  >
						<polygon
						  points="-30,95 583,95 583,65"
						  className="text-gray-800 fill-current"
						></polygon>
					  </svg>
					  <h4 className="text-3xl font-bold text-orange-500">
						20 questions
					  </h4>
					  <p className="text-lg font-light mt-2 text-white">
						Note de confiance 20/20 max
						<button
							  className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
							  type="button"
							>
							  <i className="fas fa-thumbs-up"></i> Vendre en Top list
						</button>
					  </p>
					</blockquote>
				  </div>               
                </div>              
              </div>
            </div>
			
          </div>
        </div>
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">comment ça marche ?</h2>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-orange-500">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Répondre aux questionnaires en ligne
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/question_classic.jpg")}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    on cherche et compare les meilleurs offre
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/landing.jpg")}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Le meilleur vehicule est a vous! c'est parti!
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/profile.jpg")}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block relative z-1 bg-white-700">
	  <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-orange-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-thumbs-up text-xl animate-ping"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Rejoignez nous o1car.fr
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                 Faites des économies en mettant toutes les chances de votre côté
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
                          <i className="fas fa-hands-helping"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Un intermédiaire de confiance
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
                          <i className="fas fa-clipboard-check"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Sécuriser au maximum l'achat de son véhicule
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          ACHETER FACILEMENT VOTRE VÉHICULE
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png")}
              />
            </div>
          </div>
        </div>
	  </section>
     

      <section className="pb-16 bg-gray-300 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-orange-500 shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-semibold text-3xl">
                Bien vendre votre vehicule
              </h3>
              <p className="text-white-600 text-lg leading-relaxed mt-4 mb-4">
                On vous accompagne dans l'achat de votre véhicule.
                vous avez des questions, contactez-nous, nous allons vous aider.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link href="/vendre">
					<a
					  href="#"
					  target="_blank"
					  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
					>
					   <i className="fas fa-car text-lg mr-1"></i>
					   <span> Vendre</span>
					</a>
				</Link>
                <Link href="/prix">
					<a
					  href="#"
					  target="_blank"
					  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
					>
					  <i className="fas fa-euro-sign"></i>
					  <span> Tarif</span>
					</a>
				</Link>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
