import React from "react";
import CardPriceVehicule from "components/Cards/CardPriceVehicule.js";
import FileUpload from "components/Tabs/FileUpload.js";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import { Form, Field } from 'react-final-form';
import ImageUpload from "components/Tabs/ImageUpload.js";
import * as constant from 'helpers/constant';
import * as formValidate from 'helpers/formValidate';
import {Error} from 'helpers/formValidate';
import {submitReponses} from 'service/actions/vendre';

const QuestionsPremier = ({dispatch, loading, response, hasErrors}) => {
  const [openTab, setOpenTab] = React.useState(1);

	const onSubmit = async (values)=>{
		try {
		  let {
			...payload
		  } = values;

		  const data = { ...payload };
		  await submitReponses(data);
		} catch (err) {
		  console.log(err.response);
		  if (err.response && err.response.status === 422) {
			alert('Annonce deja existe');
		  } else {
			alert('Impossible de créer le compte, merci de constacter notre equipe');
		  }
		}
	  }


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
					initialValues={{
						Under_warranty:'',
						had_accident:'',
						defects:'',
						km_certificate:'',
						technical_check_ok:'',
						periodic_maintenance:'',
						next_maintenance_under_5000km:'',
						purchase_invoice:'',
						gray_card:'',
						maintenance_log:'',
					}}
					onSubmit={onSubmit}

				    render={({ submitError, handleSubmit, form, submitting, pristine, values, invalid }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                  <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="garantie"
                                          >
                                            Q11- le véhicule Est-il sous garantie?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field
													name="garantie"
													component={formValidate.ReactSelectAdapter}
													options={constant.OuiOptions}
													value={values.Under_warranty}
													className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
												 />
                                              <Error name="garantie" />
                                          </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="accident"
                                          >
                                            Q12- Véhicule ayant déjà subit 1 Accident (même mineur) ?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field
													name="accident"
													component={formValidate.ReactSelectAdapter}
													options={constant.NonOptions}
													value={values.had_accident}
													className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
												 />
                                              <Error name="accident" />
                                          </div>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12">
                                        <div className="w-full lg:w-6/12 px-4">
                                             <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="defauts"
                                             >
                                                Q13- Le véhicule a t-il des défauts (griffes, coups, usures…) ?
                                            </label>
                                            <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                <Field
													name="defauts"
													component={formValidate.ReactSelectAdapter}
													options={constant.NonOptions}
													value={values.defects}
													className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
												 />
                                                <Error name="defauts" />
                                                <p className="text-md leading-relaxed text-gray-500"> Télécharger les défauts du véhicule si il y aura les defauts</p>
                                                <ImageUpload />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="justifier_km"
                                              >
                                                Q14- Pouvez-vous justifier le parcours kilométrique ?
                                             </label>
                                            <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                <Field
													name="justifier_km"
													component={formValidate.ReactSelectAdapter}
													options={constant.OuiOptions}
													value={values.km_certificate}
													className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
												 />
                                                <Error name="justifier_km" />
                                            </div>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="controle_technique"
                                          >
                                            Q15- Contrôle technique OK ?
                                          </label>
                                           <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                               <Field
													name="controle_technique"
													component={formValidate.ReactSelectAdapter}
													options={constant.OuiOptions}
													value={values.technical_check_ok}
													className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
												 />
                                               <Error name="controle_technique" />
                                            </div>
                                            <p className="text-md leading-relaxed text-gray-500"> Telecharger votre contrôle technique <span><NotificationDropdown title="Vos données personnelles resteront confidentielles" /></span></p>
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
                                            <i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>  3ème étape: 16 -20 questions
                                        </a>
                                  </div>

                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                  <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="respect_entretiens"
                                          >
                                            Q16- Respect des entretiens périodiques ?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field
													name="respect_entretiens"
													component={formValidate.ReactSelectAdapter}
													options={constant.OuiOptions}
													value={values.periodic_maintenance}
													className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
												 />
                                              <Error name="respect_entretiens" />
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
                                              <Field
													name="prochain_entretiens"
													component={formValidate.ReactSelectAdapter}
													options={constant.prochaineEntretienOptions}
													value={values.next_maintenance_under_5000km}
													className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
												 />
                                              <Error name="prochain_entretiens" />
                                           </div>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12">
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="facture"
                                          >
                                            Q18- Facture d'achat?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field
													name="facture"
													component={formValidate.ReactSelectAdapter}
													options={constant.OuiOptions}
													value={values.purchase_invoice}
													className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
												 />
                                              <Error name="facture" />
                                           </div>
										   <p className="text-md leading-relaxed text-gray-500">Telecharger votre facture d'achat <span><NotificationDropdown title="Vos données personnelles resteront confidentielles" /></span> </p>
										   <FileUpload />
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="carte_grise"
                                          >
                                            Q19- Carte Grise ?
                                          </label>
                                           <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                <Field
													name="carte_grise"
													component={formValidate.ReactSelectAdapter}
													options={constant.OuiOptions}
													value={values.gray_card}
													className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
												 />
                                               <Error name="carte_grise" />
                                           </div>
                                            <p className="text-md leading-relaxed text-gray-500">Si oui telecharger votre carte grise. Attention : le numéro d'identification du véhicule (VIN) doit être clairement lisible. <span><NotificationDropdown title="Vos données personnelles resteront confidentielles" /></span></p>
											<FileUpload />
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="carnet_entretien"
                                          >
                                            Q20- Possédez-vous le Carnet d’entretien?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field
													name="carnet_entretien"
													component={formValidate.ReactSelectAdapter}
													options={constant.OuiOptions}
													value={values.maintenance_log}
													className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
												 />
                                              <Error name="carnet_entretien" />
                                           </div>
										    <p className="text-md leading-relaxed text-gray-500"> Si oui telecharger votre carnet d’entretien <span><NotificationDropdown title="Vos données personnelles resteront confidentielles"  /></span></p>
											<FileUpload />
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
                                      <h4 className="text-4xl font-semibold">
                                          RÉSULTAT : NOTE DE CONFIANCE FINALE
                                      </h4>
                                      <h4 className="text-2xl font-semibold">
                                          19/20 Cette note vous permet de bénéficier à tous les avantages pour publier une annonce de qualité.
                                      </h4>
                                      <p className="text-lg font-semibold">
                                          * Les documents téléchargés resteront strictement confidentiel.
                                      </p>
                                      <p className="text-lg font-semibold">
                                          Notre équipe d’experts vérifie le contenu des éléments transmis par vous à fin de valider votre annonce.
                                      </p>
                                      <h4 className="text-2xl font-semibold">
                                          Prix de vente <span className="marqueModel" value="">Suzuki SWIFT</span> - <span className="dt_entry_service" value="">2012</span>
                                      </h4>
                                      <CardPriceVehicule />
                                      <div className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600"><i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> ETAPE FINALE ET PUBLICATION </div>
                                      <button
                                                className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                type="submit"
                                                disabled={submitting}
                                              >
                                                <i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> Publier Annonce
                                      </button>
                                       <p className="text-md leading-relaxed text-gray-500">  Le site vous garantit la qualité de l'annonce. Le site protège les documents téléchargés et restent non visibles par l'acheteur.</p>
                                    </div>
                                </div>
                              </div>
                        </form>
                    )}
				/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*const mapStateToProps = (state) => ({
  loading: state.response.loading,
  response: state.response.response,
  hasErrors: state.response.hasErrors,
})
export default connect(mapStateToProps)(QuestionsClassic)*/

export default QuestionsPremier
