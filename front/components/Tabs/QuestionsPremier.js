import React from "react";
import Link from "next/link";
import CardPriceVehicule from "components/Cards/CardPriceVehicule.js";
import FileUpload from "components/Tabs/FileUpload.js";
import { Form, Field } from 'react-final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const required = value => (value ? undefined : 'champs obligatoire')
const Error = ({ name }) => (
	<Field name={name} subscription={{ error: true, touched: true }}>
		{({ meta: { error, touched } }) =>
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
				<Form
					onSubmit={onSubmit}
					initialValues={{ employed: true, stooge: 'larry' }}
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
                                                htmlFor="question-11"
                                          >
                                            Q11- le véhicule Est-il sous garantie?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="question-11" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  <option></option>
                                                  <option value="1">Oui &#xf164;</option>
                                                  <option value="0">Non &#xf165;</option>
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="question-11" />
                                          </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="question-12"
                                          >
                                            Q12- Véhicule ayant déjà subit 1 Accident (même mineur) :
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="question-12" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  <option></option>
                                                  <option value="1">Oui &#xf164;</option>
                                                  <option value="0">Non &#xf165;</option>
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="question-12" />
                                          </div>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12">
                                        <div className="w-full lg:w-6/12 px-4">
                                             <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="question-13"
                                             >
                                                Q13- Le véhicule a t-il des défauts (griffes, coups, usures…) :
                                            </label>
                                            <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                <Field name="question-13" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    <option></option>
                                                    <option value="1">Non &#xf164;</option>
                                                    <option value="0">Oui &#xf165;</option>
                                                </Field>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                    <i className="fas fa-angle-down text-2xl my-2"></i>
                                                </div>
                                                <Error name="question-13" />
                                                <Condition when="question-13" is="0" className="mt-2">
                                                    <p className="text-md leading-relaxed text-gray-500"> Telecharger votre photos griffes </p>
                                                    <FileUpload />
                                                </Condition>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="question-14"
                                              >
                                                Q14- Pouvez-vous justifier le parcours kilométrique :
                                             </label>
                                            <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                <Field name="question-14" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    <option></option>
                                                    <option value="1">Oui &#xf164;</option>
                                                    <option value="0">Non &#xf165;</option>
                                                </Field>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                    <i className="fas fa-angle-down text-2xl my-2"></i>
                                                </div>
                                                <Error name="question-14" />
                                            </div>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="question-15"
                                          >
                                            Q15- Contrôle technique OK ?
                                          </label>
                                           <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                               <Field name="question-15" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                   <option></option>
                                                   <option value="1">Oui &#xf164;</option>
                                                   <option value="0">Non &#xf165;</option>
                                               </Field>
                                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                   <i className="fas fa-angle-down text-2xl my-2"></i>
                                               </div>
                                               <Error name="question-15" />
                                            </div>
                                            <Condition when="question-15" is="1" className="mt-2">
                                              <p className="text-md leading-relaxed text-gray-500"> Telecharger votre contrôle technique </p>
                                              <FileUpload />
                                            </Condition>
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
                                            <i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>  3ème étape: 16 -20 questions
                                        </a>
                                  </div>

                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                  <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="question-16"
                                          >
                                            Q16- Respect des entretiens périodiques :
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="question-16" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  <option></option>
                                                  <option value="1">Oui &#xf164;</option>
                                                  <option value="0">Non &#xf165;</option>
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="question-16" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="question-17"
                                          >
                                            Q17- Prochain entretien ?
                                          </label>
                                          <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="question-17" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  <option></option>
                                                  <option value="0">Moins de 5000km</option>
                                                  <option value="1">Plus de 5000km</option>
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="question-17" />
                                           </div>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12">
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="question-18"
                                          >
                                            Q18- Facture d'achat?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="question-18" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  <option></option>
                                                  <option value="1">Oui &#xf164;</option>
                                                  <option value="0">Non &#xf165;</option>
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="question-18" />
                                           </div>
										   <Condition when="question-18" is="1" className="mt-2">
												<p className="text-md leading-relaxed text-gray-500"> Telecharger votre facture d'achat </p>
												<FileUpload />
                                           </Condition>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="question-19"
                                          >
                                            Q19- Carte Grise ?
                                          </label>
                                           <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                               <Field name="question-19" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                   <option></option>
                                                   <option value="1">Oui &#xf164;</option>
                                                   <option value="0">Non &#xf165;</option>
                                               </Field>
                                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                   <i className="fas fa-angle-down text-2xl my-2"></i>
                                               </div>
                                               <Error name="question-19" />
                                           </div>
                                            <Condition when="question-19" is="1" className="mt-2">
                                                <p className="text-md leading-relaxed text-gray-500"> Telecharger votre carte grise </p>
                                                <FileUpload />
                                            </Condition>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="question-20"
                                          >
                                            Q20- Possédez-vous le carnet d’entretien?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="question-20" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  <option></option>
                                                  <option value="1">Oui &#xf164;</option>
                                                  <option value="0">Non &#xf165;</option>
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="question-20" />
                                           </div>
										    <Condition when="question-20" is="1" className="mt-2">
												<p className="text-md leading-relaxed text-gray-500"> Telecharger votre carnet d’entretien </p>
												<FileUpload />
                                           </Condition>
                                  </div>
                                    <div className="flex flex-wrap mt-12 px-4 align-center justify-center">
                                       <a
                                            className="text-kl bg-orange-500 text-white font-bold uppercase px-4 py-5 shadow-lg rounded block leading-normal "
                                            onClick={e => {
                                              e.preventDefault();
                                              setOpenTab(3);
                                            }}
                                            type="submit"
                                            disabled={submitting}
                                            data-toggle="tab"
                                            href="#link3"
                                            role="tablist"
                                                      >
                                            <i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>  Valider
                                        </a>
                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className="container mx-auto text-center">
                                      <img
                                          alt="..."
                                          src={require("assets/img/qualite_logo_premium.png")}
                                          className="w-full align-center topImage animate-bounce"
                                        />
                                      <img
                                          alt="..."
                                          src={require("assets/img/qualite_logo.png")}
                                          className="w-full align-center togBadge animate-ping"
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
                                      <div className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600"><i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> ETAPE FINALE ET PUBLICATION </div>
                                      <button
                                                className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                type="submit"
                                                disabled={submitting}
                                              >
                                                <i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> Lancer!!
                                      </button>
                                       <p className="text-md leading-relaxed text-gray-500">  Le site vous garantit la qualité de l'annonce. Le site protège les documents téléchargés et restent non visibles par l'acheteur.</p>
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
