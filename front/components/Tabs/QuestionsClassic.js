import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {connect} from 'react-redux'
import QuestionsOptions from "components/Tabs/QuestionsOptions.js";
import ImageUpload from "components/Tabs/ImageUpload.js";
import {Field, Form} from 'react-final-form';
import useLoggedUser from 'service/hooks/useLoggedUser';
import * as constant from 'helpers/constant';
import * as formValidate from 'helpers/formValidate';
import {Condition, Error} from 'helpers/formValidate';
import "react-responsive-modal/styles.css";
import useAnnonces from 'service/hooks/useAnnonces';
import { Modal } from "react-responsive-modal";
import PubContentThreeIcons from "layouts/PubContentThreeIcons.js";
import PubContentConnection from "layouts/PubContentConnection.js";
import Router from "next/router";

const QuestionsClassic = ({dispatch, loading, car, hasErrors}) => {
	const [openTab, setOpenTab] = React.useState(1);
	const [showModal, setShowModal] = React.useState(false);
	const {
		isAuthentificated
	} = useLoggedUser();

	const {
		create
	} = useAnnonces();


	useEffect(() => {
		if (!isAuthentificated) {
			return setShowModal(true);
		}
	}, [isAuthentificated]);

	//submit

	const onSubmit = async (values) => {
		try {
			let {
				...payload
			} = values;

			const data = {...payload};
			console.log("data=", data);
			await create(data);
		} catch (err) {
			console.log(err);
			alert('Impossible de créer annonce, merci de constacter notre equipe');
		}finally {
			Router.push("/annonces");
		}
	}


	return (
		<>
			<div className="flex flex-wrap">
				{showModal ? (
					<>
						<Modal closeOnEsc={false} open={open} onClose={() => setShowModal(true)}>
							<h2 className="text-2xl font-semibold text-center">Connectez-vous pour répondez au questionnaire de confiance</h2>
							<PubContentThreeIcons />
							<PubContentConnection />
						</Modal>
					</>
				) : null}
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
						<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
							<a
								className={
									"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
									(openTab === 4
										? "text-white bg-orange-500"
										: "text-gray-600 bg-white")
								}
								onClick={e => {
									e.preventDefault();
									setOpenTab(4);
								}}
								data-toggle="tab"
								href="#link3"
								role="tablist"
							>
								<i class="fas fa-bullhorn"></i> Denier etape : publier
							</a>
						</li>

					</ul>
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
						<div className="px-4 py-5 flex-auto">
							<Form
								initialValues={{
									brand: "",
									model: "",
									generation: "sg",
									phase: 6,
									id_carBody: 2,
									fuel: "",
									transmission: "",
									car_body: "",
									doors: 5,
									power: 526,
									version: "",
									dt_entry_service: "",
									km: "",
									license_plate: "",
									dt_valuation: "",
									score_recognition: 4.3,
									score_valuation: 6.3,
									estimate_price: "",
									price: 9134.61,
									currency: "EUR",
									owner_type : "",
									available: "",
									smoking : true,
									duplicate_keys : true,
									sale_reason: "",
									hand_number: "",
									state : "",
									country: ""
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
															htmlFor="brand"
														>
															* Marque modèle :
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field
																name="brand"
																validate={formValidate.composeValidators(formValidate.required, formValidate.matchMarqueModel)}
																component="input"
																value={values.brand}
																type="text"
																placeholder="BMW SERIE 3"
																className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded border border-gray-400 text-sm shadow focus:outline-none focus:shadow-outline w-full pl-10"
															/>
															<Error name="brand"/>
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
															<Field name="fuel"
																   validate={formValidate.required}
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
														htmlFor="license_plate"
													>
														*Immatriculation :
													</label>
													<div className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
														<Field
															name="license_plate"
															validate={formValidate.composeValidators(formValidate.required, formValidate.matchImmatriculation)}
															component="input"
															type="text"
															value={values.license_plate}
															placeholder="AA-123-BC"
															className="px-3 py-2 placeholder-gray-400 text-gray-700 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
														/>
														<Error name="license_plate" />
														<div className="text-sm leading-relaxed text-gray-600">Cette information n’est visible sur l’annonce.</div>
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
															htmlFor="owner_type"
														>
															Q1 - VOUS êtes :
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="owner_type" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																<option></option>
																<option value="private" note="1">particulier</option>
																<option value="pro" note="0">professionnel</option>
															</Field>
															<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
																<i className="fas fa-angle-down text-2xl my-2"></i>
															</div>
															<Error name="owner_type"/>
														</div>
													</div>

													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="available"
														>
															Q2 - Votre véhicule est disponible :
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="available" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																<option></option>
																<option value="immediately" note="1">Immédiatement</option>
																<option value="one_month" note="0">Dans un mois</option>
																<option value="later" note="0">plus tard</option>
															</Field>
															<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
																<i className="fas fa-angle-down text-2xl my-2"></i>
															</div>
															<Error name="available"/>
															<Condition when="available" is="plus tard"
																	   className="mt-2">
																<p className="text-md leading-relaxed text-gray-500"> Votre
																	annonce durée juste 1 mois </p>
															</Condition>
														</div>
													</div>
												</div>

												<div className="flex flex-wrap mt-12">
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="smoking"
														>
															Q3 - Votre véhicule est :
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="smoking" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																<option></option>
																<option value="true" note="0">fumeur</option>
																<option value="false" note="1">non fumeur</option>
															</Field>
															<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
																<i className="fas fa-angle-down text-2xl my-2"></i>
															</div>
															<Error name="smoking"/>
														</div>
													</div>

													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="duplicate_keys"
														>
															Q4 - Avez-vous le Double des clés :
														</label>
														<div
															className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="duplicate_keys" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																<option></option>
																<option value="true" note="1">Oui &#xf164;</option>
																<option value="false" note="0">Non &#xf165;</option>
															</Field>
															<Error name="duplicate_keys"/>
														</div>
													</div>
												</div>

												<div className="flex flex-wrap mt-12 px-4">
													<label
														className="block uppercase text-gray-700 text-md font-bold mb-2"
														htmlFor="sale_reason"
													>
														Q5 - Pourquoi vendez-vous votre véhicule ?
													</label>
													<div className="relative flex w-full flex-wrap items-stretch mb-3">
														<Field name="sale_reason" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
															<option></option>
															<option value="change" note="1">Changer de véhicule</option>
															<option value="other" note="0">Autre projet</option>
														</Field>
														<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
															<i className="fas fa-angle-down text-2xl my-2"></i>
														</div>
														<Error name="sale_reason"/>
														<Condition when="sale_reason" is="autre" className="mt-2">
															<p className="text-md leading-relaxed text-gray-500"> Indique
																votre raison : </p>
															<Field
																validate={formValidate.required}
																name="sale_reason"
																component="input"
																value={values.sale_reason.value}
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
															htmlFor="hand_number"
														>
															Q8 - Nombre de mains:
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="hand_number" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																<option></option>
																<option value="1" note="1">1ère ou 2ème main</option>
																<option value="3" note="0">3ème main ou plus</option>
															</Field>
															<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
																<i className="fas fa-angle-down text-2xl my-2"></i>
															</div>
															<Error name="hand_number"/>
														</div>
													</div>
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="state"
														>
															Q9- État du véhicule:
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="state" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																<option></option>
																<option value="new" note="1">Neuf</option>
																<option value="very_good" note="1">Très bon état</option>
																<option value="good" note="1">Bon état</option>
																<option value="satisfactory" note="0">satisfaisant</option>
															</Field>
															<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
																<i className="fas fa-angle-down text-2xl my-2"></i>
															</div>
															<Error name="state"/>
														</div>
													</div>
												</div>

												<div className="flex flex-wrap mt-8 px-4">
													<label
														className="block uppercase text-gray-700 text-md font-bold mb-2"
														htmlFor="country"
													>
														Q10- Origine du véhicule :
													</label>
													<div className="relative flex w-full flex-wrap items-stretch mb-3">
														<Field name="country" validate={formValidate.required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
															<option></option>
															<option value="FR" note="1">française</option>
															<option value="ZZ" note="0">étrangère</option>
														</Field>
														<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
															<i className="fas fa-angle-down text-2xl my-2"></i>
														</div>
														<Error name="country"/>
													</div>
												</div>

												<div className="flex flex-wrap mt-12 px-4 align-center justify-center">
													<a
														className="text-kl bg-orange-500 text-white font-bold uppercase px-4 py-5 shadow-lg rounded block leading-normal "
														onClick={e => {
															e.preventDefault();
															setOpenTab(4);
														}}
														data-toggle="tab"
														href="#link2"
														role="tablist"
													>
														<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>
														Denier étape: publier votre photos d'annonce
													</a>
												</div>
											</div>
											<div className={openTab === 4 ? "block" : "hidden"} id="link4">
												<div className="container mx-auto text-center">
													<div
														className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600">
														<i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i>DERNIER ETAPE
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
														type="submit"
														disabled={submitting || invalid}

													>
														<i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> PUBLIER
													</button>
													<p className="text-md leading-relaxed text-gray-500"> Votre annonce
														sera pré-remplie à l’issue de ce questionnaire. Vous ACCEPTEZ
														les conditions pour publier votre annonce </p>
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
													<p className="notifyForPrice text-md leading-relaxed text-gray-500 text-left">
														<i className="fas fa-flag-checkered animate-bounce"></i> Attention
														le prix de vente de votre annonce n’est pas inscrit dans la
														colonne de la côte car celle-ci est destinée à l’estimation
														élaborée et prouvée par nos ingénieurs et experts
														automobiles.Calculez votre côte personnalisée de votre véhicule
														avec <Link href="/prix">notre abonnement Premium</Link>.</p>
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
	loading: state.carReducer.loading,
	car: state.carReducer.car,
	hasErrors: state.carReducer.hasErrors,
})
export default connect(mapStateToProps)(QuestionsClassic)
