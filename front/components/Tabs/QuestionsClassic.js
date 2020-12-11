import React, {useEffect, useState} from 'react';
import Link from "next/link";
import QuestionsOptions from "components/Tabs/QuestionsOptions.js";
import ImageUpload from "components/Tabs/ImageUpload.js";
import {Field, Form} from 'react-final-form';
import useLoggedUser from 'service/hooks/useLoggedUser';
import * as constant from 'helpers/constant';
import * as formValidate from 'helpers/formValidate';
import {Condition, Error} from 'helpers/formValidate';
import "react-responsive-modal/styles.css";

const QuestionsClassic = ({dispatch, loading, response, hasErrors}) => {
	const [openTab, setOpenTab] = React.useState(1);
	const [showModal, setShowModal] = React.useState(false);
	const {
		isAuthentificated,
		loggedUser
	} = useLoggedUser();

	let [tokken, settokken] = useState(null);

	useEffect(() => {
		if (isAuthentificated && loggedUser) {
			try {
				const getTokken = async () => {
					const tok = await localStorage.getItem('ACCESS_TOKEN');
					if (tok) {
						settokken(tok);
					}
				}
				getTokken();
			} catch (err) {
				console.log(err);
			}
		} else {
			return setShowModal(true);
		}
	}, [isAuthentificated, loggedUser]);

	//submit
	/*const {
		submitReponses
	  } = useVendre();*/


	const onSubmit = async (values) => {
		try {
			let {
				...payload
			} = values;

			const data = {...payload};
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
								<i className="fas fa-space-shuttle text-base mr-1"></i> Questions 1 - 5 Informations
								générales
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
								<i className="fas fa-cog text-base mr-1"></i> Questions 6 - 10 : Caractéristiques du
								véhicule
							</a>
						</li>

					</ul>
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
						<div className="px-4 py-5 flex-auto">
							<Form
								initialValues={{
									marqueModel: '',
									dt_entry_service: '',
									fuel: '',
									km: '',
									immatriculation: '',
									statu_vendeur: '',
									date_disponible: '',
									car_fumeur: '',
									double_cles: '',
									raison_vendre: '',
									estimate_price: '',
									num_de_mains: '',
									etat_car: '',
									origin_car: '',
								}}
								onSubmit={onSubmit}
								render={({submitError, handleSubmit, form, submitting, pristine, values, invalid}) => (
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
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field
																name="marqueModel"
																validate={formValidate.composeValidators(formValidate.required, formValidate.matchMarqueModel)}
																component="input"
																value={values.marqueModel}
																type="text"
																placeholder="BMW SERIE 3"
																className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded border border-gray-400 text-sm shadow focus:outline-none focus:shadow-outline w-full pl-10"
															/>
															<Error name="marqueModel"/>
														</div>
													</div>

													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="dt_entry_service"
														>
															* Date de mec :
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field
																name="dt_entry_service"
																validate={formValidate.required}
																component="input"
																type="date"
																value={values.dt_entry_service}
																format={formValidate.formatDate}
																className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded border border-gray-400 text-sm shadow focus:outline-none focus:shadow-outline w-full pl-10"
															/>
															<Error name="dt_entry_service"/>
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
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field
																name="fuel"
																component={formValidate.ReactSelectAdapter}
																options={constant.fuelOptions}
																value={values.fuel}
																className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
															/>
															<Error name="fuel"/>
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
															validate={formValidate.composeValidators(formValidate.required, formValidate.mustBeNumber)}
															component="input"
															type="text"
															value={values.km}
															placeholder="12000"
															className="px-3 py-2 placeholder-gray-400 text-gray-700 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
														/>
														<Error name="km"/>
													</div>
												</div>
												<div className="flex flex-wrap mt-2 px-4">
														 <label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="immatriculation"
														  >
															*Immatriculation :
														  </label>
														  <div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
															  <Field
															  name="immatriculation"
															  validate={formValidate.composeValidators(formValidate.required, formValidate.matchImmatriculation)}
															  component="input"
															  type="text"
															  value={values.immatriculation}
															  placeholder="AA-123-BC"
															  className="px-3 py-2 placeholder-gray-400 text-gray-700 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
															/>
															<Error name="immatriculation" />
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
														<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i> 1ème
														étape: 1 - 5 questions
													</a>
												</div>

											</div>
											<div className={openTab === 2 ? "block" : "hidden"} id="link2">
												<div className="flex flex-wrap">
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="statu_vendeur"
														>
															Q1 - VOUS êtes :
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field
																name="statu_vendeur"
																component={formValidate.ReactSelectAdapter}
																options={constant.statuVendeurOptions}
																value={values.statu_vendeurl}
																className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
															/>
															<Error name="statu_vendeur"/>
														</div>
													</div>

													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="date_disponible"
														>
															Q2 - Votre véhicule est disponible :
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="date_disponible"
																   validate={formValidate.required} component="select"
																   value={values.date_disponible}
																   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																<option></option>
																<option value="Immédiatement" note="1">Immédiatement
																</option>
																<option value="Dans un mois" note="0">Dans un mois
																</option>
																<option value="plus tard" note="0">plus tard</option>
															</Field>
															<Error name="date_disponible"/>
															<Condition when="date_disponible" is="plus tard"
																	   className="mt-2">
																<p className="text-md leading-relaxed text-gray-500"> Votre
																	annonce durée juste 2 mois </p>
															</Condition>
														</div>
													</div>
												</div>

												<div className="flex flex-wrap mt-12">
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="car_fumeur"
														>
															Q3 - Votre véhicule est :
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field
																name="car_fumeur"
																component={formValidate.ReactSelectAdapter}
																validate={formValidate.required}
																options={constant.furmeurOptions}
																value={values.car_fumeur}
																className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
															/>
															<Error name="car_fumeur"/>
														</div>
													</div>

													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="double_cles"
														>
															Q4 - Avez-vous le Double des clés :
														</label>
														<div
															className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
															<Field
																name="double_cles"
																component={formValidate.ReactSelectAdapter}
																validate={formValidate.required}
																options={constant.OuiOptions}
																value={values.double_cles}
																className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
															/>
															<Error name="double_cles"/>
														</div>
													</div>
												</div>

												<div className="flex flex-wrap mt-12 px-4">
													<label
														className="block uppercase text-gray-700 text-md font-bold mb-2"
														htmlFor="raison_vendre"
													>
														Q5 - Pourquoi vendez-vous votre véhicule ?
													</label>
													<div className="relative flex w-full flex-wrap items-stretch mb-3">
														<Field
															name="raison_vendre"
															component={formValidate.ReactSelectAdapter}
															validate={formValidate.required}
															options={constant.raisonVendreOptions}
															value={values.raison_vendre}
															className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
														/>
														<Error name="raison_vendre"/>
														<Condition when="raison_vendre" is="autre" className="mt-2">
															<p className="text-md leading-relaxed text-gray-500"> Indique
																votre raison : </p>
															<Field
																validate={formValidate.required}
																name="raison_vendre"
																component="input"
																value={values.raison_vendre}
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
														<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i> 2ème
														étape: 6 -10 questions
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
														validate={formValidate.composeValidators(formValidate.required, formValidate.mustBeNumber)}
														component="input"
														type="text"
														value={values.estimate_price}
														placeholder="12420"
														className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white border border-gray-400 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
													/>
													<Error name="estimate_price"/>
												</div>

												<div className="flex flex-wrap mt-12 px-4">
													<p className="block uppercase text-gray-700 text-md font-bold mb-2">Q7-
														Équipements de série et options :</p>
												</div>

												<QuestionsOptions/>

												<div className="flex flex-wrap mt-8">
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="num_de_mains"
														>
															Q8 - Nombre de mains:
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field
																name="num_de_mains"
																component={formValidate.ReactSelectAdapter}
																validate={formValidate.required}
																options={constant.numMainsOptions}
																value={values.num_de_mains}
																className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
															/>
															<Error name="num_de_mains"/>
														</div>
													</div>
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="etat_car"
														>
															Q9- État du véhicule:
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field
																name="etat_car"
																component={formValidate.ReactSelectAdapter}
																validate={formValidate.required}
																options={constant.etatCarOptions}
																value={values.etat_car}
																className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
															/>
															<Error name="etat_car"/>
														</div>
													</div>
												</div>

												<div className="flex flex-wrap mt-8 px-4">
													<label
														className="block uppercase text-gray-700 text-md font-bold mb-2"
														htmlFor="origin_car"
													>
														Q10- Origine du véhicule :
													</label>
													<div className="relative flex w-full flex-wrap items-stretch mb-3">
														<Field
															name="origin_car"
															component={formValidate.ReactSelectAdapter}
															validate={formValidate.required}
															options={constant.originCarOptions}
															value={values.origin_car}
															className="placeholder-gray-400 text-gray-700 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
														/>
														<Error name="origin_car"/>
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
															<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i> Envoyer
															pour voir resultat
													</a>
												</div>
											</div>
											<div className={openTab === 4 ? "block" : "hidden"} id="link4">
												<div className="container mx-auto text-center">
													<h4 className="text-4xl font-semibold">
														<i className="fas fa-poll animate-bounce"></i> RESULTATS : 1ere
														NOTE DE CONFIANCE SUR 20
													</h4>
													<h4 className="text-2xl font-semibold">
														<span className="noteTotal text-orange-500">7</span>/20 Annonce
														offre GRATUITE
													</h4>
													<h4 className="text-3xl font-semibold">
														VOTRE PRIX DE VENTE <span className="marqueModel" value="">Suzuki SWIFT</span> - <span
														className="dt_entry_service" value="">2012</span> : <span
														className="price" value=""> 5670 </span> €
													</h4>
													<p className="notifyForPrice text-md leading-relaxed text-gray-500 text-left">
														<i className="fas fa-flag-checkered animate-bounce"></i> Attention
														le prix de vente de votre annonce n’est pas inscrit dans la
														colonne de la côte car celle-ci est destinée à l’estimation
														élaborée et prouvée par nos ingénieurs et experts
														automobiles.Calculez votre côte personnalisée de votre véhicule
														avec <Link href="/prix">notre abonnement Premium</Link>.</p>
													<div
														className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600">
														<i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> ETAPE
														SUIVANTE
													</div>
													<p className="text-md leading-relaxed text-gray-500"> Telecharger 10
														photos MAX pour publier votre annonce ( ficher jpg, png, gif ),
														Téléchargez des photos de votre voiture depuis l'extérieur, du
														tableau de bord avec le moteur allumé, de la console centrale
														etc </p>
													<p className="text-md leading-relaxed text-orange-500"> <i class="fas fa-exclamation-triangle animate-bounce"></i> Votre plaque du véhicule devrait bien cacher  </p>
													<div className="demoPhotos flex justify-center">
														<div className="mr-4 p-3">
															<img
																alt="..."
																src={require("assets/img/img-example-imma.jpg")}
																className="shadow-xl rounded-full h-auto p-3 align-middle border-none max-w-210-px bg-white bg-white rounded text-sm shadow outline-none"
															/>
														</div>
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
													<ImageUpload/>
													<div
														className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600">
														<i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> Publier
														votre annonce
													</div>
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
																<i className="far fa-laugh mr-1 animate-spin"></i> Continuez
																pour passer en tête de liste
															</a>
														</Link>
													</button>
													<p className="text-md leading-relaxed text-gray-500"> Votre annonce
														sera pré-remplie à l’issue de ce questionnaire. Vous ACCEPTEZ
														les conditions pour publier votre annonce </p>
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

export default QuestionsClassic
