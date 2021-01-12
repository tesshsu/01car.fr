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
								2 formules aux choix:
							</h4>
						  </div>
						</div>
					  </li>
					</ul>
					  <div className="avantagePosterPart flex flex-wrap">
						  <div className="w-full px-4 flex-1 rounded border border-solid border-gray-200 py-1 mr-4">
							  <h4 className="text-xl block my-2 p-3 font-bold text-white">Classic</h4>
							  <p className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900"><span
								  className="mt-2 mr-2 text-4xl">€</span><span>0
							  </span></p>
							  <hr className="mt-6 border-b-1 border-gray-400" />
							  <h4 className="text-md block my-2 p-3 font-bold text-white">valide pour tous annonce classic, sans modifications, sans note de conficance</h4>
						  </div>
						  <div className="w-full px-4 flex-1 rounded border border-solid border-gray-200 py-1 px-2">
							  <h4 className="text-xl block my-2 p-3 font-bold text-white">Premium</h4>
							  <p className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900"><span
								  className="mt-2 mr-2 text-4xl">€</span><span>6,99
							  </span></p>
							  <hr className="mt-6 border-b-1 border-gray-400" />
							  <h4 className="text-md block my-2 p-3 font-bold text-white">valide part mois, par une annonce, avec modifications illimite durant un mois par un annonce</h4>
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
								Vendez votre véhicule grâce a l'indice de confiance
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
							 <h4 className="text-xl block my-2 p-3 font-bold text-white">Avec annonces Classic</h4>
							 <p className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900"><span
								 className="mt-2 mr-2 text-4xl">Basic</span><span><i
								 className="fas fa-clipboard-list"></i>
							  </span></p>
							 <hr className="mt-6 border-b-1 border-gray-400" />
							 <h4 className="text-md block my-2 p-3 font-bold text-white">Trouve les offres minimux note de confiance</h4>
						 </div>
						 <div className="w-full px-4 flex-1 rounded border border-solid border-gray-200 py-1 px-2">
							 <h4 className="text-xl block my-2 p-3 font-bold text-white">Avec annonces Premium</h4>
							 <p className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900"><span
								 className="mt-2 mr-2 text-4xl">Top</span><span><i
								 className="far fa-thumbs-up"></i>
							  </span></p>
							 <hr className="mt-6 border-b-1 border-gray-400" />
							 <h4 className="text-md block my-2 p-3 font-bold text-white">Trouve les offres avec maxima note de confiance, et le prix au marche avec notre analyse de donnes national</h4>
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
