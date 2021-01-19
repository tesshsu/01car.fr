import React, {useEffect} from 'react';
import Link from "next/link";
import {connect} from 'react-redux'
import QuestionsOptions from "../../components/Tabs/QuestionsOptions.js";
import ImageUpload from "../../components/Tabs/ImageUpload.js";
import {Field, Form} from 'react-final-form';
import useLoggedUser from '../../service/hooks/useLoggedUser';
import {transformValueToBoolean} from "../../helpers/Utils";
import {
	dateDispoOptions,
	etatCarOptions,
	fuelOptions,
	furmeurOptions,
	numMainsOptions,
	originCarOptions,
	OuiOptions,
	raisonVendreOptions,
	statuVendeurOptions
} from '../../helpers/constant';
import * as formValidate from '../../helpers/formValidate';
import {Condition, Error} from '../../helpers/formValidate';
import "react-responsive-modal/styles.css";
import useAnnonces from '../../service/hooks/useAnnonces';
import {Modal} from "react-responsive-modal";
import PubContentThreeIcons from "../../layouts/PubContentThreeIcons.js";
import PubContentConnection from "../../layouts/PubContentConnection.js";
import QuestionsPremier from "./QuestionsPremier";

const QuestionsClassic = ({dispatch, loading, car}) => {
	const [openTab, setOpenTab] = React.useState(1);
	const [showModal, setShowModal] = React.useState(false);
	const [isFirst, setIsFirst] = React.useState(true)
	const [isClickSubmit, setisClickSubmit] = React.useState(true)
	const [isClickSubmit2, setisClickSubmit2] = React.useState(true)
	const [isClickSubmit3, setisClickSubmit3] = React.useState(true)
	const [hasErrors, setHasErrors] = React.useState(true);
	const [editCar, setEditCar] = React.useState(false);
	const sendPostQuestionsvalues = {
		id: car?.id,
		brand: car?.brand,
		model: car?.model,
		generation: car?.generation,
		phase: car?.phase,
		id_carBody: car?.id_carBody,
		fuel: car?.fuel,
		transmission: car?.transmission,
		car_body: car?.car_body,
		doors: car?.doors,
		power: car?.power,
		version: car?.version,
		dt_entry_service: car?.dt_entry_service,
		km: car?.km,
		license_plate: car?.license_plate,
		dt_valuation: car?.dt_valuation,
		score_recognition: car?.score_recognition,
		score_valuation: car?.score_valuation,
		estimate_price: car?.estimate_price,
		price: car?.price,
		currency: car?.currency,
		owner_type: car?.owner_type,
		available: car?.available,
		smoking: car?.smoking,
		duplicate_keys: car?.duplicate_keys,
		sale_reason: car?.sale_reason,
		hand_number: car?.hand_number,
		state: car?.state,
		country: car?.country,
		equipments: car?.id && {
			comfort: car?.equipments?.comfort,
			outside: car?.equipments?.outside,
			inside: car?.equipments?.inside,
			anti_theft: car?.equipments?.anti_theft,
			other: car?.equipments?.other,
			security: car?.equipments?.security,
		},

		outside_option: car?.equipments?.outside?.length > 0,
		inside_option: car?.equipments?.inside?.length > 0,
		anti_theft_option: car?.equipments?.anti_theft?.length > 0,
		comfort_option: car?.equipments?.comfort?.length > 0,
		security_option: car?.equipments?.security?.length > 0,
		other_option: car?.equipments?.other?.length > 0,
	}

	const {
		isAuthentificated
	} = useLoggedUser();

	const {
		create,
		modifyCar
	} = useAnnonces();


	useEffect(() => {
		if (!isAuthentificated) {
			return setShowModal(true);
		}else if(isAuthentificated && car){
			return setEditCar(true), setisClickSubmit(true)
		}
	}, [isAuthentificated]);

	const refreshPage= async () => {
		window.location.reload();
	}
	//submit

	const onSubmit = async (values) => {
		try {
			if (car && editCar == true ) {
				await modifyCar(car?.id, values);
				if(openTab === 1){
					setisClickSubmit(false)
				}else if(openTab === 2){
					setisClickSubmit2(false)
				}else{
					setisClickSubmit3(false)
				}
			} else {
				values.smoking = transformValueToBoolean(values.smoking);
				values.duplicate_keys = transformValueToBoolean(values.duplicate_keys);
				await create(values);
				setIsFirst(false)
			}
		} catch (err) {
			console.log(err);
			setHasErrors(true)
		}
	}


	return (
		<>
			<div className="flex flex-wrap">
				{showModal ? (
					<>
						<Modal closeOnEsc={false} open={open} onClose={() => setShowModal(true)}>
							<h2 className="text-2xl font-semibold text-center">Créez votre compte personnel pour accéder au questionnaire de confiance </h2>
							<PubContentThreeIcons/>
							<PubContentConnection/>
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
								<i className="fas fa-car text-base mr-1"> </i> MON VÉHICULE
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
								<i className="fas fa-space-shuttle text-base mr-1"></i> Questions 1 - 5 : INFORMATIONS
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
						{editCar && (
							<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
								<a
									className={
										"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
										(openTab === 5
											? "text-white bg-orange-500"
											: "text-gray-600 bg-white")
									}
									onClick={e => {
										e.preventDefault();
										setOpenTab(5);
									}}
									data-toggle="tab"
									href="#link5"
									role="tablist"
								>
									<i className="fas fa-book text-base mr-1"></i> Questions Premium
								</a>
							</li>
						)}
					</ul>
					{editCar && (
						<div className="w-full px-4 flex-1 text-center">
							<p className="text-md font-semibold text-center">Vous êtes en train de modifier votre annonce <i
								className="far fa-edit animate-bounce"></i></p>
							<button
								className="bg-gray-600 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								onClick={ refreshPage }
							>
								<i className="fas fa-pen-square"></i> Je veux créé autre annonce

							</button>
						</div>
					)}
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
						<div className="px-4 py-5 flex-auto">
							<Form
								initialValues={sendPostQuestionsvalues}
								onSubmit={onSubmit}
								render={({handleSubmit, form, submitting, values, pristine, reset, invalid}) => (
									<form onSubmit={handleSubmit}>
										<div className="tab-content tab-space">
											<div className={openTab === 1 ? "block" : "hidden"} id="link1">
												<div className="flex flex-wrap">
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="brand"
														>
															{editCar ? "Marque modèle :" : "*Marque modèle :"}
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
															{editCar ? "Date de 1ère Immatriculation  :" : "*Date de 1ère Immatriculation  :"}
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
															{editCar ? "Energie  :" : "*Energie  :"}
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="fuel"
																   validate={formValidate.required}
																   component="select"
																   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
															>
																{fuelOptions.map(fuelOption => (
																	<option
																		value={fuelOption.value}>{fuelOption.label}</option>
																))}
															</Field>
															<div
																className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
																<i className="fas fa-angle-down text-2xl my-2"></i>
															</div>
															<Error name="fuel"/>
														</div>
													</div>
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="km"
														>
															{editCar ? "Kilométrage :" : "*Kilométrage :"}
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
														{editCar ? "Immatriculation :" : "*Immatriculation :"}
													</label>
													<div
														className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
														<Field
															name="license_plate"
															validate={formValidate.composeValidators(formValidate.required, formValidate.matchImmatriculation)}
															component="input"
															type="text"
															value={values.license_plate}
															placeholder="AA-123-BC"
															className="px-3 py-2 placeholder-gray-400 text-gray-700 relative border border-gray-400 bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
														/>
														<Error name="license_plate"/>
														<div className="text-sm leading-relaxed text-gray-600">cette
															information ne sera pas visible sur l'annonce.
														</div>
													</div>
												</div>

												<div className="flex flex-wrap mt-12 px-4 align-center justify-center">
													{editCar ? (
														<div className="finalBlock text-center">
															{invalid && hasErrors ? (
																<div className="sendQuestions text-center">
																	<button
																		className="bg-gray-600 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																		type="submit"
																		disabled={invalid}
																	>
																		<i className="fas fa-exclamation-circle text-base mr-1 animate-bounce"></i> Prenez
																		soin de répondre à toutes les questions afin de
																		valider votre annonce

																	</button>
																	<p className="text-md leading-relaxed text-gray-500">
																		Veuillez vérifier les champs avec * afin de compléter le questionnaire
																	</p>
																</div>
															):(
																<div className="sendQuestions text-center">
																	{isClickSubmit ? (
																			<button
																				className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																				type="submit"
																				disabled={submitting}
																			>
																				<i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> ENVOYER CES MODIFICATIONS
																			</button>
																		):(
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
																			<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i> SUITE QUESTIONS
																			: 1-5
																		</a>
																		)}
																</div>
																)}
														</div>
													):(
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
															<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i> SUITE QUESTIONS
															: 1-5
														</a>
													)}
												</div>

											</div>
											<div className={openTab === 2 ? "block" : "hidden"} id="link2">
												<div className="flex flex-wrap">
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="owner_type"
														>
															{editCar ? "Q1 - VOUS êtes :" : "* Q1 - VOUS êtes :"}
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="owner_type"
																   validate={formValidate.required}
																   component="select"
																   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																{statuVendeurOptions.map(statuVendeurOption => (
																	<option
																		value={statuVendeurOption.value}>{statuVendeurOption.label}</option>
																))}
															</Field>
															<div
																className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
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
															{editCar ? "Q2 - Votre véhicule est disponible :" : "* Q2 - Votre véhicule est disponible :"}
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="available"
																   validate={formValidate.required}
																   component="select"
																   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																{dateDispoOptions.map(dateDispoOption => (
																	<option
																		value={dateDispoOption.value}>{dateDispoOption.label}</option>
																))}
															</Field>
															<div
																className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
																<i className="fas fa-angle-down text-2xl my-2"></i>
															</div>
															<Error name="available"/>
															<Condition when="available" is="later"
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
															{editCar ? "Q3 - Votre véhicule est :" : "* Q3 - Votre véhicule est :"}
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="smoking"
																   component="select"
																   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																{furmeurOptions.map(furmeurOption => (
																	<option
																		value={furmeurOption.value}>{furmeurOption.label}</option>
																))}
															</Field>
															<div
																className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
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
															{editCar ? "Q4 - Avez-vous le Double des clés :" : "* Q4 - Avez-vous le Double des clés :"}
														</label>
														<div
															className="fa-select relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="duplicate_keys"
																   component="select"
																   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																{OuiOptions.map(OuiOption => (
																	<option
																		value={OuiOption.value}>{OuiOption.label}</option>
																))}
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
														{editCar ? "Q5 - Pourquoi vendez-vous votre véhicule ?" : "* Q5 - Pourquoi vendez-vous votre véhicule ?"}
													</label>
													<div className="relative flex w-full flex-wrap items-stretch mb-3">
														<Field name="sale_reason"
															   validate={formValidate.required}
															   component="select"
															   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
															{raisonVendreOptions.map(raisonVendreOption => (
																<option
																	value={raisonVendreOption.value}>{raisonVendreOption.label}</option>
															))}
														</Field>
														<div
															className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
															<i className="fas fa-angle-down text-2xl my-2"></i>
														</div>
														<Error name="sale_reason"/>
													</div>
												</div>

												<div className="flex flex-wrap mt-12 px-4 align-center justify-center">
													{editCar ? (
														<div className="finalBlock text-center">
															{invalid && hasErrors ? (
																<div className="sendQuestions text-center">
																	<button
																		className="bg-gray-600 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																		type="submit"
																		disabled={invalid}
																	>
																		<i className="fas fa-exclamation-circle text-base mr-1 animate-bounce"></i> Prenez
																		soin de répondre à toutes les questions afin de
																		valider votre annonce

																	</button>
																	<p className="text-md leading-relaxed text-gray-500">
																		Veuillez vérifier les champs avec * afin de compléter le questionnaire
																	</p>
																</div>
															):(
																<div className="sendQuestions text-center">
																	{isClickSubmit2 ? (
																		<button
																			className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																			type="submit"
																			disabled={submitting}
																		>
																			<i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> ENVOYER CES MODIFICATIONS
																		</button>
																	):(
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
																			<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i> SUITE QUESTIONS
																			: 6-10
																		</a>
																	)}
																</div>
															)}
														</div>
													):(
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
															<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i> SUITE QUESTIONS
															: 6-10
														</a>
													)}
												</div>
											</div>

											<div className={openTab === 3 ? "block" : "hidden"} id="link3">
												<div className="flex flex-wrap px-4">
													<label
														className="block uppercase text-gray-700 text-md font-bold mb-2"
														htmlFor="estimate_price"
													>
														{editCar ? "Q6- Indiquez votre prix de vente :" : "* Q6- Indiquez votre prix de vente :"}
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

												<QuestionsOptions values={values}/>

												<div className="flex flex-wrap mt-8">
													<div className="w-full lg:w-6/12 px-4">
														<label
															className="block uppercase text-gray-700 text-md font-bold mb-2"
															htmlFor="hand_number"
														>
															{editCar ? "Q8 - Nombre de mains:" : "* Q8 - Nombre de mains:"}
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="hand_number"
																   validate={formValidate.required}
																   component="select"
																   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																{numMainsOptions.map(numMainsOption => (
																	<option
																		value={numMainsOption.value}>{numMainsOption.label}</option>
																))}
															</Field>
															<div
																className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
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
															{editCar ? "Q9- État du véhicule:" : "* Q9- État du véhicule:"}
														</label>
														<div
															className="relative flex w-full flex-wrap items-stretch mb-3">
															<Field name="state"
																   validate={formValidate.required}
																   component="select"
																   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																{etatCarOptions.map(etatCarOption => (
																	<option
																		value={etatCarOption.value}>{etatCarOption.label}</option>
																))}
															</Field>
															<div
																className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
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
														{editCar ? "Q10- Origine du véhicule :" : "* Q10- Origine du véhicule :"}
													</label>
													<div className="relative flex w-full flex-wrap items-stretch mb-3">
														<Field name="country"
															   validate={formValidate.required}
															   component="select"
															   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
															{originCarOptions.map(originCarOption => (
																<option
																	value={originCarOption.value}>{originCarOption.label}</option>
															))}
														</Field>
														<div
															className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
															<i className="fas fa-angle-down text-2xl my-2"></i>
														</div>
														<Error name="country"/>
													</div>
												</div>

												<div className="flex flex-wrap mt-6 px-4 align-center justify-center">
														<div className="finalBlock text-center">
															{invalid && hasErrors ? (
																<div className="sendQuestions text-center">
																	<button
																		className="bg-gray-600 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																		type="submit"
																		disabled={invalid}
																	>
																		<i className="fas fa-exclamation-circle text-base mr-1 animate-bounce"></i> Prenez
																		soin de répondre à toutes les questions afin de
																		valider votre annonce

																	</button>
																	<p className="text-md leading-relaxed text-gray-500">
																		Veuillez vérifier les champs avec * afin de compléter le questionnaire
																	</p>
																</div>
															):(
																<div className="sendQuestions text-center">
																	<div className="w-full px-4">
																		{editCar ? (
																			<div className="w-full px-4">
																				{isClickSubmit3 ? (
																					<button
																						className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																						type="submit"
																						disabled={submitting}
																					>
																						<i className="fas fa-car-alt text-base mr-1 animate-bounce"></i> ENVOYER CES MODIFICATIONS
																					</button>
																				) : (
																					<div className="container text-center">
																						<p className="text-md leading-relaxed text-gray-500">
																							Bravo !
																							Vous avez modifier à toutes les questions classic !! <i
																							className="far fa-thumbs-up animate-ping"></i>
																						</p>
																						<label
																							className="block uppercase text-gray-700 text-md mb-2"
																							htmlFor="suivePremium"
																						>
																							Souhaitiez vous continuer modifier le questionnaire premium ?
																						</label>
																						<div
																							className="relative flex w-full flex-wrap items-stretch mb-3">
																							<Field name="suivePremium"
																								   component="select"
																								   className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
																								<option
																									value=""> </option>
																								<option
																									value="Oui">Oui</option>
																								<option
																									value="Non">Non</option>
																							</Field>
																							<div
																								className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
																								<i className="fas fa-angle-down text-2xl my-2"></i>
																							</div>
																							<Condition when="suivePremium" is="Oui">
																								<div className="container mx-auto text-center">
																									<a
																										className="text-kl mt-4 bg-orange-500 text-white font-bold uppercase px-2 py-5 shadow-lg rounded block"
																										onClick={e => {
																											e.preventDefault();
																											setOpenTab(5);
																										}}
																										data-toggle="tab"
																										href="#link5"
																										role="tablist"
																									>
																										<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>
																										Modifier Premium
																									</a>
																								</div>
																							</Condition>
																							<Condition when="suivePremium" is="Non">
																								<div className="container mx-auto text-center">
																									<a
																										className="text-kl mt-4 bg-orange-500 text-white font-bold uppercase px-2 py-5 shadow-lg rounded block"
																										onClick={e => {
																											e.preventDefault();
																											setOpenTab(4);
																										}}
																										data-toggle="tab"
																										href="#link4"
																										role="tablist"
																									>
																										<i className="fas fa-arrow-right text-base mr-1 animate-bounce"></i>
																										Juste aller dernier Etap
																									</a>
																								</div>
																							</Condition>

																						</div>
																					</div>

																				)}

																			</div>
																		) : (
																			<div className="w-full px-4">
																			{isFirst ? (
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
																							sera pré-remplie à l’issue de ce questionnaire.
																							Vous ACCEPTEZ
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
																				):(
																					<div className="finalStep text-center">
																						<p className="text-xl leading-relaxed text-gray-800">Bravo !
																							Vous avez répondu à toutes les questions !! <i
																								className="far fa-thumbs-up animate-ping"></i></p>
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
																							ÉTAPE SUIVANTE : TÉLÉCHARGER VOS PHOTOS POUR PUBLIER
																							VOTRE ANNONCE
																						</a>
																					</div>
																				)}
																			</div>
																		)}

																	</div>
																</div>
															)}
														</div>
												</div>
											</div>
											<div className={openTab === 4 ? "block" : "hidden"} id="link4">
												<div className="container mx-auto text-center">
													<div
														className="text-3xl block my-2 p-3 text-white font-bold rounded border border-solid border-gray-200 bg-gray-600">
														<i className="fas fa-arrow-down text-base mr-1 animate-bounce"></i> ÉTAPE
														2
													</div>
													<p className="text-md leading-relaxed text-gray-500"> Telecharger 10
														photos MAX pour publier votre annonce ( ficher jpg, png, gif ),
														Téléchargez des photos de votre voiture depuis l'extérieur, du
														tableau de bord avec le moteur allumé, de la console centrale
														etc </p>
													<p className="text-md leading-relaxed text-orange-500"><i
														class="fas fa-exclamation-triangle animate-bounce"></i> Conseil
														: Cachez votre plaque d'immatriculation </p>
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
													{!editCar &&(
														<p className="notifyForPrice text-md leading-relaxed text-gray-500 text-left">
															<i className="fas fa-flag-checkered animate-bounce"></i> Attention
															: le prix de vente de votre véhicule n'est pas inscrit dans la
															colonne de la côte car celle-ci est destinée à l'estimation
															élaborée par nos ingénieurs et experts automobiles.
															Calculez la côte personnalisée de votre véhicule avec <Link
															href="/prix"> notre tarif Premium </Link>.
														</p>
													)}

												</div>
											</div>
											{editCar ? (
												<div className={openTab === 5 ? "block" : "hidden"} id="link5">
													<QuestionsPremier values={values}  />
												</div>
											) : (null)}
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
export default connect(mapStateToProps)(QuestionsClassic)
