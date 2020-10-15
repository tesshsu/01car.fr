import React from "react";
import Link from "next/link";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import QuestionsClassic from "components/Tabs/QuestionsClassic.js";
import QuestionsPremier from "components/Tabs/QuestionsPremier.js";

export default function Vendre() {
  return (
    <>
      <Navbar transparent />
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
                  <div className="w-full lg:w-12/12 px-4 lg:order-1">
				    <div className="text-center">
						 <div className="relative pt-1">
							  <div className="flex mb-2 items-center justify-between">
								<div>
								  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
									Task in progress
								  </span>
								</div>
								<div className="text-right">
								  <span className="text-xs font-semibold inline-block text-gray-600">
									0%
								  </span>
								</div>
							  </div>
							  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
							  </div>
							</div>
						</div>
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
				<QuestionsClassic transparent />
              </div>
            </div>
          </div>
        </section>
		<section className="block relative z-1 bg-white-700">
		    <div className="container mx-auto px-4 pb-32 pt-12">
			  <div className="items-center flex flex-wrap">
				<div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
				  <div className="md:pr-12">
					<div className="text-orange-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
					  <i className="fas fa-smile text-xl"></i>
					</div>
					<h3 className="text-3xl font-semibold">
					  Payer d'avoir plus confiance sur o1car.fr
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
							  rapport complet sur l'historique du véhicule
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
							  Tête de liste, grande visibilité
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
							  Modifier à tout moment le prix du véhicule
							</h4>
						  </div>
						</div>
					  </li>
					</ul>
					 <button
									className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
								  >
									<Link href="/prix">
										  <a
											href="#pablo"
											className={
											  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
											}
										  >
											<i className="far fa-laugh mr-1 animate-spin"></i> PAYER POUR OBTENIR Top LIST
										  </a>
									  </Link>
						   </button>
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
					src={require("assets/img/question_payant.jpg")}
				  />
				</div>
			  </div>
			</div>
	    </section>
      </main>
      <Footer />
    </>
  );
}
