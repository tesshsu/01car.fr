import React from "react";
import Link from "next/link";
import CardPriceVehicule from "components/Cards/CardPriceVehicule.js";
import FileUpload from "components/Tabs/FileUpload.js";

export default function QuestionsClassic() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-orange-500"
                    : "text-gray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> Questions 1 - 5 Informations générales
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-orange-500"
                    : "text-gray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>  Questions 6 - 10 : Caractéristiques du véhicule
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
				  <div className="flex flex-wrap">
				        <div className="w-full lg:w-6/12 px-4">
						  <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-1"
						  >
							Q1 - VOUS ETES :
						  </label>
						  <div className="relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">particulier</option>
								<option value="1">professionel</option>
							  </select>
							  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						  </div>
						</div>
						<div className="w-full lg:w-6/12 px-4">
						  <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-2"
						  >
							Q2 - Votre véhicule est disponible :
						  </label>
						  <div className="relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">Immédiatement</option>
							    <option value="0">indiquer date</option>
							  </select>
							  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						  </div>
						</div>
				  </div>
				  <div className="flex flex-wrap mt-12">
				        <div className="w-full lg:w-6/12 px-4">
							 <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-3"
						     >
								Q3 - Votre véhicule est :
							</label>
						    <div className="relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">non fumeur</option>
							    <option value="0">fumeur</option>
							  </select>
							  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						    </div>
						</div>
						<div className="w-full lg:w-6/12 px-4">
						    <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-4"
							  >
								Q4 - Avez-vous le Double des clés :
							 </label>
						    <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">Oui &#xf164;</option>
								<option value="0">Non &#xf165;</option>
							  </select>
							  <div className="pointer-ev nts-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						    </div>
						</div>
				  </div>
				  <div className="flex flex-wrap mt-12 px-4">
				          <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-5"
						  >
							Q5 - Pourquoi vendez-vous votre véhicule ?
						  </label>
						   <div className="relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option  value="1">Pour acheter autre</option>
								<option  value="0">Pour debarraser</option>
								<option value="0">autre</option>
							  </select>
							  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						    </div>
				  </div>
				  <div className="flex flex-wrap mt-12 px-4 align-center justify-center">
				       <a
							className="text-kl bg-orange-500 text-white font-bold uppercase px-4 py-5 shadow-lg rounded block leading-normal "
							onClick={e => {
							  e.preventDefault();
							  setOpenTab(2);
							}}
							data-toggle="tab"
							href="#link2"
							role="tablist"
						  >
							<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>  2eme etapt: 6 -10 questions
						</a>
				  </div>
                 			  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex flex-wrap">
				        <div className="w-full lg:w-6/12 px-4">
						  <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-6"
						  >
							Q6- IMMATRICULATION DU VEHICULE :
						  </label>
						  <input type="text" placeholder="AA-001-ZZ" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
						</div>
						<div className="w-full lg:w-6/12 px-4">
						  <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-7"
						  >
							Q7- Options du véhicule :
						  </label>
						  <div className="relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">Immédiatement</option>
							    <option value="0">Moins un mois</option>
								<option value="0">Plus un mois</option>
							  </select>
							  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						   </div>
						</div>
				  </div>
				  <div className="flex flex-wrap mt-12">
				        <div className="w-full lg:w-6/12 px-4">
						  <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-8"
						  >
							Q8 - Nombre de mains:
						  </label>
						  <div className="relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								 <option value="1">1ère ou 2ème main</option>
							     <option value="0">3ème main ou plus</option>
							  </select>
							  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						   </div>
						</div>
						<div className="w-full lg:w-6/12 px-4">
						  <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-9"
						  >
							Q9- État du véhicule:
						  </label>
						   <div className="relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								 <option value="1">Neuf ou moins de 4 ans </option>
							     <option value="0">Occasion plus de 4 ans </option>
							  </select>
							  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						   </div>
						</div>
				  </div>
				  <div className="flex flex-wrap mt-12 px-4">
				          <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-10"
						  >
							Q10- Origine du véhicule :
						  </label>
						  <div className="relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								 <option value="1">française</option>
							     <option value="0">étrangère</option>
							  </select>
							  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						   </div>
				  </div>
                    <div className="flex flex-wrap mt-12 px-4 align-center justify-center">
				       <a
							className="text-kl bg-orange-500 text-white font-bold uppercase px-4 py-5 shadow-lg rounded block leading-normal "
							onClick={e => {
							  e.preventDefault();
							  setOpenTab(3);
							}}
							data-toggle="tab"
							href="#link3"
							role="tablist"
									  >
							<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>  Envoyer pour voir resultat
						</a>
				    </div>				  
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
				    <div className="container mx-auto text-center">
					  <h4 className="text-2xl font-semibold">
						  RESULTATS : 1ere NOTE DE CONFIANCE SUR 20
					  </h4>
					  <h4 className="text-xl font-semibold">
						  7/20 Annonce offre GRATUITE
					  </h4>
					  <h4 className="text-xl font-semibold">
						  Prix de vente Suzuki SWIFT - 2012
					  </h4>
					  <CardPriceVehicule />
					  <div className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600"><i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> Final étapes pour publier </div>
					  <p className="text-md leading-relaxed text-gray-500"> Telecharger maixma 10 photos de votre vehicule </p>
					  <FileUpload />
					  <div className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600"><i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> Publier votre annonce </div>
					  <button
								className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
							  >
								<i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> PUBLIER
					  </button>
					   <h4 className="text-xl font-semibold">
						  OU
					  </h4>
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
					   <p className="text-md leading-relaxed text-gray-500"> Votre annonce sera pré-remplie à l’issue de ce questionnaire. Vous auriez accorder le terms et conditions pour publier votre annonce </p>
					</div>					 			  				  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
