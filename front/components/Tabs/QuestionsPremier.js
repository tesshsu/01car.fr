import React from "react";
import Link from "next/link";
import CardPriceVehicule from "components/Cards/CardPriceVehicule.js";
import FileUpload from "components/Tabs/FileUpload.js";

export default function QuestionsPremier() {
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
                <i className="fas fa-space-shuttle text-base mr-1"></i> Questions 11 - 15: Historique du Véhicule
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
                <i className="fas fa-cog text-base mr-1"></i>  Questions 16 - 20 : Entretiens du véhicule
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
							Q11- le véhicule est il sous garantie?
						  </label>
						  <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">Oui &#xf164;</option>
								<option value="0">Non &#xf165;</option>
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
							Q12- Véhicule ayant déjà subit 1 Accident (même mineur) :
						  </label>
						  <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">Oui &#xf164;</option>
								<option value="0">Non &#xf165;</option>
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
								Q13- Le véhicule a-t’il des défauts (griffes, coups, usures…) :
							</label>
						    <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">Oui &#xf164;</option>
								<option value="0">Non &#xf165;</option>
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
								Q14- Pouvez-vous justifier le parcours kilométrique :
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
							Q15- Contrôle technique OK ?
						  </label>
						   <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">Oui &#xf164;</option>
								<option value="0">Non &#xf165;</option>
							  </select>
							  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						    </div>
							<p className="text-md leading-relaxed text-gray-500"> Telecharger votre Contrôle technique </p>
					       <FileUpload />
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
							<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>  3eme etapt: 16 -20 questions
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
							Q16- Respect des entretiens périodiques :
						  </label>
						  <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">Oui &#xf164;</option>
								<option value="0">Non &#xf165;</option>
							  </select>
							  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						    </div>
						</div>
						<div className="w-full lg:w-6/12 px-4">
						  <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-7"
						  >
							Q17- Date du prochain entretien ?
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
							Q18- Facture d'achat?
						  </label>
						  <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">Oui &#xf164;</option>
								<option value="0">Non &#xf165;</option>
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
							Q19- Carte Grise* ? :
						  </label>
						   <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">Oui &#xf164;</option>
								<option value="0">Non &#xf165;</option>
							  </select>
							  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
								<i className="fas fa-angle-down text-2xl my-2"></i>
							  </div>
						   </div>
						   <p className="text-md leading-relaxed text-gray-500"> Telecharger votre carte grise </p>
					       <FileUpload />
						</div>
				  </div>
				  <div className="flex flex-wrap mt-12 px-4">
				          <label
								className="block uppercase text-gray-700 text-md font-bold mb-2"
								htmlFor="question-10"
						  >
							Q20- Possédez-vous le carnet d’entretien?
						  </label>
						  <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
							  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option value="1">Oui &#xf164;</option>
								<option value="0">Non &#xf165;</option>
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
					  <img
						  alt="..."
						  src={require("assets/img/top.png")}
						  className="w-full align-center topImage"
						/>
					  <img
						  alt="..."
						  src={require("assets/img/qualite_logo.png")}
						  className="w-full align-center togBadge"
					  />
					  <h4 className="text-2xl font-semibold">
						  RESULTATS : NOTE DE CONFIANCE FINALE
					  </h4>
					  <h4 className="text-xl font-semibold">
						  19/20 Annonce payante pour une vente plus fiable et en toute sécurité
					  </h4>
					  <p className="text-lg font-semibold">
						  * Ce 2ème Questionnaire restera STRICTEMENT CONFIDENTIEL
					  </p>
					  <p className="text-lg font-semibold">
						  Notre équipe d’experts vérifie le contenu des éléments transmis par le vendeur afin de vous garantir la qualité des données
					  </p>
					  <h4 className="text-xl font-semibold">
						  Prix de vente Suzuki SWIFT - 2012
					  </h4>
					  <CardPriceVehicule />
					  <div className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600"><i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> Finale mise à jour les inforamtion et  publier </div>					 
					  <button
								className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
							  >
								<i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> Lancer!!
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
