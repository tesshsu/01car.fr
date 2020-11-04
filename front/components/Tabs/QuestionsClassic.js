import React from "react";
import Link from "next/link";
import CardPriceVehicule from "components/Cards/CardPriceVehicule.js";
import QuestionsOptions from "components/Tabs/QuestionsOptions.js";
import FileUpload from "components/Tabs/FileUpload.js";
import ImageUpload from "components/Tabs/ImageUpload.js";
import { Form, Field } from 'react-final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const required = value => (value ? undefined : 'champs obligatoire')
const pattern= new RegExp("^([A-HJ-NP-TV-Z]{2}|[0-9]{3,4})-?([A-HJ-NP-TV-Z]{2,3}|[0-9]{3})-?([A-HJ-NP-TV-Z]{2}|[0-9]{2})$");
const matchImmatriculation = value => (!pattern.test(value) ? "immatriculation inconnu" : undefined);
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
const questionTitle_tabs = [
	  { openTab: "1", herf: "#link1", icon: "fas fa-space-shuttle text-base mr-1", title: "votre véhicule Informations générales" },
	  { openTab: "2", herf: "#link2", icon: "fas fa-space-shuttle text-base mr-1", title: "Questions 1 - 5 Informations générales" },
	  { openTab: "3", herf: "#link3", icon: "fas fa-space-shuttle text-base mr-1", title: "Questions 6 - 10 Caractéristiques du véhicule" }
  ];

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
                <i className="fas fa-space-shuttle text-base mr-1"></i> votre véhicule Informations générales
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
										htmlFor="marque"
									>
										* Marque modèle :
									</label>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Field
										  name="marque"
										  validate={composeValidators(required, matchImmatriculation)}
										  component="input"
										  type="text"
										  placeholder="BMW SERIE 3"
										  className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded border border-gray-400 text-sm shadow focus:outline-none focus:shadow-outline w-full pl-10"
										/>
									    <Error name="marque" />
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
										  placeholder="11/22/2015"
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
                                      <Field name="fuel" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
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
                                        <option value="1">particulier</option>
                                        <option value="0">professionnel</option>
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
                                        <option value="1">Immédiatement</option>
                                        <option value="0">Dans un mois</option>
                                        <option value="0">plus tard</option>
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
                                        <option value="1">non fumeur</option>
                                        <option value="0">fumeur</option>
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
                                        <option value="1">Oui &#xf164;</option>
                                        <option value="0">Non &#xf165;</option>
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
                                    <option  value="1">Changer de véhicule</option>
                                    <option  value="1">Autre projet</option>
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
									  Q6- Quel prix vendez-vous :
									</label>
									<Field
									  name="estimate_price"
									  validate={composeValidators(required, mustBeNumber)}
									  component="input"
									  type="text"
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
                                      <option value="1">1ère ou 2ème main</option>
                                      <option value="0">3ème main ou plus</option>
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
                                       <option value="1">Neuf ou moins de 4 ans </option>
                                       <option value="0">Occasion plus de 4 ans </option>
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
                                      <option value="1">française</option>
                                      <option value="0">étrangère</option>
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
								  7/20 Annonce offre GRATUITE
							  </h4>
							  <h4 className="text-xl font-semibold">
								  Prix de vente Suzuki SWIFT - 2012
							  </h4>
							  <CardPriceVehicule />
							  <div className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600"><i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> ETAPE SUIVANTE </div>
							  <p className="text-md leading-relaxed text-gray-500"> Telecharger 10 photos MAX pour publier votre annonce ( ficher jpg, png, gif ) </p>
							  <ImageUpload />
							  <div className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600"><i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> Publier votre annonce </div>
							  <button
										className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
                                        type="submit"
                                        disabled={submitting}
									  >
										<i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> PUBLIER
							  </button>
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
