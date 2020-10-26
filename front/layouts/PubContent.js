import React from "react";
import Link from "next/link";
// components

export default function PubContent() {
  return (
    <>
      <section className="block relative z-1 bg-white-700">
		    <div className="container mx-auto px-4 pb-32 pt-16">
			  <div className="items-center flex flex-wrap">
				<div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
				  <div className="md:pr-12">
					<h3 className="text-xl font-semibold">
						Payez le questionnaire 20 pour obtenir une note de <span className="font-bold text-3xl text-orange-500">confiance MAXIMALE</span> et tous les <span className="font-bold text-3xl text-orange-500">AVANTAGES</span> pour vendre votre vehicule sur o1car.fr
					</h3>
					<p className="mt-4 text-lg leading-relaxed text-gray-600">
						Mettez toutes les chances de votre côté
					</p>
					<ul className="list-none mt-2">
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
							  <i className="fas fa-hands-helping"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-lg text-gray-600">
								informations principales du véhicule
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
							<h4 className="text-lg text-gray-600">
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
							<h4 className="text-lg text-gray-600">
							  Modifier à tout moment le prix du véhicule
							</h4>
						  </div>
						</div>
					  </li>
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
							  <i className="fas fa-database"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-lg 	text-gray-600">
								Fiabilité des données du véhicule
							</h4>
						  </div>
						</div>
					  </li>
					</ul>
					 <button
									className="button-payer-top-list bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
								  >
									<Link href="/prix">
										  <a
											href="#pablo"
											className={
											  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
											}
										  >
											<i className="far fa-laugh mr-1 animate-spin"></i> payez pour passer en tête de liste
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
    </>
  );
}
