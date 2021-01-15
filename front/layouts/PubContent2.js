import React from "react";
import Link from "next/link";
// components

export default function PubContent2() {
  return (
    <>
      <section className="block relative z-1 bg-orange-500">
		    <div className="container mx-auto px-4 pb-20">
			  <div className="items-center flex flex-wrap">
				<div className="w-full md:w-6/12 ml-auto px-12 md:px-4 mt-4">
				  <div className="md:pr-12">
					<h3 className="text-3xl font-semibold">
					  Vous êtes Vendeur ?
					</h3>
					<p className="mt-4 text-md leading-relaxed text-white">
					 Vendez votre véhicule en toute transparence
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
								  Prise de contact facile avec l'acheteur
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
								2 formules au choix :
							</h4>
						  </div>
						</div>
					  </li>
					</ul>
					  <div className="avantagePosterPart flex flex-wrap">
						  <div className="w-full px-4 flex-1 rounded border border-solid border-gray-200 py-1 mr-4">
							  <h4 className="text-xl block my-2 p-3 font-bold text-white">Basic</h4>
							  <p className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900"><span
								  className="mt-2 mr-2 text-4xl">€</span><span>0 euro
							  </span></p>
							  <hr className="mt-6 border-b-1 border-gray-400" />
							  <ul className="my-2 p-3 font-bold text-white">
								  <li>- Annonce pré-remplie </li>
								  <li>- Annonce gratuite </li>
								  <li>- 10 photos gratuites </li>
							  </ul>
						  </div>
						  <div className="w-full px-4 flex-1 rounded border border-solid border-gray-200 py-1 px-2">
							  <h4 className="text-xl block my-2 p-3 font-bold text-white">Premium</h4>
							  <p className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900"><span
								  className="mt-2 mr-2 text-4xl">€</span><span>6,99 euro
							  </span></p>
							  <p className="mt-2 mr-2 text-xl text-center">par annonce/mois</p>
							  <hr className="mt-6 border-b-1 border-gray-400" />
							  <ul className="my-2 p-3 font-bold text-white">
								  <li>- Rassurer l'acheteur grâce à notre questionnaire  </li>
								  <li>- Tête de liste, grande visibilité  </li>
								  <li>- Logo qualité garantie  </li>
								  <li>- Modifier à tout moment le prix du véhicule - - Estimation du véhicule par des professionnels qualifiés   </li>
								  <li>- 10 photos gratuites   </li>
								  <li>- Vente rapide garantie  </li>
							  </ul>
						  </div>
					  </div>
					 <button
									className="button-payer-top-list bg-gray-800 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
								  >
									<Link href="/vendre">
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
						Vous êtes acheteur ?
					</h3>
					<p className="mt-4 text-md leading-relaxed text-white">
						Achetez  un véhicule avec un minimum de risques
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
								Vendez votre véhicule grâce à l'indice de confiance
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
								Achetez un véhicule avec un minimum de risques
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
								  Le meilleur achat assuré
							  </h4>
						  </div>
						</div>
					  </li>
					</ul>
					 <div className="avantagePosterPart flex flex-wrap">
						 <div className="w-full px-4 flex-1 rounded border border-solid border-gray-200 py-1 mr-4">
							 <h4 className="text-xl block my-2 p-3 font-bold text-white">On cherche et compare les meilleures offres</h4>
							 <hr className="mt-6 border-b-1 border-gray-400" />
							 <div className="mt-6 hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
								 <img
									 alt="..."
									 className="align-middle border-none max-w-full h-auto rounded-lg"
									 src={require("assets/img/landing.jpg")}
								 />
							 </div>
						 </div>
						 <div className="w-full px-4 flex-1 rounded border border-solid border-gray-200 py-1 px-2">
							 <h4 className="text-xl block my-2 p-3 font-bold text-white">- Le meilleur véhicule est à vous ! C'est parti !!</h4>
							 <hr className="mt-6 border-b-1 border-gray-400" />
							 <div className="mt-6 hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
								 <img
									 alt="..."
									 className="align-middle border-none max-w-full h-auto rounded-lg"
									 src={require("assets/img/profile.jpg")}
								 />
							 </div>
						 </div>
					 </div>
					 <button
									className="button-payer-top-list bg-gray-800 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
								  >
									<Link href="/annonces">
										  <a
											href="#pablo"
											className={
											  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
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
	    </section>
    </>
  );
}
