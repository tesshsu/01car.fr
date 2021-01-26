import React, {useEffect, useState} from "react"
import { Form, Field } from 'react-final-form';
import Link from "next/link";
import {fuelOptions, kmFilterOptions, priceFilterOptions, boiteFilterOptions, statusFilterOptions, minYearFilterOptions, maxYearFilterOptions, marqueFilterOptions} from "../../helpers/constant";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
	await sleep(300)
	window.alert('Nous vous envoyer le lien qui vous permettra de réinitialiser votre mot de passe.')
}

export default function AnnonceSearchForm() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("https://www.automobile.fr/ajax/car/3500/models")
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result.items);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [])

	return (
		<>
			<section className="mt-16">
				<div className="container px-4 mx-auto border-2 rounded bg-orange-500 py-4 z-40">
                   <h1 className="text-2xl font-semibold text-white text-center">1er Site d'accompagnement sécurisé dans la vente et l'achat de véhicules</h1>
					<p className="text-md font-light mt-2 text-center">Sur 1car.fr, on cherche et on trouve les meilleurs affaires </p>
					<Form
						onSubmit={onSubmit}
						render={({ handleSubmit, form, submitting, pristine, values }) => (
							<form onSubmit={handleSubmit}>
								<div className="flex flex-wrap mt-4">
									<div className="w-full px-2 flex-1">
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<Field name="marque" component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												{marqueFilterOptions.map(marqueFilterOption => (
													<option
														value={marqueFilterOption.value}>{marqueFilterOption.label}</option>
												))}
											</Field>
											<div
												className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
												<i className="fas fa-angle-down text-2xl my-2"></i>
											</div>
										</div>
									</div>
									<div className="w-full px-2 flex-1">
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<Field name="modele" component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												{marqueFilterOptions.map(marqueFilterOption => (
													<option
														value={marqueFilterOption.model}>{marqueFilterOption.modele}</option>
												))}
											</Field>
											<div
												className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
												<i className="fas fa-angle-down text-2xl my-2"></i>
											</div>
										</div>
									</div>

								</div>
								<div className="w-full"></div>
								<div className="flex flex-wrap mt-4">
									<div className="w-full px-3 flex-1">
										<Field name="codePostal">
											{({ input, meta }) => (
												<div className="relative w-full mb-3">
													<input
														{...input}
														type="text"
														className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
														placeholder="code postal de ville ou région"
													/>
												</div>
											)}
										</Field>
									</div>
									<div className="w-full px-3 flex-1">
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<Field name="km" component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												{kmFilterOptions.map(kmFilterOption => (
													<option
														value={kmFilterOption.value}>{kmFilterOption.label}</option>
												))}
											</Field>
											<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
												<i className="fas fa-angle-down text-2xl my-2"></i>
											</div>
										</div>
									</div>
									<div className="w-full px-3 flex-1">
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<Field name="price" component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
												{priceFilterOptions.map(priceFilterOption => (
													<option
														value={priceFilterOption.value}>{priceFilterOption.label}</option>
												))}
											</Field>
											<div
												className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
												<i className="fas fa-angle-down text-2xl my-2"></i>
											</div>
										</div>
									</div>
								</div>
								<div className="text-center mt-2">
									<button type="button" className="mt-2 text-lg px-2" onClick={() => setNavbarOpen(!navbarOpen)}> plus de critères ? <i
										className="fas fa-chevron-circle-down"></i></button>
									<div
										className={
											"flex flex-wrap mt-4" +
											(navbarOpen ? " block" : " hidden")
										}
										id="example-navbar-warning"
									>
											<div className="w-full px-2 flex-1">
												<div className="relative flex w-full flex-wrap items-stretch mb-3">
													<Field name="energy" component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
														{fuelOptions.map(fuelOption => (
															<option
																value={fuelOption.value}>{fuelOption.label}</option>
														))}
													</Field>
													<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
														<i className="fas fa-angle-down text-2xl my-2"></i>
													</div>
												</div>
											</div>
											<div className="w-full px-2 flex-1">
												<div className="relative flex w-full flex-wrap items-stretch mb-3">
													<Field name="boiteVitesse" component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
														{boiteFilterOptions.map(boiteFilterOption => (
															<option
																value={boiteFilterOption.value}>{boiteFilterOption.label}</option>
														))}
													</Field>
													<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
														<i className="fas fa-angle-down text-2xl my-2"></i>
													</div>
												</div>
											</div>
											<div className="w-full px-2 flex-1">
												<div className="relative flex w-full flex-wrap items-stretch mb-3">
													<Field name="status" component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
														{statusFilterOptions.map(statusFilterOption => (
															<option
																value={statusFilterOption.value}>{statusFilterOption.label}</option>
														))}
													</Field>
													<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
														<i className="fas fa-angle-down text-2xl my-2"></i>
													</div>
												</div>
											</div>
										<div className="w-full"></div>
										<div className="w-full px-4 flex-1 mt-2">
											<div className="relative flex w-full flex-wrap items-stretch mb-3">
												<Field name="minYear" component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
													{minYearFilterOptions.map(minYearFilterOption => (
														<option
															value={minYearFilterOption.value}>{minYearFilterOption.label}</option>
													))}
												</Field>
												<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
													<i className="fas fa-angle-down text-2xl my-2"></i>
												</div>
											</div>
										</div>
										<div className="w-full px-4 flex-1 mt-2">
											<div className="relative flex w-full flex-wrap items-stretch mb-3">
												<Field name="maxYear" component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
													{maxYearFilterOptions.map(maxYearFilterOption => (
														<option
															value={maxYearFilterOption.value}>{maxYearFilterOption.label}</option>
													))}
												</Field>
												<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500 shadow">
													<i className="fas fa-angle-down text-2xl my-2"></i>
												</div>
											</div>
										</div>


									</div>
								</div>

							</form>
						)}
					/>
					<div className="w-full px-4 flex-1 text-center mt-2">
						<button
							className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
							type="button"
						>
							<Link href="/annonces">
								<a
									href="#pablo"
									className={
										"text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
									}
								>
									Recherche
								</a>
							</Link>
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
