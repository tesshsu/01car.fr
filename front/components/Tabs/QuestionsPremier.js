import React from "react";
import Link from "next/link";

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
                <i className="fas fa-cog text-base mr-1"></i>  Questions 11 - 15: Historique du Véhicule
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-orange-500"
                    : "text-gray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Votre Résultat  
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
							className="block uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="full-name"
						  >
							Q11- Remplir historique du véhicule :
						  </label>
						  <select class="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							<option>particulier</option>
							<option>professionel</option>
						  </select>
						  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						  </div>
						</div>
						<div className="w-full lg:w-6/12 px-4">
						  <label
							className="block uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="full-name"
						  >
							Q12- Véhicule ayant déjà subit 1 Accident (même mineur) :
						  </label>
						  <select class="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							<option>oui</option>
							<option>non</option>
						  </select>
						  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						  </div>
						</div>
				  </div>
				  <div className="flex flex-wrap mt-12">
				        <div className="w-full lg:w-6/12 px-4">
						  <label
							className="block uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="full-name"
						  >
							Q13- Le véhicule a-t’il des défauts (griffes, coups, usures…) :
						  </label>
						  <select class="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							<option>oui</option>
							<option>non</option>
						  </select>
						  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						  </div>
						</div>
						<div className="w-full lg:w-6/12 px-4">
						  <label
							className="block uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="full-name"
						  >
							Q14- Pouvez-vous justifier le parcours kilométrique :
						  </label>
						  <select class="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							<option>oui</option>
							<option>non</option>
						  </select>
						  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						  </div>
						</div>
				  </div>
				  <div className="flex flex-wrap mt-12 px-4">
				       <label
							className="block uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="full-name"
						  >
							Q15- Contrôle technique OK ?
						  </label>
						  <select class="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							<option>oui</option>
							<option>non</option>
						  </select>
						  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						  </div>
				  </div>				                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex flex-wrap">
				        <div className="w-full lg:w-6/12 px-4">
						  <label
							className="block uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="full-name"
						  >
							Q16- Respect des entretiens périodiques :
						  </label>
						  <select class="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							<option>oui</option>
							<option>non</option>
						  </select>
						  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						  </div>
						</div>
						<div className="w-full lg:w-6/12 px-4">
						  <label
							className="block uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="full-name"
						  >
							Q17- Date du prochain entretien ?
						  </label>
						  <select class="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							<option>oui</option>
							<option>non</option>
						  </select>
						  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						  </div>
						</div>
				  </div>
				  <div className="flex flex-wrap mt-12">
				        <div className="w-full lg:w-6/12 px-4">
						  <label
							className="block uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="full-name"
						  >
							Q19- Carte Grise* ? :
						  </label>
						  <select class="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							<option>oui</option>
							<option>non</option>
						  </select>
						  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						  </div>
						</div>
						<div className="w-full lg:w-6/12 px-4">
						  <label
							className="block uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="full-name"
						  >
							Q20- Possédez-vous le carnet d’entretien?:
						  </label>
						  <select class="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							<option>Neuf ou moins de 4 ans </option>
							<option>Occasion plus de 4 ans </option>
						  </select>
						  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						  </div>
						</div>
				  </div>
				  <div className="flex flex-wrap mt-12 px-4">
				       <label
							className="block uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="full-name"
						  >
							Q20- Possédez-vous le carnet d’entretien?:
						  </label>
						  <select class="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							<option>oui</option>
							<option>non</option>
						  </select>
						  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						  </div>
				  </div>				                  
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
					  <h4 className="text-2xl font-semibold">
						  RESULTATS : NOTE DE CONFIANCE FINALE
					  </h4>
					  <h4 className="text-xl font-semibold">
						  17/20 Annonce payante pour une vente plus fiable et en toute sécurité
					  </h4>
					  <p>
					    * Ce 2ème Questionnaire restera STRICTEMENT CONFIDENTIEL
					  </p>
					  <p>
					    Notre équipe d’experts vérifie le contenu des éléments transmis par le vendeur afin de vous garantir la qualité des données
					  </p>
					  <div className="flex flex-wrap mt-12 px-4">
						   <button
								className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
							  >
								PUBLISER ANNONCE
							  </button>
							</div>
					  </div>
					  <p>NOUS VOUS AIDONS A PRENDRE LA BONNE DECISION !</p>				  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
