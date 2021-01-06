import React, {useEffect} from "react";
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
    const [editCar, setEditCar] = React.useState(false)
    const sendPostQuestionsPremiumValues = car ? car : {
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
    }
    const {
        create,
        modifyCar
    } = useAnnonces();

    useEffect(() => {
        if(car){
            return setEditCar(true)
        }
    }, [dispatch]);

    //submit

	const onSubmit = async (values)=>{
        try {
            if (car) {
                await modifyCar(car?.id, values);
            } else {
                await create(values);
            }
            setIsFrist(false)

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
					initialValues={sendPostQuestionsPremiumValues}
					onSubmit={onSubmit}
				    render={({ handleSubmit, form, submitting, values, invalid }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                  <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="under_warranty"
                                          >
                                              {editCar ? "Q11- le véhicule Est-il sous garantie?" : "* Q11- le véhicule Est-il sous garantie? :"}
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="under_warranty" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {OuiOptions.map(OuiOption => (
                                                      <option value={OuiOption.value}>{OuiOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="under_warranty" />
                                          </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="had_accident"
                                          >
                                              {editCar ? "Q12- Véhicule ayant déjà subit 1 Accident (même mineur) ?" : "* Q12- Véhicule ayant déjà subit 1 Accident (même mineur) ? :"}

                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="had_accident" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {NonOptions.map(NonOption => (
                                                      <option value={NonOption.value}>{NonOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="had_accident" />
                                          </div>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12">
                                        <div className="w-full lg:w-6/12 px-4">
                                             <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="defects"
                                             >
                                                 {editCar ? "Q13- Le véhicule a t-il des défauts (griffes, coups, usures…) ?" : "* Q13- Le véhicule a t-il des défauts (griffes, coups, usures…) ? :"}

                                            </label>
                                            <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                <Field name="defects" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    {NonOptions.map(NonOption => (
                                                        <option value={NonOption.value}>{NonOption.label}</option>
                                                    ))}
                                                </Field>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                    <i className="fas fa-angle-down text-2xl my-2"></i>
                                                </div>
                                                <Error name="defects" />
                                                <Condition when="defects" is='true' className="mt-2">
                                                <p className="text-md leading-relaxed text-gray-500"> Télécharger les défauts du véhicule si il y aura les defauts</p>
                                                <ImageUpload />
                                                </Condition>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="km_certificate"
                                              >
                                                {editCar ? "Q14- Pouvez-vous justifier le parcours kilométrique ?" : "* Q14- Pouvez-vous justifier le parcours kilométrique ?"}

                                             </label>
                                            <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                <Field name="km_certificate" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    {OuiOptions.map(OuiOption => (
                                                        <option value={OuiOption.value}>{OuiOption.label}</option>
                                                    ))}
                                                </Field>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                    <i className="fas fa-angle-down text-2xl my-2"></i>
                                                </div>
                                                <Error name="km_certificate" />
                                            </div>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="technical_check_ok"
                                          >
                                              {editCar ? "Q15- Contrôle technique OK ?" : "* Q15- Contrôle technique OK ?"}

                                          </label>
                                           <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                               <Field name="technical_check_ok" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                   {OuiOptions.map(OuiOption => (
                                                       <option value={OuiOption.value}>{OuiOption.label}</option>
                                                   ))}
                                               </Field>
                                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                   <i className="fas fa-angle-down text-2xl my-2"></i>
                                               </div>
                                               <Error name="technical_check_ok" />
                                            </div>
                                          <Condition when="technical_check_ok" is='true' className="mt-2">
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
                                                htmlFor="periodic_maintenance"
                                          >
                                              {editCar ? "Q16- Respect des entretiens périodiques ?" : "* Q16- Respect des entretiens périodiques ?"}

                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="periodic_maintenance" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {OuiOptions.map(OuiOption => (
                                                      <option value={OuiOption.value}>{OuiOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="periodic_maintenance" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="next_maintenance_under_5000km"
                                          >
                                              {editCar ? " Q17- Prochain entretien ?" : " * Q17- Prochain entretien ?"}

                                          </label>
                                          <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="next_maintenance_under_5000km" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {prochaineEntretienOptions.map(prochaineEntretienOption => (
                                                      <option value={prochaineEntretienOption.value}>{prochaineEntretienOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="next_maintenance_under_5000km" />
                                           </div>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12">
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="purchase_invoice"
                                          >
                                              {editCar ? " Q18- Facture d'achat?" : " * Q18- Facture d'achat ?"}
                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="purchase_invoice" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {OuiOptions.map(OuiOption => (
                                                      <option value={OuiOption.value}>{OuiOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="purchase_invoice" />
                                           </div>
                                            <Condition when="purchase_invoice" is='true' className="mt-2">
                                               <p className="text-md leading-relaxed text-gray-500">Telecharger votre facture d'achat <span><NotificationDropdown title="Vos données personnelles resteront confidentielles" /></span> </p>
                                               <FileUpload />
                                            </Condition>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="gray_card"
                                          >
                                              {editCar ? "Q19- Carte Grise ?" : "* Q19- Carte Grise ?"}

                                          </label>
                                           <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                               <Field name="gray_card" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                   {OuiOptions.map(OuiOption => (
                                                       <option value={OuiOption.value}>{OuiOption.label}</option>
                                                   ))}
                                               </Field>
                                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                   <i className="fas fa-angle-down text-2xl my-2"></i>
                                               </div>
                                               <Error name="gray_card" />
                                           </div>
                                            <Condition when="gray_card" is="1" className="mt-2">
                                                <p className="text-md leading-relaxed text-gray-500">Si oui telecharger votre carte grise. Attention : le numéro d'identification du véhicule (VIN) doit être clairement lisible. <span><NotificationDropdown title="Vos données personnelles resteront confidentielles" /></span></p>
                                                <FileUpload />
                                            </Condition>
                                        </div>
                                  </div>
                                  <div className="flex flex-wrap mt-12 px-4">
                                          <label
                                                className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                htmlFor="maintenance_log"
                                          >
                                              {editCar ? "Q20- Possédez-vous le Carnet d’entretien?" : "* Q20- Possédez-vous le Carnet d’entretien ?"}

                                          </label>
                                          <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                              <Field name="maintenance_log" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                  {OuiOptions.map(OuiOption => (
                                                      <option value={OuiOption.value}>{OuiOption.label}</option>
                                                  ))}
                                              </Field>
                                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                  <i className="fas fa-angle-down text-2xl my-2"></i>
                                              </div>
                                              <Error name="maintenance_log" />
                                           </div>
                                           <Condition when="maintenance_log" is='true' className="mt-2">
										    <p className="text-md leading-relaxed text-gray-500"> Si oui telecharger votre carnet d’entretien <span><NotificationDropdown title="Vos données personnelles resteront confidentielles"  /></span></p>
											<FileUpload />
                                           </Condition>
                                  </div>
                                    <div className="flex flex-wrap mt-12 px-4 align-center justify-center">
                                        {isFirst ? (
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
                                                <Link href={car?.id ? (`/annonce?id=${car?.id}`) : ("#")} {...car}>
                                                    <button
                                                        className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="submit"
                                                        disabled={submitting}
                                                    >
                                                        <i className="fas fa-paper-plane text-base mr-1 animate-bounce"></i> Voir votre Annonce
                                                    </button>
                                                </Link>
                                            </div>
                                        )
                                        }
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
