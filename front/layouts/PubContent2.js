import React from "react";
import Link from "next/link";
// components

export default function PubContent2() {
  return (
    <>
      <section className="block relative z-1 bg-orange-500">
		    <div className="container mx-auto px-4 pb-32">
			  <div className="items-center flex flex-wrap">
				<div className="w-full md:w-6/12 ml-auto px-12 md:px-4 mt-4">
				  <div className="md:pr-12">
					<h3 className="text-3xl font-semibold">
					  Vous etes le Vendeur ?
					</h3>
					<p className="mt-4 text-md leading-relaxed text-white">
					 Vendez votre voiture à un particulier en toute tranquillité.
					</p>
					<ul className="list-none mt-6">
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
							  d'avoir la confiance par Note
							</h4>
						  </div>
						</div>
					  </li>
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
							  Publie rapide selon votre questionaires
							</h4>
						  </div>
						</div>
					  </li>
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
							  D'avoir le contact par l'acheteur facile
							</h4>
						  </div>
						</div>
					  </li>
					</ul>
					 <button
									className="button-payer-top-list bg-gray-800 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
								  >
									<Link href="/prix">
										  <a
											href="#pablo"
											className={
											  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
											}
										  >
											Vendre
										  </a>
									  </Link>
						   </button>
				  </div>
				</div>

				<div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0 mt-4">
				 <div className="md:pr-12">
					<h3 className="text-3xl font-semibold">
					  Vous etes l'acheteur ?
					</h3>
					<p className="mt-4 text-md leading-relaxed text-white">
					 Acheter une voiture d'occasion à un particulier en toute sécurité.
					</p>
					<ul className="list-none mt-6">
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
							  Assurer le meilleur achat
							</h4>
						  </div>
						</div>
					  </li>
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
							  Annonce simple, tete en liste garantie en sécurisé
							</h4>
						  </div>
						</div>
					  </li>
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
							  <i className="far fa-check-circle"></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-800">
							  Contacter vendeur facile sans frais de charge
							</h4>
						  </div>
						</div>
					  </li>
					</ul>
					 <button
									className="button-payer-top-list bg-gray-800 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
								  >
									<Link href="/annonce">
										  <a
											href="#pablo"
											className={
											  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
											}
										  >
											Acheter
										  </a>
									  </Link>
						   </button>
				  </div>
				</div>
			  </div>
			</div>
	    </section>
    </>
  );
}
