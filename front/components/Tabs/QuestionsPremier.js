import React, {useEffect} from "react";
import {connect} from 'react-redux'
import FileUpload from "components/Tabs/FileUpload.js";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import {Field, Form} from 'react-final-form';
import Link from "next/link";
import ImageUpload from "components/Tabs/ImageUpload.js";
import {NonOptions, OuiOptions, prochaineEntretienOptions} from '../../helpers/constant';
import {Condition, Error} from 'helpers/formValidate';
import useAnnonces from 'service/hooks/useAnnonces';
import {transformValueToBoolean} from "../../helpers/Utils";


const QuestionsPremier = ({dispatch, loading, car}) => {
    const [openTab, setOpenTab] = React.useState(1);
    const [hasErrors, setHasErrors] = React.useState(true)
    const [isFirst, setIsFirst] = React.useState(true)
    const [isClickFianlSubmit, setisClickFianlSubmit] = React.useState(true)
    const sendPostQuestionsPremiumValues = car ? car : {
        premiumOptions: car?.id && {
            premium: car?.premiumOptions
        }
    }
    const {
        modifyCar
    } = useAnnonces();


    //submit
    const onSubmit = async (values) => {

        if(values?.premiumOptions) {
            values.premiumOptions.under_warranty = transformValueToBoolean(values?.premiumOptions?.under_warranty);
            values.premiumOptions.accident = transformValueToBoolean(values?.premiumOptions?.accident);
            values.premiumOptions.defects = transformValueToBoolean(values?.premiumOptions?.defects);
            values.premiumOptions.km_certificate = transformValueToBoolean(values?.premiumOptions?.km_certificate);
            values.premiumOptions.technical_check_ok = transformValueToBoolean(values?.premiumOptions?.technical_check_ok);
            values.premiumOptions.periodic_maintenance = transformValueToBoolean(values?.premiumOptions?.periodic_maintenance);
            values.premiumOptions.next_maintenance_under_5000km = transformValueToBoolean(values?.premiumOptions?.next_maintenance_under_5000km);
            values.premiumOptions.purchase_invoice = transformValueToBoolean(values?.premiumOptions?.purchase_invoice);
            values.premiumOptions.gray_card = transformValueToBoolean(values?.premiumOptions?.gray_card);
            values.premiumOptions.maintenance_log = transformValueToBoolean(values?.premiumOptions?.maintenance_log);
        }

        try {
            await modifyCar(car?.id, values);
            if (openTab === 1) {
                setIsFirst(false)
            } else if(openTab === 2) (
                setisClickFianlSubmit(false)
            )
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
                                <i className="fas fa-tools text-base mr-1"></i> Questions 16 - 20 : Entretiens du
                                véhicule
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <Form
                                initialValues={sendPostQuestionsPremiumValues}
                                onSubmit={onSubmit}
                                render={({handleSubmit, form, submitting, values, invalid}) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="tab-content tab-space">
                                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                <div className="flex flex-wrap">
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <label
                                                            className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                            htmlFor="premiumOptions.under_warranty"
                                                        >
                                                            Q11- le véhicule Est-il sous garantie?
                                                        </label>
                                                        <div
                                                            className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                            <Field name="premiumOptions.under_warranty"
                                                                   value={values?.premiumOptions?.under_warranty}
                                                                   component="select"
                                                                   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                <option value=""></option>
                                                                <option value="true">Oui</option>
                                                                <option value="false">Non</option>
                                                            </Field>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                                <i className="fas fa-angle-down text-2xl my-2"></i>
                                                            </div>
                                                            <Error name="premiumOptions.under_warranty"/>
                                                        </div>
                                                    </div>
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <label
                                                            className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                            htmlFor="premiumOptions.accident"
                                                        >
                                                            Q12- Véhicule ayant déjà subit 1 Accident (même mineur) ?
                                                        </label>
                                                        <div
                                                            className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                            <Field name="premiumOptions.accident"
                                                                   component="select"
                                                                   value={values?.premiumOptions?.accident}
                                                                   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                {NonOptions.map(NonOption => (
                                                                    <option
                                                                        value={NonOption.value}>{NonOption.label}</option>
                                                                ))}
                                                            </Field>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                                <i className="fas fa-angle-down text-2xl my-2"></i>
                                                            </div>
                                                            <Error name="premiumOptions.accident"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap mt-12">
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <label
                                                            className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                            htmlFor="premiumOptions.defects"
                                                        >
                                                            Q13- Le véhicule a t-il des défauts (griffes, coups,
                                                            usures…) ?
                                                        </label>
                                                        <div
                                                            className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                            <Field name="premiumOptions.defects"
                                                                   component="select"
                                                                   value={values?.premiumOptions?.defects}
                                                                   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                {NonOptions.map(NonOption => (
                                                                    <option
                                                                        value={NonOption.value}>{NonOption.label}</option>
                                                                ))}
                                                            </Field>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                                <i className="fas fa-angle-down text-2xl my-2"></i>
                                                            </div>
                                                            <Error name="premiumOptions.defects"/>
                                                            <Condition when="premiumOptions.defects" is='true'
                                                                       className="mt-2">
                                                                <p className="text-md leading-relaxed text-gray-500"> Télécharger
                                                                    les défauts du véhicule si il y aura les defauts</p>
                                                                <ImageUpload/>
                                                            </Condition>
                                                        </div>
                                                    </div>
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <label
                                                            className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                            htmlFor="premiumOptions.km_certificate"
                                                        >
                                                            Q14- Pouvez-vous justifier le parcours kilométrique ?
                                                        </label>
                                                        <div
                                                            className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                            <Field name="premiumOptions.km_certificate"
                                                                   value={values?.premiumOptions?.km_certificate}
                                                                   component="select"
                                                                   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                {OuiOptions.map(OuiOption => (
                                                                    <option
                                                                        value={OuiOption.value}>{OuiOption.label}</option>
                                                                ))}
                                                            </Field>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                                <i className="fas fa-angle-down text-2xl my-2"></i>
                                                            </div>
                                                            <Error name="premiumOptions.km_certificate"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap mt-12 px-4">
                                                    <label
                                                        className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                        htmlFor="premiumOptions.technical_check_ok"
                                                    >
                                                        Q15- Contrôle technique OK ?

                                                    </label>
                                                    <div
                                                        className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                        <Field name="premiumOptions.technical_check_ok"
                                                               value={values?.premiumOptions?.technical_check_ok}
                                                               component="select"
                                                               className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                            {OuiOptions.map(OuiOption => (
                                                                <option
                                                                    value={OuiOption.value}>{OuiOption.label}</option>
                                                            ))}
                                                        </Field>
                                                        <div
                                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                            <i className="fas fa-angle-down text-2xl my-2"></i>
                                                        </div>
                                                        <Error name="premiumOptions.technical_check_ok"/>
                                                    </div>
                                                    <Condition when="premiumOptions.technical_check_ok" is='true'
                                                               className="mt-2">
                                                        <p className="text-md leading-relaxed text-gray-500"> Telecharger
                                                            votre contrôle technique <span><NotificationDropdown
                                                                title="Vos données personnelles resteront confidentielles"/></span>
                                                        </p>
                                                        <FileUpload/>
                                                    </Condition>
                                                </div>
                                                <div className="flex flex-wrap mt-12 px-4 align-center justify-center">
                                                    {isFirst ? (
                                                        <button
                                                            className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="submit"
                                                            disabled={submitting}
                                                        >
                                                            <i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> ENVOYER
                                                            CES MODIFICATIONS
                                                        </button>
                                                    ) : (
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
                                                            <i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i> 16
                                                            -20 questions
                                                        </a>
                                                    )}
                                                </div>

                                            </div>
                                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                <div className="flex flex-wrap">
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <label
                                                            className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                            htmlFor="premiumOptions.periodic_maintenance"
                                                        >
                                                            Q16- Respect des entretiens périodiques ?

                                                        </label>
                                                        <div
                                                            className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                            <Field name="premiumOptions.periodic_maintenance"
                                                                   value={values?.premiumOptions?.periodic_maintenance}
                                                                   component="select"
                                                                   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                {OuiOptions.map(OuiOption => (
                                                                    <option
                                                                        value={OuiOption.value}>{OuiOption.label}</option>
                                                                ))}
                                                            </Field>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                                <i className="fas fa-angle-down text-2xl my-2"></i>
                                                            </div>
                                                            <Error name="premiumOptions.periodic_maintenance"/>
                                                        </div>
                                                    </div>
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <label
                                                            className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                            htmlFor="premiumOptions.next_maintenance_under_5000km"
                                                        >
                                                            Q17- Prochain entretien ?
                                                        </label>
                                                        <div
                                                            className="relative flex w-full flex-wrap items-stretch mb-3">
                                                            <Field name="premiumOptions.next_maintenance_under_5000km"
                                                                   value={values?.premiumOptions?.next_maintenance_under_5000km}
                                                                   component="select"
                                                                   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                {prochaineEntretienOptions.map(prochaineEntretienOption => (
                                                                    <option
                                                                        value={prochaineEntretienOption.value}>{prochaineEntretienOption.label}</option>
                                                                ))}
                                                            </Field>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                                <i className="fas fa-angle-down text-2xl my-2"></i>
                                                            </div>
                                                            <Error name="premiumOptions.next_maintenance_under_5000km"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap mt-12">
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <label
                                                            className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                            htmlFor="premiumOptions.purchase_invoice"
                                                        >
                                                            Q18- Facture d'achat ?
                                                        </label>
                                                        <div
                                                            className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                            <Field name="premiumOptions.purchase_invoice"
                                                                   value={values?.premiumOptions?.purchase_invoice}
                                                                   component="select"
                                                                   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                {OuiOptions.map(OuiOption => (
                                                                    <option
                                                                        value={OuiOption.value}>{OuiOption.label}</option>
                                                                ))}
                                                            </Field>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                                <i className="fas fa-angle-down text-2xl my-2"></i>
                                                            </div>
                                                            <Error name="premiumOptions.purchase_invoice"/>
                                                        </div>
                                                        <Condition when="premiumOptions.purchase_invoice" is='true'
                                                                   className="mt-2">
                                                            <p className="text-md leading-relaxed text-gray-500">Telecharger
                                                                votre facture d'achat <span><NotificationDropdown
                                                                    title="Vos données personnelles resteront confidentielles"/></span>
                                                            </p>
                                                            <FileUpload/>
                                                        </Condition>
                                                    </div>
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <label
                                                            className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                            htmlFor="gray_card"
                                                        >
                                                            Q19- Carte Grise ?
                                                        </label>
                                                        <div
                                                            className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                            <Field name="premiumOptions.gray_card"
                                                                   value={values?.premiumOptions?.gray_card}
                                                                   component="select"
                                                                   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                {OuiOptions.map(OuiOption => (
                                                                    <option
                                                                        value={OuiOption.value}>{OuiOption.label}</option>
                                                                ))}
                                                            </Field>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                                <i className="fas fa-angle-down text-2xl my-2"></i>
                                                            </div>
                                                            <Error name="premiumOptions.gray_card"/>
                                                        </div>
                                                        <Condition when="premiumOptions.gray_card" is="1"
                                                                   className="mt-2">
                                                            <p className="text-md leading-relaxed text-gray-500">Si oui
                                                                telecharger votre carte grise. Attention : le numéro
                                                                d'identification du véhicule (VIN) doit être clairement
                                                                lisible. <span><NotificationDropdown
                                                                    title="Vos données personnelles resteront confidentielles"/></span>
                                                            </p>
                                                            <FileUpload/>
                                                        </Condition>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap mt-12 px-4">
                                                    <label
                                                        className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                        htmlFor="maintenance_log"
                                                    >
                                                        Q20- Possédez-vous le Carnet d’entretien ?
                                                    </label>
                                                    <div
                                                        className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
                                                        <Field name="premiumOptions.maintenance_log"
                                                               value={values?.premiumOptions?.maintenance_log}
                                                               component="select"
                                                               className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                            {OuiOptions.map(OuiOption => (
                                                                <option
                                                                    value={OuiOption.value}>{OuiOption.label}</option>
                                                            ))}
                                                        </Field>
                                                        <div
                                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                                            <i className="fas fa-angle-down text-2xl my-2"></i>
                                                        </div>
                                                        <Error name="premiumOptions.maintenance_log"/>
                                                    </div>
                                                    <Condition when="premiumOptions.maintenance_log" is='true'
                                                               className="mt-2">
                                                        <p className="text-md leading-relaxed text-gray-500"> Si oui
                                                            telecharger votre carnet
                                                            d’entretien <span><NotificationDropdown
                                                                title="Vos données personnelles resteront confidentielles"/></span>
                                                        </p>
                                                        <FileUpload/>
                                                    </Condition>
                                                </div>
                                                <div className="flex flex-wrap mt-12 px-4 align-center justify-center">
                                                    {isClickFianlSubmit ? (
                                                        <div className="finalStep text-center">
                                                                <button
                                                                    className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                    type="submit"
                                                                    disabled={submitting}
                                                                >
                                                                    <i className="fas fa-paper-plane text-base mr-1 animate-bounce"></i> Modifer
                                                                    Premium
                                                                </button>
                                                        </div>
                                                    ) : (
                                                        <div className="finalStep text-center">
                                                            <p className="text-xl leading-relaxed text-gray-800">Felicitation!
                                                                Votre annonces est bien envoyer!! <i
                                                                    className="far fa-thumbs-up animate-ping"></i></p>
                                                            <Link
                                                                href={car?.id ? (`/annonce?id=${car?.id}`) : ("#")} {...car}>
                                                                <button
                                                                    className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                    type="button"
                                                                >
                                                                    <i className="fas fa-paper-plane text-base mr-1 animate-bounce"></i> Voir
                                                                    votre Annonce
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    )}

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

const mapStateToProps = (state) => ({
    loading: state.carsReducer.loading,
    car: state.carsReducer.selectedCar,
    hasErrors: state.carsReducer.hasErrors,
})
export default connect(mapStateToProps)(QuestionsPremier)
