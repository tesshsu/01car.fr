import React from "react";
import Link from "next/link";
import {useRouter} from 'next/router'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import PubContent from "layouts/PubContent.js";
import PubContent2 from "layouts/PubContent2.js";


export default function Index() {
  const router = useRouter()
  return (
    <>
      <IndexNavbar fixed />
      <main className="home-page">
	  <section className="top-block header relative pt-16 items-center flex">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h1 className="font-bold text-4xl text-orange-700">
                  o1car, c'est quoi?
              </h1>
              <h1 className="font-bold text-4xl text-orange-700">
                Sécuriser au maximum l'achat de votre véhicule.

              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                  ACHETEZ FACILEMENT VOTRE VÉHICULE AVEC UN MINIMUM DE RISQUES.
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
                          Annonces
					  </a>
				  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
		<div className="cote-form-block absolute top-210-px b-auto right-100 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-12/12 max-w-580-px z-40" >
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300-opcity">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-3xl font-semibold">
                      Publiez votre annonce en 2 min !
                    </h4>
                    <h4 className="text-xl font-semibold">
                      RÉPONDEZ AU QUESTIONNAIRE
                    </h4>					
					<div className="flex flex-wrap">													 
						<button
								className="bg-orange-500 text-white active:bg-grey-500 text-xl font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="submit"
								onClick={() => router.push('/vendre')}
						>
							Allez go!! <i class="fas fa-arrow-circle-right animate-bounce"></i>
						</button>						
					</div>							
                </div>
            </div>
        </div>
        <img
          className="bgImg absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src={require("assets/img/pattern_nextjs.png")}
          alt="..."
        />
      </section>

	  <section className="compare-block mt-48 md:mt-40 pb-40 relative bg-gray-200">
        <div className="compare-description-block items-center flex flex-wrap justify-center mb-3 md\:hidden">
			<h1 className="font-bold text-3xl text-gray-800 break-words w-70">
				Concept:  répondez au questionnaire de <span className="font-bold text-3xl text-orange-500">confiance</span> afin de vendre ou d'acheter plus facilement son véhicule
			</h1>
		  </div>
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
            <div className="class-block w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32 z-40">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                <div className="w-full align-center bannerCompare">
				  <button
							  className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
							  type="button"
							>
							  <i className="fas fa-pencil-alt "></i> 1-10 Questions
					</button>
				</div>
                  <div className="w-full align-center text-white prixCompareGratuit">
                      <span className="font-bold px-1 text-4xl text-right underline">gratuit</span>
                  </div>
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

            <div className="premier-block w-full md:w-6/12 px-4 z-40 animate-bounce-small">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800 shadow-md-orange shadow-2xl">
					<div className="w-full align-center bannerCompare">
					  <button
								  className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
								  type="button"
								>
								  <i className="fas fa-pencil-alt "></i> 11 - 20 questions
						</button>
					</div>
					<div className="w-full align-center logoNoteConfiance">
					    <button
								  className="bg-orange-500 text-white active:bg-gray-700 border-dashed border-2 shadow-2xl-orange text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-xl outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
								  type="button"
								>
								  <i className="far fa-thumbs-up"></i> Note de confiance
						</button>
					</div>
                      <div className="w-full align-center text-white prixCompare">
                          <span className="font-bold px-1 text-4xl text-right underline">6.99</span> €
                      </div>
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
						20 questions :
					  </h4>
					  <span className="text-lg font-light mt-2 text-white mr-2">
						Note de confiance 20/20 max
					  </span>
					  <button
							  className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
							  type="button"
							>
							<Link href="/prix">
										  <a
											href="#pablo"
											className={
											  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
											}
										  >
											<i className="fas fa-thumbs-up"></i> Vendre en tête de liste
										  </a>
							</Link>
						</button>
					</blockquote>
				  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="comment-marche-block justify-center text-center flex flex-wrap mt-16">
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
                      Répondez au questionnaire en ligne
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
                    on cherche et compare les meilleurs offres
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
                    Le meilleur véhicule est à vous! c'est parti!
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
	  <PubContent />
      <section className="final-block block relative z-1 bg-white-700">
	  <div className="container mx-auto px-4 pb-32">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-orange-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-thumbs-up text-xl animate-ping"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                    Rejoignez-nous sur o1car.fr
                </h3>
              </div>
            </div>

            <div className="final-sideImg-block w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-2xl"
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
      <PubContent2 />
	  </main>
      <Footer />
    </>
  );
}
