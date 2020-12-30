import React from "react";
import Link from "next/link";
// components

export default function PubContentConnection() {
  return (
    <>
      <section className="block relative z-1 bg-orange-500">
		    <div className="container mx-auto px-4 pb-32">
			  <div className="items-center flex flex-wrap">
			    <p className="mt-2 text-xl">
					La Connexion vous permet de déposer et gérer vos annonces. Un accès de paiement en sécurisé. Ajouter les annonces aux favoris qui vous intéressent
				</p>

				<div className="w-full md:w-6/12 ml-auto px-12 md:px-4">
				  <div className="md:pr-12">
					<p className="text-md leading-relaxed text-white">
					 Vendez votre véhicule  à un particulier en toute transparence
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
								Obtenez une note de confiance
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
								Publiez une annonce rapidement
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
								Prise de contact facile avec le vendeur
							</h4>
						  </div>
						</div>
					  </li>
					</ul>
				  </div>
				</div>

				<div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0 mt-4">
				 <div className="md:pr-12">
					<p className="mt-4 text-md leading-relaxed text-white">
						Achetez  un véhicule à un particulier avec un minimum de risques.
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
								Le meilleur achat assuré
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
							  Acheter un véhicule à un particulier avec minimum de risques
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
								contact rapide avec le vendeur immédiatement
							</h4>
						  </div>
						</div>
					  </li>
					</ul>
				  </div>
				</div>
			  </div>
			</div>
	    </section>
		<div class="flex justify-center">
			<button
					className="button-payer-top-list bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="button"
					>
					<Link href="/auth/login">
									<a
										href="#pablo"
										className="text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
									>
										<i className="fas fa-user mr-1 animate-bounce"></i> Connectez vous
									</a>
					</Link>
			</button>
		</div>
    </>
  );
}
