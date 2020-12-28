import React from "react";
import CardPriceVehicule from "components/Cards/CardPriceVehicule.js";
import FileUpload from "components/Tabs/FileUpload.js";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import { Form, Field } from 'react-final-form';
import Link from "next/link";
import ImageUpload from "components/Tabs/ImageUpload.js";
import {
    OuiOptions,
    NonOptions,
    prochaineEntretienOptions
} from 'helpers/constant';
import * as formValidate from 'helpers/formValidate';
import {Condition, Error} from 'helpers/formValidate';
import useAnnonces from 'service/hooks/useAnnonces';


const QuestionsPremier = ({dispatch, loading, car}) => {
  const [openTab, setOpenTab] = React.useState(1);
  const [hasErrors, setHasErrors] = React.useState(true)
    const [isFirst,setIsFrist] = React.useState(true)
  const {
      modifyCar
    } = useAnnonces();

	const onSubmit = async (values)=>{
        try {
            let {
                ...payload
            } = values;

            const data = {...payload};
            await modifyCar(data);
            if(data) {
                setIsFrist(false)
            }
        } catch (err) {
            console.log(err);
            setHasErrors(true)
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
                <i className="fas fa-book text-base mr-1"></i> Questions 11 - 15: Historique du Véhicule
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
                <i className="fas fa-tools text-base mr-1"></i>  Questions 16 - 20 : Entretiens du véhicule
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
				    render={({ handleSubmit, form, submitting, values, invalid }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                  <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="garantie"
                                          >
                                              * Q11- le véhicule Est-il sous garantie?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="garantie" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {OuiOptions.map(OuiOption => (
                                                      <option value={OuiOption.value}>{OuiOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="garantie" />
                                          </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="accident"
                                          >
                                              * Q12- Véhicule ayant déjà subit 1 Accident (même mineur) ?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="accident" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {NonOptions.map(NonOption => (
                                                      <option value={NonOption.value}>{NonOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
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
                                                 * Q13- Le véhicule a t-il des défauts (griffes, coups, usures…) ?
                                            </label>
                                            <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                <Field name="defauts" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    {NonOptions.map(NonOption => (
                                                        <option value={NonOption.value}>{NonOption.label}</option>
                                                    ))}
                                                </Field>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                    <i className="fas fa-angle-down text-2xl my-2"></i>
                                                </div>
                                                <Error name="defauts" />
                                                <Condition when="defauts" is="1" className="mt-2">
                                                <p className="text-md leading-relaxed text-gray-500"> Télécharger les défauts du véhicule si il y aura les defauts</p>
                                                <ImageUpload />
                                                </Condition>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="justifier_km"
                                              >
                                                * Q14- Pouvez-vous justifier le parcours kilométrique ?
                                             </label>
                                            <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                <Field name="justifier_km" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    {OuiOptions.map(OuiOption => (
                                                        <option value={OuiOption.value}>{OuiOption.label}</option>
                                                    ))}
                                                </Field>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                    <i className="fas fa-angle-down text-2xl my-2"></i>
                                                </div>
                                                <Error name="justifier_km" />
                                            </div>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="controle_technique"
                                          >
                                              * Q15- Contrôle technique OK ?
                                          </label>
                                           <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                               <Field name="controle_technique" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                   {OuiOptions.map(OuiOption => (
                                                       <option value={OuiOption.value}>{OuiOption.label}</option>
                                                   ))}
                                               </Field>
                                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                   <i className="fas fa-angle-down text-2xl my-2"></i>
                                               </div>
                                               <Error name="controle_technique" />
                                            </div>
                                            <Condition when="controle_technique" is="1" className="mt-2">
                                                <p className="text-md leading-relaxed text-gray-500"> Telecharger votre contrôle technique <span><NotificationDropdown title="Vos données personnelles resteront confidentielles" /></span></p>
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
                                                htmlFor="respect_entretiens"
                                          >
                                              * Q16- Respect des entretiens périodiques ?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="respect_entretiens" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {OuiOptions.map(OuiOption => (
                                                      <option value={OuiOption.value}>{OuiOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="respect_entretiens" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="question-17"
                                          >
                                              * Q17- Prochain entretien ?
                                          </label>
                                          <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="prochain_entretiens" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {prochaineEntretienOptions.map(prochaineEntretienOption => (
                                                      <option value={prochaineEntretienOption.value}>{prochaineEntretienOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
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
                                              * Q18- Facture d'achat?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="facture" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {OuiOptions.map(OuiOption => (
                                                      <option value={OuiOption.value}>{OuiOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="facture" />
                                           </div>
                                            <Condition when="facture" is="1" className="mt-2">
                                               <p className="text-md leading-relaxed text-gray-500">Telecharger votre facture d'achat <span><NotificationDropdown title="Vos données personnelles resteront confidentielles" /></span> </p>
                                               <FileUpload />
                                            </Condition>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="carte_grise"
                                          >
                                              * Q19- Carte Grise ?
                                          </label>
                                           <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                               <Field name="carte_grise" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                   {OuiOptions.map(OuiOption => (
                                                       <option value={OuiOption.value}>{OuiOption.label}</option>
                                                   ))}
                                               </Field>
                                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                   <i className="fas fa-angle-down text-2xl my-2"></i>
                                               </div>
                                               <Error name="carte_grise" />
                                           </div>
                                            <Condition when="carte_grise" is="1" className="mt-2">
                                                <p className="text-md leading-relaxed text-gray-500">Si oui telecharger votre carte grise. Attention : le numéro d'identification du véhicule (VIN) doit être clairement lisible. <span><NotificationDropdown title="Vos données personnelles resteront confidentielles" /></span></p>
                                                <FileUpload />
                                            </Condition>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="carnet_entretien"
                                          >
                                              * Q20- Possédez-vous le Carnet d’entretien?
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="carnet_entretien" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {OuiOptions.map(OuiOption => (
                                                      <option value={OuiOption.value}>{OuiOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="carnet_entretien" />
                                           </div>
                                           <Condition when="carnet_entretien" is="1" className="mt-2">
										    <p className="text-md leading-relaxed text-gray-500"> Si oui telecharger votre carnet d’entretien <span><NotificationDropdown title="Vos données personnelles resteront confidentielles"  /></span></p>
											<FileUpload />
                                           </Condition>
                                  </div>
                                    <div className="flex flex-wrap mt-12 px-4 align-center justify-center">
                                        {isFirst && !!hasErrors ? (
                                            <div className="finalBlock text-center">
                                                {invalid ? (
                                                    <div className="invalideQuestions text-center">
                                                        <button
                                                            className="bg-gray-600 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="submit"
                                                            disabled={invalid}
                                                        >
                                                            <i className="fas fa-exclamation-circle text-base mr-1 animate-bounce"></i> Veuillez remplir tous les champs

                                                        </button>
                                                        <p className="text-md leading-relaxed text-gray-500">
                                                            Veuillez verifier les champs avec * pour repondre votre questionnaire
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className="sendQuestions text-center">
                                                        <button
                                                            className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="submit"
                                                            disabled={submitting}
                                                        >
                                                            <i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> ENVOYER
                                                        </button>
                                                        <p className="text-md leading-relaxed text-gray-500">
                                                            Votre annonce
                                                            sera pré-remplie à l’issue de ce questionnaire. Vous ACCEPTEZ
                                                            les conditions pour publier votre annonce
                                                            <Link href="/footer/policy">
                                                                <a
                                                                    href="#"
                                                                    className={
                                                                        "text-sm font-normal block w-full whitespace-no-wrap bg-transparent text-orange-500"
                                                                    }
                                                                >
                                                                    Lire la politique de confidentialité
                                                                </a>
                                                            </Link>
                                                        </p>
                                                    </div>
                                                  )
                                                }
                                    </div>
                                        ) : (
                                            <div className="finalStep text-center">
                                                <p className="text-xl leading-relaxed text-gray-800">Felicitation! Votre annonces est bien envoyer!! <i
                                                    className="far fa-thumbs-up animate-ping"></i></p>
                                                <a
                                                    className="text-kl bg-orange-500 text-white font-bold uppercase px-4 py-5 shadow-lg rounded block leading-normal "
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        setOpenTab(3);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#link2"
                                                    role="tablist"
                                                >
                                                    <i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>
                                                    voire votre estimation d'annonce
                                                </a>
                                            </div>
                                        )
                                        }
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
                                       <p className="text-md leading-relaxed text-gray-500 mt-4">  Le site vous garantit la qualité de l'annonce. Le site protège les documents téléchargés et restent non visibles par l'acheteur.</p>
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
