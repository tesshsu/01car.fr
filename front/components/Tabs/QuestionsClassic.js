import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Router from "next/router";
import CardPriceVehicule from "components/Cards/CardPriceVehicule.js";
import QuestionsOptions from "components/Tabs/QuestionsOptions.js";
import FileUpload from "components/Tabs/FileUpload.js";
import ImageUpload from "components/Tabs/ImageUpload.js";
import { Form, Field } from 'react-final-form';
import useLogguedUser from 'service/hooks/useLogguedUser';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const required = value => (value ? undefined : 'champs obligatoire')
const mustBeNumber = value => (isNaN(value) ? "Doit être en chiffre" : undefined);
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true, value: true }}>
    {({ meta: { error, touched, value } }) =>
      error && touched ? <span className="text-orange-500 text-sm">{error}</span> : null
    }
  </Field>
)
const Condition = ({ when, is, children }) => (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
)

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}
const pattern= new RegExp("(.+ .*)|(.* .+)");
const matchMarqueModel = value => (!pattern.test(value) ? "Il faut Marque avec model par example CITROEN C4" : undefined);

const formatDate = value => {
  if (!value) return value;
  return `${value.slice(0, 4)}-${value.slice(5, 7)}-${value.slice(8,10)}`;
}

export default function QuestionsClassic() {
  const [openTab, setOpenTab] = React.useState(1);
   const {
    isAuthentificated,
    logguedUser
  } = useLogguedUser();  
  
  useEffect(() => {
    if (isAuthentificated && logguedUser) {
      //Router.push("/auth/login");
    }
  }, [isAuthentificated, logguedUser]);
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
                <i className="fas fa-book text-base mr-1"></i> votre véhicule Informations générales
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
                <i className="fas fa-space-shuttle text-base mr-1"></i> Questions 1 - 5 Informations générales
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
                <i className="fas fa-cog text-base mr-1"></i>  Questions 6 - 10 : Caractéristiques du véhicule
              </a>
            </li>
			
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
				<Form
					onSubmit={onSubmit}
					subscription={{ submitting: true, pristine: true }}
				>
					{({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
						<div className="tab-content tab-space">
						<div className={openTab === 1 ? "block" : "hidden"} id="link1">
						    <div className="flex flex-wrap">
							    <div className="w-full lg:w-6/12 px-4">
									<label
										className="block uppercase text-gray-700 text-md font-bold mb-2"
										htmlFor="marqueModel"
									>
										* Marque modèle :
									</label>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Field
										  name="marqueModel"
										  validate={composeValidators(required, matchMarqueModel)}
										  component="input"
										  type="text"
										  value=""
										  placeholder="BMW SERIE 3"
										  className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded border border-gray-400 text-sm shadow focus:outline-none focus:shadow-outline w-full pl-10"
										/>
									    <Error name="marqueModel" />
								    </div>
								</div>
								
								<div className="w-full lg:w-6/12 px-4">
									<label
										className="block uppercase text-gray-700 text-md font-bold mb-2"
										htmlFor="dt_entry_service"
									>
										* Date de mec :
									</label>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Field
										  name="dt_entry_service"
										  validate={required}
										  component="input"
										  type="date"
										  value=""
										  format={formatDate}
										  className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded border border-gray-400 text-sm shadow focus:outline-none focus:shadow-outline w-full pl-10"
										/>
                                      <Error name="dt_entry_service" />
								    </div>
                                </div>
							</div>
							
							<div className="flex flex-wrap">
							    <div className="w-full lg:w-6/12 px-4">
									<label
										className="block uppercase text-gray-700 text-md font-bold mb-2"
										htmlFor="fuel"
									>
										* Energie :
									</label>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Field name="fuel" 
									         validate={required} 
											 component="select"
											 className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"									         
									  >
                                        <option></option>
                                        <option value="Diesel">Diesel (Diesel)</option> 
										<option value="Electric">Electric (Électrique)</option>
										<option value="Gasoline">Gasoline (Essence)</option> 
										<option value="Ethanol">Ethanol (Ethanol)</option> 
										<option value="LPG">LPG (GPL)</option> 
										<option value="Hybrid">Hybrid (Hybride)</option>
                                      </Field>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                        <i className="fas fa-angle-down text-2xl my-2"></i>
                                      </div>
                                      <Error name="fuel" />
								    </div>								
                                </div>
								<div className="w-full lg:w-6/12 px-4">
									<label
										className="block uppercase text-gray-700 text-md font-bold mb-2"
										htmlFor="km"
									>
									  *Kilométrage :
									</label>
									<Field
									  name="km"
									  validate={composeValidators(required, mustBeNumber)}
									  component="input"
									  type="text"
									  value=""
									  placeholder="12000"
									  className="px-3 py-2 placeholder-gray-400 text-gray-700 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
									/>
									<Error name="km" />
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
									<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>  1ème étape: 1 - 5 questions
								</a>
							</div>
							
						</div>
						<div className={openTab === 2 ? "block" : "hidden"} id="link2">
							<div className="flex flex-wrap">
                              <div className="w-full lg:w-6/12 px-4">
									<label
										className="block uppercase text-gray-700 text-md font-bold mb-2"
										htmlFor="question-1"
									>
										Q1 - VOUS êtes :
									</label>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Field name="question-1" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option></option>
                                        <option value="particulier" note="1">particulier</option>
                                        <option value="professionnel" note="0">professionnel</option>
                                      </Field>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                        <i className="fas fa-angle-down text-2xl my-2"></i>
                                      </div>
                                      <Error name="question-1" />
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
                                      <Field name="question-2" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option></option>
                                        <option value="Immédiatement" note="1">Immédiatement</option>
                                        <option value="Dans un mois" note="0">Dans un mois</option>
                                        <option value="plus tard" note="0">plus tard</option>
                                      </Field>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                        <i className="fas fa-angle-down text-2xl my-2"></i>
                                      </div>
                                      <Error name="question-2" />
                                      <Condition when="question-2" is="plus" className="mt-2">
                                        <p className="text-md leading-relaxed text-gray-500"> Votre annonce durée juste 2 mois </p>
                                      </Condition>
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
                                      <Field name="question-3" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option></option>
                                        <option value="non fumeur" note="1">non fumeur</option>
                                        <option value="fumeur" note="0">fumeur</option>
                                      </Field>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                        <i className="fas fa-angle-down text-2xl my-2"></i>
                                      </div>
                                      <Error name="question-3" />
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
                                      <Field name="question-4" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option></option>
                                        <option value="Oui" note="1">Oui &#xf164;</option>
                                        <option value="Non" note="0">Non &#xf165;</option>
                                      </Field>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                        <i className="fas fa-angle-down text-2xl my-2"></i>
                                      </div>
                                      <Error name="question-4" />
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
                                  <Field name="question-5" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    <option></option>
                                    <option value="Changer de véhicule" note="1">Changer de véhicule</option>
                                    <option value="Autre projet" note="0">Autre projet</option>
                                  </Field>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                    <i className="fas fa-angle-down text-2xl my-2"></i>
                                  </div>
                                  <Error name="question-5" />
                                  <Condition when="question-5" is="autre" className="mt-2">
                                    <p className="text-md leading-relaxed text-gray-500"> Indique votre raison : </p>
                                    <Field
                                        validate={required}
                                        name="question-6"
                                        component="input"
                                        type="text"
										value=""
                                        placeholder="votre raison"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                                    />
                                  </Condition>
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
									<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>  2ème étape: 6 -10 questions
								</a>
							</div>
						</div>

						<div className={openTab === 3 ? "block" : "hidden"} id="link3">
							<div className="flex flex-wrap px-4">
								<label
										className="block uppercase text-gray-700 text-md font-bold mb-2"
										htmlFor="estimate_price"
									>
									  Q6- Annoncez votre prix de vente :
									</label>
									<Field
									  name="estimate_price"
									  validate={composeValidators(required, mustBeNumber)}
									  component="input"
									  type="text"
									  value=""
									  placeholder="12420"
									  className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white border border-gray-400 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
									/>
									<Error name="estimate_price" />
							</div>

							<div className="flex flex-wrap mt-12 px-4">
							   <p className="block uppercase text-gray-700 text-md font-bold mb-2">Q7- Équipements de série et options :</p>
							</div>

							<QuestionsOptions />

							<div className="flex flex-wrap mt-8">
								<div className="w-full lg:w-6/12 px-4">
								  <label
										className="block uppercase text-gray-700 text-md font-bold mb-2"
										htmlFor="question-8"
								  >
									Q8 - Nombre de mains:
								  </label>
								  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                    <Field name="question-8" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                      <option></option>
                                      <option value="1ère ou 2ème main" note="1">1ère ou 2ème main</option>
                                      <option value="3ème main ou plus" note="0">3ème main ou plus</option>
                                    </Field>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                      <i className="fas fa-angle-down text-2xl my-2"></i>
                                    </div>
                                    <Error name="question-8" />
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
                                     <Field name="question-9" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                       <option></option>
                                       <option value="Neuf" note="1">Neuf</option>
                                       <option value="Très bon état" note="1">Très bon état</option>
									   <option value="Bon état" note="1">Bon état</option>
									   <option value="satisfaisant" note="0">satisfaisant</option>
                                     </Field>
                                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                       <i className="fas fa-angle-down text-2xl my-2"></i>
                                     </div>
                                     <Error name="question-9" />
								   </div>
								</div>
							</div>

							<div className="flex flex-wrap mt-8 px-4">
								  <label
										className="block uppercase text-gray-700 text-md font-bold mb-2"
										htmlFor="question-10"
								  >
									Q10- Origine du véhicule :
								  </label>
								  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                    <Field name="question-10" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                      <option></option>
                                      <option value="FR" note="1">française</option>
                                      <option value="0" note="0">étrangère</option>
                                    </Field>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                      <i className="fas fa-angle-down text-2xl my-2"></i>
                                    </div>
                                    <Error name="question-10" />
								   </div>
							</div>

							<div className="flex flex-wrap mt-12 px-4 align-center justify-center">
							   <a
									className="text-kl bg-orange-500 text-white font-bold uppercase px-4 py-5 shadow-lg rounded block leading-normal "
									onClick={e => {
									  e.preventDefault();
									  setOpenTab(4);
									}}
                                    type="submit"
                                    disabled={submitting}
									data-toggle="tab"
									href="#link4"
									role="tablist"
											  >
									<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>  Envoyer pour voir resultat
								</a>
							</div>
						</div>
						<div className={openTab === 4 ? "block" : "hidden"} id="link4">
							<div className="container mx-auto text-center">
							  <h4 className="text-2xl font-semibold">
								  RESULTATS : 1ere NOTE DE CONFIANCE SUR 20
							  </h4>
							  <h4 className="text-xl font-semibold">
								  <span className="noteTotal">7</span>/20 Annonce offre GRATUITE
							  </h4>
							  <h4 className="text-xl font-semibold">
								  Prix de vente <span className="marqueModel">Suzuki SWIFT</span> - <span className="dt_entry_service">2012</span>
							  </h4>
							  <CardPriceVehicule />
							  <div className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600"><i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> ETAPE SUIVANTE </div>
							  <p className="text-md leading-relaxed text-gray-500"> Telecharger 10 photos MAX pour publier votre annonce ( ficher jpg, png, gif ), Téléchargez des photos de votre voiture depuis l'extérieur, du tableau de bord avec le moteur allumé, de la console centrale etc </p>
							  <div className="demoPhotos flex justify-center">
							    <div className="mr-4 p-3">
								<img
									alt="..."
									src={require("assets/img/img-example-full-outside.jpg")}
									className="shadow-xl rounded-full h-auto p-3 align-middle border-none max-w-210-px bg-white bg-white rounded text-sm shadow outline-none"
								  />
								</div>
								<div className="mr-4 p-3">
								  <img
									alt="..."
									src={require("assets/img/img-example-full-dashboard.jpg")}
									className="shadow-xl rounded-full h-auto p-3 align-middle border-none max-w-210-px bg-white bg-white rounded text-sm shadow outline-none"
								  />
								</div>
								<div className="mr-4 p-3">
								  <img
									alt="..."
									src={require("assets/img/img-example-full-seats.jpg")}
									className="shadow-xl rounded-full h-auto p-3 align-middle border-none max-w-210-px bg-white bg-white rounded text-sm shadow outline-none"
								  />
								</div>
							  </div>
							  <ImageUpload />
							  <div className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600"><i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> Publier votre annonce </div>
                              {!isAuthentificated ? (
								<Link href="/auth/login">
								  <a
									href="#"
									className={
									  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-orange-500"
									}
								  >
									<i className="text-orange-900 fas fa-user" /> Connecxion pour publier
								  </a>
								</Link>
								) : (
								<button
										className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
                                        type="submit"
                                        disabled={submitting}
									  >
										<i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> PUBLIER
							    </button>
							   )}
							   <h4 className="text-xl font-semibold">
								  OU
							  </h4>
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
												<i className="far fa-laugh mr-1 animate-spin"></i> Continuez pour passer en tête de liste
											  </a>
										  </Link>
							   </button>
							   <p className="text-md leading-relaxed text-gray-500"> Votre annonce sera pré-remplie à l’issue de ce questionnaire. Vous ACCEPTEZ les conditions pour publier votre annonce </p>
							</div>
						</div>
						</div>
                        </form>
					)}
				</Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
