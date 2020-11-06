import React from "react";
import Link from "next/link";

// components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import PubContent from "layouts/PubContent.js";

export default function Prix() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="prix-page">
        <div className="relative pt-16 pb-20 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Obtenez plus de confiance
                  </h1>
                  <div className="flex justify-center">
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
                        <span className="text-sm text-gray-500">Vendre facilement</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="pb-16 relative">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="classic-block w-12/12 md:w-4/12 lg:w-5/12 px-12 md:px-4 -mt-32 pt-6 bg-gray-200">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white-800 border-2 border-gray-200">
                <h2 class="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900">
					Classic gratuit
				</h2>
				<div class="mt-4 flex items-center justify-center font-display">
					<span class="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900">
					  <span class="mt-2 mr-2 text-4xl">
						€
					  </span>
					  <span>
						0
					  </span>
					</span>
					<span class="text-2xl leading-8 font-semibold text-gray-400 tracking-wide">
					  euro
					</span>
				</div>
				<hr className="mt-6 border-b-1 border-gray-400" />
                <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
					<ul>
					  <li class="mt-4 mx-4 flex items-start">
						<div class="flex-shrink-0">
						 <i class="fas fa-check"></i>
						</div>
						<p class="ml-3 text-base leading-6 font-medium text-gray-500">
						  Annonce pré-remplie
						</p>
					  </li>
					  <li class="mt-4 mx-4 flex items-start">
						<div class="flex-shrink-0">
						 <i class="fas fa-check"></i>
						</div>
						<p class="ml-3 text-base leading-6 font-medium text-gray-500">
						  Annonce gratuite
						</p>
					  </li>
					</ul>
					<div class="mt-8 text-center my-4">
					  <button
							  className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
							  type="button"
							>
							  <Link href="/vendre">
								  <a
									href="#pablo"
									className={
									  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
									}
								  >
									<i className="fas fa-car"></i> Vendre
								  </a>
							  </Link>
					  </button>
					</div>
				  </div>
              </div>
            </div>
            <div className="premium-block w-12/12 md:w-8/12 lg:w-7/12 px-12 pt-6 md:px-4 -mt-32 bg-orange-500 shadow-xl">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white-800 border-2 border-gray-400">
                <img
					  alt="..."
					  src="https://i.ibb.co/zRmF4Sr/best-choice-png-1.png"
					  className="w-full align-center togBadgePrix"
					/>
				<h2 class="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900">
					Premium
				</h2>
				<div class="mt-4 flex items-center justify-center font-display">
					<span class="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900">
					  <span class="mt-2 mr-2 text-4xl">
						€
					  </span>
					  <span>
						6.99
					  </span>
					</span>
					<span class="text-2xl leading-8 font-semibold text-gray-400 tracking-wide">
					  euro
					</span>
				</div>
				<hr className="mt-6 border-b-1 border-gray-400" />
                <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
					<ul>
					  <li class="mt-4 mx-4 flex items-start">
						<div class="flex-shrink-0">
						 <i class="fas fa-check"></i>
						</div>
						<p class="ml-3 text-base leading-6 font-medium text-gray-500 text-xl">
						  Rassurer l'acheteur grâce aux réponses
						</p>
					  </li>
					  <li class="mt-4 mx-4 flex items-start">
						<div class="flex-shrink-0">
						 <i class="fas fa-check"></i>
						</div>
						<p class="ml-3 text-base leading-6 font-medium text-gray-500 text-xl">
						 Tête de liste, grande visibilité
						</p>
					  </li>
					   <li class="mt-4 mx-4 flex items-start">
						<div class="flex-shrink-0">
						 <i class="fas fa-check"></i>
						</div> 
						<p class="ml-3 text-base leading-6 font-medium text-gray-500 text-xl">
						 Logo qualité  garantie
						</p>
					  </li>
					   <li class="mt-4 mx-4 flex items-start">
						<div class="flex-shrink-0">
						 <i class="fas fa-check"></i>
						</div>
						<p class="ml-3 text-base leading-6 font-medium text-gray-500 text-xl">
						 Modifier à tout moment le prix du véhicule
						</p>
					  </li>
					  <li class="mt-4 mx-4 flex items-start">
						<div class="flex-shrink-0">
						 <i class="fas fa-check"></i>
						</div>
						<p class="ml-3 text-base leading-6 font-medium text-gray-500 text-xl">
						 Les valeurs de déclenchement de transaction particulier et professionel qualifié
						</p>
					  </li>
					</ul>
					<div class="mt-8 text-center my-4">
					  <button
							  className="bg-orange-500 text-white active:bg-gray-700 uppercase px-6 py-4 rounded shadow hover\:shadow-md:hover outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 hover:-mt-2 ease-linear transition-all duration-150"
							  type="button"
							>
							  <Link href="/vendre_premium">
								  <a
									href="#pablo"
									className={
									  "premiumButton text-lg py-1 px-4 font-normal block font-bold w-full whitespace-no-wrap bg-transparent text-white-500"
									}
								  >
									<i className="fas fa-thumbs-up"></i> Vendre votre voiture en tête de liste
								  </a>
							  </Link>
					  </button>
					</div>
				  </div>
              </div>
            </div>			
          </div>
        </div>
      </section>
        <section className="relative">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://i.ibb.co/vcnWHXQ/unsplash.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">o1car.fr pense à la transparence</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Où va votre argent quand vous payez 6.99 € ?
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-user-friends"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Récupération des données  15%
                          </h4>
                        </div>
						<div className="relative w-full">
						  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
							<div
							  style={{ width: "15%" }}
							  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
							></div>
						 </div>	 
                        </div>						 
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-user-friends"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Salaires  21%
                          </h4>
                        </div>
						<div className="relative w-full">
						  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
							<div
							  style={{ width: "21%" }}
							  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
							></div>
						 </div>
                    </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-user-friends"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Hébergement  21%
                          </h4>
                        </div>
						<div className="relative w-full">
						  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
							<div
							  style={{ width: "21%" }}
							  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
							></div>
						 </div>
                        </div>
                      </div>
                    </li>
					<li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-money-check-alt"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dépenses  15%</h4>
                        </div>
						<div className="relative w-full">
						  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
							<div
							  style={{ width: "15%" }}
							  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
							></div>
					    </div>
                      </div>
					  </div>
                    </li>
					 <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-user-friends"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Frais  15%
                          </h4>
                        </div>
						<div className="relative w-full">
						  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
							<div
							  style={{ width: "15%" }}
							  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
							></div>
						 </div>
                        </div>
                      </div>
                    </li>
					 <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-user-friends"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Bénéfices  17%
                          </h4>
                        </div>
						<div className="relative w-full">
						  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
							<div
							  style={{ width: "17%" }}
							  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
							></div>
						 </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
		<PubContent />
      </main>
      <Footer />
    </>
  );
}
